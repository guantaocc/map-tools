<template>
  <tian-map :center="center">
    <show-location :center="center"></show-location>
    <local-search></local-search>
  </tian-map>
</template>

<script>
import TianMap from "./components/TianMap.vue";
import ShowLocation from "./components/ShowLocation.vue";
import LocalSearch from "./components/LocalSearch.vue";
export default {
  name: "Tianditu",
  components: {
    TianMap,
    ShowLocation,
    LocalSearch,
  },
  data() {
    return {
      center: {
        lng: 116.40769,
        lat: 39.89945,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.tianditu {
  position: relative;
  width: 100%;
  height: 100vh;
  #mapDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>
