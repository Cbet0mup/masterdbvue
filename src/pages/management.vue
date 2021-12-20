<template>
  <el-container>
    <el-header class="myHeader el-header">
      <strong>Упраление</strong>
      <strong>Сдесь тоже скоро будет город сад!</strong>
      <p>- управление персоналом</p>
      <p>- управление содержимым базы данных (добавление/удаление разных пунктов) </p>
      <p>- управление зарплатой </p>
    </el-header>
    <el-container>
      <el-aside class="el-aside" width="300px">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
          <el-sub-menu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>Управление персоналом</span>
            </template>
            <el-menu-item-group title="Персонал">
              <el-menu-item index="1-1">Нанять</el-menu-item>
              <el-menu-item index="1-2">Уволить</el-menu-item>
              <el-menu-item index="1-2">Привелегии в базе</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Заказы">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="el-main">Main</el-main>
        <el-footer class="el-footer">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Management"
}
</script>

<style scoped>
.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
