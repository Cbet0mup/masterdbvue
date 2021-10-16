<template>
  <div>
    <el-container>
      <el-header class="myHeader">
        <strong>Приёмка</strong>
        <top-menu-priemka/>
      </el-header>
      <a style="text-align: center; margin-top: 10px">Журнал</a>
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
  </div>
</template>

<script>

import TopMenuPriemka from "../components/receivingMenu.vue";
import TabsIsNeedCall from "../components/tables/TabsIsNeedCallReceiving.vue";
import TabsEndRepair from "../components/tables/TabsEndRepairReceiving.vue";
import TabsNowReceiving from "../components/tables/TabsNowReceiving.vue";

export default {
  name: "receiving",
  components: {TopMenuPriemka, TabsIsNeedCall, TabsEndRepair, TabsNowReceiving},
}
</script>

<style scoped>
.myHeader {
  max-height: content-box;
  text-align: center;
  display: contents;
}

.myMain {
  background-color: rgba(208, 224, 193, 0.99);
}
</style>
