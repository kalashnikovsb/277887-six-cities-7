import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/actions.js';
import {connect} from 'react-redux';
import {SortingTypes} from '../../const.js';


const getCorrectLabel = (activeSorting) => {
  switch (activeSorting) {
    case SortingTypes.POPULAR:
      return 'Popular';
    case SortingTypes.TOP_RATED:
      return 'Top rated first';
    case SortingTypes.LOW_TO_HIGH:
      return 'Price: low to high';
    case SortingTypes.HIGH_TO_LOW:
      return 'Price: high to low';
    default:
      break;
  }
};


function Sorting(props) {
  const {onChangeSorting, activeSorting}  = props;
  const [isOpened, setOpenedStatus] = useState(false);

  const showOrHideMenu = () => {
    setOpenedStatus(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={showOrHideMenu}>
        {getCorrectLabel(activeSorting)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`} onClick={showOrHideMenu}>
        <li
          className={`places__option ${activeSorting === SortingTypes.POPULAR ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => onChangeSorting(SortingTypes.POPULAR)}
        >
          Popular
        </li>
        <li
          className={`places__option ${activeSorting === SortingTypes.LOW_TO_HIGH ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => onChangeSorting(SortingTypes.LOW_TO_HIGH)}
        >
          Price: low to high
        </li>
        <li
          className={`places__option ${activeSorting === SortingTypes.HIGH_TO_LOW ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => onChangeSorting(SortingTypes.HIGH_TO_LOW)}
        >
          Price: high to low
        </li>
        <li
          className={`places__option ${activeSorting === SortingTypes.TOP_RATED ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => onChangeSorting(SortingTypes.TOP_RATED)}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}


Sorting.propTypes = {
  onChangeSorting: PropTypes.func.isRequired,
  activeSorting: PropTypes.string,
};


const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting,
});


const mapDispatchToProps = (dispatch) => ({
  onChangeSorting(type) {
    dispatch(ActionCreator.changeSorting(type));
  },
});


export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
