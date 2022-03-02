import { Field, ErrorMessage } from "formik";
import i18n from "i18next";

const styles = {
  group: "",
  label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
  field:
    "text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400",
  errorMsg: "text-red-500 text-sm",
  buttonRemove:
    "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out",
};

type TProps = {
  readonly index: number;
  readonly onRemove: () => void;
};

export default function PersonForm({ index, onRemove }: TProps) {
  return (
    <div className="mt-5 bg-white rounded-lg shadow">
      <div className="flex">
        <div className="flex-1 py-5 pl-5 overflow-hidden">
          <h1 className="inline text-2xl font-semibold leading-none">Person {++index}</h1>
        </div>
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="firstName">
          First name
        </label>
        <Field className={styles.field} id="firstName" name={`people.${index}.firstName`} />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name={`people.${index}.firstName`}
        />
      </div>

      <div className={styles.group}>
        <label className={styles.label} htmlFor="lastName">
          Last name
        </label>
        <Field className={styles.field} id="lastName" name={`people.${index}.lastName`} />
        <ErrorMessage component="a" className={styles.errorMsg} name={`people.${index}.lastName`} />
      </div>

      <button type="button" className={styles.buttonRemove} onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}
