import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="mb-0">Mohamed Eleraky</h1>
      <div>
        Melbourne, Australia. +61 401146113 ·
        <a href="mailto:name@email.com">mohamedzaki@hotmail.com</a>
        <br />
        <a href="/resume/Mohamed Eleraky Resume.pdf" target="_blank">
          <button className="waves-effect waves-light btn indigo accent-2">
            Download Resume
          </button>
        </a>
      </div>
      <p>
        Web developer pursuing certificate in full stack web development from
        Monash university with a background in electronics engineering. I have a
        deep understanding of various web development technologies and
        frameworks such as HTML, CSS, JavaScript, Jquery, Bootstrap, Express,
        React, MySQL, MongoDB and Node.js. I consider multitasking, problem
        solving skills and attention to detail to be my strengths acquired
        through working on many high tier measurements and logging projects with
        various international oil and gas companies. Coupled with a solid
        technical background as an electronics engineer and passion in software
        development, I am a valued addition to any team.
      </p>
      <div>
        <a href="https://www.linkedin.com/in/mohamed-eleraky" target="_blank">
          <i className="fab fa-linkedin-in text-dark" />
        </a>
        <a href="https://github.com/mohamedzakigithub" target="_blank">
          <i className="fab fa-github text-dark" />
        </a>
      </div>
    </div>
  );
}
