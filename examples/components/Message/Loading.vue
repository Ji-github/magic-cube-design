<template>
    <div class="item">
        <h1>加载中</h1>
        <a-button @click="success">Display a loading indicator</a-button>
    </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      const hide = message.loading('Action in progress..', 0);
      setTimeout(hide, 10000);
    };
    return {
      success,
    };
  },
});
</script>