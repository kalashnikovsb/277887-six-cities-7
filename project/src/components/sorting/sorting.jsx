import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/actions.js';
import {connect} from 'react-redux';
import {SortingTypes} from '../../const.js';


function Sorting(props) {
  const {onChangeSorting, activeSorting}  = props;
  const sortingMenu = useRef(null);

  const showOrHideMenu = () => {
    sortingMenu.current.classList.toggle('places__options--opened');
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={showOrHideMenu}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul ref={sortingMenu} className="places__options places__options--custom" onClick={showOrHideMenu}>
        <li
          className={`places__option ${activeSorting === 'Popular' ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => onChangeSorting(SortingTypes.POPULAR)}
        >
          Popular
        </li>
        <li
          className={`places__option ${activeSorting === 'Price: low to high' ? 'places__option--active' : ''}`}
          tabIndex="0"
          data-sorting-type="low-to-high"
          onClick={() => onChangeSorting(SortingTypes.LOW_TO_HIGH)}
        >
          Price: low to high
        </li>
        <li
          className={`places__option ${activeSorting === 'Price: high to low' ? 'places__option--active' : ''}`}
          tabIndex="0"
          data-sorting-type="high-to-low"
          onClick={() => onChangeSorting(SortingTypes.HIGH_TO_LOW)}
        >
          Price: high to low
        </li>
        <li
          className={`places__option ${activeSorting === 'Top rated first' ? 'places__option--active' : ''}`}
          tabIndex="0"
          data-sorting-type="top-rated"
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
