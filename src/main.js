import Vue from "vue";
import RiverExplorer from "./components/RiverExplorer.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(RiverExplorer),
}).$mount("#app");
