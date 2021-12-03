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
}
</script>
