<template>
    <div class="item">
        <h1>进度圈</h1>
        <a-progress type="circle" :percent="75" />
  <a-progress type="circle" :percent="70" status="exception" />
  <a-progress type="circle" :percent="100" />
    </div>
</template>