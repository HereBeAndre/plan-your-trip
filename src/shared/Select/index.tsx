import styles from "./index.module.scss";
export interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
  value: string;
}

export const Select = ({
  name,
  options,
  placeholder,
  handleChange,
  isDisabled,
  value,
}: SelectProps) => (
  <div className={styles.selectWrapper}>
    <label
      htmlFor={`${name}-select`}
      //   TODO: Not ideal, should use a className library
      className={isDisabled ? styles.disabled : ""}
    >
      {name}
    </label>
    <select
      name={name}
      id={`${name}-select`}
      disabled={isDisabled}
      onChange={handleChange}
      value={value}
      className={styles.select}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {/* TODO: Consider splitting into two components - one for Country and one for City */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
