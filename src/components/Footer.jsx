import React from "react";

const Footer = () => {
  <footer></footer>;
  return (
    <>
      <div className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/hebreoxs"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/juliocodes89"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.google.com/"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/juliocods/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/ramirezjulio-0789/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/juliocods"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright: 
          <a className="text-white" href="https://www.instagram.com/juliocods/">
             @JULIOCODES
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
