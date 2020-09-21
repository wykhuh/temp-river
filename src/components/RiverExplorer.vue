<template>
  <div>
    <h1>LA River Explorer</h1>
    <div class="container">
      <div id="controls">
        <div>
          <h2>Biodiversity</h2>
          <div @click="toggleCollapse" class="category">
            Biological Condition

            <ul class="closed">
              <li class="category">
                Benthic Macroinvertebrates
                <AnalyteList :list="Benthic_Macroinvertebrates" />
              </li>
              <li class="category">
                Attached Algae
                <AnalyteList :list="Attached_Algae" />
              </li>
              <li class="category">
                Riparian Habitat Score
                <AnalyteList :list="Riparian_Habitat_Score" />
              </li>
            </ul>
          </div>
          <h2>Enviromental Conditions</h2>
          <div @click="toggleCollapse" class="category">
            InSitu Measurements
            <AnalyteList :list="InSitu_Measurements" />
          </div>
          <div @click="toggleCollapse" class="category">
            General Chemistry
            <AnalyteList :list="General_Chemistry" />
          </div>
          <div @click="toggleCollapse" class="category">
            Nutrients
            <AnalyteList :list="Nutrients" />
          </div>
          <div @click="toggleCollapse" class="category">
            Algal Biomass
            <AnalyteList :list="Algal_Biomass" />
          </div>
          <div @click="toggleCollapse" class="category">
            Dissolved Metals
            <AnalyteList :list="Dissolved_Metals" />
          </div>
        </div>
      </div>
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
  import { initMap } from "../js/map.js";
  import AnalyteList from "./AnalyteList.vue";

  export default {
    name: "RiverExplorer",
    components: {
      AnalyteList,
    },
    data: function() {
      return {
        Benthic_Macroinvertebrates: {
          CSCI: "CSCI",
          MMI: "MMI",
          "O/E": "O/E",
        },
        Attached_Algae: {
          D18: "D18",
          S2: "S2",
        },
        Riparian_Habitat_Score: {
          "Overall CRAM Score": "Overall CRAM Score",
          "Biotic Structure": "Biotic Structure",
          "Buffer and Landscape Context": "Buffer and Landscape Context",
          Hydrology: "Hydrology",
          "Physical Structure": "Physical Structure",
        },
        InSitu_Measurements: {
          "Temperature (C°)": "Temperature",
          "Dissolved Oxygen (mg/L)": "Dissolved Oxygen",
          pH: "pH",
          "Salinity (ppt)": "Salinity",
          "Specific Conductivity (us/cm)": "Specific Conductivity",
        },
        General_Chemistry: {
          "Alkalinity as CaCO3 (mg/L)": "Alkalinity as CaCO3",
          "Hardness as CaCO3 (mg/L)": "Hardness as CaCO3",
          "Chloride (mg/L)": "Chloride",
          "Sulfate (mg/L)": "Sulfate",
          "TSS (mg/L)": "TSS",
        },
        Nutrients: {
          "Ammonia as N (mg/L)": "Ammonia as N",
          "Nitrate as N (mg/L)": "Nitrate as N",
          "Nitrite as N (mg/L)": "Nitrite as N",
          "Nitrogen Total (mg/L)": "Nitrogen Total",
          "OrthoPhosphate as P (mg/L)": "OrthoPhosphate as P",
          "Phosphorus as P (mg/L)": "Phosphorus as P",
          "Dissolved Organic Carbon (mg/L)": "Dissolved Organic Carbon",
          "Total Organic Carbon (mg/L)": "Total Organic Carbon",
        },
        Algal_Biomass: {
          "AFDM (mg/cm2)": "AFDM",
          "Chl-a (ug/cm2)": "Chl-a",
        },
        Dissolved_Metals: {
          "Arsenic (ug/L)": "Arsenic",
          "Cadmium (ug/L)": "Cadmium",
          "Chromium (ug/L)": "Chromium",
          "Copper (ug/L)": "Copper",
          "Iron (ug/L)": "Iron",
          "Lead (ug/L)": "Lead",
          "Mercury (ug/L)": "Mercury",
          "Nickel (ug/L)": "Nickel",
          "Selenium (ug/L)": "Selenium",
          "Zinc (ug/L)": "Zinc",
        },
      };
    },
    methods: {
      toggleCollapse: function(event) {
        if (event.target.className != "category") return;

        let className = event.target.children[0].className;
        if (className == "closed") {
          event.target.children[0].className = "";
        } else {
          event.target.children[0].className = "closed";
        }
      },
    },
    mounted: function() {
      this.$nextTick(function() {
        initMap();
      });
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
  }
  #controls {
    width: 350px;
    /* border: 1px solid green; */
    /* height: 700px; */
    /* float: left; */
  }

  #map {
    border: 1px solid black;
    width: 650px;
    height: 700px;
  }
</style>
