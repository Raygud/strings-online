<template>
  <HeaderComponent/>
  <BreadCrumb/>
  <div class="Content-Grid">
    <SideBar class="Side-Bar"/>
    <router-view class="Router-View"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import SideBar from './components/SideBar.vue';

export default {
    setup () {
        

        return {}
    },
    components: {
    HeaderComponent,
    BreadCrumb,
    SideBar
}
}
</script>

<style lang="scss">

.Content-Grid{
  display: grid;  
  grid-template-columns: repeat(12,1fr);
  gap: 1.5vw;
  .Side-Bar{
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .Router-View{
    grid-column-start: 3;
    grid-column-end: 13;
  }
}

body{
  background-color: #131313;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  width: 90%;
  margin: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
