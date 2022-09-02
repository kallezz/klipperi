import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggleSidebar } from "../redux/features/settings/settingsSlice";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sidebarToggle = useSelector(
    (state: RootState) => state.settings.sidebar
  );

  return (
    <motion.aside
      animate={{
        width: sidebarToggle ? "12rem" : "4rem",
      }}
      transition={{
        type: "spring",
        bounce: 0,
      }}
      className="flex flex-col h-screen overflow-hidden bg-slate-800 border-r border-slate-600"
    >
      <div className="flex flex-col flex-grow">SB</div>
      <div className="flex flex-col">
        <div className="p-3">
          <button
            className="p-2 rounded-full w-full flex items-center gap-4 text-white overflow-hidden"
            onClick={() => dispatch(toggleSidebar())}
          >
            {sidebarToggle ? (
              <ArrowLongLeftIcon className="w-6 h-6 text-white" />
            ) : (
              <ArrowLongRightIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
