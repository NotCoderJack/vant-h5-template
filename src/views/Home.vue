<template>
  <div class="home">
    Hello, {{name}}
    <div class="box">
      H5
    </div>
    <Button type="primary">Click me</Button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Home',
  data () {
    return {
      name: 'Vant'
    }
  },
  components: {
    Button
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  // font-size: 24px;
  .box {
    width: 64px;
    height: 64px;
    background: red;
  }
}
</style>
