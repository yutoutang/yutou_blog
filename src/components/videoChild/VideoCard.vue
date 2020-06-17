<template>
    <sui-card>
        <a :href="'https://www.bilibili.com/video/'+vInfo.bvid" >
          <sui-image :src="'https:'+ vInfo.pic" />
        </a>
        <sui-card-content class="title-text">
          {{vInfo.title | simpleTitle}}
        </sui-card-content>
        <sui-card-content>
          <span slot="right"> 浏览: {{vInfo.play}} </span>
          <sui-icon name="comment" class="inner-content"/> {{vInfo.comment}} 评论
        </sui-card-content>
    </sui-card>
</template>

<script>
  export default {
    name: "VideoCard",
    props:{
      vInfo:{
        type: Object,
      }
    },
    methods:{
      // downloadVideoSheet(value){
      //   this.$emit("downloadVideoSheet" ,value);
      // },
    },
    filters:{
      simpleTitle(title){
        if (title.length > 20){
          return title.substr(0,30) + "..."
        }
      }
    }
  }
</script>

<style scoped>
 .title-text{
   overflow: hidden;
   height: 55px;
 }
  /*.inner-content{*/
  /*  padding-top:6px;*/
  /*}*/
</style>