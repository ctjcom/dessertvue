<template>
  <div class="home">
    <!--每日推荐-->
    <div>
    <div class="home-title">
    <h3 class="title">每日推荐</h3>
    </div>
    <solidlist :list="index.recommend"></solidlist>
    </div>
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
<style scoped>
.home-title{
  font-size: 0.16rem;
  display: flex;
  padding: 0 0.05rem;
}
</style>