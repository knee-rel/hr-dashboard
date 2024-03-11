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
        <p><b>Rate: </b> P{{ rate }}/hour</p>
        <p><b>Manager: </b> {{ manager ? manager.name : "No Manager" }}</p>
        <p><b>Hire Date: </b> {{ hireDate }}</p>
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
        <!-- <b>Address:</b>
        <span v-if="address">
          {{ address.street }} {{ address.city }}, {{ address.state }},
          {{ address.country }} {{ address.postal_code }}
        </span>
        <span v-else>Address not available</span> -->

        <p><b>Date of birth:</b>{{ dateOfBirth }}</p>
        <p><b>Age: </b>{{ age }}</p>
        <p><b>Gender </b>{{ gender }}</p>
        <p><b>Phone Number </b>{{ phoneNumber }}</p>
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
    age() {
      return this.selectedEmployee.age;
    },
    gender() {
      return this.selectedEmployee.gender;
    },
    phoneNumber() {
      return this.selectedEmployee.phoneNumber;
    },
  },
  created() {
    this.selectedEmployee = this.$store.getters["employees/employees"].find(
      (employee) => employee.id === this.id
    );
  },
};
</script>
