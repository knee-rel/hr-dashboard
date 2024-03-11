<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <employee-filter @change-filter="setFilters"></employee-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadEmployees(true)"
            >Refresh</base-button
          >
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
            >Login to Register Employees</base-button
          >
          <base-button v-if="isLoggedIn && !isLoading" link to="/register"
            >Register an Employee</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasEmployees">
          <employee-item
            v-for="employee in filteredEmployees"
            :key="employee.id"
            :id="employee.id"
            :email="employee.email"
            :phone-number="employee.phoneNumber"
            :first-name="employee.firstName"
            :last-name="employee.lastName"
            :position="employee.position"
            :department="employee.department"
            :employment="employee.employment"
          ></employee-item>
        </ul>
        <h3 v-else>No employees found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import EmployeeItem from "../../components/employees/EmployeeItem.vue";
import EmployeeFilter from "../../components/employees/EmployeeFilter.vue";

export default {
  components: {
    EmployeeItem,
    EmployeeFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        all: true,
        regular: true,
        contractual: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isEmployee() {
      return this.$store.getters["employees/isEmployee"];
    },
    filteredEmployees() {
      const employees = this.$store.getters["employees/employees"];
      return employees.filter((employee) => {
        if (this.activeFilters.all && employee.employment.includes("all")) {
          return true;
        }
        if (
          this.activeFilters.regular &&
          employee.employment.includes("regular")
        ) {
          return true;
        }
        if (
          this.activeFilters.contractual &&
          employee.employment.includes("contractual")
        ) {
          return true;
        }
        return false;
      });
    },
    hasEmployees() {
      return !this.isLoading && this.$store.getters["employees/hasEmployees"];
    },
  },
  created() {
    this.loadEmployees();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadEmployees(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("employees/loadEmployees", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
