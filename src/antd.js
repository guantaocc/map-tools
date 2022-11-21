import Vue from "vue";

import {
  ConfigProvider,
  Layout,
  Avatar,
  Button,
  message,
  notification,
  Menu,
  Modal,
  DatePicker,
  Form,
  FormModel,
  Input,
  InputNumber,
  Icon,
  Checkbox,
  Select,
  Switch,
  Spin,
  Space,
  Radio,
  Table,
  Upload,
  Tabs,
  Tree,
  Dropdown,
  Row,
  Col,
  Card,
  Divider,
  Tooltip,
  Drawer,
  Badge,
  Pagination,
  List,
  Popconfirm,
  Cascader,
  Progress,
  Empty,
  Tag,
  Alert,
  Affix,
  PageHeader,
  statistic,
} from "ant-design-vue";

// Vue.use(LocaleProvider)
Vue.use(ConfigProvider);
Vue.use(Layout);
Vue.use(Avatar);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Spin);
Vue.use(Space);
Vue.use(Radio);
Vue.use(Table);
Vue.use(Upload);
Vue.use(Tabs);
Vue.use(Dropdown);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Tooltip);
Vue.use(Drawer);
Vue.use(Badge);
Vue.use(Pagination);
Vue.use(List);
Vue.use(Popconfirm);
Vue.use(Cascader);
Vue.use(Progress);
Vue.use(Empty);
Vue.use(Tree);
Vue.use(Tag);
Vue.use(Alert);
Vue.use(Affix);
Vue.use(PageHeader);
Vue.use(statistic);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
