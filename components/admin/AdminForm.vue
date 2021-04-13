<template>
  <b-container fluid="md" class="py-2">
    <h2 align="center">เขียนบทความ</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="ชื่อบทความ">
        <b-form-input
          type="text"
          placeholder="ระบุชื่อบทความ"
          v-model="form.title"
        />
      </b-form-group>
      <b-form-group label="รายละเอียดบทความ">
        <b-form-textarea
          placeholder="รายละเอียดบทความ"
          rows="8"
          v-model="form.content"
        />
      </b-form-group>
      <b-form-group label="รูปภาพ (URL)">
        <b-form-input
          type="text"
          placeholder="ระบุรูปภาพ"
          v-model="form.image"
        />
      </b-form-group>
      <b-form-group label="รายละเอียดผู้เขียน">
        <b-form-input
          type="text"
          placeholder="ชื่อผู้เขียน"
          v-model="form.author"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">บันทึก</b-button>
      <b-button type="reset" variant="danger">ล้าง</b-button>
    </b-form>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      form: this.post
        ? { ...this.post }
        : {
            title: '',
            content: '',
            image: '',
            author: '',
          },
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$emit('sendData', this.form)
      this.$router.push('/admin/posts')
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.content = ''
      this.form.image = ''
      this.form.author = ''
    },
  },
}
</script>