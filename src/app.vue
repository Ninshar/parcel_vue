<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name:"app",
  data() {
    return {
      bundler: 'Parcel'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>