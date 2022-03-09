import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const styles = {
  group: "grid",
  label: "block text-gray-700 text-sm font-bold pt-2",
  field:
    "text-black placeholder-gray-600 w-full px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
  errorMsg: "text-red-500 text-sm",
  buttonRemove:
    "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out",
  unit: "text-gray-700 font-bold",
};

export type TContact = {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly capacity: number;
};

type Props = {
  readonly contact: TContact;
};

const ProviderContactForm: FC<Props> = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full mt-5 bg-white rounded-lg shadow p-3 sm:p-5">
      <div className={styles.group}>
        <label className={styles.label} htmlFor="firstName">
          {t("Register.Provider.ContactForm.first-name")}
        </label>
        <Field className={styles.field} id="firstName" name={`firstName`} />
        <ErrorMessage
          className={styles.errorMsg}
          name={`firstName`}
          render={msg => <span className="errorText">{msg}</span>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="lastName">
          {t("Register.Provider.ContactForm.last-name")}
        </label>
        <Field className={styles.field} id="lastName" name={"lastName"} />
        <ErrorMessage
          className={styles.errorMsg}
          name={"lastName"}
          render={msg => <span className="errorText">{msg}</span>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="email">
          {t("Register.Provider.ContactForm.email")}
        </label>
        <Field className={styles.field} id="email" name={"email"} />
        <ErrorMessage
          className={styles.errorMsg}
          name={"email"}
          render={msg => <span className="errorText">{msg}</span>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="phone">
          {t("Register.Provider.ContactForm.phone")}
        </label>
        <Field className={styles.field} id="phone" name={"phone"} />
        <ErrorMessage
          className={styles.errorMsg}
          name={"phone"}
          render={msg => <span className="errorText">{msg}</span>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="address">
          {t("Register.Provider.ContactForm.address")}
        </label>
        <Field className={styles.field} id="address" name={"address"} />
        <ErrorMessage
          className={styles.errorMsg}
          name={"address"}
          render={msg => <span className="errorText">{msg}</span>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="capacity">
          {t("Register.Provider.ContactForm.capacity")}
        </label>
        <div className="flex items-center gap-4">
          <Field className={styles.field} id="capacity" name={"capacity"} />
          <span className={styles.unit}>{t("Register.Provider.ContactForm.people")}</span>
        </div>
        <ErrorMessage
          className={styles.errorMsg}
          name={"capacity"}
          render={msg => <span className="errorText">{msg}</span>}
        />
      </div>
    </div>
  );
};

export default ProviderContactForm;
