import { Field, ErrorMessage } from "formik";
import i18n from "i18next";

const styles = {
  group: "",
  label: "block text-gray-700 text-sm font-bold pt-2",
  field:
    "text-black placeholder-gray-600 w-full px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
  errorMsg: "text-red-500 text-sm",
  buttonRemove:
    "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out",
};

export type TPerson = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
};

type TProps = {
  readonly index: number;
  readonly person: TPerson;
  readonly onRemove: () => void;
};

export default function PersonForm({ index, onRemove }: TProps) {
  return (
    <div key={index} className="w-full mt-5 bg-white rounded-lg shadow p-3 sm:p-5">
      <div className="flex-1 overflow-hidden mb-2 flex justify-between">
        <h1 className="inline text-2xl font-semibold leading-none">Person {index + 1}</h1>
        {!index && (
          <button type="button" className={styles.buttonRemove} onClick={onRemove}>
            {i18n.t("Register.Refugee.PersonForm.remove")}
          </button>
        )}
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="firstName">
          {i18n.t("Register.Refugee.PersonForm.first-name")}
        </label>
        <Field className={styles.field} id="firstName" name={`people[${index}]firstName`} />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name={`people.${index}.firstName`}
          render={msg => <a className="errorText">{i18n.t(msg)}</a>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="lastName">
          {i18n.t("Register.Refugee.PersonForm.last-name")}
        </label>
        <Field className={styles.field} id="lastName" name={`people[${index}].lastName`} />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name={`people.${index}.lastName`}
          render={msg => <a className="errorText">{i18n.t(msg)}</a>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="email">
          {i18n.t("Register.Refugee.PersonForm.email")}
        </label>
        <Field className={styles.field} id="email" name={`people[${index}].email`} />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name={`people[${index}].email`}
          render={msg => <a className="errorText">{i18n.t(msg)}</a>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="phone">
          {i18n.t("Register.Refugee.PersonForm.phone")}
        </label>
        <Field className={styles.field} id="phone" name={`people[${index}].phone`} />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name={`people[${index}].phone`}
          render={msg => <a className="errorText">{i18n.t(msg)}</a>}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="location">
          {i18n.t("Register.Refugee.PersonForm.location")}
        </label>
        <Field className={styles.field} id="location" name={`people[${index}].location`} />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name={`people[${index}].location`}
          render={msg => <a className="errorText">{i18n.t(msg)}</a>}
        />
      </div>
    </div>
  );
}
