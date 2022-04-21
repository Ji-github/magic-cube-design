<template>
  <div class="container">
      <Basics />
      <Icon />
      <Update />
      <Ziding />
      <Zidingyi />
  </div>
</template>

<script>
import Basics from './Basics.vue';
import Icon from './Icon.vue';
import Update from './Update.vue';
import Ziding from './Ziding.vue';
import Zidingyi from './Zidingyi.vue';
export default {
    components: {
        Basics,
        Icon,
        Update,
        Ziding,
        Zidingyi
    }
}
</script>

<style>

</style>