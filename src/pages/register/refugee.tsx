import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { v4 as uuid } from "uuid";
import PersonForm from "../../components/register/PersonForm";
import refugeeSchema from "../../components/register/refugeeSchema";

const styles = {
  buttonSubmit:
    "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  buttonAddPerson:
    "inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out",
};

export default function RegisterRefugee() {
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

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1>Register as refugee</h1>
        <p>Register yourself and your companions</p>
      </div>

      <Formik
        initialValues={{ people: [addPerson()] }}
        validationSchema={refugeeSchema}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="people"
              render={arrayHelpers => (
                <div className="">
                  {values.people.map((person, index) => (
                    <PersonForm
                      key={person.id}
                      index={index}
                      onRemove={() => arrayHelpers.remove(index)}
                    />
                  ))}

                  <button
                    type="button"
                    className={styles.buttonAddPerson}
                    onClick={() => arrayHelpers.push(addPerson())}
                  >
                    Add person
                  </button>
                </div>
              )}
            />

            <button type="submit" className={styles.buttonSubmit}>
              Register
            </button>
          </Form>
        )}
      />
    </div>
  );
}
