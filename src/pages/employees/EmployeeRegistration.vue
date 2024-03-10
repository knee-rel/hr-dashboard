<template>
  <section>
    <base-card>
      <h2>Register as an employee now!</h2>
      <employee-form @save-data="saveData"></employee-form>
    </base-card>
  </section>
</template>

<script>
import EmployeeForm from "../../components/employees/EmployeeForm.vue";

export default {
  components: {
    EmployeeForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("employees/registerEmployee", data);
      this.$router.replace("/employees");
    },
  },
};
</script>
