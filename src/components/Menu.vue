<template>
<nav class="navbar navbar-expand-md bg-black sticky-top border-bottom" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand d-md-none" href="#">
      <svg class="bi" width="24" height="24"><use xlink:href="#aperture"></use></svg>
      Aperture
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Aperture</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-white">
        <ul class="navbar-nav flex-grow-1 justify-content-between">
          <li class="nav-item"><a class="nav-link" href="#">
            <svg class="bi" width="24" height="24"><use xlink:href="#aperture"></use></svg>
          </a></li>
          <li class="nav-item"><a class="nav-link text-white" href="/home">Blue-Whale Authorized Dealer</a></li>
          <li class="nav-item"><a class="nav-link" href="/iphone">iPhone</a></li>
          <li class="nav-item"><a class="nav-link" href="/ipad">iPad</a></li>
          <li class="nav-item"><a class="nav-link" href="/watch">Watch</a></li>
          <li class="nav-item"><a class="nav-link" href="/mac">Mac</a></li>
          <li class="nav-item"><a class="nav-link" href="/locat">เกี่ยวกับเรา</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  </template>
  <script>
  export default {
    name: "Menu",
  };
  </script>
  