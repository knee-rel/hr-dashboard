import { createStore } from "vuex";

import employeesModule from "./modules/employees/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    employees: employeesModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
