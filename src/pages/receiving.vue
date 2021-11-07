<template>
    <el-container>
      <el-header class="myHeader">
        <a style="text-align: center; margin-top: 10px; margin-bottom: 10px">Журнал - приёмка</a>
      </el-header>
      <receiving-menu/>

      <el-main class="myMain">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-tabs type="border-card">
                <el-tab-pane lazy label="Связь с клиентом">
                  <tabs-is-need-call/>
                </el-tab-pane>
                <el-tab-pane lazy name="EndOfRepair" label="Готовые">
                  <tabs-end-repair/>
                </el-tab-pane>
                <el-tab-pane lazy name="NowReceiving" label="Принятые сегодня">
                  <tabs-now-receiving/>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
</template>

<script>

import receivingMenu from "../components/menu/receivingMenu.vue";
import TabsIsNeedCall from "../components/tables/TabsIsNeedCallReceiving.vue";
import TabsEndRepair from "../components/tables/TabsEndRepairReceiving.vue";
import TabsNowReceiving from "../components/tables/TabsNowReceiving.vue";

export default {
  name: "receiving",
  components: {receivingMenu, TabsIsNeedCall, TabsEndRepair, TabsNowReceiving},
  mounted() {
    this.$store.commit('setSelectRowDataClear', '');
  }
}
</script>

<style scoped>
.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}

.myMain {
  display: inline;
}
.grid-content {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
</style>
