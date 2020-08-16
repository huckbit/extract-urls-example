import React from "react";
export default () => {
  return (
    <footer class="py-3 bg-light">
      <div class="container">
        <p style={{ paddingTop: "10px", textAlign: "center" }}>
          <a
            href="https://github.com/huckbit"
            target="blank"
            rel="noopener noreferrer"
          >
            © huckbit {new Date().getFullYear()}
          </a>
        </p>
      </div>
    </footer>
  );
};
