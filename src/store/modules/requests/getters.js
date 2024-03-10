export default {
  requests(state, _, _2, rootGetters) {
    const employeeId = rootGetters.userId;
    return state.requests.filter((req) => req.employeeId === employeeId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
