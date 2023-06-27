<template>
      <v-layout>
        <v-app-bar>
          <template v-slot:prepend>
            <router-link to="/"
              ><v-app-bar-nav-icon icon="mdi-home"></v-app-bar-nav-icon
            ></router-link>
            <router-link to="/"
              ><v-app-bar-title class="primary" color="primary"> snake</v-app-bar-title></router-link
            >
          </template>
          <v-spacer></v-spacer>
  
          <template v-slot:append>
            
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" icon="mdi-hamburger"> </v-btn>
                </template>
  
                <v-list>
                  <router-link to="/"
                    ><v-list-item-title>Home</v-list-item-title></router-link
                  >
                  <router-link to="/about"
                    ><v-list-item-title>About</v-list-item-title></router-link
                  >
                </v-list>
              </v-menu>
          </template>
        </v-app-bar>
      </v-layout>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  </script>