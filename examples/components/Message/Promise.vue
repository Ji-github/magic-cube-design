<template>
    <div class="item">
        <h1>Promise接口</h1>
        <a-button @click="success">Display a sequence of message</a-button>
    </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      message
        .loading('Action in progress..', 2.5)
        .then(
          () => message.success('Loading finished', 2.5),
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          () => {},
        )
        .then(() => message.info('Loading finished is finished', 2.5));
    };
    return {
      success,
    };
  },
});
</script>