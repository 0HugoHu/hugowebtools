import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import { registerSW } from 'virtual:pwa-register';
import shadow from 'vue-shadow-dom';

import 'virtual:uno.css';

import type { AwsRumConfig } from 'aws-rum-web';
import { AwsRum } from 'aws-rum-web';
import { naive } from './plugins/naive.plugin';
import App from './App.vue';
import router from './router';
import { i18nPlugin } from './plugins/i18n.plugin';

registerSW();

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    identityPoolId: 'us-west-2:7a364c5a-a823-4dc5-b679-7b30d71c2022',
    endpoint: 'https://dataplane.rum.us-west-2.amazonaws.com',
    telemetries: ['performance', 'errors', 'http'],
    allowCookies: true,
    enableXRay: false,
    signing: true,
  };

  const APPLICATION_ID = '721a699f-67c2-4dab-8ef5-bcca1c51d1dd';
  const APPLICATION_VERSION = '1.0.0';
  const APPLICATION_REGION = 'us-west-2';

  // eslint-disable-next-line no-new
  new AwsRum(APPLICATION_ID, APPLICATION_VERSION, APPLICATION_REGION, config);
}
catch (error) {
  console.warn('AWS RUM init failed:', error);
}

const app = createApp(App);

app.use(createPinia());
app.use(createHead());
app.use(i18nPlugin);
app.use(router);
app.use(naive);
app.use(shadow);

app.mount('#app');
