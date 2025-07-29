import * as Sentry from "@sentry/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { globalStyles } from "./styles/global";
import "./config/sentry";

globalStyles();

ReactDOM.createRoot(document.getElementById("root")!, {
  onUncaughtError: Sentry.reactErrorHandler(),
  onCaughtError: Sentry.reactErrorHandler(),
  onRecoverableError: Sentry.reactErrorHandler(),
}).render(
  <Sentry.ErrorBoundary fallback={<p>Algo deu errado.</p>}>
    <App />
  </Sentry.ErrorBoundary>
);
