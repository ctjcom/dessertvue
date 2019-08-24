<template>
  <div class="home" ref="home">
    <!--首页轮播-->
    <div class="home-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) of index.recommend" :key="i">
        <router-link :to="`/MenuTotal/${item.mid}`" href="javascript:;">
        <img :src="item.mimg" alt="">
        </router-link> 
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
      <solidlist :content="index.recommend"></solidlist>
    </div>
    <!--早餐-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">营养早餐</h3>
        <router-link tag="div" :to="`/MenuList/${1}`">
          <span>更多</span>
          <span class="iconfont icon-changyongicon-2
"></span>
        </router-link>
      </div>
      <indexlist :content="index.breakfast"></indexlist>
    </div>
    <!--川菜-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">精选川菜</h3>
         <router-link tag="div" :to="`/MenuList/${2}`">
          <span>更多</span>
          <span class="iconfont icon-changyongicon-2
"></span>
        </router-link>
      </div>
      <indexlist :content="index.siChuan"></indexlist>
    </div>
    <!--湘菜-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">湘味人生</h3>
         <router-link tag="div" :to="`/MenuList/${3}`">
          <span>更多</span>
          <span class="iconfont icon-changyongicon-2
"></span>
        </router-link>
      </div>
      <indexlist :content="index.xiangcai"></indexlist>
    </div>
    <!--粤菜经典-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">粤菜经典</h3>
         <router-link tag="div" :to="`/MenuList/${4}`">
          <span>更多</span>
          <span class="iconfont icon-changyongicon-2
"></span>
        </router-link>
      </div>
      <indexlist :content="index.yuecai"></indexlist>
    </div>
    <!--软心甜点-->
    <div class="home-content">
      <div class="home-title">
        <h3 class="title">暖心甜点</h3>
         <router-link tag="div" :to="`/MenuList/${5}`">
          <span>更多</span>
          <span class="iconfont icon-changyongicon-2
"></span>
        </router-link>
      </div>
      <indexlist :content="index.dessert"></indexlist>
    </div>
    <!--回到顶部-->
    <a href="#" class="gotop" v-show="topbtn"><span style="font-size:0.24rem;" class="iconfont icon-changyongicon-11
"></span></a>
  </div>
</template>

<script>
import solidlist from "../components/solid_list";
import indexlist from "../components/index_list";
export default {
  name: "home",
  data() {
    return {
      index: {},
      topbtn:false,
    };
  },
  created() {
    this.axios.get("/index").then(res => {
      this.index = res.data;
      console.log(this.index);
    });
  },
  mounted(){
    window.addEventListener('scroll', this.showtopbtn, true);
  },
  methods:{
    showtopbtn(){
      var top=document.documentElement.scrollTop
      if(top>=200){
        this.topbtn=true;
      }else{
        this.topbtn=false;
      }
    }
  },
  components: {
    solidlist: solidlist,
    indexlist: indexlist
  }
};
</script>
<style scoped>
.home {
  overflow-y:scroll; 
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
  box-sizing: border-box;
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
  justify-content: space-between;
}
.gotop{
  display: table-cell;
  color:#fff;
  width: .5rem;
  height: .5rem;
  line-height: .5rem;
  font-size: 0.12rem;
  background: red;
  opacity: .8;
  position: fixed;
  right:0.08rem;
  bottom: .8rem;
  border-radius: 50%;
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