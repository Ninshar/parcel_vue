<template>
  <div class="box">
    {{count}}
    <button @click="add">++++</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name:'foo',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods:{
    ...mapMutations({
      add: 'increment'
    })
  }
}
</script>
<style lang="scss" scoped>
  .box{
    border: 1px solid #f40;
    button{
      width: 100px;
      height: 40px;
      background-color: palegoldenrod;
    }
  }
</style>