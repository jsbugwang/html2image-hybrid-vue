<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  margin: 0;
  pading: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.full-height {
  height: 100%;
}

.btn-group {
  display: flex;
}
.full-btn {
  display: block;
  flex-grow: 1;
}
.almost-full-btn {
  display: block;
  flex-grow: 1;
  margin: 0 30px !important;
}
</style>
