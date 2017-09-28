import React from "react";
import { render } from "react-dom";
import { Menu, Dropdown, message } from "antd";

const data = [1, 2, 3];
const menuItems = data.map(i => <Menu.Item key={i}>Test</Menu.Item>);

const menu = <Menu>{menuItems}</Menu>;

const App = () => (
  <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
);

export default App;
