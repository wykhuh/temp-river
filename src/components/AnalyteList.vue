<template>
  <ul class="closed">
    <li v-for="(value, key) in list" v-bind:key="key">
      <input type="checkbox" :id="key" :name="key" :value="key" />
      <label :for="key">{{ key }}</label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "AnalyteList",
    props: ["list"],
  };
</script>

<style scoped>
  .closed {
    display: none;
  }

  ul {
    list-style: none;
    margin: 0 0 0 15px;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }
</style>
