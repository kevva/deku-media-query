/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import MediaQuery from '../';

const app = tree(
	<MediaQuery query='(min-width: 1280px)' class='Unicorn'>
		<h1>Hello world!</h1>
	</MediaQuery>
);

render(app, document.body);
