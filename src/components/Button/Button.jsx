import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
