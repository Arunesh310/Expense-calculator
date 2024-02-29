export const ADD_TRANSACTION = "ADD_TRANSACTION";

const addTransaction = (transaction) => ({
  action: ADD_TRANSACTION,
  payload: transaction,
});

export default addTransaction;
