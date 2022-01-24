<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in bannerList" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- pagination -->
    <div class="swiper-pagination"></div>

    <!-- navigation buttom -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'SliderLoop',
  props: ['bannerList'],
  watch: {
    bannerList: {
      immediate: true,
      handler() {
        //initialize Swiper object in watch with nextTick to make sure the bannerlist data has been retrieved first
        this.$nextTick(() => {
          new Swiper(this.$refs.mySwiper, {
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
