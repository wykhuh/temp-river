<template>
  <div>
    <h1>LA River Explorer</h1>
    <div class="container">
      <div id="controls">
        <div>
          <h2>Biodiversity</h2>
          <ul>
            <li @click="toggleCollapse">
              Biological Condition
              <ul class="closed">
                <li>
                  Benthic Macroinvertebrates (CSCI)
                  <ul class="closed">
                    <li>CSCI</li>
                    <li>MMI</li>
                    <li>O/E</li>
                  </ul>
                </li>
                <li>
                  Attached Algae (So CA IBI)
                  <ul class="closed">
                    <li>D18</li>
                    <li>S2</li>
                  </ul>
                </li>
                <li>
                  Riparian Habitat Score (CRAM)
                  <ul class="closed">
                    <li>Overall CRAM Score</li>
                    <li>Biotic Structure</li>
                    <li>Buffer and Landscape Context</li>
                    <li>Hydrology</li>
                    <li>Physical Structure</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h2>Enviromental Conditions</h2>
          <ul>
            <li>
              InSitu Measurements
              <ul class="closed">
                <li>Temperature (C°)</li>
                <li>Dissolved Oxygen (mg/L)</li>
                <li>pH</li>
                <li>Salinity (ppt)</li>
                <li>Specific Conductivity (us/cm)</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              General Chemistry
              <ul class="closed">
                <li>Alkalinity as CaCO3 (mg/L)</li>
                <li>Hardness as CaCO3 (mg/L)</li>
                <li>Chloride (mg/L)</li>
                <li>Sulfate (mg/L)</li>
                <li>TSS (mg/L)</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              Nutrients
              <ul class="closed">
                <li>Ammonia as N (mg/L)</li>
                <li>Nitrate as N (mg/L)</li>
                <li>Nitrite as N (mg/L)</li>
                <li>Nitrogen Total (mg/L)</li>
                <li>OrthoPhosphate as P (mg/L)</li>
                <li>Phosphorus as P (mg/L)</li>
                <li>Dissolved Organic Carbon (mg/L)</li>
                <li>Total Organic Carbon (mg/L)</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              Algal Biomass
              <ul class="closed">
                <li>AFDM (mg/cm2)</li>
                <li>Chl-a (ug/cm2)</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              Dissolved Metals
              <ul class="closed">
                <li>Arsenic (ug/L)</li>
                <li>Cadmium (ug/L)</li>
                <li>Chromium (ug/L)</li>
                <li>Copper (ug/L)</li>
                <li>Iron (ug/L)</li>
                <li>Lead (ug/L)</li>
                <li>Mercury (ug/L)</li>
                <li>Nickel (ug/L)</li>
                <li>Selenium (ug/L)</li>
                <li>Zinc (ug/L)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import  {initMap} from  '../js/map.js'


  export default {
    name: "RiverExplorer",
    methods: {
      toggleCollapse: function(event) {
        console.log(event);
        debugger
      },
    },
    mounted: function () {
      this.$nextTick(function () {
        initMap()
      })
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
  }
  #controls {
    width: 300px;
    /* border: 1px solid green; */
    /* height: 700px; */
    /* float: left; */
  }

  #map {
    border: 1px solid black;
    width: 700px;
    height: 700px;
  }
  .closed {
    display: none;
  }
</style>
