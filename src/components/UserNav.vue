<template>
	<ul>
		<li class="nav_item"><router-link to="/home">首页</router-link></li>
		<li class="nav_item"><router-link to="/service">服务</router-link></li>
		<li class="nav_item"><router-link to="/case">案例</router-link></li>
	</ul>
</template>

<script>
export default {
  name: 'UserNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.nav_item{
	a{
		color:#000;
	}
	.router-link-exact-active,.router-link-active{
		color:red;
	}
}
</style>
