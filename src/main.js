import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import App from "./App.vue";

import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(createPinia());
app.use(PrimeVue, {ripple: true, inputStyle: 'filled'});

app.mount("#app");
