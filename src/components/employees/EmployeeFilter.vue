<template>
  <base-card>
    <h2>My Employees</h2>
    <span class="filter-option">
      <input type="checkbox" id="all" checked @change="setFilter" />
      <label for="all">All</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="regular" checked @change="setFilter" />
      <label for="regular">Regular Employee</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="contractual" checked @change="setFilter" />
      <label for="contractual">Contractual</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        all: true,
        regular: true,
        contractual: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
