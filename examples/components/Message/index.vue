<template>
  <div class="container">
      <Basics />
      <Loading />
      <Other />
      <Promise />
      <Update />
      <Yanshi />
  </div>
</template>

<script>
import Basics from './Basics.vue';
import Loading from './Loading.vue';
import Other from './Other.vue';
import Promise from './Promise.vue';
import Update from './Update.vue';
import Yanshi from './Yanshi.vue';
export default {
    components: {
        Basics,
        Loading,
        Other,
        Promise,
        Update,
        Yanshi
    }
}
</script>

<style>

</style>