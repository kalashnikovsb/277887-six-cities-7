import PropTypes from 'prop-types';

export default PropTypes.shape({
  type: PropTypes.string.isRequired,
  listClassNames: PropTypes.string.isRequired,
  articleClassName: PropTypes.string.isRequired,
  imgWrapClassName: PropTypes.string.isRequired,
  textInfoClassName: PropTypes.string.isRequired,
  hasPremiumMark: PropTypes.bool.isRequired,
  imgWidth: PropTypes.number.isRequired,
  imgHeight: PropTypes.number.isRequired,
}).isRequired;
