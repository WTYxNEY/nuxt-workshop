<template>
  <AdminForm @sendData="onSubmitted" :post="singlePost"/>
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'
import axios from 'axios'
export default {
  layout: 'coreLayout',
  components: {
    AdminForm,
  },
  asyncData(context) {
    return axios
      .get(
        'https://nuxt-tutorial-fc728-default-rtdb.firebaseio.com/posts/' +
          context.params.id +
          '.json'
      )
      .then((res) => {
        return {
          singlePost: {
            ...res.data,
            id: context.params.id,
          },
        }
      })
      .catch((err) => context.error(err))
  },
  methods: {
    onSubmitted(editPost) {
      this.$store.dispatch('editPost', editPost).then(() => {
        this.$router.push('/admin/')
      })
    },
  },
}
</script>