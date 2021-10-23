import tabsEndRepair from "./tables/TabsEndRepairReceiving.vue";
import NewWorkOrderForm from "./common/newWorkOrderForm.vue";
import tabsIsNeedCall from "./tables/TabsIsNeedCallReceiving.vue";
import receivingMenu from "./common/receivingMenu.vue";
import SearchProductName from "./formNewWorkOrderComponent/SearchProductName.vue";
import SearchManufacturer from "./formNewWorkOrderComponent/SearchManufacturer.vue";
import SearchModel from "./formNewWorkOrderComponent/SearchModel.vue";
import InputCustomerName from "./formNewWorkOrderComponent/InputCustomerName.vue";
import InputCustomerPhone from "./formNewWorkOrderComponent/InputCustomerPhone.vue";
import InputSerialNumber from "./formNewWorkOrderComponent/InputSerialNumber.vue";
import InputIMEI from "./formNewWorkOrderComponent/InputIMEI.vue";
import InputView from "./formNewWorkOrderComponent/InputView.vue";
import InputComplection from "./formNewWorkOrderComponent/InputComplection.vue";
import InputTrouble from "./formNewWorkOrderComponent/InputTrouble.vue";
import SearchServiceOrder from "./formNewWorkOrderComponent/SearchServiceOrder.vue";
import SearchEngineer from "./formNewWorkOrderComponent/SearchEngineer.vue"
import SearchPrice from "./formNewWorkOrderComponent/SearchPrice.vue";
import NavBar from "./common/NavBar.vue";
import TabsNowReceiving from "./tables/TabsNowReceiving.vue";
import workorders from "../pages/workorders.vue";
import TabsWorkOrdersRepair from "./tables/TabsWorkOrdersRepair.vue";
import chatWorkOrdersNote from "./tables/chatWorkOrdersNote.vue";
import inputSearchWorkOrders from "./common/inputSearchWorkOrders.vue";

export default [
    tabsEndRepair, NewWorkOrderForm, tabsIsNeedCall, receivingMenu, SearchProductName, SearchModel, SearchManufacturer,
    InputCustomerName,InputCustomerPhone, InputSerialNumber, InputIMEI, InputView, InputComplection, InputTrouble,
    SearchServiceOrder, SearchEngineer, SearchPrice, NavBar, TabsNowReceiving, workorders, TabsWorkOrdersRepair, chatWorkOrdersNote,
    inputSearchWorkOrders,
]
