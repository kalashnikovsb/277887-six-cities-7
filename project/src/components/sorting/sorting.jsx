import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/actions.js';
import {connect} from 'react-redux';
import {SortingTypes} from '../../const.js';


function Sorting(props) {
  const {activeSorting, changeSortingType}  = props;

  // eslint-disable-next-line
  console.log(activeSorting);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option" tabIndex="0" onClick={() => changeSortingType(SortingTypes.POPULAR)}>Popular</li>
        <li className="places__option" tabIndex="0" onClick={() => changeSortingType(SortingTypes.LOW_TO_HIGH)}>Price: low to high</li>
        <li className="places__option" tabIndex="0" onClick={() => changeSortingType(SortingTypes.HIGH_TO_LOW)}>Price: high to low</li>
        <li className="places__option" tabIndex="0" onClick={() => changeSortingType(SortingTypes.TOP_RATED)}>Top rated first</li>
      </ul>
    </form>
  );
}


Sorting.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  changeSortingType: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting,
});


const mapDispatchToProps = (dispatch) => ({
  changeSortingType(type) {
    dispatch(ActionCreator.changeSortingType(type));
  },
});


export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
