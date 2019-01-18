<template>
  <div id="app">
    <transition name="fade1">
      <div class="navBar">
        <navBar></navBar>
      </div>
    </transition>
    <div class="container">
      <router-view/>
    </div>
    <transition name="fade2">
      <div class="footerBar">
        <footerBar></footerBar>
      </div>
    </transition>
    <transition name="fade3" >
      <div class="leftBarHei" v-if="aaaa" @click="bbbb" >
      </div>
    </transition>
    <transition name="fade4">
      <div class="leftBar" v-if="aaaa">
        <div class="parentItem" v-for="(item,index) in list" > 
          <div class="parentTitle" @click="showChild(item,index)" >
            {{item.name}}
            {{index}}
          </div>
          <div class="childContent" :style="'height:'+item.height">
            <div class="childItem" v-for="val in item.childlist">
              <div class="childTitle" @click="bbbb">
                {{val.name}} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template> 

<script>
import navBar from './components/navBar';
import footerBar from './components/footerBar';
export default {
  components:{navBar,footerBar},
  name: 'App',
  data(){
    //这里定义很多初始变量
    return {
      list:[
        {
          name:'第一类',height:'0',childlist:[{name:'1.1'},{name:'1.2'},{name:'1.3'},{name:'1.4'}]
        },
        {
          name:'第二类',height:'0',childlist:[{name:'2.1'},{name:'2.2'},{name:'2.3'}]
        }
      ]
    }
  },
  created(){
    console.log(this.$store.getters)
  },
 computed:{
    aaaa(){
      return this.$store.getters['dibuzhuangtai/leftShow']
    }
  },
  //这里是方法集合 要调用
  methods:{
    showChild:function(val,index1){
      var arr = this.list; 
      if(val.height==val.childlist.length*40+'px'){
        arr[index1].height = 0;
      }else{      
        arr[index1].height = val.childlist.length*40+'px'; 
      }
      this.list = arr;
      console.log(arr[0])
    },
    bbbb: function(){
      this.$store.commit('dibuzhuangtai/caidanhide')
    }
  }
}
</script>

<style>
*{margin: 0; padding: 0}

.navBar{
  position: fixed; top: 0; left: 0; right: 0; height: 40px; border-bottom: 1px solid #ccc;
}
.container{
  padding: 40px 0 64px 0;
}
.footerBar{
  height: 40px; position: fixed; bottom: 0; left: 0; right: 0; border-top: 1px solid #ccc;
}
.leftBarHei{
  position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: gray;
}
.leftBar{
  height: 100vh; width: 60vw; position: fixed; top: 0; left: 0; display: flex; flex-direction: column; background-color: white;
}
.parentItem{
  width: 100%; margin-bottom: 5px;
}
.parentTitle{
  background: yellowgreen; height: 40px; line-height: 40px; 
}
.childContent{
  width: 100%; height: 0; transition: height ease-in-out 3s; overflow: hidden;
}
.childItem{
  width: 100%;
}
.childTitle{
  background-color: blue; height: 36px; line-height: 36px; color: antiquewhite; padding-left: 20px; margin-bottom: 4px;
}
.fade1-enter-active, .fade1-leave-active{
  transition: all 2s ease;
  transform: translateY(0)
}
.fade1-enter, .fade1-leave-to{
  opacity:0;
  transform: translateX(-64px);
}
.fade2-enter-active, .fade2-leave-active{
  transition: all 2s ease;
  transform: translateY(0)
}
.fade2-enter, .fade2-leave-to{
  opacity:0;
  transform: translateY(64px);
}
.fade3-enter-active, .fade3-leave-active{
  transition: opacity 4s;
  transform: translateX(0)
}
.fade3-enter, .fade3-leave-to{
  opacity:0;
  transform: translateX(-100vw);
}
.fade4-enter-active, .fade4-leave-active{
  transition: all 2s ease;
  transform: translateX(0);
}
.fade4-enter, .fade4-leave-to{
  opacity:0;
  transform: translateX(-60vw);
}
</style>
