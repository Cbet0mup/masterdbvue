<template>
  <div>
    <el-container>
      <el-header class="myHeader">
        <strong>Главная</strong>
      </el-header>
<div class="image">
  <img src="@/assets/moon.jpg" width="1200" alt="moon">
</div>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "Main",
  components: {},
}
</script>

<style scoped>
.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}
.image{
display: block;
  margin-left: auto;
  margin-right: auto
}
</style>
