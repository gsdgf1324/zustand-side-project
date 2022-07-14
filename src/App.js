import './App.css';
import React, { useState, useEffect } from 'react';
import useStore from './store/store';
import _, { dropRight } from 'lodash';

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
		</div>
	);
}

export default App;
