/** @jsx dom */
import dom from 'magic-virtual-element';
import matchmedia from 'matchmedia';
import objectOmit from 'object-omit';

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

const initialState = () => {
	return {
		matches: false
	};
};

const shouldUpdate = ({props, state}, nextProps, nextState) => {
	const {children} = props;
	const {matches} = state;

	if (matches === nextState.matches && JSON.stringify(children) === JSON.stringify(nextProps.children)) {
		return false;
	}

	return true;
};

const updateMatch = (mq, state, setState) => {
	const {matches} = state;

	if (mq.matches === matches) {
		return;
	}

	setState({matches: mq.matches});
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

const afterMount = (component, el, setState) => {
	updateQuery(component, setState);
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

	return dom(component, objectOmit(props, Object.keys(propTypes)), children);
};

export default {afterMount, afterUpdate, defaultProps, initialState, propTypes, render, shouldUpdate};
