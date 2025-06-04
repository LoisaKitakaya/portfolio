import { Title } from "@solidjs/meta";
import Navbar from "../components/navbar";

function Contact() {
  return (
    <>
      <Title>Contact</Title>

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
        <h1>Contact Me</h1>
        <p style={{ "max-width": "600px", margin: "20px 0" }}>
          Get in touch to discuss your project or collaboration. I'm available
          for web development projects using Django, Flask, Solid.js, and more.
        </p>
        <div
          style={{ display: "flex", "flex-direction": "column", gap: "15px" }}
        >
          <p>
            Email:{" "}
            <a
              href="mailto:kitakayaloisa@gmail.com"
              style={{ color: "#007bff", "text-decoration": "none" }}
            >
              kitakayaloisa@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
