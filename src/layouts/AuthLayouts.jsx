import PropTypes from "prop-types";
const AuthLayouts = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex justify-center w-full items-center min-h-screen">
        <div className="p-4 sm:p-4 rounded-lg shadow-lg w-full max-w-md mx-2 sm:mx-2">
          {children}
        </div>
      </div>
    </>
  );
};

AuthLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayouts;
