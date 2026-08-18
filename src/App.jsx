import { ModusWcThemeProvider } from "@trimble-oss/moduswebcomponents-react";
import GaussianSplatting from "./components/GaussianSplatting";

export default function App() {
  return (
    <ModusWcThemeProvider>
      <GaussianSplatting />
    </ModusWcThemeProvider>
  );
}
