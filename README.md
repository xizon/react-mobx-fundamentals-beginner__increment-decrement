# react-mobx-fundamentals-beginner__increment-decrement

[English](README.md) | [中文](README_CN.md)

---

Mobx + React - Simple counter principle (class + decorator + stateless function)

## File Structures

```sh
src/
├── index.js (Entry file, for client/browser)
├── App-simple.js (React component - Stateless)
└── App.js (React component)
```


## Installation And Test


**Step 1.** First, using an absolute path into your app folder directory.

```sh
$ cd /{your_directory}/react-mobx-fundamentals-beginner__increment-decrement
```


**Step 2.** Before doing all dev stuff make sure you have `Node 14+` installed. After that, run the following code in the main directory to install the node module dependencies.

```sh
$ sudo npm install
```

**Step 3.** Run this project with `create-react-app`

```sh
$ npm run start
```

**Step 4.** When you done, this will spin up a server that can be accessed at

```sh
http://localhost:3000
```




---

### index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


//store
import { makeObservable, observable, computed, action } from 'mobx';

class oneStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action
    });
  }

  get isNegative() {
    return this.count < 0 ? 'Yes' : 'No';
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}


//
const store = new oneStore();


ReactDOM.render(
  <React.StrictMode>
      <App myCounter={store}/>
  </React.StrictMode>,
  document.getElementById('root')
)

```

The decorator syntax can be written as:
```js
import {observable, computed} from "mobx";
class oneStore {
    @observable count = 0;

    constructor(count) {
        this.count = count;
    }

    @computed get isNegative() {
        return this.count < 0 ? 'Yes' : 'No'；
    }
}
```

Use decorate to import:
```js
import {decorate, observable, computed} from "mobx";
class oneStore {
    count = 0;
    constructor(count) {
        this.count = count;
    }

    get isNegative() {
        return this.count < 0 ? 'Yes' : 'No'；
    }
}

decorate(oneStore, {
    count: observable,
    isNegative: computed
})
```



### App.js

```js
import React, { Component } from 'react';
import { observer } from 'mobx-react';

class App extends Component {
	render() {
		const myCounter = this.props.myCounter;
		return (
			<React.Fragment>
				Count: {myCounter.count}  <hr />

				Is negative? {myCounter.isNegative}

				<hr />

				<button onClick={myCounter.increase.bind(myCounter)}>Add</button>
				<button onClick={myCounter.decrease.bind(myCounter)}>Subtract</button>
			</React.Fragment>

		);
	}
}
observer(App);

export default observer(App);
```

The decorator syntax can be written as:
```js
import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
	render() {
		const myCounter = this.props.myCounter;
		return (
			<React.Fragment>
				Count: {myCounter.count}  <hr />

				Is negative? {myCounter.isNegative}

				<hr />

				<button onClick={myCounter.increase.bind(myCounter)}>Add</button>
				<button onClick={myCounter.decrease.bind(myCounter)}>Subtract</button>
			</React.Fragment>

		);
	}
}
export default App;
```

### App-simple.js (Stateless)

```js
import React from 'react';
import { observer } from 'mobx-react';

const App = observer( (props) => {

	const {myCounter} = props;
	return (
		<React.Fragment>
		  Count: {myCounter.count}  <hr />
	  
		  Is negative? {myCounter.isNegative}
	  
		  <hr />
	  
		  <button onClick={myCounter.increase.bind(myCounter)}>Add</button>
		  <button onClick={myCounter.decrease.bind(myCounter)}>Subtract</button>
		</React.Fragment>
	  )
});

export default App;

```