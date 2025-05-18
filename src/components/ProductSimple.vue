<template>
  <div class="product-simple">
    {{ title }}
  </div>
</template>

<script setup>
// import { computed } from "vue";

const props = defineProps({ title: String });

// const cuttedTitle = computed(() => {
//   return props.title.length > 20
//     ? props.title.substring(0, 17) + "..."
//     : props.title;
// });
</script>

<style scoped>
.product-simple {
  padding: 1px;
  margin: 4px;
  border: 1px solid rgb(191, 150, 0);
  border-radius: 4px;
  background: rgb(240, 214, 141);
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap; /* Don't forget this one */
  text-overflow: ellipsis;
}

.product-simple:hover {
  background: rgb(242, 198, 76);
}
</style>
