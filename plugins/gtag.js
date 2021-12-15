import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  bootstrap: false,
  config: {
    id: 'X-XXXXXXXXX',
    params: {
      send_page_view: true,
    },
  },
})
