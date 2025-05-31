<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { ROUTE_NAMES } from "@/router/router_names";
import { useUserStore } from "@/states/UserState";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required(),
});

const { errors, meta, defineField } = useForm({
  validationSchema: schema,
});

const [userName, userNameAttrs] = defineField("userName");
const [password, passwordAttrs] = defineField("password");

function Submit() {
  userStore.login(userName.value, password.value);
  setTimeout(() => router.push({ name: ROUTE_NAMES.HOME }), 1000);
}

function Cancel() {
  setTimeout(() => router.push({ name: ROUTE_NAMES.HOME }), 1000);
}
</script>

<template>
  <div class="p-2 m-1 font-bold bg-amber-300 text-center">Auth page</div>
  <div class="mt-10">
    <div class="ml-12">
      <label>Username</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.userName }"
        type="text"
        v-model="userName"
        v-bind="userNameAttrs"
      />
      <label>Password</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.password }"
        type="password"
        v-model="password"
        v-bind="passwordAttrs"
      />

      <button
        class="text-3xl bg-amber-200 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
        @click="Cancel"
      >
        CANCEL
      </button>

      <button
        class="text-3xl bg-amber-500 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
        @click="Submit"
        :disabled="!meta.valid"
        :class="{ 'button-disabled': !meta.valid }"
      >
        OK
      </button>
    </div>
  </div>
</template>

<style scoped>
.order-input {
  display: block;
  margin: 2pt;
  padding: 1pt;
  padding-left: 6pt;
  padding-right: 6pt;
  border: 1px solid rgb(200, 100, 50);
  border-radius: 6px;
}
.order-input-error {
  border: 1px solid red;
  background: rgb(255, 220, 203);
}
.button-disabled {
  background: rgb(200, 200, 200);
}
</style>
