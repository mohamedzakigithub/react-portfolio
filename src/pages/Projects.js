import React from "react";
import Project from "../components/Project";

export default function Projects() {
  const projects = [
    {
      title: "Weather dashboard",
      text: "An app to display current and forecast weather data.",
      image: "weatherdashboard.png",
      url: "",
      gh: "",
    },
    {
      title: "Code quiz",
      text: "An JavaScript timed quiz app.",
      image: "codequiz.png",
      url: "",
      gh: "",
    },
    {
      title: "Knowledge hub",
      text: "An app to search wikipedia, images and news on any topic.",
      image: "knowledgehub.jpg",
      url: "",
      gh: "",
    },

    {
      title: "Cryptofolio",
      text: "A Cryptocurrency market place app.",
      image: "cryptofolio.png",
      url: "",
      gh: "",
    },
  ];
  return (
    <>
      <h2 className="mb-5">Projects</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {projects.map((item) => (
          <Project data={item} />
        ))}
      </div>
    </>
  );
}
