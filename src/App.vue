<template>
  <div>
    <!-- use components -->
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
//import necesarry components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  // register components
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="less" scoped></style>
