import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Home() {
  return (
    <>
      <Title>Home</Title>
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
            margin: "0 auto",
            position: "absolute",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTQzazJpamwxYzNzeGNxYXJibGlmamMxMzRxOXlxeXVxZjRobWIyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
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
          <h1>Welcome to My Portfolio</h1>
          <p style={{ "max-width": "600px", margin: "20px 0" }}>
            Hello! I’m Loisa, a fullstack web developer specializing in building
            dynamic and scalable web applications using Django/Flask, Solid.js,
            and databases like PostgreSQL and MongoDB. Currently, I'm expanding
            my skills in WordPress and Shopify to create versatile,
            client-focused solutions.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <A
              href="/portfolio"
              style={{
                "text-decoration": "none",
                color: "#007bff",
                "font-weight": "bold",
              }}
            >
              View Portfolio
            </A>
            <A
              href="/contact"
              style={{
                "text-decoration": "none",
                color: "#007bff",
                "font-weight": "bold",
              }}
            >
              Contact Me
            </A>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
