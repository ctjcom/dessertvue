<template>
  <div class="menu-list">
    <div class="list-item">
      <menulist :content="list"></menulist>
    </div>
  </div>
</template>

<script>
import menulist from "../components/index_list";
export default {
  data() {
    return {
      list: "",
      start:1,//当前页码
      count:5,//每页数据量
    };
  },
  methods:{
      getmenulist(){
        //每页开始值
        var start=(this.start-1)*this.count;
        this.axios.get("/menutype/menutype", {
        params: {
          type: this.$route.params.type,
          start: start,
          count: this.count,
        }
      }).then(res => {
        this.list = res.data.data;
      });
      }
  },
  created() {
      this.getmenulist();
  },
  components: {
    menulist: menulist
  }
};
</script>

<style scoped>
.menu-list {
  padding: 0 0.08rem;
}
</style>
    
