import { createApp, ref } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { createPinia } from "pinia";
const myId = ref(10086);
const princreament = () => {
  myId.value++;
};
App.provide = {
  myId,
  princreament,
};
const createMyApp = (appName: string) =>
  createApp(App, { appName }).use(createPinia());
const app1 = createMyApp("app1");
const app2 = createMyApp("app2");
const app3 = createMyApp("app3");

app1.mount("#app1");
app2.mount("#app2");
app3.mount("#app3");
