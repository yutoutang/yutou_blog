<template>
  <div class="ui inverted vertical footer segment">
    <div class="ui center aligned container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="four wide column">
          <h4 class="ui inverted header">bilibili</h4>
          <img src="../../../assets/img/Bavatar.jpg" class="ui circular medium centered image" style="width: 70px; height: 70px;">
          <div class="ui inverted link list">
            <a href="#" class="ui right item">芋头可以不蘸糖吃</a>
          </div>
        </div>
        <div class="four wide column">
          <h4 class="ui inverted header">技术栈</h4>
          <div class="ui inverted link list">
            <a class="item" href="https://cn.vuejs.org/">Vue</a>
          </div>
          <div class="ui inverted link list">
            <a class="item" href="https://spring.io/">Spring</a>
          </div>
          <div class="ui inverted link list">
            <a class="item" href="https://semantic-ui.com/">Semantic UI</a>
          </div>
          <div class="ui inverted link list">
            <a class="item" href="https://www.bilibili.com/" >bilibili API</a>
          </div>
        </div>
        <div class="four wide column">
          <h4 class="ui inverted header">加入组织 <(▰˘◡˘▰)> </h4>
            <img src="../../../assets/img/QGroup1QR_s.jpg"
                 class="ui rounded medium centered image"
                 style="height: 139px; width: 130px"
            >
        </div>
        <div class="four wide column">
          <h4 class="ui inverted header">其他</h4>
          <div class="ui inverted link list">
            <a class="item" href="#">留言板</a>
          </div>
          <div class="ui inverted link list">
            <a class="item" href="#">建议箱</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FooterInfo",
    mounted() {},

    methods:{
    }
  }
</script>

<style scoped>
  .ui.vertical.stripe h3 {
    font-size: 2em;
  }
  .ui.vertical.stripe .button + h3,
  .ui.vertical.stripe p + h3 {
    margin-top: 3em;
  }

  .footer.segment {
    padding: 5em 0em;
  }
</style>