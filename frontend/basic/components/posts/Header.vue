<template>
    <div>
        <b-carousel id = "slider" 
        controls
        indicators> 
      <b-carousel-slide  v-for="item in items" :key="item"
      :caption=item.caption
      :text=item.text
      :img-src=item.image
        ></b-carousel-slide>
        </b-carousel>
    </div>  
</template>

<script>
export default {
   data(){
       return{
           items:[
               {caption:"ทุ่งหญ้า",image:require("@/assets/image/1.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
                {caption:"ทะเล",image:require("@/assets/image/2.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
                 {caption:"ป่าเขา",image:require("@/assets/image/3.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
               
           ]
       }
   } 
}
</script>


