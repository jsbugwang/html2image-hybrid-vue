<template>
  <div class="container">
    <h1 class="title">图片预览</h1>
    <div class="image-container">
      <img :src="imageUrl" class="image" :style="{height: imageHeight + 'px'}" />
    </div>
    <div class="btn-group">
      <el-button type="primary" class="full-btn btn-capture" @click="handleSubmit">保存到相册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  data () {
    return {
      imageUrl: '',
      imageOriginalWidth: 0,
      imageOriginalHeight: 0
    }
  },
  created () {
    const imageUrl = this.$route.query.imageUrl
    this.imageUrl = imageUrl
    const matches = imageUrl.match(/(\d+)_(\d+)$/)
    this.imageOriginalWidth = matches[1]
    this.imageOriginalHeight = matches[2]
  },
  methods: {
    handleSubmit () {
      console.log('imageUrl')
    }
  },
  computed: {
    imageHeight () {
      return this.imageOriginalWidth > 0 ? this.imageOriginalHeight / this.imageOriginalWidth * window.screen.width : 0
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  color: #333;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.image-container {
    flex: 1;
    overflow-y: scroll;
}
.image {
    width: 100%;
}
</style>
