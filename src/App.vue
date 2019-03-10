<template>
  <div id="app">
    <router-view />
    <footer>
      <div>
        <p class="copyright">&copy 2019 BRETT WILCOX</p>
      </div>
    </footer>
  </div>
</template>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: url('../public/img/technology1.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  footer {
    height: 60vh;
    position: relative;
  }

  .copyright {
    position: absolute;
    bottom: 1rem;
    margin-left: 44%;
  }
</style>