import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertComment from "@material-ui/icons/InsertCommentSharp";
import SideBarOption from "../components/SideBarOption";
import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Joseph Carson
          </h3>
        </div>
        <CreateIcon />
      </div>
      {/* Stuff */}
      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption title="YouTube" />
      <hr />
      {/* More Stuff */}
      <SideBarOption Icon={InsertComment} title="Somethign Else" />
      <SideBarOption title="Some Other Channel" />
      <hr />
      {/* Even More Stuff */}
      <SideBarOption title="Channels" />
      {/* connect to db and list all channels */}
      {/* sb options.... */}
    </div>
  );
};

export default Sidebar;
