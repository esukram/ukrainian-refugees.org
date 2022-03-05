import * as Yup from "yup";
import i18n from "i18next";

const personSchema = Yup.object().shape({
  firstName: Yup.string().required("Register.Refugee.RefugeeSchema.first-name-required"),
  lastName: Yup.string().required("Register.Refugee.RefugeeSchema.last-name-required"),
  email: Yup.string().required("Register.Refugee.RefugeeSchema.email-required"),
  phone: Yup.string(),
  location: Yup.string(),
});

const refugeeSchema = Yup.object().shape({
  people: Yup.array().of(personSchema),
});

export default refugeeSchema;
