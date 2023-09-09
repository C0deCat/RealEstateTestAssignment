<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__title">Жилфонд</div>
    <div class="header__user-name">Пользователь</div>
  </header>
</template>

<style scoped lang="scss">
@import 'src/assets/const.scss';
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 46px 50px 30px 50px;
}
.header__title {
  color: $themeRed;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
}

.header__user-name {
  color: $themeBlack;
  font-size: 16px;
}
</style>
