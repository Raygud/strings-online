<template>
    <div>
      <router-link v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path" :to="breadcrumb.path">
        {{ breadcrumb.name }}/
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      breadcrumbs() {
        return this.$route.matched.map(route => {
          console.log(route)
          return { name: route.name, path: route.path }
        })
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  div{
    display: flex;
    justify-content: flex-start;
    border-top: 1px solid rgba(255, 255, 255, 0.474);
    border-bottom: 1px solid rgba(255, 255, 255, 0.474);
    padding: 0.2vw;
    margin: auto;
    a{
      text-decoration: none;
      color: white;
    }
  }
  </style>