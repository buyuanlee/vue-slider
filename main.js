let view = new Vue({
  el:'#app',
  data:{
    transformValue:''
  },
  template:`
<div class="container">
  <div class="window">
    <div class="slides":style="{transform:transformValue}">
          <div id="img1"></div>
          <div id="img2"></div>
          <div id="img3"></div>
  </div>
  </div>
  <div>
    <button v-on:click="go(0)">1</button>
    <button v-on:click="go(1)">2</button>
    <button v-on:click="go(2)">3</button>
  </div>
</div>
`,
  methods:{
    go(index){
    this.transformValue=`translateX(${-400*index}px)`
  }
  }
})
