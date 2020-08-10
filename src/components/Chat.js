import React from "react";
import StarBorderTwoTone from "@material-ui/icons/StarBorderTwoTone";
import InfoOutlined from "@material-ui/icons/InfoOutlined";

import { useParams } from "react-router-dom";
import "../css/Chat.css";

const Chat = () => {
  const { roomId } = useParams();
  return (
    <div className="chat">
      {/* <h2>You Are In The {roomId} Room</h2> */}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {/* channel name */}
            <strong>#General</strong>
            <StarBorderTwoTone />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default Chat;
