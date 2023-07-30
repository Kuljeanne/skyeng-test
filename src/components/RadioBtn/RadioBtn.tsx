import { ChangeEvent } from "react";

import styles from "./RadioBtn.module.css";

type RadioBtnProps = {
  name: string;
  value: string;
  text: string;
  index: number;
  checked:boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioBtn = ({
  name,
  value,
  text,
  index,
  checked,
  onChange,
}: RadioBtnProps) => {
  return (
    <label className={styles.label} htmlFor={`${index}`}>
      <input
        type="radio"
        name={name}
        value={value}
        className={styles.input}
        id={`${index}`}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      {text}
    </label>
  );
};
