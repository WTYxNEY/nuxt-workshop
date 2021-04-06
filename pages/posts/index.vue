<template>
  <b-container fluid>
    <Header />
    <b-row class="py-2">
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
    </b-row>
  </b-container>
</template>

<script>
import Header from '@/components/posts/Header'
import PostContent from '@/components/posts/PostContent'
export default {
  layout: 'coreLayout',
  components: {
    Header,
    PostContent,
  },
}
</script>

<style></style>
