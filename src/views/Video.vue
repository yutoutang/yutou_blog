<template>
  <div class="videoList">
    <main-tabbar/>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column :width="1"/>
        <sui-grid-column :width="14">
          <div class="ui vertical segment" id="video">
            <sui-card-group :items-per-row="5" stackable>
              <video-card v-for="vInfo in vlist" :v-info="vInfo"/>
            </sui-card-group>
          </div>
        </sui-grid-column>
        <sui-grid-column :width="1"/>
      </sui-grid-row>
    </sui-grid>
    <div v-show="isLoad">
      <footer-info/>
    </div>
  </div>
</template>

<script>
  import MainTabbar from "../components/contents/tabbar/MainTabbar";
  import FooterInfo from "../components/contents/footer/FooterInfo";
  import VideoCard from "../components/videoChild/VideoCard";

  export default {
    name: "Video",
    components: {VideoCard, FooterInfo, MainTabbar},
    data(){
      return{
        vlist: [],
        isLoad: false,
      }
    },
    created() {
      this.getInfo();
      this.footShow();
    },
    methods: {
      // 获得b站pc用户界面api的信息
      getInfo() {
        this.$axios.get('/api').then(res=>{
          // console.log(res);
          this.vlist = res.data.data.list.vlist;
        })
      },
      footShow(){
        setTimeout(()=>{
          this.isLoad = true;
        },500);
      }
    },
  }
</script>

<style scoped>

</style>