import { h } from 'preact';
import style from './style.css';

const Resume = () => (
	<div class={style.resume}>
		<h2>Resume</h2>
		<section class={style.skills}>
			<h3>Skills</h3>
			<ul>
				<li>Competency with languages Java, Python and Javascript/Typescript</li>
				<li>Load and Performance Testing</li>
				<li>Dynamic code analysis, in particular code coverage</li>
				<li>Primary backend & tooling, but comfortable working full-stack</li>
				<li>Experience building & automating with Cloud based service stacks</li>
			</ul>
		</section>
		<section class={style.education}>
			<h3>Education</h3>
			<p><span class={style.school}>UNSW, Sydney, AU</span> - Bachelor of Science, Computer Science</p>
			<p>Completed with Honours Class 1</p>
			<p><a href="/assets/ThesisReport.pdf" target="_blank">Thesis - "Game AI: Reasoning About Space"</a></p>
		</section>
	</div>
);

export default Resume;
