import PropTypes from "prop-types";

const ButtonXL = (props) => {
  const { buttonColor, buttonHover, text, type, src } = props;
  return (
    <button
      className={`${buttonColor} mb-2 text-xs md:text-base border border-none ${buttonHover} rounded-[48px] text-white w-[120px] md:w-[185px] h-[25px] md:h-[45px]`}
      type={type}
    >
      <div className="flex justify-center row w-full gap-1 md:gap-2">
        {src ? <img src={src} className="w-[14px] md:w-[24px]" /> : null}
        <p>{text}</p>
      </div>
    </button>
  );
};

ButtonXL.propTypes = {
  buttonColor: PropTypes.string,
  buttonHover: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  src: PropTypes.string,
};

export default ButtonXL;
