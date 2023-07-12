<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-div {
  display: flex;
  justify-content: center;
}
</style>
<template>
  <div class="home">
    <div  class="img-div" >
    <img alt="Vue logo" src="../assets/comp.png" width="100">
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
