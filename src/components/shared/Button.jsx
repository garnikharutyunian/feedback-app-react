import PropTypes from 'prop-types';

function Button({ children, verision, type, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${verision}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  verision: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  verision: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
