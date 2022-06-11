<script>
export default {};
</script>

<template>
  <!-- <nav class="navbar bg-primary">
    <a href="" class="navbar-brnad text-white">
      <img
        src="../../../assets/logo.png"
        alt="vueLogo"
        class="d-inline-block align-text-top mx-2"
        height="24"
      />
    </a>
    <div class="flex">
      <button class="btn btn-info"><i class="fa fa-sign-out-alt"></i></button>
    </div>
  </nav> -->
  <div class="left-sidebar bg">
    <img class="logo" src="../../../assets/logo.png" alt="vueLogo" />
    <div class="nav-menu">
      <div class="menus">
        <div class="menu-one">
          <i
            class="fas fa-book pointer"
            @click="$router.push({ name: 'entry', params: { id: '/' } })"
          ></i>
        </div>
        <div
          class="menu-two"
          data-toggle="tooltip"
          data-placement="right"
          title="Nueva entrada"
        >
          <i
            class="fas fa-pen-alt pointer"
            @click="$router.push({ name: 'entry', params: { id: 'new' } })"
          ></i>
        </div>
        <div class="menu-three">
          <i class="fas fa-image pointer"></i>
        </div>
        <div class="logout">
          <i class="fa fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-sidebar {
  width: 103px;
  /* width: 103px; */
  height: 100%;
  left: 0px;
  top: 0px;
}

.logo {
  position: absolute;
  width: 56px;
  height: 56px;
  left: 26px;
  top: 48px;
}

.nav-menu {
  position: absolute;
  width: 77px;
  height: 60%;
  left: 26px;
  top: 203px;
}

.menus {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 49px;
  height: 60%;
  left: 26px;
}

.menu-one {
  position: static;
  width: 49px;
  height: 49px;
  left: 0px;
  top: 0px;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}

.menu-two {
  position: static;
  width: 49px;
  height: 49px;
  left: 0px;
  top: 91px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}

.menu-three {
  width: 49px;
  height: 49px;
  left: 0px;
  top: 182px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;
}

.logout {
  position: absolute;
  left: 2.57%;
  right: 95.76%;
  top: 100%;
  bottom: 2.93%;
  cursor: pointer;
}

.bg {
  width: 103px;
  /* width: 102px; */
  height: 100%;
  left: 0px;
  top: 0px;
  background: #fff;
}
</style>
