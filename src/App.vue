<template>
  <Menu />
  <router-view />
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  components: { Menu },
};
</script>

<style>
/* เปลี่ยนฟอนต์ทั้งหมดในโปรเจกต์ */
* {
  font-family: 'SukhumvitSet', SukhumvitSet; /* ฟอนต์ที่ต้องการ */
}
</style>
