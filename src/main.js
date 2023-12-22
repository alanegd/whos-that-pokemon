import { createApp } from 'vue'
import App from './App.vue'
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";
// App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// Add PrimeFlex
import 'primeflex/primeflex.css';
// Add Components
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';

//Router
import router from "@/router";


createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-input-text', InputText)
    .use(router)
    .mount('#app')
