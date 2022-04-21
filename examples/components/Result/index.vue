<template>
  <div class="container">
      <Basics />
      <Error />
      <Success />
      <Wran />
  </div>
</template>

<script>
import Basics from './Basics.vue';
import Error from './Error.vue';
import Success from './Success.vue';
import Wran from './Wran.vue';
export default {
    components: {
        Basics,
        Error,
        Success,
        Wran
    }
}
</script>

<style>

</style>