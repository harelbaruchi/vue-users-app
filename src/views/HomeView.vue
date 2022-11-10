<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/interfaces/users';



/**
 * Users
 * 
 * 
 * first name - string 
 * last name - string 
 * email- string
 * avatar image- string 
 */

const users= ref<User[]>([])
const newUser= ref<User>({})
function addUser(){
  users.value.push({firstName:newUser.value.firstName,
lastName:'',
email: '',
avatar:''})
}
</script>

<template>
  <main>
    <pre>
      {{newUser}}
    </pre>
    <form @submit.prevent="addUser">
      <div>
        <label for="user-firstName">User First Name</label>
      <input id="user-firstName" v-model="newUser.firstName" type="text">
      
      </div>
      <div>
        <label for="user-lastName">User Last Name</label>
      <input id="user-lastName" v-model="newUser.lastName" type="text">
      
      </div>
      <div>
        <label for="user-email">User Email</label>
      <input id="user-email" v-model="newUser.email" type="text">
      
      </div>
      <button type="submit">Add User</button>
    </form>

    <ul>
      <li v-for="user in users"
      :key="user.firstName">
      {{user.firstName}}
      </li>
    </ul>
  </main>
</template>
