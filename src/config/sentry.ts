import * as Sentry from "@sentry/react";
Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [
  ],
  tunnel: "/tunnel",
});