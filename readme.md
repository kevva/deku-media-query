# deku-media-query [![Build Status](https://travis-ci.org/kevva/deku-media-query.svg?branch=master)](https://travis-ci.org/kevva/deku-media-query)

> Media query component for [Deku](https://github.com/dekujs/deku)


## Install

```
$ npm install deku-media-query
```


## Usage

```js
import MediaQuery from 'deku-media-query';

const render = () => (
	<MediaQuery query='(min-width: 1280px)' class='Unicorn'>
		<div><img src='cat.jpg' alt=''/></div>
		<div><img src='unicorn.jpg' alt=''/></div>
	</MediaQuery>
);

export default {render};
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
