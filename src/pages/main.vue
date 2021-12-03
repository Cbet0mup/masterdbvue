<template>
    <el-container>
      <el-header class="myHeader">
        <strong>Главная</strong>
        <strong>Скоро сдесь будет город сад!</strong>
        <div style="margin-top: 100px;"><img class="image"
                  src="https://cdn-img.fimfiction.net/story/76b7-1432511106-139698-medium"
                  alt="1"
                  width="256"
                  height="144"
        ></div>

      </el-header>

    </el-container>
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
  align-items: center;
  display: contents;
}
.image{
display: block;
margin:auto;
}
</style>
