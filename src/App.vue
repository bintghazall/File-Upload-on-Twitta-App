<template>
<main>
  <div id="app">
    <h1>Twitta App with File Upload</h1>
    <span style="padding: 0 10px; font-size: 2em">
      <router-link :to="{name: 'landingPage' }" exact>Home</router-link>
    </span>
    <span style="padding: 0 10px; font-size: 2em">
      <router-link :to="{name: 'form'}" exact>Form</router-link>
    </span>
    <span style="padding: 0 10px; font-size: 2em">
      <router-link :to="{name: 'file'}" exact>File-Upload</router-link>
    </span>
  </div>
  <router-view></router-view>
  </main>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a:hover{
  font-size: larger;
}

a{
  text-decoration: none;
  background: blanchedalmond;
  border-radius: 7px 0 7px 0;
  padding: 5px 10px;
}
.router-link-active{
  background:dimgrey;
  color: rgb(96, 233, 96);
}
</style>
