<template>
  <div class="container">
      <Basics />
      <Card />
      <Danwei />
      <Daojishi />
  </div>
</template>

<script>
import Basics from './Basics.vue';
import Card from './Card.vue';
import Danwei from './Danwei.vue';
import Daojishi from './Daojishi.vue';
export default {
    components: {
        Basics,
        Card,
        Danwei,
        Daojishi
    }
}
</script>

<style>

</style>