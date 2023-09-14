<script setup lang="ts">
import { type IState } from '@/store'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore<IState>()
const searchString = ref('')

const requestFilteredUsers = () => {
  const preparedData = searchString.value
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter((value) => value.length > 0)
  store.dispatch('searchUsers', preparedData)
}
</script>

<template>
  <form @submit.prevent="requestFilteredUsers">
    <input type="text" class="searchField__input" v-model="searchString" />
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
