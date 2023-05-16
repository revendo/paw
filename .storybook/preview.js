import '../src/assets/tailwind.css';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /^(background|background-color|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Colors', 'Typography','Components'],
    }
  }
}

/* Dark mode */
export const globalTypes = {
  darkMode: true,
};

/* Decorators */
export const decorators = [(story) => ({
  components: { story },
  template: '<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-5 antialiased"><story /></div>'
})];

import { setup } from '@storybook/vue3';
import i18n from '../src/i18n'

setup((app) => {
    app.use(i18n);
});
