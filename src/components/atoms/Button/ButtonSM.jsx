import PropTypes from "prop-types";

const ButtonSM = (props) => {
  const { buttonColor, buttonHover, text, textColor, type, borderColor } =
    props;
  return (
    <div className="flex justify-center">
      <button
        className={`${buttonColor} mb-2 text-xs md:text-base border ${borderColor} ${buttonHover} rounded-[48px] ${textColor} w-[91px] md:w-[120px] h-[36px] md:h-[42px]`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

ButtonSM.propTypes = {
  buttonColor: PropTypes.string,
  borderColor: PropTypes.string,
  buttonHover: PropTypes.string,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ButtonSM;
