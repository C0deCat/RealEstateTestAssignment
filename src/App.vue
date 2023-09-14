<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import ContentComponent from './components/ContentComponent.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
onMounted(() => {
  store.dispatch('fetchUsers')
})
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <ContentComponent></ContentComponent>
</template>

<style scoped></style>
