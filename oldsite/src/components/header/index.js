import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Daniel Jeffery</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/resume">Resume</Link>
			<Link activeClassName={style.active} href="/games">Games</Link>
			<Link activeClassName={style.active} href="/miniatures">Miniatures</Link>
		</nav>
	</header>
);

export default Header;
