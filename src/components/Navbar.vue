<template>
  <!-- Top Navbar -->
  <div>
    <nav class="navbar fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="Logo" width="40" />
        </a>

        <div class="nav-line"></div>
        <button
          class="text-white navbar-toggler offcanvasbtn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Inline menu for larger screens -->
        <div class="mainnav" style="margin-right: -12px">
          <ul
            class="navbar-nav flex-wrap flex-row gap-4 py-2"
            style="padding-right: 50px; padding-left: 100px"
            id="nav"
          >
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text-white">
                <span>00 </span>HOME</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/destination" class="nav-link text-white">
                <span>01 </span>DESTINATION</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/crew" class="nav-link text-white">
                <span>02 </span>CREW
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/technology" class="nav-link text-white">
                <span>03 </span>TECHNOLOGY</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Offcanvas Menu (for small screens) -->
    <div
      class="offcanvas offcanvas-end text-bg-dark"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link text-white">00 HOME</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/destination" class="nav-link text-white"
              >01 DESTINATION</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/crew" class="nav-link text-white"
              >02 CREW</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/technology" class="nav-link text-white"
              >03 TECHNOLOGY</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  position: relative;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.nav-line {
  position: absolute;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  top: 50%;
  left: 70px;
  right: 0;
  width: 60%;
  z-index: 10;
}

@media screen and (max-width: 768px) {
  .nav-line {
    left: 60px;
    width: 30%;
  }
}

@media screen and (max-width: 576px) {
  .nav-line {
    display: none;
  }
}
@media screen and (min-width: 576px) {
  .offcanvasbtn {
    display: none !important;
  }
}

@media screen and (max-width: 575px) {
  .mainnav {
    display: none !important;
  }
}
span {
  font-weight: bold;
}

.nav-item {
  position: relative;
  font-family: "Barlow Condensed", sans-serif;
}

.nav-link {
  transition: color 0.3s;
}

.nav-link:hover {
  color: #d0d6f9 !important;
}

.router-link-active {
  color: #ffffff !important;
}

.router-link-active:after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #d0d6f9;
}
#nav {
  background-color: #ffffff0d;
  backdrop-filter: blur(20px);
}
</style>
