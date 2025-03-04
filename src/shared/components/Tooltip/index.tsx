import React from "react";
import cn from "classnames";
import styles from "./Tooltip.module.sass";
import { TooltipIconSvg } from "../../../assets/icons/TooltipIconSvg";

interface tooltipProps {
  className?: any;
  title?: any;
  icon?: any;
  place?: any;
}
const Tooltip: React.FC<tooltipProps> = ({ className, title, icon, place }) => {
  return (
    <div className={cn(styles.tooltip, className)}>
      <span data-tip={title} data-place={place}>
        <TooltipIconSvg />
      </span>
    </div>
  );
};

export default Tooltip;
