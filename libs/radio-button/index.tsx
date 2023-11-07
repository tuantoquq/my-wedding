import React from 'react';

type RadioButtonProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function RadioButton({
  label,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        className="form-radio text-indigo-600 h-5 w-5"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
}
