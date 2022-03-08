import * as Yup from "yup";

const providerSchema = Yup.object().shape({
  firstName: Yup.string().required("Register.Provider.ProviderSchema.first-name-required"),
  lastName: Yup.string().required("Register.Provider.ProviderSchema.last-name-required"),
  email: Yup.string()
    .email("Register.Provider.ProviderSchema.email-valid")
    .required("Register.Provider.ProviderSchema.email-required"),
  phone: Yup.string(),
  address: Yup.string(),
  capacity: Yup.number().positive().integer(),
});

export default providerSchema;
