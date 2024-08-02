/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import 'vuetify-sonner/style.css'
import 'vue3-toastify/dist/index.css';

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from "vuetify/blueprints";
import DayJsAdapter from '@date-io/dayjs'
import enUS from 'date-fns/locale/en-US'
import { th } from 'date-fns/locale'
import { myCustomLightTheme } from '@/themes/theme'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },

  date: {
    adapter: DayJsAdapter,
    locale: {
      en: enUS,
      th: th
    },
  },
})
