import React, {memo} from 'react';
import CitiesList from '../cities-list/cities-list';
import {connect} from 'react-redux';


function Cities() {

  return (
    <section className="locations container">
      <CitiesList />
    </section>
  );
}


const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});


export {Cities};
export default memo(connect(mapStateToProps)(Cities), (prevProps, nextProps) => prevProps.activeCity === nextProps.activeCity);

