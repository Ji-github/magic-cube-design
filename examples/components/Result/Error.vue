<template>
    <div class="item">
        <h1>Error</h1>
        <a-result
    status="error"
    title="Submission Failed"
    sub-title="Please check and modify the following information before resubmitting."
  >
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>

    <div class="desc">
      <div style="font-size: 16px">
        <strong>The content you submitted has the following error:</strong>
      </div>
      <div>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account has been frozen
        <a>Thaw immediately &gt;</a>
      </div>
      <div>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account is not yet eligible to apply
        <a>Apply Unlock &gt;</a>
      </div>
    </div>
  </a-result>
    </div>
</template>

<script lang="ts">
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    CloseCircleOutlined,
  },
});
</script>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>