<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <div class="wrapper">
        <RouterLink
          class="text-white font-bold uppercase text-2xl mr-4"
          :to="{ name: 'home' }"
          >Users</RouterLink
        >
        <RouterLink class="px-2 text-white" :to="{ name: 'users' }"
          >Add User</RouterLink
        >
      </div>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppHeader",
});
</script>
