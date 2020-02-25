import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStrains } from "../actions";

import Strain from './Strain';

const StrainsList = ({ error, strainData }) => {

  useEffect(() => {
    fetchStrains();
  }, []);

  return (
    <>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className='StrainsList'>
          <h1>StrainsList Component!</h1>
          {strainData.map(strain => <Strain strain={strain} />)}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    strainData: state.strainData
  };
};

export default connect(
  mapStateToProps,
  { fetchStrains }
)(StrainsList);