import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import useStore from './store/store';

function App() {
	const [name, setName] = useState('user'); //state값 name, setName함수를 통해 name을 바꿈
	const [email, setEmail] = useState('user@tistory.com'); //state값 email, setEmail함수를 통해 email을 바꿈

	let a = useStore(state => state.count);
	debugger;
	debugger;

	return (
		<div className="App">
			<header className="App-header">
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
			</header>
		</div>
	);
}

export default App;
