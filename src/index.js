import Alert from './components/alert/index';
import Avatar from './components/avatar/index';
import Badge from './components/badge/index';
import Button from './components/button/index';
import ButtonGroup from './components/button-group/index';
import Carousel from './components/carousel/index';
import Cascader from './components/cascader/index';
import Col from './components/col/index';
import Collapse from './components/collapse/index';
import CollapseItem from './components/collapse-item/index';
import ColorPicker from './components/color-picker/index';
import Content from './components/content/index';
import Divider from './components/divider/index';
import Footer from './components/footer/index';
import Header from './components/header/index';
import Icon from './components/icon/index';
import Input from './components/input/index';
import Layout from './components/layout/index';
import LoadingBar from './components/loading-bar/index';
import Menu from './components/menu/index';
import MenuGroup from './components/menu-group/index';
import MenuItem from './components/menu-item/index';
import Message from './components/message/index';
import Notification from './components/notification/index';
import Pagination from './components/pagination/index';
import Progress from './components/progress/index';
import Radio from './components/radio/index';
import RadioGroup from './components/radio-group/index';
import Rate from './components/rate/index';
import Row from './components/row/index';
import Select from './components/select/index';
import Scroll from './components/scroll/index';
import Sider from './components/sider/index';
import Spin from './components/spin/index';
import Submenu from './components/submenu/index';
import Switch from './components/switch/index';
import TabPane from './components/tab-pane/index';
import Upload from './components/upload/index';
import Form from './components/form/src/form.vue';
import FormItem from './components/form-item/src/form-item.vue';
import Select from './components/select/src/select.vue';

const components = [
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Carousel,
  Cascader,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Content,
  Divider,
  Footer,
  Header,
  Icon,
  Input,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Select,
  Scroll,
  Sider,
  Spin,
  Submenu,
  Switch,
  TabPane,
  Upload,
  Form,
  FormItem,
  Select,
];
const install = function(Vue) {
  const vue = Vue;
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });

  vue.prototype.$loading = LoadingBar;
  vue.prototype.$message = Message;
  vue.prototype.$notify = Notification;

  // istanbul ignore if
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
};

export default {
  version: '0.1.0',
  install,
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Carousel,
  Cascader,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Content,
  Divider,
  Footer,
  Header,
  Icon,
  Input,
  Layout,
  LoadingBar,
  Menu,
  MenuGroup,
  MenuItem,
  Message,
  Notification,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Select,
  Scroll,
  Sider,
  Spin,
  Submenu,
  Switch,
  TabPane,
  Upload,
  Form,
  FormItem,
  Select,
};
