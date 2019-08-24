<template>
  <div class="index-list">
    <router-link tag="div" :to="`/MenuTotal/${item.mid}`" class="list" v-for="(item,i) of list" :key="i">
      <div class="list-img">
        <img
          :src="item.mimg"
          alt
        />
      </div>
      <div class="list-content">
        <h3 class="list-title">{{item.mname}}</h3>
        <div class="list-desc">
          <span><span class="iconfont icon-shoucang
"></span> 收藏85</span>
          <span><span class="iconfont icon-liulan
"></span>浏览126</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  data() {
    return {
      list:'',
    };
  },
  watch: {
    content(data){
      this.list=data;
    }
  },
  props:{
      content:{
          default:"",
      }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  height: 1.5rem;
}
.list-img {
  margin-right: 0.08rem;
  
}
.list-img > img {
  width: 1.5rem;
  min-height: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 4px 2px #ccc;
}
.list-content > .list-title {
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
  font-size: 0.18rem;
}
.list-content > .list-desc {
  display: flex;
}
.list-content > .list-desc > span {
  font-size: 0.14rem;
}
</style>