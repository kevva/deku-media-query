import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import m from './dist';

test(() => {
	const mock = componentMock(m);
	const el = mock.render({props: {
		class: 'Unicorn',
		query: '(min-width: 1280px)'
	}});

	assertElement.isNode(el, 'noscript');
});
