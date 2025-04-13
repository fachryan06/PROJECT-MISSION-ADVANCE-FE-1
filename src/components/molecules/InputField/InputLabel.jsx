import PropTypes from "prop-types";
import LabelAuth from "../../atoms/Label/LabelAuth";
import InputAuth from "../../atoms/Input/InputAuth";
const InputLabel = (props) => {
  const {
    label,
    id,
    type,
    name,
    value,
    onChange,
    placeholder,
    htmlFor,
    autoComplete,
  } = props;
  return (
    <div>
      <LabelAuth htmlFor={htmlFor} text={label} />
      <InputAuth
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </div>
  );
};

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export default InputLabel;
