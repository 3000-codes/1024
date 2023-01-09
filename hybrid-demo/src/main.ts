import { createApp, ref } from "vue";
import App from "./App.vue";
import "./assets/main.css";
globalThis.nums = ref(0);
globalThis.addNum = () => nums.value++;
const createMyApp = () => createApp(App, { nums: nums.value, addNum });
const app1 = createMyApp();
const app2 = createMyApp();
const app3 = createMyApp();

app1.mount("#app1");
app2.mount("#app2");
app3.mount("#app3");
