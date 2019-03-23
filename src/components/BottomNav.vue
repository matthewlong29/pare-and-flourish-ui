<template>
  <nav class="bottom-nav">
    <button class="join">Join Pare and Flourish Now!</button>
    <div>
      <input type="text" placeholder="start typing here" />
      <button class="search">Search</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BottomNav"
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";

.bottom-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  button.join {
    width: 50%;
    background: $purple;
    height: 35px;
    border: 0;
    padding: 0;
    color: $black;
    cursor: pointer;
    &:hover {
      box-shadow: inset 0 0 2px transparentize($black, 0.15);
      color: $white;
    }
  }
  div {
    width: 50%;
    input {
      width: calc(100% - 208px);
      border: 0;
      padding: 2px;
      height: 27px;
      border: 2px solid $purple;
    }
    button.search {
      width: 200px;
      background: $purple;
      border: 0;
      padding: 0;
      height: 35px;
      color: $black;
      cursor: pointer;
      &:hover {
        box-shadow: inset 0 0 2px transparentize($black, 0.15);
        color: $white;
      }
    }
  }
}
</style>
