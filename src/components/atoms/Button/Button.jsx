import PropTypes from "prop-types";

const Button = (props) => {
  const { buttonColor, buttonHover, text, type } = props;
  return (
    <div>
      <button
        className={`${buttonColor} mb-2 text-xs md:text-base border border-none ${buttonHover} rounded-[48px] text-white w-[55px] md:w-[93px] h-[25px] md:h-[45px]`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  buttonHover: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
