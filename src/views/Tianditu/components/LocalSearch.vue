<template>
  <div class="local-search">
    <a-select
      show-search
      :value="value"
      placeholder="搜索输入点"
      style="width: 400px"
      :default-active-first-option="false"
      :show-arrow="false"
      :filter-option="false"
      :not-found-content="null"
      @search="handleSearch"
      @change="handleChange"
    >
      <a-select-option v-for="(s, index) in data" :key="index" :value="s.name">
        {{ s.name }} | {{ s.address }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import registerMixin from "../mixins/register-component";
import debounce from "lodash/debounce";
export default {
  mixins: [registerMixin],
  data() {
    return {
      data: [],
      value: undefined,
    };
  },
  mounted() {
    this.handlerData = debounce(this.getData, 200);
  },
  methods: {
    getData(value) {
      let that = this;
      console.log("value", value);
      this.getMapInstance().then((map) => {
        function localSearchResult(result) {
          let suggests = result.getSuggests();
          console.log("sugge", suggests);
          that.data = suggests;
        }
        let config = {
          pageCapacity: 10, //每页显示的数量
          onSearchComplete: localSearchResult, //接收数据的回调函数
        };
        let localsearch = new T.LocalSearch(map, config);
        localsearch.search(value, 4);
      });
    },
    handleSearch(value) {
      this.handlerData(value);
    },
    handleChange(value) {
      this.value = value;
      console.log("value", value);
      this.zoomToLocation(value);
    },
    zoomToLocation(v) {
      this.getMapInstance().then((map) => {
        map.clearOverLays();
        let item = this.data.find((item) => item.name === v);
        let geocoder = new T.Geocoder();
        let point = item.address + item.name;
        geocoder.getPoint(point, (result) => {
          if (result.getStatus() === 0) {
            map.panTo(result.getLocationPoint(), 16);
            let marker = new T.Marker(result.getLocationPoint());
            //向地图上添加标注
            map.addOverLay(marker);
            this.$emit("change-center", point);
          }
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.local-search {
  position: absolute;
  left: 50px;
  top: 10px;
  z-index: 10;
}
</style>
