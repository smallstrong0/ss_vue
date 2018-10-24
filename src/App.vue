<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
          <router-link to=‘/Home’>Home</router-link>
        </li>
        <li>
          <router-link to=‘/Spider>Spider</router-link>
        </li>
        <li>
          <router-link to=‘/Android>Android</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
	export default {
	  name: 'app'
	}
</script>