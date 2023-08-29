import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  const vuetify = createVuetify({
    // your config will come here
    ssr: true,
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
