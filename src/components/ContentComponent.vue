<script setup lang="ts">
import SearchSidebarComponent from './SearchSidebarComponent.vue'
</script>

<template>
  <main class="content">
    <SearchSidebarComponent></SearchSidebarComponent>
  </main>
</template>

<style scoped lang="scss">
@import 'src/assets/const.scss';
.content {
  background-color: $themeWhite;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  margin: 0 50px 58px 50px;
  display: flex;
}
</style>
