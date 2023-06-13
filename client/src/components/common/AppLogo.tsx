import React, { FC } from "react";
import Link from "./Link";
import Image from "next/image";

type appLogoProps = {
  title?: string;
  fontSize?: string;
  showTitle?: boolean;
  className?: string;
  classNameImg?: string;
  widthImg: number;
  heightImg: number; 
};

const AppLogo: FC<appLogoProps> = ({
  title = "",
  fontSize = "text-2xl",
  showTitle = true,
  className,
  classNameImg,
  widthImg,
  heightImg,
}) => {
  switch (fontSize) {
    case "xs":
      fontSize = "text-xs";
      break;
    case "sm":
      fontSize = "text-sm";
      break;
    case "md":
      fontSize = "text-md";
      break;
    case "lg":
      fontSize = "text-lg";
      break;
    case "xl":
      fontSize = "text-xl";
      break;

    default:
      fontSize = fontSize;
  }

  return (
    <Link href="/" className="flex items-center mx-3 w-fit">
      <Image
        src={"/logo/logo_full.png"}
        width={widthImg}
        height={heightImg}
        alt={`logo-${title}`}
        className={classNameImg}
      />
      {showTitle && (
        <div
          className={`text-[#333333] font-normal mx-3 ${fontSize} ${className}`}
        >
          {title}
        </div>
      )}
    </Link>
  );
};

export default AppLogo;
