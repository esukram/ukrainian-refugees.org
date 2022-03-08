import { Form, Formik } from "formik";
import i18n from "i18next";
import React from "react";
import ProviderContactForm, { TContact } from "../../components/register/ProviderContactForm";
import providerSchema from "../../components/register/providerSchema";

const styles = {
  buttonSubmit:
    "inline-block mt-8 px-12 py-3.5 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  buttonAddPerson:
    "inline-block px-6 py-2.5 my-2 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out",
};

const DEFAULTS: TContact = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  capacity: 1,
};

export default function RegisterHousing() {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = React.useCallback(async (value: TContact) => {
    setIsLoading(true);
    console.log(value);

    const rawResponse = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const content = await rawResponse.json();

    console.log(content);
    setIsLoading(false);
  }, []);

  return (
    <div className="container flex flex-col px-4 mt-6 sm:px-8 md:px-0">
      <div className="max-w-lg w-full mx-auto flex flex-col">
        <h1>{i18n.t("Register.Provider.register-provider")}</h1>
        <p>{i18n.t("Register.Provider.register-description")}</p>
      </div>

      <Formik initialValues={DEFAULTS} validationSchema={providerSchema} onSubmit={onSubmit}>
        {({ values: contact }) => (
          <>
            <Form className="max-w-lg w-full mx-auto">
              <ProviderContactForm contact={contact} />
            </Form>

            <div className="flex align-center justify-center">
              <button type="submit" className={styles.buttonSubmit}>
                {i18n.t("Register.Provider.register-cta")}
              </button>
            </div>
          </>
        )}
        {/*
         */}
      </Formik>
    </div>
  );
}
