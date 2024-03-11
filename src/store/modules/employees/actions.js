export default {
  async registerEmployee(context, data) {
    const userId = context.rootGetters.userId;
    const employeeData = {
      firstName: data.first,
      lastName: data.last,
      email: data.email,
      phoneNumber: data.phoneNumber,
      description: data.desc,
      hourlyRate: data.rate,
      employment: data.employment,
      position: data.position,
      age: data.age,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      street: data.address.street,
      city: data.address.city,
      state: data.address.state,
      postalCode: data.address.postalCode,
      country: data.address.country,
      department: data.department,
      hireDate: data.hireDate,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://managerio-4a0e9-default-rtdb.asia-southeast1.firebasedatabase.app/employees/${userId}.json?auth=` +
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
      `https://managerio-4a0e9-default-rtdb.asia-southeast1.firebasedatabase.app/employees.json`
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
        age: responseData[key].age,
        gender: responseData[key].gender,
        street: responseData[key].street,
        city: responseData[key].city,
        state: responseData[key].state,
        postalCode: responseData[key].postalCode,
        country: responseData[key].country,
      };
      employees.push(employee);
    }

    context.commit("setEmployees", employees);
    context.commit("setFetchTimestamp");
  },
};
