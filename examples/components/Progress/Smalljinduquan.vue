<template>
    <div class="item">
        <h1>小型进度圈</h1>
        <a-progress type="circle" :percent="30" :width="80" />
  <a-progress type="circle" :percent="70" :width="80" status="exception" />
  <a-progress type="circle" :percent="100" :width="80" />
    </div>
</template>