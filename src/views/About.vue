<template>
  <!-- <HeaderTop msg="Welcome to Your Vue.js App"/> -->
  <h1>This is an about page{{teste}}</h1>
  
</template>

<script>

export default {
  name: "App",
  components: {
  },
 data() {
   return {
      teste: this.$route.path
     };
  },
};
</script>