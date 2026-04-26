<template>
  <div>
    <form class="max-w-md mx-auto mt-5">
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="search"
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm border rounded-lg bg-white/5 border-white/10 placeholder-gray-400 text-white"
          placeholder="Search By First Name"
          required
        />
      </div>
    </form>

    <div v-if="filteredUsers.length === 0">
      <p class="text-white text-lx text-center mt-32">
        {{
          search
            ? "no users matches your search ${search}"
            : "I deleted users from database"
        }}
      </p>
    </div>
    <div
      v-else
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center m-10"
    >
      <div
        v-for="user in filteredUsers"
        :key="user.id"
        class="max-w-sm min-w-0 border bg-white/4 border-white/12 rounded-lg shadow-sm"
      >
        <img :src="user.image" alt="" />

        <div class="p-5 min-w-0">
          <h5 class="mb-2 text-2xl font-bold text-white">
            {{ user.firstName }} {{ user.lastName }}
          </h5>
          <p class="mb-3 text-gray-300">ID : {{ user.id }}</p>
          <p class="mb-3 text-gray-300 break-words">Email : {{ user.email }}</p>
          <p class="mb-3 text-gray-300">Gender : {{ user.gender }}</p>
          <div class="flex flex-wrap gap-2">
            <router-link
              :to="`/users/${user.id}`"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-900 rounded-lg hover:bg-purple-950 cursor-pointer"
            >
              View User
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </router-link>
            <button
              @click="deleteUser(user.id)"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-red-700 text-white hover:bg-red-900 rounded-lg cursor-pointer"
            >
              Delete User
            </button>
            <router-link
              :to="`users/editUser/${user.id}`"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900 cursor-pointer"
            >
              Edit User
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { delUser, getAllUsers } from "../services/userServices";

export default {
  name: "users",
  data() {
    return {
      users: [],
      search: "",
    };
  },
  methods: {
    async deleteUser(id) {
      try {
        await delUser(id);
        this.users = this.users.filter((u) => u.id !== id);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    filteredUsers() {
      return this.users.filter((u) =>
        u.firstName.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  async created() {
    try {
      const result = await getAllUsers();
      this.users = result.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped></style>
