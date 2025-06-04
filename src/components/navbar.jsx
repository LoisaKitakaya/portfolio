import { A } from "@solidjs/router";

function Navbar() {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          "background-color": "white",
          padding: "2rem 0",
          "border-bottom": "1px black solid"
        }}
      >
        <div
          style={{
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            gap: "4rem",
          }}
        >
          <A activeClass="active" href="/" end>
            Home
          </A>
          <A activeClass="active" href="/portfolio" end>
            Portfolio
          </A>
          <A activeClass="active" href="/contact" end>
            Contact
          </A>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
