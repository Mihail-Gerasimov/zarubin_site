interface IInput {
  label: string;
  value: string;
  placeholder: string;
  onChange: () => void;
}

export const Input = ({ label, value, onChange, placeholder }: IInput) => {
  return (
    <>
      {label && <label></label>}
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};
