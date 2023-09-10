<script setup lang="ts"></script>

<template>
  <form>
    <input type="text" class="searchField__input" />
  </form>
</template>

<style scoped lang="scss">
@import 'src/assets/const.scss';
.searchField__input {
  padding: 16px 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: $themeGrey;
  font-family: 'Montserrat', sans-serif;
  border-radius: 8px;
  border: 1.5px solid #e9ecef;
  width: 100%;
  box-sizing: border-box;
}
</style>
