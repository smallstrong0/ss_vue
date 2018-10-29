<template>
  <div class="home">
    <ul id="example-1">
      <li v-for="item in items" :key="item.author">
        {{ item.author }}
      </li>
    </ul>
  </div>
</template>
<script>
import http from '../../utils/http'
export default {
  name: 'Hello',
  data() {
    return {
      items: []
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
      this.items = res.data.data.result_list
    }
  }
}
</script>
