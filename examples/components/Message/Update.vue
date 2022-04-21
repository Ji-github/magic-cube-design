<template>
    <div class="item">
        <h1>更新消息内容</h1>
        <a-button type="primary" @click="openMessage">Open the message box</a-button>
    </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
const key = 'updatable';
export default defineComponent({
  setup() {
    const openMessage = () => {
      message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        message.success({ content: 'Loaded!', key, duration: 2 });
      }, 5000);
    };
    return {
      openMessage,
    };
  },
});
</script>