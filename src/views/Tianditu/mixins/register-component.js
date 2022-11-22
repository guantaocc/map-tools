import Event from "../event";

export default {
  created() {
    this.$event = new Event();
  },
  inject: {
    parentInstance: {
      default: null,
    },
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    }, // 是否显示，默认 true
    zIndex: {
      type: Number,
    },
  },
  data() {
    return {
      needInitComponents: [],
    };
  },
  mounted() {
    if (this.parentInstance) {
      if (this.parentInstance.$$mapComponent) {
        this.register();
      } else {
        this.parentInstance.addChildComponent(this);
      }
    }
  },
  methods: {
    // 获取 map组件
    getMapInstance() {
      return new Promise((resolve) => {
        this.$nextTick(() => {
          let root = this;
          while (root.componentName !== "TianMap" && root.parentInstance) {
            root = root.parentInstance;
          }
          root.initPromise.then((mapInstance) => {
            resolve(mapInstance);
          });
        });
      });
    },
    $$getInstance() {
      return this.$$mapComponent;
    },
    // 注册子组件
    register() {
      // 作用，事件...
    },
    addChildComponent(component) {
      this.needInitComponents.push(component);
    },
  },
};
