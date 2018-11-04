<template>
  <div class="spider">
    <ul id="example-1">
      <li v-for="item in items" :key="item.title">
        <a :href="item.link">{{ item.title }}</a>
        <p>{{ item.desc }}</p>
        <div>
          <p> {{ item.niceDate }} </p>
          <p> {{ item.niceDate }} </p>
          <p> {{ item.author }} </p>
          <p> {{ item.author }} </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import listProject from '../../api/blog'
export default {
  name: 'Hello',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      listProject().then(response => {
        console.log(response)
        this.items = response.data.data.datas
      })
    }
  }
}

</script>
