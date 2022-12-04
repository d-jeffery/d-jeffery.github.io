import { h } from 'preact';
import style from './style.css';

const Games = () => (
	<div class={style.game}>
		<h2>Games</h2>
		<GamesList />
	</div>
)

const GamesList = () => (
	<div class={style.gameslist}>
		<ul>
			<li>
				<iframe title="Dig Down" src="https://itch.io/embed/338280" height="167" width="552" frameBorder="0"/>
			</li>
			<li>
				<iframe title="Twisted Tunnels" src="https://itch.io/embed/259890" height="167" width="552" frameBorder="0"/>
			</li>
			<li>
				<iframe title="Pave The Way" src="https://itch.io/embed/334896" height="167" width="552" frameBorder="0"/>
			</li>
		</ul>
	</div>
)

export default Games;
