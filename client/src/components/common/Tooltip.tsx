import React, { FC, ReactNode } from "react";
import AntTooltip from "antd/lib/tooltip";

type TooltipProps = {
  children: ReactNode;
  className?: string;
  title: ReactNode | any;
  style?: React.CSSProperties;
  color?: string;
  arrow?: boolean;
};

const Tooltip: FC<TooltipProps> = ({
  children,
  title = "tooltip",
  className,
  color = "#172b4d",
  arrow = false,
}) => {
  return (
    <AntTooltip
      className={className}
      style={{ fontSize: "6px" }}
      color={color}
      arrow={arrow}
      title={title}
    >
      {children}
    </AntTooltip>
  );
};

export default Tooltip;
