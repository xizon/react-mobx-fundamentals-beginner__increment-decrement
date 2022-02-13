import React from 'react';
import { observer } from 'mobx-react';

/* 
observer 函数/装饰器可以用来将 React 组件转变成响应式组件。 它用 mobx.autorun 包装了组件的 render 函数以确保任何组件渲染中使用的数据变化时都可以强制刷新组件。 observer 是由单独的 mobx-react 包提供的。
 */

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