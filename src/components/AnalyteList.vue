<template>
  <ul class="closed">
    <li v-for="(value, key) in list" v-bind:key="key">
      <input
        type="checkbox"
        :id="key"
        :name="key"
        :value="key"
        @click="addLayer"
      />
      <label :for="key">{{ key }}</label>
    </li>
  </ul>
</template>

<script>
import { createImageLayer } from "../js/map.js";
import oxygenImg from "../assets/oxygen.png";
import temperatureImg from "../assets/temperature.png";

export default {
  name: "AnalyteList",
  props: ["list", "map"],
  data: function () {
    return {
      temperatureLayer: null,
      oxygenLayer: null,
    };
  },
  methods: {
    toggleImageLayer: function (layer, image) {
      if (this[layer]) {
        this.map.removeLayer(this[layer]);
        this[layer] = null;
      } else {
        this[layer] = createImageLayer(image);
        this.map.addLayer(this[layer]);
      }
    },
    addLayer: function (event) {
      if (event.target.value == "Temperature (C°)") {
        this.toggleImageLayer("temperatureLayer", temperatureImg);
      } else if (event.target.value == "Dissolved Oxygen (mg/L)") {
        this.toggleImageLayer("oxygenLayer", oxygenImg);
      }
    },
  },
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
