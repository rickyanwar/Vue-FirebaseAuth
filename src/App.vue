<template>
  <div id="app">

    <figure class="image container image is-96x96">
      <img src="./assets/logo.png" alt="">
    </figure>

    <router-view />
  </div>
</template>
<style>
  @import './assets/css/bulma.css';

  .has-image-centered {
    margin-left: auto;
    margin-right: auto;
  }
</style>