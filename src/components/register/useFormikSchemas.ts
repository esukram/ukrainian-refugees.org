import { useTranslation } from "react-i18next";
import * as Yup from "yup";

// schemas wrapped in hook to ensure localization typesafety
export const useFormikSchemas = () => {
  const { t } = useTranslation();

  return {
    refugeeSchema: Yup.object().shape({
      people: Yup.array().of(
        Yup.object().shape({
          firstName: Yup.string().required(t("Register.Refugee.RefugeeSchema.first-name-required")),
          lastName: Yup.string().required(t("Register.Refugee.RefugeeSchema.last-name-required")),
          email: Yup.string()
            .email(t("Register.Refugee.RefugeeSchema.email-valid"))
            .required(t("Register.Refugee.RefugeeSchema.email-required")),
          phone: Yup.string(),
          location: Yup.string(),
        })
      ),
    }),

    providerSchema: Yup.object().shape({
      firstName: Yup.string().required(t("Register.Provider.ProviderSchema.first-name-required")),
      lastName: Yup.string().required(t("Register.Provider.ProviderSchema.last-name-required")),
      email: Yup.string()
        .email(t("Register.Provider.ProviderSchema.email-valid"))
        .required(t("Register.Provider.ProviderSchema.email-required")),
      phone: Yup.string(),
      address: Yup.string(),
      capacity: Yup.number().positive().integer(),
    }),
  };
};
