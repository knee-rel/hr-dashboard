export default {
  registerEmployee(state, payload) {
    state.employees.push(payload);
  },
  setEmployees(state, payload) {
    state.employees = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
