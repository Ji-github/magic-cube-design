<template>
    <div class="item">
        <h1>更新消息内容</h1>
        <a-button type="primary" @click="openNotification">Open the notification box</a-button>
    </div>
</template>

<script lang="ts">
import { notification } from 'ant-design-vue';
import { defineComponent } from 'vue';
const key = 'updatable';
export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
      });
      setTimeout(() => {
        notification.open({
          key,
          message: 'New Title',
          description: 'New description.',
        });
      }, 1000);
    };
    return {
      openNotification,
    };
  },
});
</script>