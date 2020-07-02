import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import Buefy from "buefy";
import UIkit from "uikit"; //remove later
import Icons from "uikit/dist/js/uikit-icons"; //remove later
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faAngleDown,
  faAngleUp,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faAngleDown, faAngleUp, faUndo);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "font-awesome-icon"
});
UIkit.use(Icons); //remove later
Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
