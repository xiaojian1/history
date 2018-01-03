<template>
	<div>
		<div>case</div>
		<ul>
			<li class="nav_item"><router-link to="/static/case/case1">案例1</router-link></li>
			<li class="nav_item"><router-link to="/static/case/case2">案例2</router-link></li>
			<li class="nav_item"><router-link to="/static/case/case3">案例3</router-link></li>
		</ul>
		<router-view/>
	</div>
</template>

<script>
export default {
  name: 'Service',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}
</style>
