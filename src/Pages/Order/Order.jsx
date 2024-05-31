import { useState } from "react";
import coverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();

    const offered = menu.filter((item) => item.category === "offered");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover img={coverImg} title={"Our Shop"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad </Tab>
          <Tab>Pizza </Tab>
          <Tab>Soup </Tab>
          <Tab>Dessert </Tab>
          <Tab>Drinks </Tab>
        </TabList>
        <TabPanel>
        <FoodCard></FoodCard>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
