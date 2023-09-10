<script setup lang="ts">
import SearchFieldComponent from './SearchFieldComponent.vue'
import UserListComponent from './UserListComponent.vue'
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__block">
      <h1 class="sidebar__header">Поиск сотрудников</h1>
      <SearchFieldComponent />
    </div>
    <div class="sidebar__block">
      <h1 class="sidebar__header">Результаты</h1>
      <UserListComponent />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'src/assets/const.scss';

.sidebar {
  padding: 0 30px 0 20px;
  flex-basis: 240px;
  overflow: hidden;
}

.sidebar__header {
  font-size: 16px;
  font-weight: 600;
  color: $themeBlack;
  line-height: 140%;
  margin: 25px 0 15px 0;
}
</style>
