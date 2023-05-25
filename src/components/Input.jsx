const Input = ({ weight, setWeight }) => {
  return (
    <input
      id="input"
      type="number"
      step="1"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
    />
  );
};

export default Input;
