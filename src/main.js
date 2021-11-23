import { createApp } from 'vue'
import App from './App.vue'
import Pagination from './components/Pagination.vue'
import PageModal from './components/PageModal.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);
app.component('Pagination', Pagination);
app.component('PageModal', PageModal);
app.mount('#app');
