<template>
  <div>
    <slice-zone type="homepage" query-type="single" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const doc = await $prismic.api.getSingle('homepage')
    if (doc) {
      return { doc }
    } else {
      error({ statusCode: 404, message: 'Sidan kunde inte hittas' })
    }
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
          property: 'og:image',
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
