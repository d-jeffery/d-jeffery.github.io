import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Games from '../routes/games';
import Resume from '../routes/resume';
import Miniatures from "../routes/miniatures";

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Resume path="/resume" />
			<Games path="/games" />
			<Miniatures path="/miniatures" />
		</Router>
	</div>
)

export default App;
