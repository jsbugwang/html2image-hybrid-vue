<template>
  <div class="container">
    <el-input type="textarea" :rows="3" v-model="url" placeholder="在此处粘贴URL，必须带着 http:// 或者 https:// 前缀"></el-input>
    <div class="btn-group">
      <el-button type="primary" class="full-btn btn-capture" @click="handleSubmit">立即截图</el-button>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Index',
  data () {
    return {
      url: 'https://m.baidu.com/'
    }
  },
  methods: {
    handleSubmit () {
      const loading = this.$loading({
        lock: true,
        text: '截图中，长页面需要较长时间，请耐心等待...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      const url = `/api/html2image?url=${encodeURIComponent(this.url)}`
      axios.get(url).then((resp) => {
        this.$router.push({
          path: '/preview',
          query: {
            imageUrl: resp.data.data.imgUrl
          }
        })
      }).finally(() => {
        loading.close()
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 30px;
}
textarea {
  align-self: center;
  background: #fff;
  padding: 15px;
  margin-bottom: 30px;
}
.btn-capture {
  margin-top: 20px;
}
</style>
