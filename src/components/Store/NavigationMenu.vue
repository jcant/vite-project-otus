<script setup>
import {appRoutes} from '../../router';

</script>

<template>
    <router-link v-for="appRoute in appRoutes" :key="appRoute.name" :to="appRoute.path">{{ appRoute.name }}</router-link>
</template>

<style scoped>

</style>