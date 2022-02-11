<template>
  <div>
    <Header />

    <PostList :posts="loadData" />

    <b-container fluid> </b-container>
  </div>
</template>

<script>
import Header from '@/components/posts/Header'
import PostList from '@/components/posts/PostList'
import axios from 'axios'
export default {
  layout: 'coreLayout',
  components: {
    Header,
    PostList,
  },
  data() {
    return {
      loadData:[]
      // loadData: [
      //   {
      //     id: '1',
      //     title: 'วัดพระเเก้ว กรุงเทพฯ',
      //     content:
      //       'วัดคู่บ้านคู่เมืองของประเทศไทย และกรุงรัตนโกสินทร์ ก็คือ วัดพระศรีรัตนศาสดาราม หรือ วัดพระเเก้ว เป็นวัดในพระบรมมหาราชวังเช่นเดียวกับวัดพระศรีสรรเพชญ์ ',
      //     image:
      //       'https://cms.dmpcdn.com/travel/2017/08/03/dbdabd7b-cbd8-4f36-b4f1-05fd51055d0c.jpg',
      //   },
      //   {
      //     id: '2',
      //     title: ' เกาะมุก ตรัง',
      //     content:
      //       ' เกาะมุก ได้ชื่อว่า “ถ้ำมรกตอันล้ำค่าแห่งอันดามัน” เป็นเกาะที่ใหญ่เป็นอันดับที่ 3 ของท้องทะเลตรังเลยทีเดียว',
      //     image:
      //       'https://cms.dmpcdn.com/travel/2017/08/03/b831d834-c87d-46d8-9b45-672dca0e8df2.jpg',
      //   },
      //   {
      //     id: '3',
      //     title: 'ชิงช้าต้นไม้  พิษณุโลก',
      //     content:
      //       'จากจุดชมวิวบนต้นไม้นี้สามารถมองออกไปเห็นทิวเขาและพื้นที่ราบรอยต่อของ 5 จังหวัด คือ นครสวรรค์ ลพบุรี พิจิตร เพชรบูรณ์ และพิษณุโลก ',
      //     image:
      //       'https://cms.dmpcdn.com/travel/2017/08/03/33ae5382-06aa-4ff9-9bf4-eb30b328f29e.jpg',
      //   },
      //   {
      //     id: '4',
      //     title: 'ไร่ชาฉุยฟง เชียงราย',
      //     content:
      //       ' ไร่ชาฉุยฟง ตั้งอยู่ที่ อ.แม่จัน จ.เชียงราย ค่ะ เป็นแหล่งปลูกชาชั้นดี',
      //     image:
      //       'https://cms.dmpcdn.com/travel/2017/08/03/71bdbdd6-bc67-40a0-b9e5-b8155309592b.jpg',
      //   },

      //   {
      //     id: '5',
      //     title: 'น้ำพุร้อนฝาง เชียงใหม่',
      //     content:
      //       'น้ำพุร้อนฝาง ตั้งอยู่ในอุทยานแห่งชาติดอยผ้าห่มปก ซึ่งมีความอุดมสมบูรณ์ทางธรรมชาติมาก บ่อน้ำพุร้อนมีมากกว่า 50 บ่อ กระจายไปทั่วพื้นที่',
      //     image:
      //       'https://cms.dmpcdn.com/travel/2017/08/03/a65826bf-aca5-4be5-8873-f39a1e78ee18.jpg',
      //   },
      //   {
      //     id: '6',
      //     title: 'หมู่เกาะกำ ระนอง',
      //     content:
      //       ' เป็นหมู่เกาะที่อยู่ในพื้นที่ของอุทยานแห่งชาติแหลมสน ที่นี่เป็นหมู่เกาะที่มีความสวยงาม น้ำทะเลใส และหาดทรายขาว เป็นจุดดำน้ำตื้น',
      //     image:
      //       'https://cms.dmpcdn.com/travel/2017/08/03/2699f5f3-eefc-4b76-8dd3-8133b4873d15.jpg',
      //   },
      // ],
    }
  },
   async mounted(){
    let res = await axios.get('http://localhost:9000/findProduct')
    this.loadData = res.data
  }

}
</script>
