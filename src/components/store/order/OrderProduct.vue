<script setup>
import { onMounted, ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { ROUTE_NAMES } from "@/router/router_names";

const props = defineProps(["id"]);

const schema = yup.object({
  productField: yup.number(),
  email: yup.string().required().email(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthday: yup.date().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  houseNumber: yup.number().positive().required(),
  cardNumber: yup.number().positive().required(),
  rulesConfirm: yup
    .boolean()
    .required()
    .oneOf([true], "Accept rules is required"),
});

onMounted(() => {
  productField.value = props.id;
});

const { values, fields, errors, meta, defineField } = useForm({
  validationSchema: schema,
});

const [productField, productFieldAttrs] = defineField("productField");
const [email, emailAttrs] = defineField("email");
const [firstName, firstNameAttrs] = defineField("firstName");
const [lastName, lastNameAttrs] = defineField("lastName");
const [birthday, birthdayAttrs] = defineField("birthday");
const [city, cityAttrs] = defineField("city");
const [street, streetAttrs] = defineField("street");
const [houseNumber, houseNumberAttrs] = defineField("houseNumber");
const [cardNumber, cardNumberAttrs] = defineField("cardNumber");
const [rulesConfirm, rulesConfirmAttrs] = defineField("rulesConfirm");
</script>

<template>
  <div class="grid grid-cols-2 items-center">
    <div class="ml-12">
      <input
        style="display: none"
        type="text"
        v-model="productField"
        v-bind="productFieldAttrs"
        value="100"
      />
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
        type="date"
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
        type="tel"
        inputmode="numeric"
        pattern="[0-9\s]{13,19}"
        autocomplete="cc-number"
        maxlength="19"
        placeholder="xxxx xxxx xxxx xxxx"
        required
        v-model="cardNumber"
        v-bind="cardNumberAttrs"
      />
      <label>Rules Confirmation</label>
      <input
        class="order-input size-4"
        :class="{ 'order-input-error': errors.rulesConfirm }"
        type="checkbox"
        v-model="rulesConfirm"
        v-bind="rulesConfirmAttrs"
      />
      <router-link :to="{ name: ROUTE_NAMES.CHECKOUT_CANCEL }">
        <button
          class="text-3xl bg-amber-200 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
        >
          CANCEL
        </button>
      </router-link>
      <router-link :to="{ name: ROUTE_NAMES.CHECKOUT_SUCCESS }">
        <button
          class="text-3xl bg-amber-500 pl-3 pr-3 p-1 m-2 rounded-md border-1 border-amber-700 cursor-pointer"
          :disabled="!meta.valid"
          :class="{ 'button-disabled': !meta.valid }"
        >
          CONFIRM ORDER
        </button>
      </router-link>
    </div>
    <div>
      <router-view />
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
