import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { v4 as uuid } from "uuid";
import i18n from "i18next";

import PersonForm, { TPerson } from "../../components/register/PersonForm";
import refugeeSchema from "../../components/register/refugeeSchema";

const styles = {
  buttonSubmit:
    "inline-block mt-8 px-12 py-3.5 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  buttonAddPerson:
    "inline-block px-6 py-2.5 my-2 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out",
};

type TForm = {
  people: TPerson[];
};

export default function RegisterRefugee() {
  const [isLoading, setIsLoading] = React.useState(false);

  const addPerson = () => {
    return {
      id: uuid(),
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
    };
  };

  const onSubmit = React.useCallback(async (values: TForm) => {
    setIsLoading(true);
    console.log(values);

    const rawResponse = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const content = await rawResponse.json();

    console.log(content);
    setIsLoading(false);
  }, []);

  const initialValues: TForm = { people: [addPerson()] };
  return (
    <div className="container flex flex-col px-4 mt-6 sm:px-8 md:px-0">
      <div className="max-w-lg w-full mx-auto flex flex-col">
        <h1>{i18n.t("Register.Refugee.register-refugee")}</h1>
        <p>{i18n.t("Register.Refugee.register-description")}</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={refugeeSchema}
        onSubmit={onSubmit}
        render={({ values, errors, setFieldTouched }) => (
          <Form className="max-w-lg w-full mx-auto">
            <FieldArray
              name="people"
              render={arrayHelpers => (
                <div className="">
                  {values.people.map((person, index) => (
                    <PersonForm
                      key={person.id}
                      person={person}
                      index={index}
                      onRemove={() => arrayHelpers.remove(index)}
                    />
                  ))}

                  <div className="flex align-center justify-start">
                    <button
                      type="button"
                      className={styles.buttonAddPerson}
                      onClick={() => {
                        arrayHelpers.push(addPerson());
                      }}
                    >
                      {i18n.t("Register.Refugee.add-person")}
                    </button>
                  </div>
                </div>
              )}
            />

            <div className="flex align-center justify-center">
              <button type="submit" className={styles.buttonSubmit}>
                {i18n.t("Register.Refugee.register-cta")}
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
