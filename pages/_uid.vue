<template>
  <div class="p-6">
    <slice-zone type="page" :uid="$route.params.uid" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  data() {
    return {
      doc: null,
    }
  },
  async fetch() {
    this.doc = await this.$prismic.api.getSingle('homepage')
  },
  head() {
    return {
      title: this.doc.data.metaTitle ?? this.doc.data.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.doc.data.metaDescription ?? '',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.doc.data.metaImage.url ?? '',
        },
      ],
    }
  },
}
</script>
