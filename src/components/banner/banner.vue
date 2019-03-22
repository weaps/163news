<template>
  <div class="banner-wrapper" id="container" ref="bannerSwiper">
    <ul>
      <li><img :src="sliderDataList[index].picUrl" alt=""></li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import * as api from "@/common/js/api";
export default {
  name: "banner",
  data() {
    return {
      dataList: [],
      index: 0,
      timer: null,
      startX: 0,
      endX: 0,
      htmlWidth: 0,
    };
  },
  props: {
    sliderDataList: {
      type: Array,
      default() {
        return []
      }
    },
    autoPlay: {
      type: Boolean,
      default() {
        return true;
      }
    },
    interval: {
      type: Number,
      default() {
        return 3000;
      }
    }
  },
  created() {},
  computed: {
    calculate() {
      return this.endX - this.startX;
    }
  },
  mounted() {
    let dom = this.$refs.bannerSwiper;
    this.htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    dom.addEventListener('touchstart', this.touchstart);
    dom.addEventListener('touchend', this.touchend);
    this.autoPlaySlider()
    this.mouseMoveStop();
  },
  methods: {
    touchstart(e) {
      this.startX = e.targetTouches[0].clientX;
      window.console.log(this.startX);
    },
    touchend(e) {
      this.endX = e.changedTouches[0].clientX
      window.console.log(this.endX);
      this.isToggle();
    },
    isToggle() {
      if (this.calculate) {
        debugger;
      }
    },
    // 鼠标移入停止自动播放
    mouseMoveStop() {
      // let dom = document.getElementById('container');
      // dom.addEventListener('mouseover', () => {
      //   window.console.log('');
      // })
    },
    // 自动轮播
    autoPlaySlider() {
      let that = this;
      let len = this.sliderDataList.length;
      if (that.autoPlay) {
        that.timer = setInterval(() => {
          that.index ++;
          if (that.index == len) {
            that.index = 0
          }
          window.console.log(that.index);
        }, that.interval);
      }
    }
  }
};
</script>
