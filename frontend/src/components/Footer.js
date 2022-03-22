import React from "react";

function Footer() {
  return (
    <footer class="footer text-center">
      <div class="container">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white mr-3" href="https://www.facebook.com/lars.vandenbrandt">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white mr-3" href="https://www.instagram.com/lars.vandenbrandt/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white" href="https://www.linkedin.com/in/larsvandenbrandt/?originalSubdomain=nl">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <p class="text-muted small mb-0">Copyright © Lars van den Brandt 2022</p>

      </div>
    </footer>
  );
}

export default Footer;
