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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_content","items":[],"primary":{"content":[{"type":"paragraph","text":"Quis veniam eu laborum excepteur dolore. Culpa veniam et exercitation.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
