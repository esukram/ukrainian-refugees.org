import * as Yup from "yup";

const personSchema = Yup.object().shape({
  firstName: Yup.string().required("Register.Refugee.RefugeeSchema.first-name-required"),
  lastName: Yup.string().required("Register.Refugee.RefugeeSchema.last-name-required"),
  email: Yup.string()
    .email("Register.Refugee.RefugeeSchema.email-valid")
    .required("Register.Refugee.RefugeeSchema.email-required"),
  phone: Yup.string(),
  location: Yup.string(),
});

const refugeeSchema = Yup.object().shape({
  people: Yup.array().of(personSchema),
});

export default refugeeSchema;
