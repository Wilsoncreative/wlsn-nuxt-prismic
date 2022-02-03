<template>
  <div class="p-6">
    <slice-zone type="homepage" query-type="single" />
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
          hid: 'og:title',
          name: 'og:title',
          content: this.doc.data.metaTitle ?? this.doc.data.title[0].text,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.doc.data.metaDescription ?? '',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.doc.data.metaImage.url ?? '',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.doc.data.metaTitle ?? this.doc.data.title[0].text,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.doc.data.metaDescription ?? '',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.doc.data.metaImage.url ?? '',
        },
      ],
    }
  },
}
</script>
