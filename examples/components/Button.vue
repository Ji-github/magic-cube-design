<template>
  <div>
    <a-button @click="info">Info</a-button>
    <a-button @click="success">Success</a-button>
    <a-button @click="error">Error</a-button>
    <a-button @click="warning">Warning</a-button>
  </div>
</template>
<script lang="ts">
import { Modal } from 'ant-design-vue';
import { defineComponent, h } from 'vue';
export default defineComponent({
  setup() {
    const info = () => {
      Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {
          console.log('ok');
        },
      });
    };
    const success = () => {
      Modal.success({
        title: 'This is a success message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
      });
    };

    const error = () => {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    };

    const warning = () => {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    };

    return {
      info,
      success,
      error,
      warning,
    };
  },
});
</script>

