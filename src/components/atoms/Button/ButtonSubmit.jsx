import PropTypes from "prop-types";

const ButtonSubmit = (props) => {
  const { buttonColor, text, type } = props;
  return (
    <div>
      <button
        className={`${buttonColor} mb-2 text-sm border border-solid border-default hover:bg-btnHover hover:text-black w-full rounded-3xl text-white h-[2.5rem]`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

ButtonSubmit.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ButtonSubmit;
