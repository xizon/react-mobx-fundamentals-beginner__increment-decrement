import React, { Component } from 'react';
import { observer } from 'mobx-react';

/*

The decorator syntax can be written as:

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

*/


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