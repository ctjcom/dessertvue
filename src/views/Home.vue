<template>
  <div class="home">
    <solidlist :list="index.recommend"></solidlist>
  </div>
</template>

<script>
import solidlist from "../components/solid_list"
export default {
  name: 'home',
  data(){
    return{
      index:{},
    }
  },
  created(){
    this.axios.get("/index").then(res=>{
      this.index=res.data;
      console.log(this.index);
    })
  },
  components: {
    solidlist:solidlist,
  }
}
</script>
