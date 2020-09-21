import Vue, { createApp } from 'vue';
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from '@sentry/tracing';
import App from './App.vue';

Sentry.init({
  dsn: "http://641b545085f24809a3e2ca6a0c65b14e@localhost:9000/3",
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
    }),
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1,
  release: 'pro@1.0.1',
});

createApp(App).mount('#app');
