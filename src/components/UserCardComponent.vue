<script setup lang="ts">
const props = defineProps({
  name: String,
  email: String,
  isSelected: Boolean
})
</script>

<template>
  <div class="usercard" :class="{ usercard_selected: isSelected }">
    <img src="src\assets\image_thumbnail.png" class="usercard__avatar" />
    <div class="usercard__textblock">
      <div class="usercard__text usercard__text_name">{{ props.name }}</div>
      <div class="usercard__text usercard__text_email">{{ props.email }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'src/assets/const.scss';

.usercard {
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  cursor: pointer;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  height: 70px;
  margin: 18px 0 18px 0;
  &:hover {
    background-color: #e0e0e0;
    border: 1px solid #e0e0e0;
  }
}

.usercard_selected {
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;
}

.usercard__avatar {
  width: 70px;
  object-fit: contain;
  border-right: 1px solid #e0e0e0;
  box-sizing: border-box;
  background-color: #fff;
}
.usercard__textblock {
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.usercard__text {
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
}

.usercard__text_name {
  font-weight: 600;
  color: $themeBlack;
}

.usercard__text_email {
  font-weight: 400;
  color: $themeGrey;
}
</style>
