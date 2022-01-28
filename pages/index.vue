<template>
  <div class="p-6">
    <slice-zone type="homepage" queryType="single" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  head() {
    return {
      title: this.page.data.metaTitle ?? this.page.data.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.data.metaDescription ?? '',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.data.metaImage ?? '',
        },
      ],
    }
  },
  async asyncData({ $prismic, params, error }) {
    // Fetch all date for homepage
    const document = await $prismic.api.getSingle('homepage')
    if (document) {
      return {
        page: document,
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
