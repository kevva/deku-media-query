# deku-media-query

> Media query component for [Deku](https://github.com/dekujs/deku)


## Install

```
$ npm install --save deku-media-query
```


## Usage

```js
import MediaQuery from 'deku-media-query';

const render = () => {
	return (
		<MediaQuery query='(min-width: 1280px)' class='Unicorn'>
			<div><img src='cat.jpg' alt=''/></div>
			<div><img src='unicorn.jpg' alt=''/></div>
		</MediaQuery>
	);
};

export default {render};
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
