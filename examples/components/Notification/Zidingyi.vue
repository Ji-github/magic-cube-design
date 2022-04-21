<template>
    <div class="item">
        <h1>自定义按钮</h1>
        <a-button type="primary" @click="openNotification">Open the notification box</a-button>
    </div>
</template>

<script lang="ts">
import { notification, Button } from 'ant-design-vue';
import { h, defineComponent } from 'vue';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export default defineComponent({
  setup() {
    const openNotification = () => {
      const key = `open${Date.now()}`;
      notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h(
          Button,
          {
            type: 'primary',
            size: 'small',
            onClick: () => notification.close(key),
          },
          'Confirm',
        ),
        key,
        onClose: close,
      });
    };

    return {
      openNotification,
    };
  },
});
</script>