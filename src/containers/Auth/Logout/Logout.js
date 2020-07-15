import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionTypes from "../../../store/index";
const logout = (props) => {
  const { onLogout } = props;
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionTypes.logout()),
  };
};

export default connect(null, mapDispatchToProps)(logout);
