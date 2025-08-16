import { For } from "solid-js";
import { Title } from "@solidjs/meta";
import Navbar from "../components/navbar";
import projects from "../public/projects.json";

function Portfolio() {
  return (
    <>
      <Title>Portfolio</Title>

      <div
        style={{
          //   "min-height": "100vh",
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
          "text-align": "center",
          padding: "80px 20px 20px 20px",
        }}
      >
        <Navbar />
        <h1>My Portfolio</h1>
        <p style={{ "max-width": "600px", margin: "20px 0" }}>
          Explore some of the projects I've built using Django, Flask, Solid.js,
          PostgreSQL, MongoDB, and more. I'm also diving into WordPress and
          Shopify to create dynamic and user-friendly web solutions.
        </p>
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            gap: "20px",
            "max-width": "800px",
          }}
        >
          <For each={projects}>
            {(project) => (
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  "border-radius": "8px",
                }}
              >
                <h3>{project.projectName}</h3>
                <p>{project.projectDescription}</p>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    "justify-content": "center",
                  }}
                >
                  {project.liveLink && (
                    <a
                      href={project.liveLink || "#"}
                      style={{
                        color: project.liveLink ? "#007bff" : "#666",
                        "text-decoration": "none",
                        cursor: project.liveLink ? "pointer" : "default",
                      }}
                    >
                      View Site
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    style={{ color: "#007bff", "text-decoration": "none" }}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}

export default Portfolio;
