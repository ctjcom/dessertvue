<template>
  <div class="home">
    <!--首页轮播-->
    <div class="home-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) of index.recommend" :key="i">
        <img :src="item.mimg" alt="">
      </mt-swipe-item>
    </mt-swipe>
    </div>
    <!--搜索按钮-->
    <div class="home-search">
      <mt-button plain type="default" size="large">搜索</mt-button>
    </div>
    <!--每日推荐-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">每日推荐</h3>
      </div>
      <solidlist :list="index.recommend"></solidlist>
    </div>
    <!--早餐-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">营养早餐</h3>
      </div>
      <indexlist :list="index.breakfast"></indexlist>
    </div>
    <!--川菜-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">精选川菜</h3>
      </div>
      <indexlist :list="index.siChuan"></indexlist>
    </div>
    <!--湘菜-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">湘味人生</h3>
      </div>
      <indexlist :list="index.xiangcai"></indexlist>
    </div>
    <!--粤菜经典-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">粤菜经典</h3>
      </div>
      <indexlist :list="index.yuecai"></indexlist>
    </div>
    <!--软心甜点-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">暖心甜点</h3>
      </div>
      <indexlist :list="index.dessert"></indexlist>
    </div>
  </div>
</template>

<script>
import solidlist from "../components/solid_list";
import indexlist from "../components/index_list";
export default {
  name: "home",
  data() {
    return {
      index: {}
    };
  },
  created() {
    this.axios.get("/index").then(res => {
      this.index = res.data;
      console.log(this.index);
    });
  },
  components: {
    solidlist: solidlist,
    indexlist: indexlist
  }
};
</script>
<style scoped>
.home {
  padding-left: 0.08rem;
}
.home-swipe{
  height: 2rem;
  padding-right:0.08rem; 
}
.home-swipe img{
  width: 100%;
}
.home-search{
  width:100%;
  margin-top: 0.1rem;
  padding-right:0.08rem; 
}
.home-content {
  margin-top: 0.4rem;
}
.home-title {
  font-size: 0.16rem;
  display: flex;
  padding: 0 0.05rem;
}
/*重写mint-ui样式*/
.home-swipe >>> .mint-swipe-indicators{
  display: flex;
}
.home-swipe >>> .mint-swipe-indicator{
  opacity: .6;
}
.home-swipe >>> .mint-swipe-indicator.is-active{
  background: red;
}
</style>