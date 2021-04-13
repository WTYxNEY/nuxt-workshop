<template>
  <b-col md="3">
    <div class="card-container">
      <b-card
        :title="title"
        :img-src="image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ content.slice(0, 150) + '...' }}
        </b-card-text>
        <nuxt-link :to="postLink" class="btn btn-success">
          {{ isAdmin ? 'แก้ไขบทความ' : 'อ่านบทความ' }}
        </nuxt-link>
      </b-card>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/posts/' + this.id : '/posts/' + this.id
    },
  },
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
