<template>
  <b-container fluid="md" class="py-2">
    <h2 align="center">เขียนบทความ</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="fieldset-1"
        description="ระบุชื่อบทความ"
        label="ชื่อบทความ"
        valid-feedback="Thank you!"
      >
        <b-form-input type="text" v-model="from.name"></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-2"
        description="ระบุชื่อบทความ"
        label="รายละเอียดบทความ"
        valid-feedback="Thank you!"
      >
        <b-form-textarea rows="6" v-model="from.content"></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="fieldset-3"
        description="ระบุรูปภาพบทความ"
        label="รูปภาพ (URL)"
        valid-feedback="Thank you!"
      >
        <b-form-input v-model="from.image"></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-4"
        description="ระบุนามปากกา"
        label="ผู้เขียน"
        valid-feedback="Thank you!"
      >
        <b-form-input v-model="from.author"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">บันทึก </b-button>
      <b-button type="reset" variant="danger">ล้าง </b-button>
    </b-form>

    <b-card header="result" class="mt-3">
      {{ from }}
    </b-card>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      from: {
        name: 'เกาะมุก ตรัง',
        content:
          'เกาะมุก ได้ชื่อว่า “ถ้ำมรกตอันล้ำค่าแห่งอันดามัน” เป็นเกาะที่ใหญ่เป็นอันดับที่ 3 ของท้องทะเลตรังเลยทีเดียว',
        image:
          'https://cms.dmpcdn.com/travel/2017/08/03/b831d834-c87d-46d8-9b45-672dca0e8df2.jpg',
        author: '',
      },
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      let req = {
        title: this.from.name,
        content: this.from.content,
        image: this.from.image,
        author: this.from.author,
      }
      let res = await axios.post('http://localhost:9000/addProduct', req)
      console.log(res)
      this.onReset(evt)
    },
    onReset(evt) {
      evt.preventDefault()
      this.from.name = ''
      this.from.content = ''
      this.from.image = ''
      this.from.author = ''
    },
  },
}
</script>
