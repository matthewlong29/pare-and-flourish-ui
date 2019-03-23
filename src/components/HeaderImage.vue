<template>
  <div class="header-image"></div>
</template>

<script>
export default {
  name: "HeaderImage"
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";

.header-image {
  height: 250px;
  padding-top: 72px;
  background-position: center;
  background-size: cover;
  background-image: url("/images/default-header.jpg");
}
</style>
