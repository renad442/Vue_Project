<template>
  <div
    class="flex flex-col items-center rounded-lg shadow-sm md:flex-row md:max-w-xl bg-white/2 border border-white/5 mx-auto mt-24"
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
    </div>
  </div>
</template>

<script>
import { getUserByID } from "../services/userServices";

export default {
  name: "userDetails",
  data() {
    return {
      userId: "",
      user: {},
    };
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
