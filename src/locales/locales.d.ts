import { resources, defaultNS } from "./i18n";
import template from "./en.json"; //use EN localization file as template

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: { common: typeof template };
  }
}
