/** @jsx dom */
import deepEqual from 'deep-equal';
import dom from 'magic-virtual-element';
import matchmedia from 'matchmedia';
import objectOmit from 'object.omit';

const updateMatch = (mq, state, setState) => {
	const {matches} = state;

	if (mq.matches !== matches) {
		setState({matches: mq.matches});
	}
};

const updateQuery = ({props, state}, setState) => {
	const {query} = props;
	const {mq} = state;

	if (mq) {
		mq.removeListener(updateMatch.bind(null, mq, state, setState));
	}

	const mql = mq || matchmedia(query);

	setState({mq: mql});
	mql.addListener(updateMatch.bind(null, mql, state, setState));
	updateMatch(mql, state, setState);
};

const initialState = () => ({
	matches: false
});

const afterMount = (component, el, setState) => {
	updateQuery(component, setState);
};

const shouldUpdate = ({props, state}, nextProps, nextState) => {
	const {children} = props;
	const {matches} = state;

	if (matches === nextState.matches && deepEqual(children, nextProps.children)) {
		return false;
	}

	return true;
};

const afterUpdate = (component, prevProps, prevState, setState) => {
	updateQuery(component, setState);
};

const render = ({props, state}) => {
	const {children, component} = props;
	const {matches} = state;

	if (matches === false) {
		return <noscript/>;
	}

	return dom(component, objectOmit(props, ['children', 'component', 'query']), children);
};

const propTypes = {
	children: {
		type: 'array'
	},
	component: {
		type: 'string'
	},
	query: {
		type: 'string'
	}
};

const defaultProps = {
	component: 'div'
};

export default {afterMount, afterUpdate, defaultProps, initialState, propTypes, render, shouldUpdate};
