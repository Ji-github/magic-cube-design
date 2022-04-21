<template>
    <div class="item">
        <h1>修改延时</h1>
        <a-button @click="success">Customized display duration</a-button>
    </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      message.success(
        'This is a prompt message for success, and it will disappear in 10 seconds',
        10,
      );
    };
    return {
      success,
    };
  },
});
</script>