
<script setup lang="ts">
import axios from "../plugins/axios"
import type {AxiosInstance} from "axios";

declare module '@vue/runtime-core' {

  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}



async fetchUsers(){
  const Users= await $axios.get('/users')
}
</script>
<template>
  <div class="about">
    <h1>Manage users</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
