import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import LatteIcon from "@/components/icons/latte-icon";
import CappuccinoIcon from "./icons/cappuccino-icon";
import AmericanoIcon from "./icons/americano-icon";
import EspressoIcon from "./icons/espresso-icon";
import FlatWhiteIcon from "./icons/flat-white-icon";
import MenuList from "./menu-list";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function CafeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: 224 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", marginTop: "100px", height: "300px" }}
      >
        <Tab icon={<CappuccinoIcon />} label="Blended" {...a11yProps(0)} />
        <Tab icon={<LatteIcon />} label="Cold Brew" {...a11yProps(1)} />
        <Tab icon={<AmericanoIcon />} label="Drink" {...a11yProps(2)} />
        <Tab icon={<EspressoIcon />} label="Espresso" {...a11yProps(3)} />
        <Tab icon={<FlatWhiteIcon />} label="Frappuccino" {...a11yProps(4)} />
        <Tab icon={<FlatWhiteIcon />} label="Tea" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MenuList title="Blended" id="blended" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MenuList title="Cold Brew" id="cold-brew" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MenuList title="Drink" id="drink" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MenuList title="Espresso" id="espresso" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <MenuList title="Frappuccino" id="frappuccino" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <MenuList title="Tea" id="tea" />
      </TabPanel>
    </Box>
  );
}
