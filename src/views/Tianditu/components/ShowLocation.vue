<template>
  <div class="show-click-point">
    <a-space :size="24">
      <span>当前位置：{{ currentPoint.address }}</span>
      <span>当前经度：{{ currentPoint.lng }}</span>
      <span style="margin-right: 24px">当前纬度: {{ currentPoint.lat }}</span>
    </a-space>
  </div>
</template>

<script>
import registerMixin from "../mixins/register-component";
export default {
  mixins: [registerMixin],
  props: {
    center: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    center: {
      handler(value) {
        let lnglat = new T.LngLat(value.lng, value.lat);
        this.getGeoName(lnglat);
      },
      immediate: true,
    },
  },
  data() {
    return {
      currentPoint: {
        lng: "",
        lat: "",
        address: "",
      },
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      let that = this;
      this.getMapInstance().then((map) => {
        function getLngLat(lnglat) {
          that.getGeoName(lnglat);
        }
        const cp = new T.CoordinatePickup(map, { callback: getLngLat });
        cp.addEvent();
      });
    },
    getGeoName(lnglat) {
      this.currentPoint.lng = lnglat.lng;
      this.currentPoint.lat = lnglat.lat;
      let geocode = new T.Geocoder();
      geocode.getLocation(lnglat, (result) => {
        if (result.getStatus() === 0) {
          this.currentPoint.address = result.formatted_address;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.show-click-point {
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 40px;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
