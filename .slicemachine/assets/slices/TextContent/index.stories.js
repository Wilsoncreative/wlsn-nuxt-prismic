import MyComponent from '../../../../slices/TextContent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextContent'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_content","items":[],"primary":{"content":[{"type":"paragraph","text":"Non fugiat adipisicing consequat fugiat id exercitation sit eiusmod aliqua proident proident. Duis voluptate anim enim commodo aute velit fugiat cupidatat occaecat sunt adipisicing excepteur ex in ad.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
