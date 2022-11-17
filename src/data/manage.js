import { MdDashboard } from "react-icons/md";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import {FaProductHunt} from "react-icons/fa"
import {IoMdAddCircle} from "react-icons/io"
import { IoMdSettings } from "react-icons/io";
import {FiList} from "react-icons/fi"

const manageData = [
  {
    icon: <MdDashboard />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <AiFillPieChart />,
    name: "Analytics",
    path: "/analytics",
  },
  {
    icon: <BsFillBarChartFill />,
    name: "Performance",
    path: "/performance",
  },
  {
    icon: <IoNotifications />,
    name: "Notification",
    path: "/notification",
  },
  {
    icon: <IoMdSettings />,
    name: "Settings",
    path: "/settings",
  },
  {
    icon: <FaProductHunt />,
    name: "Product",
    path: "/product",
    dropdown: [
      {
        icon: <IoMdAddCircle />,
        name: "Add",
        path: "/product/add",
      },
      {
        icon: <FiList />,
        name: "List",
        path: "/product/list",
      },
    ],
  },
];

export default manageData;
