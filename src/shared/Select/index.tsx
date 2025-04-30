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
  <div>
    <label htmlFor="select">{name}</label>
    <select
      name={name}
      id={`${name}-select`}
      disabled={isDisabled}
      onChange={handleChange}
      value={value}
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
