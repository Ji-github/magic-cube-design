<template>
  <div class="container">
      <Basics />
      <Hand />
      <Photo />
      <Preview />
      <Shangchuanqian />
      <Tuozhuai />
      <User />
      <Wanquan />
      <Wenjianjia />
      <Yishangchuan />
  </div>
</template>

<script>
import Basics from './Basics.vue';
import Hand from './Hand.vue';
import Photo from './Photo.vue';
import Preview from './Preview.vue';
import Shangchuanqian from './Shangchuanqian.vue';
import Tuozhuai from './Tuozhuai.vue';
import User from './User.vue';
import Wanquan from './Wanquan.vue';
import Wenjianjia from './Wenjianjia.vue';
import Yishangchuan from './Yishangchuan.vue';
export default {
    components: {
        Basics,
        Hand,
        Photo,
        Preview,
        Shangchuanqian,
        Tuozhuai,
        User,
        Wanquan,
        Wenjianjia,
        Yishangchuan
    }
}
</script>

<style>

</style>