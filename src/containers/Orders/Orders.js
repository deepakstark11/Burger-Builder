import React, { useEffect } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/index";
import Spinner from "../../components/UI/Spinner/Spinner";

const orders = (props) => {
  const { onFetchOrders } = props;

  useEffect(() => {
    onFetchOrders(props.token, props.userId);
  }, [onFetchOrders]);

  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((order) => (
      <Order
        key={order.id}
        ingrediants={order.ingrediants}
        price={order.price}
      />
    ));
  }
  return <div>{orders}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actionTypes.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(orders, axios));
