<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { ROUTE_NAMES } from "@/router/router_names";
import { useRouter } from "vue-router";

const router = useRouter();

const schema = yup.object({
  title: yup.string().required(),
  price: yup.number().required(),
  decription: yup.string().required(),
  category: yup.string().required(),
  image: yup.string().required(),
  ratingRate: yup.number().required(),
  ratingCount: yup.number().required(),
});

const { errors, meta, defineField } = useForm({
  validationSchema: schema,
});

const [title, titleAttrs] = defineField("title");
const [price, priceAttrs] = defineField("price");
const [decription, decriptionAttrs] = defineField("decription");
const [category, categoryAttrs] = defineField("category");
const [image, imageAttrs] = defineField("image");
const [ratingRate, ratingRateAttrs] = defineField("ratingRate");
const [ratingCount, ratingCountAttrs] = defineField("ratingCount");

function Submit() {
  setTimeout(() => router.push({ name: ROUTE_NAMES.HOME }), 1000);
}

function Cancel() {
  setTimeout(() => router.push({ name: ROUTE_NAMES.HOME }), 1000);
}
</script>

<template>
  <div class="p-2 m-1 font-bold bg-amber-300 text-center">
    Add new product page
  </div>
  <div class="mt-10">
    <div class="ml-12">
      <label>Title</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.title }"
        type="text"
        v-model="title"
        v-bind="titleAttrs"
      />
      <label>Price</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.price }"
        type="text"
        v-model="price"
        v-bind="priceAttrs"
      />
      <label>Decription</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.decription }"
        type="text"
        v-model="decription"
        v-bind="decriptionAttrs"
      />
      <label>Category</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.category }"
        type="text"
        v-model="category"
        v-bind="categoryAttrs"
      />
      <label>Image</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.image }"
        type="text"
        v-model="image"
        v-bind="imageAttrs"
      />
      <label>Rating: Rate</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.ratingRate }"
        type="text"
        v-model="ratingRate"
        v-bind="ratingRateAttrs"
      />
      <label>Rating Count</label>
      <input
        class="order-input"
        :class="{ 'order-input-error': errors.ratingCount }"
        type="text"
        v-model="ratingCount"
        v-bind="ratingCountAttrs"
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
