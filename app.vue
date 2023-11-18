<template>
  <div>
    <div class="tw-flex tw-justify-center tw-items-center">
      <v-icon size="30" class="mr-2">mdi-github</v-icon>
      <h1 class="tw-text-slate-400 tw-text-center tw-my-4 tw-text-3xl">Joshua Fransix</h1>
    </div>
    <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
      <template v-slot:title>
        Hello from Vuetify!
      </template>
      <v-card-text>
        When you see this inside a card, it worked!
      </v-card-text>
    </v-card>
    <NuxtWelcome />
  </div>
</template>
