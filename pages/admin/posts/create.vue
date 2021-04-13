<template>
  <AdminForm @sendData="onSubmitted" />
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'
import axios from 'axios'
export default {
  layout: 'coreLayout',
  components: {
    AdminForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin/posts')
      })
    },
  },
}
</script>