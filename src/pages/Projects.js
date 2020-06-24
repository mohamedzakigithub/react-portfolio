import React from "react";
import Project from "../components/Project";

export default function Projects() {
  const projects = [
    {
      title: "Weather dashboard",
      text: "An app to display current and forecast weather data.",
      image: "weatherdashboard.png",
      url: "https://mohamedzakigithub.github.io/weather-dashboard/",
      gh: "https://github.com/mohamedzakigithub/weather-dashboard",
    },
    {
      title: "Code quiz",
      text: "A JavaScript timed quiz app.",
      image: "codequiz.png",
      url: "https://mohamedzakigithub.github.io/code-quiz/",
      gh: "https://github.com/mohamedzakigithub/code-quiz",
    },
    {
      title: "Knowledge hub",
      text: "An app to search wikipedia, images and news on any topic.",
      image: "knowledgehub.jpg",
      url: "https://mohamedzakigithub.github.io/knowledge-hub/",
      gh: "https://github.com/mohamedzakigithub/knowledge-hub",
    },

    {
      title: "Cryptofolio",
      text: "A Cryptocurrency market place app.",
      image: "cryptofolio.png",
      url: "https://cryptofolio-project.herokuapp.com/",
      gh: "https://github.com/mohamedzakigithub/cryptofolio",
    },
  ];
  return (
    <>
      <h2>Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {projects.map((item, index) => (
          <Project data={item} key={index} />
        ))}
      </div>
    </>
  );
}
