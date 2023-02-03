<template>
  <div class="home">
    <HeroComponent />
    <ProductHeader />
    <ProductFavorites />
  </div>
</template>

<script>
// @ is an alias to /src

import HeroComponent from '@/components/HeroComponent.vue';
import ProductHeader from '@/components/ProductHeader.vue';
import ProductFavorites from '@/components/ProductFavorites.vue';

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    ProductHeader,
    ProductFavorites
  }
}
</script>
