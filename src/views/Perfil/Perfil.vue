<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg2 pa-2>
      <v-img
        :src="`https://picsum.photos/500/300?image=${1 * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 pa-2>
      <v-card class="pa-2">
        <v-toolbar flat color="transparent">
          <v-toolbar-title>Silvio Filipe</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>edit</v-icon>
          </v-btn>
        </v-toolbar>

        <h2 class="font-weight-thin">Rua 501, Qd. 02, Lt. 11, Casa 1</h2>
        <h2 class="font-weight-thin">74.917-300</h2>
        <h2 class="font-weight-thin">Jardim Mont-Serrat</h2>
        <h2 class="font-weight-thin">Aparecida de Goiania</h2>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
