<template>
  <nav class="top-nav">
    <a href="/">
      <img src="/images/pandf-nav-logo.png" alt>
    </a>
    <a href="/about">About</a>
    <a href="/blogs">Blogs</a>
    <a href="/collaborate">Collaborate</a>
    <a href="/events">Events</a>
    <a href="/roundtable">Roundtable</a>
    <a href="/amreading">#AmReading</a>
  </nav>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";

.top-nav {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  border-bottom: 2px solid $purple;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    font-family: $titleFont;
    color: $black;
    background: $white;
    text-decoration: none;
    img {
      max-height: 55px;
      padding: 6px;
      filter: invert(100%);
    }
    &:hover {
      color: $white;
      background: $purple;
      img {
        filter: invert(0%);
      }
    }
  }
}
</style>
