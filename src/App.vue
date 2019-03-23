<template>
  <div>
    <TopNav></TopNav>
    <HeaderImage></HeaderImage>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import HeaderImage from "@/components/HeaderImage";
import BottomNav from "@/components/BottomNav";

export default {
  name: "App",
  components: {
    BottomNav,
    HeaderImage,
    TopNav
  }
};
</script>


<style lang="scss">
body {
  margin: 0;
  min-height: 2000px;
}
</style>
