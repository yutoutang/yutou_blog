<template>
  <div class="TabBar">
    <div class="ui vertical inverted sidebar menu">
      <a class="item" @click="itemClick('/video')">Demo</a>
    </div>
    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui container">
          <div class="ui large secondary inverted pointing menu" id="content">
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <a class="item" @click="itemClick('/video')">Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'semantic-ui-css/semantic.min';
  export default {
    name: "MainTabbar",
    data(){
      return{
        isActive: false,
      }
    },
    mounted() {
      $(document)
          .ready(function () {
            $('.masthead')
                .visibility({
                  once: false,
                });
            $('.ui.sidebar')
                .sidebar('attach events', '.toc.item')
            ;
          });
    },
    methods:{
      itemClick(path) {
        if (this.$router.history.current.path != path ) {
          this.$router.push(path);
        }
      }
    }
  }
</script>

<style scoped>

  .secondary.pointing.menu .toc.item {
    display: none;
  }
  .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  .ui.menu a.item{
    font-size: 19px;
  }
  /*#content{*/
  /*  margin-left: -65px;*/
  /*  margin-right: -40px;*/
  /*}*/
  .masthead .logo.item img {
    margin-right: 1em;
  }

  .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  .ui.menu a.item{
    font-size: 19px;
  }

  .masthead .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  .masthead h1.ui.header {
    margin-top: 3em;
    margin-bottom: 0em;
    font-size: 4em;
    font-weight: normal;
  }
  .masthead h2 {
    font-size: 1.7em;
    font-weight: normal;
  }



  .secondary.pointing.menu .toc.item {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    .secondary.pointing.menu .item,
    .secondary.pointing.menu .menu {
      display: none;
    }
    .secondary.pointing.menu .toc.item {
      display: block;
    }

    .masthead h1 {
      font-size: 2em;
      margin-top: 1.5em;
    }
    .masthead h2 {
      margin-top: 0.5em;
      font-size: 1.5em;
    }
  }

</style>