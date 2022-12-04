import React from 'react'

import './Resume.css'

function Resume(): JSX.Element {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>
            Competency with languages Java, Python and Javascript/Typescript
          </li>
          <li>Load and Performance Testing</li>
          <li>Dynamic code analysis, in particular code coverage</li>
          <li>Primary backend & tooling, but comfortable working full-stack</li>
          <li>
            Experience building & automating with Cloud based service stacks
          </li>
        </ul>
      </section>
      <section className="education">
        <h3>Education</h3>
        <p>
          <span className="school">UNSW, Sydney, AU</span> - Bachelor of
          Science, Computer Science
        </p>
        <p>Completed with Honours Class 1</p>
      </section>
    </div>
  )
}

export default Resume
