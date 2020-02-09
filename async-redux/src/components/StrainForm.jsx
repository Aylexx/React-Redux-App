import React from "react";
import { connect } from "react-redux";

import { fetchStrains } from "../actions";

const StrainForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.fetchStrains();
  };

  return (
    <>
      {props.fetchingStrainData ? (
        <div>**we are fetching strains**</div>
      ) : (
        <button onClick={handleGetData}>Fetch Strains</button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    fetchingStrainData: state.fetchingStrainData
  };
};

export default connect(
  mapStateToProps,
  { fetchStrains }
)(StrainForm);