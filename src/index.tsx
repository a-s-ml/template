import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Empty } from "./components/pages";

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
    {tg.platform !== "tdesktop" ? (
      <Suspense>
        <App />
      </Suspense>
    ) : (
      <Empty />
    )}
  </React.StrictMode>
);
