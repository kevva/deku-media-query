/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import MediaQuery from '../';

const app = tree(
	<div>
		<MediaQuery query='(min-width: 1280px)'>
			<h1>Hello world! (min-width: 1280px)</h1>
		</MediaQuery>
		<MediaQuery query='(max-width: 1280px)'>
			<h1>Hello world! (max-width: 1280px)</h1>
		</MediaQuery>
	</div>
);

render(app, document.body);
