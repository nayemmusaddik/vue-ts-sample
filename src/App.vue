<template>
  <app-navbar />
  <router-view />
  <app-footer />
</template>

<script lang="ts">
import AppFooter from "./components/common/AppFooter.vue";
import AppNavbar from "./components/common/AppNavbar.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    AppFooter,
    AppNavbar,
  },
})
export default class App extends Vue {}
</script>
