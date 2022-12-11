<script lang="ts">
import { defineComponent, ref } from "vue";
import type { AxiosInstance } from "axios";
import type { User } from "@/interfaces/users";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $baseUrl: "https://randomuser.me/api/?results=10";
  }
}

export default defineComponent({
  name: "home",
  data() {
    return {
      usersList: [] as User[],
    };
  },
  methods: {
    async getUsers() {
      await this.$axios.get(this.$baseUrl).then((response: any) => {
        this.usersList = response.data.results;
      });
      console.log(this.usersList[0].picture.medium);
    },
  },

  async mounted() {
    await this.getUsers();
  },
});

/**
 * Users
 *
 *
 * first name - string
 * last name - string
 * email- string
 * avatar image- string
 */
</script>

<template>
  <main>
    <section class="container mx-auto">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div class="fa fa-headphones-alt float-right text-green-400 text-xl">
          <ol id="users">
            <li
              class="flex justify-between border-b items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
              v-for="user in usersList"
            >
              <div>
                <span class="font-bold block text-gray-600">
                  Name: {{ user.name?.first }} {{ user.name?.last }}
                </span>
                <span class="text-gray-500 text-sm">
                  Email: {{ user.email }}
                </span>
                <span class="text-gray-500 text-sm float-left">
                  <img
                    class="w-24 h-24 rounded-full mx-auto"
                    :src="user.picture.medium"
                  />
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </main>
</template>
