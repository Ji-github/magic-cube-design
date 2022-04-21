<template>
    <div class="item">
        <h1>自动关闭的延时</h1>
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
        message: '松花江上',
        description:
          '我的家在东北松花江上～那里有森林煤矿～还有那满山遍野的大豆高粱～',
        duration: 0,
      });
    };

    return {
      openNotification,
    };
  },
});
</script>