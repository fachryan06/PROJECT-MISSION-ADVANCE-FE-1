import PropTypes from "prop-types";
const InputAuth = (props) => {
  const { type, id, placeholder, value, onChange, autoComplete } = props;
  return (
    <div className="mb-2">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="text-sm text-white border border-solid border-default placeholder-gray placeholder-sm w-full bg-transparent rounded-3xl mb-2 p-2 pl-4"
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
};

InputAuth.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export default InputAuth;
