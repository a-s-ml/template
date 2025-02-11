import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ErrorPage } from "./components/pages";

const App = lazy(() =>
  import("./App").then(({ App }) => ({
    default: App,
  }))
);

const tg = window.Telegram.WebApp;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {!tg || tg.platform === "tdesktop" || tg.platform === "web" ? (
      <Suspense>
        <App />
      </Suspense>
    ) : (
      <ErrorPage />
    )}
  </React.StrictMode>
);
