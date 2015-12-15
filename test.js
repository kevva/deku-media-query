import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import MediaQuery from './dist';

test(() => {
	const mock = componentMock(MediaQuery);
	const el = mock.render({props: {
		class: 'Unicorn',
		query: '(min-width: 1280px)'
	}});

	assertElement.isNode(el, 'noscript');
});
