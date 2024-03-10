<template>
  <li>
    <h3>Name: {{ fullName }}</h3>
    <h4>Position: {{ employeePosition }}</h4>
    <h4>Department: {{ department }}</h4>
    <div>
      <base-badge :type="employment" :title="employment"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="employeeContactLink"
        >Contact</base-button
      >
      <base-button link :to="employeeDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "id",
    "firstName",
    "lastName",
    "employment",
    "department",
    "position",
  ],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    employeePosition() {
      return this.position;
    },
    employeeDepartment() {
      return this.department;
    },
    employeeContactLink() {
      return this.$route.path + "/" + this.id + "/contact"; // /employees/c1/contact
    },
    employeeDetailsLink() {
      return this.$route.path + "/" + this.id; // /employees/c1
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

// v-for="employment in employment" // :key="employment" // :type="employment"
// :title="employment"
