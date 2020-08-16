import React from "react";
export default () => {
  return (
    <footer class="bg-light">
      <div class="container">
        <p style={{ paddingTop: "15px", textAlign: "center" }}>
          <a href="https://github.com/huckbit">
            © huckbit {new Date().getFullYear()}
          </a>
        </p>
      </div>
    </footer>
  );
};
