import { createApp } from 'vue';
import VueClipboard from 'vue-clipboard2';
import i18n from './i18n'
import App from './App.vue';
import './assets/tailwind.css';

const app = createApp(App);

app .use(VueClipboard)
    .use(i18n)
    .mount('#app');
