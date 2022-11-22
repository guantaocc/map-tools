<template>
  <div class="tianditu">
    <div id="mapDiv"></div>
    <slot></slot>
  </div>
</template>

<script>
import registerMixin from "../mixins/register-component";
export default {
  name: "Tianditu",
  mixins: [registerMixin],
  componentName: "TianMap",
  props: {
    center: {
      type: Object,
      default: () => {},
    },
  },
  provide() {
    return {
      parentInstance: this,
    };
  },
  data() {
    return {
      $$map: null,
      zoom: 12,
      initPromise: null,
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      this.initPromise = new Promise((resolve) => {
        const map = new T.Map("mapDiv", {
          projection: "EPSG:4326",
        });
        let { lng, lat } = this.center;
        map.centerAndZoom(new T.LngLat(lng, lat), this.zoom);
        //创建缩放平移控件对象
        const control = new T.Control.Zoom();
        //添加缩放平移控件
        map.addControl(control);
        //创建比例尺控件对象
        const scale = new T.Control.Scale();
        //添加比例尺控件
        map.addControl(scale);
        //创建对象
        const ctrl = new T.Control.MapType();
        //添加控件
        map.addControl(ctrl);
        this.$$map = map;
        resolve(map);
      });
    },
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
