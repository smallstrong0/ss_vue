<template>
  <div class="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
      <el-menu-item index="Home">首页</el-menu-item>
      <el-menu-item index="Spider" >爬虫</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'Home'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
