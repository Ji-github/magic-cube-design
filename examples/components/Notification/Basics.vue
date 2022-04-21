<template>
    <div class="item">
        <h1>基本用法</h1>
        <a-button type="primary" @click="openNotification">Open the notification box</a-button>
    </div>
</template>

<script lang="ts">
import { notification } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };

    return {
      openNotification,
    };
  },
});
</script>