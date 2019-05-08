<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg2 pa-2>
      <v-img
        id="pick-avatar"
        :src="user.photo"
        :lazy-src="user.photo"
        aspect-ratio="1"
        class="grey lighten-2"
        style="cursor: pointer"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>

      <avatar-cropper @uploadHandler="uploadHandler" trigger="#pick-avatar"/>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 pa-2>
      <v-card class="pa-2" style="height: 243px;">
        <v-toolbar flat color="transparent">
          <v-toolbar-title></v-toolbar-title>
          <h1 font-weight-regular>Silvio Filipe Dionizio Junior</h1>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = true">
            <v-icon>edit</v-icon>
          </v-btn>
        </v-toolbar>
        <h2 class="font-weight-thin">silvio.dionizio23@gmail.com</h2>
        <h2 class="font-weight-thin">Rua 501, Qd. 02, Lt. 11, Casa 1</h2>
        <h2 class="font-weight-thin">74.917-300</h2>
        <h2 class="font-weight-thin">Jardim Mont-Serrat</h2>
        <h2 class="font-weight-thin">Aparecida de Goiania</h2>
      </v-card>
    </v-flex>
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Editar Usuário</v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    v-model="user.name"
                    :rules="nameRules"
                    :counter="50"
                    label="Nome"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12>
                  <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs6>
                  <v-text-field
                    v-model="user.cep"
                    :rules="cepRules"
                    :counter="8"
                    label="Cep"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-btn
                    round
                    block
                    color="primary"
                    :disabled="!user.cep || user.cep.length < 8"
                    @click="getCep"
                  >Buscar</v-btn>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    v-model="user.logradouro"
                    :rules="nameRules"
                    label="Logradouro"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 lg6>
                  <v-text-field
                    v-model="user.complemento"
                    :counter="50"
                    label="Complemento"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 lg6>
                  <v-text-field v-model="user.bairro" :rules="bairroRules" label="Bairro" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 lg6>
                  <v-text-field
                    v-model="user.localidade"
                    :rules="cidadeRules"
                    label="Cidade"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 lg6>
                  <v-text-field v-model="user.uf" :counter="2" :rules="ufRules" label="UF" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" flat @click="dialog = false">Cancelar</v-btn>
          <v-btn color="primary" @click="submit">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
const axios = require("axios");

import AvatarCropper from "../../components/AvatarCropper/AvatarCropper.vue";

export default {
  data() {
    return {
      user: {
        name: null,
        photo: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        email: null,
        phone: null,
        cep: null,
        logradouro: null,
        complemento: null,
        bairro: null,
        localidade: null,
        uf: null
      },
      dialog: false,
      valid: false,
      nameRules: [
        v => !!v || "Nome é obrigatório"
        // v => v.length <= 40 || "O nome deve conter menos de 50 caracteres"
      ],
      cepRules: [v => !!v || "Cep é obrigatório"],
      logradouroRules: [v => !!v || "Logradouro é obrigatório"],
      bairroRules: [v => !!v || "Bairro é obrigatório"],
      cidadeRules: [v => !!v || "Cidade é obrigatório"],
      ufRules: [v => !!v || "UF é obrigatório"],
      email: "",
      emailRules: [
        v => !!v || "E-mail é obrigatório",
        v => /.+@.+/.test(v) || "E-mail inválido"
      ]
    };
  },
  components: {
    AvatarCropper
  },
  methods: {
    uploadHandler(imageDataUri) {
      const self = this;
      self.user.photo = imageDataUri;
    },
    submit() {},
    getCep() {
      const self = this;
      axios
        .get("https://viacep.com.br/ws/" + self.user.cep + "/json/")
        .then(function(response) {
          if (response.data.erro) {
            self.$toast.info("Cep não encontrado!", {
              dismissable: true,
              queueable: false,
              timeout: 5000,
              icon: "info"
            });
          } else {
            self.user.logradouro = response.data.logradouro;
            self.user.complemento = response.data.complemento;
            self.user.bairro = response.data.bairro;
            self.user.localidade = response.data.localidade;
            self.user.uf = response.data.uf;
          }
        })
        .catch(function() {
          self.$toast.error("Erro na conexão", {
            dismissable: true,
            queueable: false,
            timeout: 5000,
            icon: "info"
          });
        });
    }
    // saveUser() {
    //   const self = this;
    // },
    // getUser() {
    //   const self = this;
    // },
    // changePhoto() {
    //   const self = this;
    // }
  }
};
</script>
