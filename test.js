/** @jsx dom */
import assertElement from 'assert-element';
import componentMock from 'component-mock';
import dom from 'magic-virtual-element';
import test from 'ava';
import MediaQuery from '.';

const mock = componentMock(MediaQuery);

test('renders noscript when media query does not match', () => {
	const m = mock.render();
	assertElement.isNode(m, 'noscript');
});

test('renders children when media query matches', () => {
	const children = <div class='Foo'/>;
	const m = mock.render({
		props: {children},
		state: {matches: true}
	});

	assertElement.hasChild(m, 0, x => {
		assertElement.hasClass(x, 'Foo');
	});
});

test('renders div by default', () => {
	const m = mock.render({state: {matches: true}});
	assertElement.isNode(m, 'div');
});

test('has component prop', () => {
	const component = 'span';
	const m = mock.render({
		props: {component},
		state: {matches: true}
	});

	assertElement.isNode(m, component);
});
