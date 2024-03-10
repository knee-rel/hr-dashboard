import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      employees: [
        {
          id: "c1",
          firstName: "John",
          lastName: "Doe",
          age: 35,
          gender: "Male",
          department: "Information Technology",
          position: "Senior Developer",
          employment: "regular",
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 500,
          contact: {
            email: "max@example.com",
            phone: "+1234567890",
          },
          address: {
            street: "123 Main Street",
            city: "Anytown",
            state: "State",
            postal_code: "12345",
            country: "United States",
          },
          dateOfBirth: "1986-05-15",
          hireDate: "2010-09-20",
          manager: {
            id: "c2",
            name: "Julie Jones",
            position: "Tech Lead",
          },
          isAdmin: false,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          age: 1000,
          gender: "Female",
          department: "Information Technology",
          position: "Tech Lead",
          employment: "contractual",
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 1000,
          contact: {
            email: "julie@example.com",
            phone: "+1987654321",
          },
          address: {
            street: "456 Oak Street",
            city: "Sometown",
            state: "State",
            postal_code: "54321",
            country: "United States",
          },
          dateOfBirth: "1982-05-15",
          hireDate: "2015-04-15",
          manager: null, // Julie Jones is the top-level manager
          isAdmin: true,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
