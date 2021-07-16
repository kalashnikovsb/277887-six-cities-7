import React, {useState} from 'react';
import {changeSorting} from '../../store/actions.js';
import {SortingTypes} from '../../const.js';
import {getCorrectLabel} from '../../utils.js';
import {getActiveSorting} from '../../store/application/selectors.js';
import {useSelector, useDispatch} from 'react-redux';


function Sorting() {
  const activeSorting = useSelector(getActiveSorting);
  const dispatch = useDispatch();

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
          onClick={() => dispatch(changeSorting(SortingTypes.POPULAR))}
        >
          Popular
        </li>
        <li
          className={`places__option ${activeSorting === SortingTypes.LOW_TO_HIGH ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => dispatch(changeSorting(SortingTypes.LOW_TO_HIGH))}
        >
          Price: low to high
        </li>
        <li
          className={`places__option ${activeSorting === SortingTypes.HIGH_TO_LOW ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => dispatch(changeSorting(SortingTypes.HIGH_TO_LOW))}
        >
          Price: high to low
        </li>
        <li
          className={`places__option ${activeSorting === SortingTypes.TOP_RATED ? 'places__option--active' : ''}`}
          tabIndex="0"
          onClick={() => dispatch(changeSorting(SortingTypes.TOP_RATED))}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}


export default Sorting;
