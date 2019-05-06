<template>
  <div>
    <v-toolbar color="blue-grey" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-badge overlap color="orange">
          <template v-slot:badge>
            <v-icon dark small>notifications</v-icon>
          </template>
          <v-icon large color="white">account_box</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-img
        class="sidebar-img-user"
        v-on:click="$router.push('perfil')"
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      >
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <router-link to="/perfil" style="text-decoration: none;"></router-link>
          <v-list-tile :key="item.title" avatar>
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn flat icon color="white">
                <v-icon>chevron_right</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-layout>
      </v-img>
      <v-list>
        <router-link to="/dashboard" style="text-decoration: none">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile v-for="subItem in item.items" :key="subItem.title">
            <router-link :to="subItem.link" style="text-decoration: none">
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon>{{ subItem.action }}</v-icon>
                  &nbsp;&nbsp;&nbsp;
                  {{ subItem.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </router-link>

            <v-list-tile-action></v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="left" temporary fixed></v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    item: {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Silvio Filipe",
      subtitle:
        "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
    },
    items: [
      {
        action: "event",
        title: "Agenda",
        active: false,
        items: [{ title: "Visualizar", link: "/events", action: "event" }]
      },
      {
        action: "school",
        title: "Education",
        items: [{ title: "List Item" }]
      },
      {
        action: "directions_run",
        title: "Family",
        items: [{ title: "List Item" }]
      },
      {
        action: "healing",
        title: "Health",
        items: [{ title: "List Item" }]
      },
      {
        action: "content_cut",
        title: "Office",
        items: [{ title: "List Item" }]
      },
      {
        action: "local_offer",
        title: "Promotions",
        items: [{ title: "List Item" }]
      }
    ]
  }),
  props: {
    source: String
  }
};
</script>

<style scoped>
@import "./styles.css";
</style>
