import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

declare let __DEV__: boolean;
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';

Vue.use(BottomNavigation);
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';

Vue.use(TabsPlugin);
new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
