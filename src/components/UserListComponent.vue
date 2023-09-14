<script setup lang="ts">
import { useStore } from 'vuex'
import UserCardComponent from './UserCardComponent.vue'
import { computed } from 'vue'
import { type IState } from '@/store'

const store = useStore<IState>()
const filteredUsers = computed(() => store.state.filteredUsers)
</script>

<template>
  <div>
    <UserCardComponent
      v-for="user in filteredUsers"
      :key="user.id"
      :name="user.name"
      :email="user.email"
    />
  </div>
</template>

<style scoped lang="css"></style>
