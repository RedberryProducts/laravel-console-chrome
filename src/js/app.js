import {createApp} from 'vue';
import Console from './Console.vue';
import lang from './lang.js';

window.lang = lang;

const app = createApp(Console);
app.mount('#app');
