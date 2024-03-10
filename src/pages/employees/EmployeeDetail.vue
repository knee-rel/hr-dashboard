<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ position }}</h3>
        <p>{{ department }}</p>
        <p>{{ description }}</p>
        <h3>
          Employment Status:
          <base-badge :type="employment" :title="employment"></base-badge>
        </h3>
        <p>P{{ rate }}/hour</p>
        <p>Manager: {{ manager.name }}</p>
        <p>Hire Date: {{ hireDate }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Need to contact this employee? Reach out here!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <h2>Employee's Personal Information</h2>
        <p>
          <b>Address:</b>{{ address.street }} {{ address.city }},
          {{ address.state }}, {{ address.country }} {{ address.postal_code }}
        </p>
        <p><b>Date of birth:</b>{{ dateOfBirth }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedEmployee: null,
    };
  },
  computed: {
    fullName() {
      return (
        this.selectedEmployee.firstName + " " + this.selectedEmployee.lastName
      );
    },
    position() {
      return this.selectedEmployee.position;
    },
    address() {
      return this.selectedEmployee.address;
    },
    department() {
      return this.selectedEmployee.department;
    },
    employment() {
      return this.selectedEmployee.employment;
    },
    rate() {
      return this.selectedEmployee.hourlyRate;
    },
    description() {
      return this.selectedEmployee.description;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    dateOfBirth() {
      return this.selectedEmployee.dateOfBirth;
    },
    manager() {
      return this.selectedEmployee.manager;
    },
    hireDate() {
      return this.selectedEmployee.hireDate;
    },
  },
  created() {
    this.selectedEmployee = this.$store.getters["employees/employees"].find(
      (employee) => employee.id === this.id
    );
  },
};
</script>
