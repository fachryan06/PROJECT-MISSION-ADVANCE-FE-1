import PropTypes from "prop-types";
const InputFieldProfil = (props) => {
  const {
    htmlFor,
    label,
    id,
    name,
    type,
    onChange,
    value,
    autoComplete,
    disabled,

    borderColor,
    bgColor,
    borderHoverColor,
    textInputColor,

    children,
  } = props;
  return (
    <div
      className={`${borderColor} ${bgColor} border ${borderHoverColor} relative w-[320px] lg:w-[642px] h-[56px] lg:h-[64px] rounded-[8px] mb-[32px]`}
    >
      <label
        htmlFor={htmlFor}
        className="text-[14px] lg:text-[16px] text-textLight font-semibold bg-transparent px-4"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        disabled={disabled}
        className={`${textInputColor} bg-OtherPaper w-full px-4 ring-0  font-semibold text-[16px] lg:text-[18px] focus:outline-none`}
      />
      {children}
    </div>
  );
};

InputFieldProfil.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,

  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderHoverColor: PropTypes.string,
  textInputColor: PropTypes.string,

  children: PropTypes.node,
};

export default InputFieldProfil;
