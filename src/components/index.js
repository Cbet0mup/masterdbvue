import tabsEndRepair from "./tables/TabsEndRepairReceiving.vue";
import NewWorkOrderForm from "./forms/newWorkOrderForm.vue";
import tabsIsNeedCall from "./tables/TabsIsNeedCallReceiving.vue";
import receivingMenu from "./menu/receivingMenu.vue";
import SearchProductName from "./forms/formNewWorkOrderComponent/SearchProductName.vue";
import SearchManufacturer from "./forms/formNewWorkOrderComponent/SearchManufacturer.vue";
import SearchModel from "./forms/formNewWorkOrderComponent/SearchModel.vue";
import InputCustomerName from "./forms/formNewWorkOrderComponent/InputCustomerName.vue";
import InputCustomerPhone from "./forms/formNewWorkOrderComponent/InputCustomerPhone.vue";
import InputSerialNumber from "./forms/formNewWorkOrderComponent/InputSerialNumber.vue";
import InputIMEI from "./forms/formNewWorkOrderComponent/InputIMEI.vue";
import InputView from "./forms/formNewWorkOrderComponent/InputView.vue";
import InputComplection from "./forms/formNewWorkOrderComponent/InputComplection.vue";
import InputTrouble from "./forms/formNewWorkOrderComponent/InputTrouble.vue";
import SearchServiceOrder from "./forms/formNewWorkOrderComponent/SearchServiceOrder.vue";
import SearchEngineer from "./forms/formNewWorkOrderComponent/SearchEngineer.vue"
import SearchPrice from "./forms/formNewWorkOrderComponent/SearchPrice.vue";
import NavBar from "./common/NavBar.vue";
import TabsNowReceiving from "./tables/TabsNowReceiving.vue";
import workorders from "../pages/workordersEngineer.vue";
import TabsWorkOrdersRepair from "./tables/TabsWorkOrdersRepair.vue";
import chatWorkOrdersNote from "./tables/chatWorkOrdersNote.vue";
import inputSearchWorkOrders from "./common/inputSearchWorkOrders.vue";
import inputChat from "./forms/formNewWorkOrderComponent/inputChat.vue";
import receivingRedactMenu from "./menu/receivingRedactMenu.vue";
import receivingRedactForm from "./forms/receivingRedactForm.vue";

export default [
    tabsEndRepair, NewWorkOrderForm, tabsIsNeedCall, receivingMenu, SearchProductName, SearchModel, SearchManufacturer,
    InputCustomerName,InputCustomerPhone, InputSerialNumber, InputIMEI, InputView, InputComplection, InputTrouble,
    SearchServiceOrder, SearchEngineer, SearchPrice, NavBar, TabsNowReceiving, workorders, TabsWorkOrdersRepair, chatWorkOrdersNote,
    inputSearchWorkOrders, inputChat, receivingRedactMenu, receivingRedactForm,
]
