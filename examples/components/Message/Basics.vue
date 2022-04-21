<template>
    <div class="item">
        <h1>基本用法</h1>
        <a-button type="primary" @click="info">Display normal message</a-button>
    </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const info = () => {
      message.info('This is a normal message');
    };
    return {
      info,
    };
  },
});
</script>