<template>
  <div class="spider">
    <ul id="example-1">
      <li v-for="item in items" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       items: [{ message: 'Foo' }, { message: 'Bar' }]
//     }
//   }
// }

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
        // this.items = response.data.data.datas
      })
    }
  }
}

</script>
