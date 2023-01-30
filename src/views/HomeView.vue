<template>
  <div class="home">
    <HeroComponent/>
  </div>
</template>

<script>
// @ is an alias to /src

import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeroComponent
}
}
</script>
