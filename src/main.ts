import { createApp } from "vue";

import "./utils/styles/reset.scss";
import "./utils/styles/global.scss";

import App from "./App.vue";
import { start } from "./utils/helpers";

const app = createApp(App);

start(app);
