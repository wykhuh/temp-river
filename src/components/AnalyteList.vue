<template>
  <ul :class="{ closed: !showList }">
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
import { createImageLayer, createLARWMP2018 } from "../js/map.js";
import oxygenImg from "../assets/oxygen.png";
import temperatureImg from "../assets/temperature.png";

export default {
  name: "AnalyteList",
  props: ["list", "map", "showList"],
  data: function () {
    return {
      temperatureLayer: null,
      oxygenLayer: null,
      LARWMP2018Layer: null,
    };
  },
  methods: {
    toggleImageLayer: function (layerName, image) {
      if (this[layerName]) {
        this.map.removeLayer(this[layerName]);
        this[layerName] = null;
      } else {
        this[layerName] = createImageLayer(image);
        this.map.addLayer(this[layerName]);
      }
    },

    toggleJsonLayer: function (layerName, json) {
      if (this[layerName]) {
        this.map.removeLayer(this[layerName]);
        this[layerName] = null;
      } else {
        this[layerName] = json;
        this.map.addLayer(this[layerName]);
      }
    },
    addLayer: function (event) {
      if (event.target.value == "Temperature (C°)") {
        this.toggleImageLayer("temperatureLayer", temperatureImg);
      } else if (event.target.value == "Dissolved Oxygen (mg/L)") {
        this.toggleImageLayer("oxygenLayer", oxygenImg);
      } else if (
        event.target.value ==
        "Los Angeles River Water Monitoring Program (2018)"
      ) {
        this.toggleJsonLayer("LARWMP2018Layer", createLARWMP2018());
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
