<template>
  <div class="list" ref="list">
    <div
      class="solid-list"
      ref="solid"
      :style="listStyle"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
    >
    <!--内容区-->
    <router-link tag="div" :to="`/MenuTotal/${item.mid}`" class="item" v-for="(item,i) of list" :key="i">
      <img class="item-img" :src="item.mimg" alt="">
      <p class="item-name">{{item.mname}}</p>
    </router-link>
    </div>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  data() {
    return {
      list:'',
      listStyle: {
        marginLeft: 0
      },
      clientX: 0, //横屏滚动的起始点坐标
      clientY: 0,
      moveX: 0, //手指滑动时的坐标
      moveY: 0,
      scrollWidth: 0, //滑动元素的真实宽
      offsetWidth: 0, //显示容器的宽度
      marginLeft: 0, //记录位移距离
      maxLeft: 0 //最大位移
    };
  },
  props:{
    content:{
    default:"",
  }},
 watch:{
   content(data){
     this.list=data;
   }
 },
  methods: {
    start(e) {
      this.clientX = e.touches[0].clientX;
      this.clientY = e.touches[0].clientY;
      this.scrollWidth = this.$refs.solid.scrollWidth;
      this.offsetWidth = this.$refs.list.offsetWidth;
      this.maxLeft = this.scrollWidth - this.offsetWidth;
    },
    move(e) {
      //获取滑动时的坐标
      this.moveX = e.touches[0].clientX;
      this.moveY = e.touches[0].clientY;
      //计算xy轴移动距离
      var x = this.clientX - this.moveX;
      var y = this.clientY - this.moveY;
      //转正数
      var w = x < 0 ? x * -1 : x;
      var h = y < 0 ? y * -1 : y;
      if (w > h) {
        //如果是在x轴移动就取消默认事件
        e.preventDefault();
      }
      //位移
      var marginLeft = this.marginLeft + this.moveX - this.clientX;
      if (marginLeft > 0) {
        marginLeft = 0;
      }
      if (marginLeft < -this.maxLeft) {
        marginLeft = -this.maxLeft;
      }
      this.listStyle.marginLeft = marginLeft + "px";
    },
    end() {
      //记录此次滑动的距离到总距离中
      this.marginLeft += this.moveX - this.clientX;
      if (this.marginLeft > 0) {
        //右滑到顶时
        this.marginLeft = 0;
      }
      if (this.marginLeft < -this.maxLeft) {
        //左滑到底时
        this.marginLeft = -this.maxLeft;
      }
    }
  },
  components: {

  }
};
</script>

<style scoped>
.list {
  overflow: hidden;
  background-color: #fff;
}
.solid-list {
  display: flex;
  flex-wrap: nowrap;
}
.item{
  text-align: center;
}
.item .item-img{
  width:2rem;
  height:1.5rem;
  margin:0 0.02rem; 
  border-radius: 5px;
  box-shadow: 0 0 4px 2px #ccc;
}
.item .item-name{
  font-size: .16rem;
  margin-top:0.04rem;
}
</style>
