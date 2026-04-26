<template>
  <div>
    <router-link
      to="/users"
      class="inline-flex p-2 m-5 text-white bg-purple-900 rounded-lg hover:bg-purple-950 cursor-pointer"
    >
      <svg
        class="rotate-180 w-3.5 h-3.5"
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

    <div
      class="flex flex-col items-center rounded-lg shadow-sm md:flex-row md:max-w-xl bg-white/2 border border-white/5 mx-auto mt-5"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        :src="user.image"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 mb-3 text-gray-300">
        <h5 class="mb-2 text-2xl font-bold">
          {{ user.firstName }} {{ user.lastName }}
        </h5>
        <p class="mb-3">id : {{ user.id }}</p>
        <p class="mb-3">Gender : {{ user.gender }}</p>
        <p class="mb-3">Email : {{ user.email }}</p>
        <p class="mb-3">Phone : {{ user.phone }}</p>
        <p class="mb-3">Age : {{ user.age }}</p>
        <p class="mb-3">Blood Groub : {{ user.bloodGroup }}</p>
        <p class="mb-3">Height : {{ user.height }}</p>
        <p class="mb-3">Weight : {{ user.weight }}</p>
        <p class="mb-3">Hair Color : {{ user.hair.color }}</p>
        <p class="mb-3">Hair Type : {{ user.hair.type }}</p>

        <div class="flex gap-2">
          <router-link
            :to="`editUser/${user.id}`"
            class="inline-flex flex-1 justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900 cursor-pointer"
          >
            Edit User
          </router-link>
          <button
            @click="deleteUser(user.id)"
            class="inline-flex flex-1 justify-center items-center px-3 py-2 text-sm font-medium text-center bg-red-700 text-white hover:bg-red-900 rounded-lg cursor-pointer"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { delUser, getUserByID } from "../services/userServices";

export default {
  name: "userDetails",
  data() {
    return {
      userId: "",
      user: {},
    };
  },
  methods: {
    async deleteUser(id) {
      try {
        await delUser(id);
        this.$router.push("/users");
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    this.userId = this.$route.params.id;
    try {
      const res = await getUserByID(this.userId);
      this.user = res.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped></style>
