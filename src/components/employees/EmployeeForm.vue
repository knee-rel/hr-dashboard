<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !email.isValid }">
      <label for="email">Email Address</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
      <p v-if="!email.isValid">Email must not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !phoneNumber.isValid }">
      <label for="phoneNumber">Phone Number</label>
      <input
        type="number"
        id="phoneNumber"
        v-model.number="phoneNumber.val"
        @blur="clearValidity('phoneNumber')"
      />
      <p v-if="!phoneNumber.isValid">Phone number must be a valid number.</p>
    </div>

    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>

    <!-- added fields -->
    <div class="form-control" :class="{ invalid: !age.isValid }">
      <label for="age">Age</label>
      <input
        type="number"
        id="age"
        v-model.number="age.val"
        @blur="clearValidity('age')"
      />
      <p v-if="!age.isValid">Age must be a valid number.</p>
    </div>

    <div class="form-control" :class="{ invalid: !dateOfBirth.isValid }">
      <label for="dateOfBirth">Date of birth:</label>
      <VueDatePicker v-model="dateOfBirth.val"></VueDatePicker>
    </div>

    <div class="form-control" :class="{ invalid: !gender.isValid }">
      <h3>Gender</h3>
      <div>
        <input
          type="radio"
          id="male"
          value="Male"
          v-model="gender.val"
          @blur="clearValidity('gender')"
        />
        <label for="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          value="Female"
          v-model="gender.val"
          @blur="clearValidity('gender')"
        />
        <label for="female">Female</label>
      </div>
      <p v-if="!gender.isValid">Please select a gender.</p>
    </div>

    <!-- <div class="form-control" :class="{ invalid: !street.isValid }">
      <label for="street">Street</label>
      <input
        type="text"
        id="street"
        v-model.trim="street.val"
        @blur="clearValidity('street')"
      />
      <p v-if="!street.isValid">Street must not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !city.isValid }">
      <label for="city">City</label>
      <input
        type="text"
        id="city"
        v-model.trim="city.val"
        @blur="clearValidity('city')"
      />
      <p v-if="!city.isValid">City must not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !state.isValid }">
      <label for="state">State</label>
      <input
        type="text"
        id="state"
        v-model.trim="state.val"
        @blur="clearValidity('state')"
      />
      <p v-if="!state.isValid">State must not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !postalCode.isValid }">
      <label for="postalCode">Postal Code</label>
      <input
        type="text"
        id="postalCode"
        v-model.trim="postalCode.val"
        @blur="clearValidity('postalCode')"
      />
      <p v-if="!postalCode.isValid">Postal Code must not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !country.isValid }">
      <label for="country">Country</label>
      <input
        type="text"
        id="country"
        v-model.trim="country.val"
        @blur="clearValidity('country')"
      />
      <p v-if="!country.isValid">Country must not be empty.</p>
    </div> -->

    <!-- Employment Details -->
    <h2>Employment Details</h2>
    <div class="form-control" :class="{ invalid: !employment.isValid }">
      <h3>Type of Employment</h3>
      <div>
        <input
          type="radio"
          id="regular"
          value="regular"
          v-model="employment.val"
          @blur="clearValidity('employment')"
        />
        <label for="regular">Regular Employee</label>
      </div>
      <div>
        <input
          type="radio"
          id="contractual"
          value="contractual"
          v-model="employment.val"
          @blur="clearValidity('employment')"
        />
        <label for="contractual">Contractual Employee</label>
      </div>
      <p v-if="!employment.isValid">At least one expertise must be selected.</p>
    </div>
    <div class="form-control" :class="{ invalid: !department.isValid }">
      <label for="department">Department</label>
      <select id="department" v-model="department.val">
        <option value="" disabled>Select department</option>
        <option value="IT">Information Technology</option>
        <option value="HR">Human Resources</option>
      </select>
      <p v-if="!department.isValid">Please select a department.</p>
    </div>

    <div class="form-control" :class="{ invalid: !position.isValid }">
      <label for="position">Position</label>
      <input
        type="text"
        id="position"
        v-model.trim="position.val"
        @blur="clearValidity('position')"
      />
      <p v-if="!position.isValid">Position must not be empty.</p>
    </div>

    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{ invalid: !hireDate.isValid }">
      <label for="hireDate">Hire Date:</label>
      <VueDatePicker v-model="hireDate.val"></VueDatePicker>
    </div>

    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Add Employee</base-button>
  </form>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
  components: { VueDatePicker },
  emits: ["save-data"],
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      phoneNumber: {
        val: null,
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      employment: {
        val: [],
        isValid: true,
      },
      age: {
        val: null,
        isValid: true,
      },
      dateOfBirth: {
        val: null,
        isValid: true,
      },
      gender: {
        val: "",
        isValid: true,
      },
      // for address
      // street: {
      //   val: "",
      //   isValid: true,
      // },
      // city: {
      //   val: "",
      //   isValid: true,
      // },
      // state: {
      //   val: "",
      //   isValid: true,
      // },
      // postalCode: {
      //   val: "",
      //   isValid: true,
      // },
      // country: {
      //   val: "",
      //   isValid: true,
      // },
      department: {
        val: "",
        isValid: true,
      },
      position: {
        val: "",
        isValid: true,
      },
      hireDate: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (
        !this.phoneNumber.val ||
        isNaN(this.phoneNumber.val) ||
        this.phoneNumber.val <= 0
      ) {
        this.phoneNumber.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.employment.val.length === 0) {
        this.employment.isValid = false;
        this.formIsValid = false;
      }
      if (!this.age.val || isNaN(this.age.val) || this.age.val <= 0) {
        this.age.isValid = false;
        this.formIsValid = false;
      }
      if (this.dateOfBirth.val == "") {
        this.dateOfBirth.isValid = false;
        this.formIsValid = false;
      }
      if (this.gender.val === "") {
        this.gender.isValid = false;
        this.formIsValid = false;
      }
      // if (this.street.val === "") {
      //   this.street.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.city.val === "") {
      //   this.city.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.state.val === "") {
      //   this.state.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.postalCode.val === "") {
      //   this.postalCode.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.country.val === "") {
      //   this.country.isValid = false;
      //   this.formIsValid = false;
      // }
      if (this.department.val === "") {
        this.department.isValid = false;
        this.formIsValid = false;
      }
      if (this.position.val === "") {
        this.position.isValid = false;
        this.formIsValid = false;
      }
      if (this.hireDate.val === "") {
        this.hireDate.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        email: this.email.val,
        phoneNumber: this.phoneNumber.val,
        desc: this.description.val,
        rate: this.rate.val,
        employment: this.employment.val,
        age: this.age.val,
        dateOfBirth: this.dateOfBirth.val,
        gender: this.gender.val,
        // street: this.street.val,
        // city: this.city.val,
        // state: this.state.val,
        // postalCode: this.postalCode.val,
        // country: this.country.val,
        department: this.department.val,
        position: this.position.val,
        hireDate: this.hireDate.val,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="radio"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #5cbdb9;
}

input[type="radio"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="radio"]:focus {
  outline: #5cbdb9 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
