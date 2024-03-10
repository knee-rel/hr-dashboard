export default {
  async contactEmployee(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/requests/${payload.employeeId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.employeeId = payload.employeeId;

    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const employeeId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/requests/${employeeId}.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch requests."
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        employeeId: employeeId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};
