import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h2>Hello, World<br/>
			I'm Daniel!</h2>
		<section class={style.intro}>
			> <Link href="/resume">Professional Programmer</Link><br/>
			> <Link href="/games">Hobby Game Developer</Link><br/>
			> <Link href="/miniatures">Amateur Mini Painter</Link>
		</section>
	</div>
);

export default Home;
