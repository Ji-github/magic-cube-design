<template>
    <div class="item">
        <h1>带有图标的通知提示框</h1>
        <a-button @click="() => openNotificationWithIcon('success')">Success</a-button>
    <a-button @click="() => openNotificationWithIcon('info')">Info</a-button>
    <a-button @click="() => openNotificationWithIcon('warning')">Warning</a-button>
    <a-button @click="() => openNotificationWithIcon('error')">Error</a-button>
    </div>
</template>

<script lang="ts">
import { notification } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const openNotificationWithIcon = (type: string) => {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };

    return {
      openNotificationWithIcon,
    };
  },
});
</script>