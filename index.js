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

function initialState() {
	return {
		matches: false
	};
}

function updateMatch(mq, state, setState) {
	const {matches} = state;

	if (mq.matches === matches) {
		return;
	}

	setState({matches: mq.matches});
}

function updateQuery({props, state}, setState) {
	const {query} = props;
	const {mq} = state;

	if (mq) {
		mq.removeListener(updateMatch.bind(null, mq, state, setState));
	}

	const mql = mq || matchmedia(query);

	setState({mq: mql});
	mql.addListener(updateMatch.bind(null, mql, state, setState));
	updateMatch(mql, state, setState);
}

function afterMount(component, el, setState) {
	updateQuery(component, setState);
}

function afterUpdate(component, prevProps, prevState, setState) {
	updateQuery(component, setState);
}

function render({props, state}) {
	const {children, component} = props;
	const {matches} = state;

	if (matches === false) {
		return <noscript/>;
	}

	return dom(component || 'div', objectOmit(props, Object.keys(propTypes)), children);
}

export default {afterMount, afterUpdate, initialState, propTypes, render};
