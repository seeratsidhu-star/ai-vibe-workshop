import { createRoot } from "react-dom/client";
import { defineCustomElements } from "@trimble-oss/moduswebcomponents/loader";
import { setAssetPath } from "@trimble-oss/moduswebcomponents/components";
import App from "./App.jsx";
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
import "./styles/global.css";
import "./styles/components.css";

setAssetPath(`${window.location.origin}${import.meta.env.BASE_URL}`);
defineCustomElements();

createRoot(document.getElementById("root")).render(<App />);
