<template>
  <b-col cols="3">
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 text-center"
    >
      <b-card-text>
        {{ content }}
      </b-card-text>

      <nuxt-link class="btn btn-success" :to="postLink">อ่านบทความ </nuxt-link>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/posts/' + this.id : '/post/' + this.id
    },
  },
}
</script>
