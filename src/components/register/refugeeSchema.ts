import * as Yup from "yup";

const personSchema = Yup.object().shape({
  name: Yup.string().required("name required"),
  age: Yup.number().required("age required").typeError("age must be a number"),
});

const refugeeSchema = Yup.object().shape({
  friends: Yup.array().of(personSchema),
});

export default refugeeSchema;
