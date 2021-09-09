<template>
  <div class="common-layout">
    <el-container>
      <el-header class="myHeader">Журнал - приёмка</el-header>
      <el-main class="myMain">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-tabs type="border-card">
                <el-tab-pane label="Связь с клиентом">Связь с клиентом</el-tab-pane>
                <el-tab-pane label="Готовые">
                    <tabs-end-repair/>
                </el-tab-pane>
                <el-tab-pane label="Role">Role</el-tab-pane>
                <el-tab-pane label="Task">Task</el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TabsEndRepair from "./components/tabsEndRepair.vue";
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {TabsEndRepair},
  methods: {}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
}

.myHeader {
  background: burlywood;
  max-height: content-box;
  text-align: justify;

}

.myMain {
  background-color: #dedcdc;

}
</style>
