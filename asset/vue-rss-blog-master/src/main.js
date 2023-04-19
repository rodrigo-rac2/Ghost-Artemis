/** Create portal target */
const portal = document.createElement("div");
portal.id = "rtb-modal";
document.getElementsByTagName("body")[0].appendChild(portal);

import Vue from "vue";
import App from "./App.vue";
import store from "./store/";
var VueScrollTo = require("vue-scrollto");
import PortalVue from "portal-vue";
import VueCarousel from "vue-carousel";

Vue.use(VueScrollTo);
Vue.use(PortalVue);
Vue.use(VueCarousel);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false;
App.store = store;

new Vue({
  el: "#retainable-rss-embed",
  store,
  render(h) {
    return h(App, {
      props: {
        rss: this.$el.dataset.rss,
        maxcols: this.$el.dataset.maxcols,
        layout: this.$el.dataset.layout,
        poststyle: this.$el.dataset.poststyle,
        buttonclass: this.$el.dataset.buttonclass,
        readmore: this.$el.dataset.readmore,
        offset: this.$el.dataset.offset
      }
    });
  }
});
