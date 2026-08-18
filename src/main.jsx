import { createRoot } from "react-dom/client";
import { defineCustomElements } from "@trimble-oss/moduswebcomponents/loader";
import App from "./App.jsx";
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
import "./styles/global.css";
import "./styles/gaussian-splatting.css";

defineCustomElements();

createRoot(document.getElementById("root")).render(<App />);
