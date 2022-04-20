<template>
  <div>
    <Breadcrumbs :home-doc="{ path: '/', title: 'Home' }" :current-doc="doc" />
    <slice-zone type="page" :uid="uid" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  transition: 'default',
  computed: {
    uid() {
      // Get the right uid from folder stucture
      if (this.$route.params.uid) {
        return this.$route.params.uid
      } else if (this.$route.params.parent) {
        return this.$route.params.parent
      } else {
        return this.$route.params.grandparent
      }
    },
  },
  async asyncData({ $prismic, params, error }) {
    // Get the right uid from folder stucture
    let uid = ''
    if (params.uid) {
      uid = params.uid
    } else if (params.parent) {
      uid = params.parent
    } else {
      uid = params.grandparent
    }
    const doc = await $prismic.api.getByUID('page', uid, {
      fetchLinks: ['page.parent', 'page.title'],
    })
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
