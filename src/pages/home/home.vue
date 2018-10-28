<template>
  <div class="home">
    home
  </div>
</template>
<script>
import http from '../../utils/http'
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function() {
    this.fetchData()
  },
  methods: {
    fetchData: async function() {
      const params = {
      }
      const res = await http.post('search/list', params)
      if (res.data.success) {
        alert('请求成功')
      }
    }
  }
}
</script>
