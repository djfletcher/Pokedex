import React from 'react';
import ItemDetail from './item_detail';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    itemId: ownProps.params.itemId
  };
};

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
