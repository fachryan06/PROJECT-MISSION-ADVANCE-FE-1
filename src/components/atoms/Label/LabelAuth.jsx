import PropTypes from "prop-types";

const LabelAuth = (props) => {
  const { text, htmlFor } = props;
  return (
    <div className="mb-2">
      <label className="text-sm text-white" htmlFor={htmlFor}>
        {text}
      </label>
    </div>
  );
};

LabelAuth.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LabelAuth;
