import React from 'react'

import './Resume.css'

function Resume(): JSX.Element {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <section className="contact">
                <p><b>Senior Development Engineer</b></p>
                <a href="linkedin.com/in/daniel-a-jeffery" rel="noreferrer"
                   target="_blank">linkedin.com/in/daniel-a-jeffery</a>
            </section>
            <section className="skills">
                <h3>Skills</h3>
                <ul>
                    <li><b>Languages:</b> Java, Typescript/JavaScript/NodeJS, Python</li>
                    <li><b>Frameworks:</b> Guice, Spring, React, FastAPI</li>
                    <li><b>Tools:</b> Docker, Git, CI/CD workflows with Github Actions</li>
                    <li><b>Databases:</b> DynamoDB, PostgresSQL</li>
                    <li><b>Cloud:</b> AWS, CDK</li>
                </ul>
            </section>
            <section className="experience">
                <h3>Experience</h3>
                <ul>
                    <li>Primarily backend & tooling, comfortable working full-stack</li>
                    <li>Experience building & automating Cloud based service stacks</li>
                    <li>Static & dynamic code analysis, and load and performance testing</li>
                    <li>Knowledgeable of CI/CD workflows and best practices</li>
                </ul>
            </section>
            <section className="education">
                <h3>Education</h3>
                <p>
                    <b>UNSW, Sydney, AU</b> - Bachelor of
                    Science, Computer Science
                </p>
                <p>Completed with Honours Class 1</p>
                <p><b>Thesis</b> - <a href="/ThesisReport.pdf" target="_blank" rel="noreferrer">Game AI: Reasoning About
                    Space</a></p>
            </section>
            <section className="awards">
                <h3>Awards</h3>
                <ul>
                    <li>
                        Received <a href="https://www.google.com/search?q=just+do+it+award+amazon" target="_blank"
                                    rel="noreferrer"><b>Just Do It Award</b></a>, at Amazon, for the project which
                        augmented the code review process by highlighting lines covered by unit testing, enabling
                        engineers to review their test code coverage.
                    </li>
                    <li>
                        Received a US patent for contributions to <a
                        href="https://patents.google.com/patent/US9558465B1/en" rel="noreferrer" target="_blank">Annotations-based
                        generic load generator engine
                    </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Resume
