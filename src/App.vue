<template>
  <div class="common-layout">
    <el-container>
      <el-header class="myHeader"><strong>Журнал - приёмка</strong></el-header>
      <el-main class="myMain">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-tabs type="border-card"

              >
                <el-tab-pane lazy label="Связь с клиентом">Связь с клиентом</el-tab-pane>
                <el-tab-pane lazy name="dfg" label="Готовые"><tabs-end-repair/>
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
}

.myHeader {
  background: #ccffb9;
  max-height: content-box;
  text-align: center;

}

.myMain {
  background-color: rgba(208, 224, 193, 0.99);

}
</style>
