import { createApp } from "vue";
import App from "./components/App.vue";
import "./global.css";

createApp(App).mount("#app");

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/service-worker.js")
//       .then((registration) => {
//         if (process.env.NODE_ENV === "development") {
//           console.log(
//             "Service Worker registered with scope:",
//             registration.scope
//           );
//         }
//       })
//       .catch((error) => {
//         if (process.env.NODE_ENV === "development") {
//           console.error("Service Worker registration failed:", error);
//         }
//       });
//   });
// }
