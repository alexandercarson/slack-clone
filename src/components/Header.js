import React from "react";
import { Avatar } from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Search from "@material-ui/icons/Search";
import Help from "@material-ui/icons/HelpOutlineSharp";

import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" />
        <AccessAlarmIcon />
      </div>
      <div className="header__search">
        <Search />
      </div>
      <div className="header__right">
        <Help />
      </div>
    </div>
  );
};

export default Header;
