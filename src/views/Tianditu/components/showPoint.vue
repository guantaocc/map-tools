<template>
  <div class="show-click-point">
    <a-space :size="24">
      <span>点击位置：{{ currentPoint.address }}</span>
      <span>当前经度：{{ currentPoint.lng }}</span>
      <span style="margin-right: 24px">当前纬度: {{ currentPoint.lat }}</span>
    </a-space>
  </div>
</template>

<script>
import MapInstanceMixin from "../mixins/MapInstanceMixin";
export default {
  mixins: [MapInstanceMixin],
  props: {
    center: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      currentPoint: {
        lng: "",
        lat: "",
        title: "",
      },
    };
  },
  mounted() {
    let that = this;
    function getLngLat(lnglat) {
      const { lng, lat } = lnglat;
      that.currentPoint.lng = lng;
      that.currentPoint.lat = lat;
    }
    const cp = new T.CoordinatePickup(this.map, { callback: getLngLat });
    cp.addEvent();
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
