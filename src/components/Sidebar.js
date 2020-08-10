import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertComment from "@material-ui/icons/InsertCommentSharp";
import AddIcon from "@material-ui/icons/AddSharp";

import SideBarOption from "../components/SideBarOption";
import db from "../firebase";
import "../css/Sidebar.css";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

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
      <h2>Channels</h2>
      <hr />
      {/* Even More Stuff */}
      <SideBarOption Icon={AddIcon} title="Add Channel" />
      {/* SideBar Options > CHANNELS.... */}
      {channels.map((channel) => (
        <SideBarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
