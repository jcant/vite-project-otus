<script setup>
import axios from "axios";
import { useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["cancel-order", "success-order"]);

const schema = yup.object({
  email: yup.string().required().email(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthday: yup.date().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  houseNumber: yup.number().required(),
  cardNumber: yup.number().required(),
  rulesConfirm: yup.string().required(),
});

const { values, errors, meta, defineField } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField("email");
const [firstName, firstNameAttrs] = defineField("firstName");
const [lastName, lastNameAttrs] = defineField("lastName");
const [birthday, birthdayAttrs] = defineField("birthday");
const [city, cityAttrs] = defineField("city");
const [street, streetAttrs] = defineField("street");
const [houseNumber, houseNumberAttrs] = defineField("houseNumber");
const [cardNumber, cardNumberAttrs] = defineField("cardNumber");
const [rulesConfirm, rulesConfirmAttrs] = defineField("rulesConfirm");

function trySubmit() {
  console.log("on try submit: ", meta.value.valid);
  if (meta.value.valid) {
    axios.post("https://httpbin.org/post", values).then(function (response) {
      console.log("response fron eho-server: ", response);
      emit("success-order");
    });
  }
}
</script>

<template>
  <label>Email</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.email }"
    type="text"
    v-model="email"
    v-bind="emailAttrs"
  />
  <label>First Name</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.firstName }"
    type="text"
    v-model="firstName"
    v-bind="firstNameAttrs"
  />
  <label>Last Name</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.lastName }"
    type="text"
    v-model="lastName"
    v-bind="lastNameAttrs"
  />
  <label>Birthday</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.birthday }"
    type="text"
    v-model="birthday"
    v-bind="birthdayAttrs"
  />
  <label>City</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.city }"
    type="text"
    v-model="city"
    v-bind="cityAttrs"
  />
  <label>Street</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.street }"
    type="text"
    v-model="street"
    v-bind="streetAttrs"
  />
  <label>House No</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.houseNumber }"
    type="text"
    v-model="houseNumber"
    v-bind="houseNumberAttrs"
  />
  <label>Card No</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.cardNumber }"
    type="text"
    v-model="cardNumber"
    v-bind="cardNumberAttrs"
  />
  <label>Rules Confirmation</label>
  <input
    class="order-input"
    :class="{ 'order-input-error': errors.rulesConfirm }"
    type="text"
    v-model="rulesConfirm"
    v-bind="rulesConfirmAttrs"
  />
  <button
    class="text-3xl bg-amber-200 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
    @click="$emit('cancel-order')"
  >
    CANCEL
  </button>
  <button
    class="text-3xl bg-amber-500 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
    @click="trySubmit"
  >
    SEND
  </button>
  <pre>values: {{ values }}</pre>
  <pre>errors: {{ errors }}</pre>
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
</style>
