<template>
  <v-app id="inspire">
    <component :is="layout">
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
    </component>
  </v-app>
</template>

<script>
const Layout = "login";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || Layout}-layout`;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

