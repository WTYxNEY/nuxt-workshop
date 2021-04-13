import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      // ข้อมูล
      loadData: [],
    },
    mutations: {
      // จัดการข้อมูลใน state
      setPostState(state, posts) {
        state.loadData = posts
      },
      addPostState(state, createPost) {
        state.loadData.push(createPost)
      },
      editPostState(state, editPost) {
        const postIndex = state.loadData.findIndex(
          (post) => post.id === editPost.id
        )
        state.loadData[postIndex] = editPost
      },
    },
    actions: {
      // ทำงานร่วมกับ backend เรียกใช้ผ่าน component
      nuxtServerInit(vueContext, context) {
        return axios
          .get(
            'https://nuxt-tutorial-fc728-default-rtdb.firebaseio.com/posts.json'
          )
          .then((res) => {
            const postsData = []
            for (const key in res.data) {
              postsData.push({ ...res.data[key], id: key })
            }
            vueContext.commit('setPostState', postsData)
          })
          .catch((err) => context.error(err))
      },
      addPost(vueContext, postData) {
        //   รับค่าจาก form จาก dispatch ทที่ create.vue
        const createPost = { ...postData }
        return axios
          .post(
            'https://nuxt-tutorial-fc728-default-rtdb.firebaseio.com/posts.json',
            createPost
          )
          .then((res) => {
            vueContext.commit('addPostState', {
              ...createPost,
              id: res.data.name,
            })
          })
      },
      editPost(vueContext, editPost) {
        return axios
          .put(
            'https://nuxt-tutorial-fc728-default-rtdb.firebaseio.com/posts/' +
              editPost.id +
              '.json',
            editPost
          )
          .then((res) => {
            vueContext.commit('editPostState', editPost)
          })
      },
    },
    getters: {
      // เอา state ไปใช้งาน
      getAllPosts(state) {
        return state.loadData
      },
    },
  })
}

export default createStore
