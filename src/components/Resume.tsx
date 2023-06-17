import React from 'react'

import './Resume.css'

function Resume(): React.ReactElement {
  return (
    <div className="resume">
      <h2>Daniel Jeffery</h2>
      <section className="contact">
        <p>
          <b>Senior Development Engineer</b>
        </p>
        <a
          href="https://linkedin.com/in/daniel-a-jeffery"
          rel="noreferrer"
          target="_blank"
        >
          linkedin.com/in/daniel-a-jeffery
        </a>
      </section>
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>
            <b>Languages:</b>
            <ul className="languages">
              <li>
                <b>Java:</b> Guice, Spring, JUnit, TestNG
              </li>
              <li>
                <b>Typescript/Javascript:</b> React, Jest, express
              </li>
              <li>
                <b>Python:</b> FastAPI
              </li>
            </ul>
          </li>
          <li>
            <b>CI/CD:</b> Docker, Github Actions, AWS Codepipeline
          </li>
          <li>
            <b>Databases:</b> DynamoDB, MySQL
          </li>
          <li>
            <b>Cloud:</b> AWS
          </li>
        </ul>
      </section>
      <section className="experience">
        <h3>Experience</h3>
        <ul>
          <li>Primarily backend & tooling, comfortable working full-stack</li>
          <li>Experience building & automating Cloud based service stacks</li>
          <li>
            Static & dynamic code analysis, and load and performance testing
          </li>
          <li>Knowledgeable of CI/CD workflows and best practices</li>
        </ul>
      </section>
      <section className="education">
        <h3>Education</h3>
        <ul>
          <li><b>UNSW, Sydney, AU</b> - Bachelor of Science, Computer Science<br/>
            Completed with Honours Class 1
          </li>
          <li>
            <b>Thesis</b> -{' '}
            <a href="/ThesisReport.pdf" target="_blank" rel="noreferrer">
              Game AI: Reasoning About Space
            </a>
          </li>
        </ul>
      </section>
      <section className="awards">
        <h3>Awards</h3>
        <ul>
          <li>
            Received{' '}
            <a
              href="https://www.google.com/search?q=just+do+it+award+amazon"
              target="_blank"
              rel="noreferrer"
            >
              <b>Just Do It Award</b>
            </a>
            , at Amazon, for the project which augmented the code review process
            by highlighting lines covered by unit testing, enabling engineers to
            review their test code coverage.
          </li>
          <li>
            Received a US patent for contributions to{' '}
            <a
              href="https://patents.google.com/patent/US9558465B1/en"
              rel="noreferrer"
              target="_blank"
            >
              Annotations-based generic load generator engine
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Resume
