<template>
  <form class="w-3/4 mx-auto mt-6" @submit.prevent="handleEdit">
    <div class="border-b border-gray-900/10 pb-12 dark:border-white/10">
      <h2 class="font-semibold text-2xl text-center text-white">Edit User</h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium text-white"
            >First Name</label
          >
          <div class="mt-2">
            <input
              id="first-name"
              type="text"
              name="first-name"
              v-model="user.firstName"
              placeholder="First Name"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium text-white"
            >Last Name</label
          >
          <div class="mt-2">
            <input
              id="last-name"
              type="text"
              name="last-name"
              v-model="user.lastName"
              placeholder="Last Name"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-medium text-white"
            >Email Address</label
          >
          <div class="mt-2">
            <input
              id="email"
              type="text"
              name="email"
              v-model="user.email"
              placeholder="Email"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="phone" class="block text-sm font-medium text-white"
            >Phone Number</label
          >
          <div class="mt-2">
            <input
              id="phone"
              type="text"
              name="phone"
              v-model="user.phone"
              placeholder="phone Number"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="gender" class="block text-sm font-medium text-white"
            >Gender</label
          >
          <div class="mt-2 grid grid-cols-1">
            <select
              id="gender"
              name="gender"
              v-model="user.gender"
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-indigo-500"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
            >
              <path
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="age" class="block text-sm font-medium text-white"
            >Age</label
          >
          <div class="mt-2">
            <input
              id="age"
              type="number"
              name="age"
              v-model="user.age"
              placeholder="Age"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="col-span-full">
          <label for="image" class="block text-sm font-medium text-white"
            >Photo Profile</label
          >
          <div class="mt-2">
            <input
              id="image"
              type="text"
              name="image"
              v-model="user.image"
              placeholder="Enter your photo as link"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="weight" class="block text-sm font-medium text-white"
            >Your Weight</label
          >
          <div class="mt-2">
            <input
              id="weight"
              type="number"
              step="any"
              name="weight"
              v-model="user.weight"
              placeholder="Enter your weight"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="height" class="block text-sm font-medium text-white"
            >Your Height</label
          >
          <div class="mt-2">
            <input
              id="height"
              type="number"
              step="any"
              name="height"
              v-model="user.height"
              placeholder="Enter your height"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="blood" class="block text-sm font-medium text-white"
            >Blood Groub</label
          >
          <div class="mt-2">
            <input
              id="blood"
              type="text"
              name="blood"
              v-model="user.bloodGroup"
              placeholder="Enter your blood groub"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="hairColor" class="block text-sm font-medium text-white"
            >Hair Color</label
          >
          <div class="mt-2">
            <input
              id="hairColor"
              type="text"
              name="hairColor"
              v-model="user.hair.color"
              placeholder="Enter your hair color"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="hairType" class="block text-sm font-medium text-white"
            >Hair Type</label
          >
          <div class="mt-2">
            <input
              id="hairType"
              type="text"
              name="hairType"
              v-model="user.hair.type"
              placeholder="Enter your hair type"
              class="block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 focus:-outline-offset-2 sm:text-sm/6 bg-white/5 text-white outline-white/10 placeholder:text-gray-400 focus:outline-purple-900"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        class="rounded-md px-24 mb-8 py-2 text-sm font-semibold text-white shadow-xs hover:bg-purple-950 bg-purple-900"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
import { addUser, editUser, getUserByID } from "../services/userServices";

export default {
  name: "editUser",
  data() {
    return {
      userId: "",
      user: {},
    };
  },
  async created() {
    this.userId = this.$route.params.id;
    try {
      const value = await getUserByID(this.userId);
      this.user = value.data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async handleEdit() {
      try {
        await editUser(this.userId, this.user);
        this.$router.push("/users");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
