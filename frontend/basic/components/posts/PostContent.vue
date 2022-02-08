<template>
   <b-col>
  <b-card
    :title="title"
    :img-src=image
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 text-center"

  >
    <b-card-text>
      {{content}}
    </b-card-text>

    <b-button href="#" variant="primary">อ่านบทความ</b-button>
  </b-card>
</b-col>

</template>

<script>
export default {
    props:{
        id:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        },
        content:{
            type:String,
            require:true
        },
        image:{
            type:String,
            require:true
        }
    }
}
</script>