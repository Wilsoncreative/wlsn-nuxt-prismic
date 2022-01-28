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
  head() {
    return {
      title: this.page.data.metaTitle ?? this.page.data.title[0].text,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.data.metaDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.data.metaImage,
        },
      ],
    }
  },
  async asyncData({ $prismic, params, error }) {
    // Fetch all date for page
    const document = await $prismic.api.getByUID('page', params.uid)
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
