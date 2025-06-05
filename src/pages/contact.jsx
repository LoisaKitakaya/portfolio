import { Title } from "@solidjs/meta";
import Navbar from "../components/navbar";

function Contact() {
  return (
    <>
      <Title>Contact</Title>
      <div
        style={{
          "min-height": "100vh",
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "text-align": "center",
          padding: "120px 20px 20px 20px",
        }}
      >
        <img
          style={{
            width: "200px",
            margin: "2rem auto 0 auto",
            position: "absolute",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHVsaTByeXBvejk2dmIyMWh6dDl1azZpNzdueHl6dXZwZGpxMHVkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nGMnDqebzDcfm/giphy.gif"
          alt="Portfolio Logo"
        />
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            "text-align": "center",
            "margin-top": "180px",
          }}
        >
          <Navbar />
          <h1>Contact Me</h1>
          <p style={{ "max-width": "600px", margin: "20px 0" }}>
            Get in touch to discuss your project or collaboration. I'm available
            for web development projects using Django, Flask, Solid.js, and
            more.
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
      </div>
    </>
  );
}

export default Contact;
