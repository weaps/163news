<template>
  <div class="home">
    <header class="header">
      <ul class="header-con">
        <li class="header-item">推荐</li>
        <li class="header-item active">要闻</li>
        <li class="header-item">娱乐</li>
        <li class="header-item">体育</li>
        <li class="header-item">图片</li>
      </ul>
    </header>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- banner -->
    <home-banner :sliderDataList="sliderDataList"></home-banner>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/banner/banner'

export default {
  name: 'home',
  data() {
    return {
      sliderDataList: [
        {
          id: 20265,
          picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1214291.jpg"
        },
        {
          id: 20266,
          picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1213523.jpg"
        },
        {
          id: 20268,
          picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1213579.jpg"
        },
        {
          id: 20208,
          picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1207794.jpg"
        }
      ]
    }
  },
  components: {
    HomeBanner
  }
}
</script>
