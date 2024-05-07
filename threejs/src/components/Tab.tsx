import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

interface TabProps {
  tab: any;
  isFilterTab: boolean;
  isActiveTab: boolean;
  handleClick: () => void;
}

const Tab: React.FC<TabProps> = (props) => {
  const snap = useSnapshot(state);
  const activeStyles =
    props.isActiveTab && props.isFilterTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <div
      key={props.tab.name}
      style={activeStyles}
      onClick={props.handleClick}
      className={`tab-btn ${props.isFilterTab ? "rounded-full glassmorphism" : "rounded-4"}`}
    >
      <img
        src={props.tab.icon}
        alt={props.tab.name}
        className={`${props.isFilterTab ? "w-6/7 h-6/7" : "w-11/12 h-11/12 object-contain"}`}
      />
    </div>
  );
};

export default Tab;
