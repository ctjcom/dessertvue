<template>
  <div>
    <section>
      <div class="Chengpin">
        <img :src="menu.mimg" />
      </div>
      <div class="Chengpin-h1">
        <h1></h1>
      </div>

      <div class="look">
        <div class="look_left"></div>
        <p>东京美食学院</p>
        <button class="look_right">关注</button>
      </div>
      <!-- 不需要watch -->
      <div class="people_num">
        <p class="join_num">289人看过</p>
      </div>
      <div class="lession_video">
        <p class="score_num">本菜单评分</p>
      </div>
      <div class="Chengpin-h2">
        <!-- <button class="fb"> -->
        <button class="tiaozhuan">app中查看更方便呢</button>
        <!-- </button> -->
      </div>

      <div class="yongliao">用料</div>
      <ul>
        <li class="task" v-for="(item,i) of materials" :key="i">
          <span>{{item.tname}}</span>
          <span>{{item.dosage}}</span>
        </li>
      </ul>
      <div class="buzhouZong" v-for="(item,i) of step" :key="i">
        <h1 class="bz-title">步骤{{i+1}}</h1>
        <div>
          <img :src="item.simg" alt />
        </div>
        <p class="buzhoufen">{{item.title}}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      materials: {},
      menu: {},
      step: {}
    };
  },
  methods: {
    menU() {
      var url = "/menu/menu";
      this.axios
        .get(url, { params: { mid: this.$route.params.mid } })
        .then(res => {
          this.step = res.data.step;
          this.materials = res.data.materials;
          this.menu = res.data.menu;
            console.log(this.res)       
           //console.log(this.step)
          //console.log(this.materials);
        });
    }
  },
  created() {
    this.menU();
    console.log(this.$route.params.mid)
  }
};
</script>

</script>
<style scoped>
div {
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  overflow: hidden;
}
div .yongliao {
  color: lightcoral;
  font-size: 17px;
  margin-left: 20px;
}
div .buzhoufen {
  color: purple;
  font-size: 20px;
}
div .Chengpin-h2 {
  color: aqua;
  height: 0.4rem;
  padding: 0.2rem;
}

div .Chengpin {
}
div .Chengpin img {
  height: 3.5rem;
  width: 100%;
}
div .Chengpin-h1 {
  margin-left: -100px;
}

/* div .Chengpin-h2 .fb{
	border-radius: 30%;
} */
div .Chengpin-h2 .tiaozhuan {
  color: tomato;
  margin: 0 auto;
  font-size: 20px;
}
div .Myapp {
  height: 0.49rem;
  position: fixed;
  width: 100%;
  z-index: 5;
}
div .Myapp .big_big {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0.1rem;
  margin-top: 0.16rem;
  font-size: 0.25rem;
}
div .Myapp .W_x {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.16rem;
  margin-left: 0.7rem;
  font-size: 0.25rem;
}
div .Myapp .P_y {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.16rem;
  margin-left: 1.23rem;
  font-size: 0.25rem;
}
div .Myapp .G_d {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0.16rem;
  margin-left: 1.75rem;
  font-size: 0.25rem;
}
div section {
  width: 100%;
  height: 100%;
  flex: 1;
}
div section .Chengpin {
  z-index: 3;
}
div section .Chengpin-h1 {
  height: 0.47rem;
}
div section .Chengpin-h1 h1 {
  margin-top: 0.2rem;
  font-size: 0.22rem;
  margin-left: 0.21rem;
}
div section .look {
  height: 0.54rem;
  flex-direction: row;
}
div section .look .look_left {
  height: 0.28rem;
  width: 0.29rem;
  background: green;
  margin-top: 0.25rem;
  margin-left: 0.21rem;
  border-radius: 10px;
}
div section .look .look_left img {
  height: 0.28rem;
  width: 0.29rem;
  border-radius: 10px;
}
div section .look p {
  line-height: 0.28rem;
  margin-top: 0.25rem;
  margin-left: 0.1rem;
  font-size: 15px;
}
div section .look .look_right {
  height: 0.31rem;
  width: 0.65rem;
  margin-left: 1.4rem;
  margin-top: 0.21rem;
  text-align: center;
  line-height: 0.31rem;
  font-size: 0.14rem;
  border: 1px solid red;
  color: red;
  background-color: white;
}
div section .watch {
  height: 0.36rem;
}
div section .watch .sz {
  font-size: 0.13rem;
  position: relative;
  top: 0.21rem;
  left: 0.21rem;
}
div section .watch .cookie_time {
  position: relative;
  top: 0;
  left: 0.5rem;
  font-size: 0.13rem;
}
div section .people_num {
  height: 0.36rem;
  margin-left: 0;
}
div section .people_num .ren {
  font-size: 0.13rem;
  position: relative;
  top: 20px;
  margin-left: 20px;
}
div section .people_num .join_num {
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 15px;
}
div section .lession_score {
  font-size: 0.13rem;
  position: relative;
  /* top: 10px; */
  color: #cbcbcb;
}
div section .lession_video {
  margin-top: 20px;
  margin-left: 20px;
}
div section .score_num {
  position: relative;
  top: 0;
  margin-left: 25px;
  font-size: 0.13rem;
  color: #cbcbcb;
}
div section .lession_appraise {
  height: 0.43rem;
  flex-direction: row;
}
div section .appraiseSum {
  height: 0.5rem;
  flex-direction: row;
  margin-top: 0.1rem;
}
div section .user {
  height: 0.42rem;
  position: relative;
}
div section .user .addtime {
  position: absolute;
  top: 0.05rem;
  left: 2.7rem;
  color: #cbcbcb;
}
div section .zuoye {
  height: 50px;
  flex-direction: row;
  margin-top: 15px;
}
div section .task {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding:0.1rem .4rem;
  width:100%;
  font-size: 0.18rem;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
div section .zuoye .task_num {
  margin-left: 2.15rem;
  font-size: 15px;
  color: red;
}
.buzhouZong {
  padding: 0 0.2rem;
  box-sizing: border-box;
  text-align: center;
  display: block;
  margin-top: 20px;
}
.buzhouZong img {
  max-height: 2.5rem;
  width: 100%;
}
.bz-title {
  font-size: 0.24rem;
  text-align: left;
}
</style>