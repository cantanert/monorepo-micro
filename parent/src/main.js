import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { router } from "./router";
import { LoginPlugin as app1plugin } from "view-app/src/index";

Vue.use(app1plugin, { store, router });

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store,
  render: (h) => h(App),
});
