<template>
    <div class="item">
        <h1>基本用法</h1>
        <a-popconfirm
    title="是否删除此内容?"
    ok-text="是"
    cancel-text="否"
    @confirm="confirm"
    @cancel="cancel"
  >
    <a href="#">Delete</a>
  </a-popconfirm>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { message } from 'ant-design-vue';
export default defineComponent({
  setup() {
    const confirm = (e: MouseEvent) => {
      console.log(e);
      message.success('Click on Yes');
    };

    const cancel = (e: MouseEvent) => {
      console.log(e);
      message.error('Click on No');
    };
    return {
      confirm,
      cancel,
    };
  },
});
</script>