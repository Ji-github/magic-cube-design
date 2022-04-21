<template>
  <div class="container">
      <Basics />
      <Fenduan />
      <Jinduquan />
      <Smalljinduquan />
      <Smalljindutiao />
      <Yuanjiao />
  </div>
</template>

<script>
import Basics from './Basics.vue';
import Fenduan from './Fenduan.vue';
import Jinduquan from './Jinduquan.vue';
import Smalljinduquan from './Smalljinduquan.vue';
import Smalljindutiao from './Smalljindutiao.vue';
import Yuanjiao from './Yuanjiao.vue';
export default {
    components: {
        Basics,
        Fenduan,
        Jinduquan,
        Smalljinduquan,
        Smalljindutiao,
        Yuanjiao
    }
}
</script>

<style>

</style>