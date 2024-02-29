import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import addTransaction from "../redux/actions";

export class Main extends Component {
  render() {
    const { transactions } = this.props;

    return (
      <div className="container">
        <Balance transactions={transactions} />
        <AddTransaction id={transactions[0] ? transactions[0].id + 1 : 1} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  AddTransaction: (transaction) => dispatch(addTransaction),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
