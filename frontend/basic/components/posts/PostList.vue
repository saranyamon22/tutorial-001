<template>
  <b-container>
    <b-row class="py-3">
      <PostContent
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :content="post.content"
        :image="post.image"
        :isAdmin="isAdmin"
      />
    </b-row>
  </b-container>
</template>

<script>
import PostContent from '@/components/posts/PostContent'
export default {
  components: {
    PostContent,
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
