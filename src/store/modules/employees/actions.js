export default {
  async registerEmployee(context, data) {
    const userId = context.rootGetters.userId;
    const employeeData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      employment: data.employment,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/employees/${userId}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(employeeData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit("registerEmployee", {
      ...employeeData,
      id: userId,
    });
  },
  async loadEmployees(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/employees.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const employees = [];

    for (const key in responseData) {
      const employee = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        employment: responseData[key].employment,
      };
      employees.push(employee);
    }

    context.commit("setEmployees", employees);
    context.commit("setFetchTimestamp");
  },
};
