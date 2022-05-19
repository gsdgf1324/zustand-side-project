import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import useStore from './store/store';

// const [name, setName] = useState('user'); //state값 name, setName함수를 통해 name을 바꿈
// const [email, setEmail] = useState('user@tistory.com'); //state값 email, setEmail함수를 통해 email을 바꿈

function App() {
	const { count, increaseCount, setCnt, clearCnt } = useStore(); // 방법 1

	/* 방법 2
		let count = myStore(state => state.count);
		let increaseCount = myStore(state => state.increaseCount);
		let setCnt = myStore(state => state.setCnt);
		let clearCnt = myStore(state => state.clearCnt);
	 */

	return (
		<div className="App">
			<div>현재 Cnt == {count}</div>
			<button onClick={increaseCount}>[+1]</button>
			<button onClick={() => setCnt(10)}>[set_10]</button>
			<button onClick={clearCnt}>[clear]</button>

			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
