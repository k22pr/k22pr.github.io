<template>
  <div id="app">
     <div class="text">Hello World</div>
  </div>
</template>

<style lang="scss">
body{
   margin:0;
   padding:0;
}
#app {
  height:100vh;
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:linear-gradient(135deg, rgba(240,243,246,1), rgba(230,233,236,1));
  display:flex;
  justify-content: center;
  align-items:center;
  .text{
     font-size:3rem;
     color:#e64980;
  }
}
</style>
