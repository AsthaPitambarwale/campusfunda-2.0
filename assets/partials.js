/* Injects shared header & footer into every page. */

const HEADER_HTML = `
<nav class="cf-navbar navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="index.html" data-testid="nav-brand">
      <span class="dot"></span>CampusFunda
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#cfNav" aria-controls="cfNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="bi bi-list fs-3"></i>
    </button>
    <div class="collapse navbar-collapse" id="cfNav">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
        <li class="nav-item"><a class="nav-link" data-nav="home" href="index.html" data-testid="nav-home">Home</a></li>
        <li class="nav-item"><a class="nav-link" data-nav="search" href="search.html" data-testid="nav-search">eBooks</a></li>
        <li class="nav-item"><a class="nav-link" data-nav="mcqs" href="mcqs.html" data-testid="nav-mcqs">MCQs</a></li>
        <li class="nav-item"><a class="nav-link" data-nav="videos" href="videos.html" data-testid="nav-videos">Videos</a></li>
        <li class="nav-item"><a class="nav-link" data-nav="forum" href="forum.html" data-testid="nav-forum">Forum</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Explore</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="publisher.html">Publishers</a></li>
            <li><a class="dropdown-item" href="author.html">Authors</a></li>
            <li><a class="dropdown-item" href="institute.html">Institutes</a></li>
            <li><a class="dropdown-item" href="about.html">About Us</a></li>
          </ul>
        </li>
        <li class="nav-item ms-lg-3">
          <a href="cart.html" class="nav-link position-relative" data-testid="nav-cart">
            <i class="bi bi-bag fs-5"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style="background:var(--cf-coral); font-size:10px;">2</span>
          </a>
        </li>
        <li class="nav-item d-flex gap-2 ms-lg-2 mt-2 mt-lg-0">
          <a href="login.html" class="btn-cf btn-cf-ghost" data-testid="nav-login">Log in</a>
          <a href="register.html" class="btn-cf btn-cf-lime" data-testid="nav-register">Join free</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="cf-footer">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="brand"><span style="color:var(--cf-coral)">●</span> CampusFunda</div>
        <p class="mt-3" style="color:rgba(245,241,232,.7); max-width: 340px;">
          The all-in-one learning platform for engineering, commerce and technical students — eBooks, MCQs, videos and a buzzing discussion forum.
        </p>
        <div class="social mt-4">
          <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <h6>Learn</h6>
        <a href="search.html">eBooks</a>
        <a href="mcqs.html">MCQs</a>
        <a href="videos.html">Videos</a>
        <a href="forum.html">Discussion Forum</a>
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <h6>Explore</h6>
        <a href="publisher.html">Publishers</a>
        <a href="author.html">Authors</a>
        <a href="institute.html">Institutes</a>
        <a href="about.html">About us</a>
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <h6>Account</h6>
        <a href="login.html">Log in</a>
        <a href="register.html">Register</a>
        <a href="cart.html">My cart</a>
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <h6>Legal</h6>
        <a href="privacy.html">Privacy policy</a>
        <a href="terms.html">Terms &amp; conditions</a>
      </div>
    </div>
    <div class="sep"></div>
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center" style="font-size:13px; color:rgba(245,241,232,.55)">
      <div>© 2026 CampusFunda. Built for curious learners.</div>
      <div class="mt-2 mt-md-0">Made with <span style="color:var(--cf-coral)">♥</span> for India's classrooms</div>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const h = document.getElementById('cf-header');
  const f = document.getElementById('cf-footer');
  if (h) h.innerHTML = HEADER_HTML;
  if (f) f.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const page = document.body.getAttribute('data-page');
  if (page) {
    const link = document.querySelector(`[data-nav="${page}"]`);
    if (link) {
      link.style.color = 'var(--cf-coral)';
      link.style.fontWeight = '700';
    }
  }
});