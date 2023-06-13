import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getItem } from "@/utils/general";
import React, { useState, useEffect, useCallback } from "react";
import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import NextLink from "next/link";
import Button from "@/components/common/Button";
import { isMobile } from "@/utils/device";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  getItem("לוח הבקרה"),
  getItem("מעומדים", "sub1", <MailOutlined />, [
    getItem(<NextLink href={"/"}>רשימת מעומדים</NextLink>, "1"),
  ]),
];

type NavItem = {
  path: string;
  label?: string;
  key: string;
  children: [];
  type: string;
};

type SidebarProps = {
  className?: string;
};

const convertToItemType = (items: NavItem[]): MenuProps["items"] => {
  return items.map((item) => ({
    key: item.key,
    label: item?.label,
    children: item?.children,
    type: item?.type,
  }));
};

const Sidebar = React.memo(function Sidebar({ className }: SidebarProps) {
  const [navList, setNavList] = useState<NavItem[]>([]);

  const fetchNavList = useCallback(async () => {
    try {
      const response = await fetch("/api/getNavList");
      const { navList } = await response.json();
      setNavList(navList);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchNavList();
  }, [fetchNavList]);

  const menuItems = convertToItemType(navList);
  const maxSidebarWidth = 270;
  const minSidebarWidth = 30;

  const initialValue = JSON.parse(
    localStorage.getItem("isSidebarToggleId") || "false"
  );
  const [isSidebarToggleId, setIsToggleId] = useState<boolean>(initialValue);

  const handleToggleSidebar = useCallback(() => {
    setIsToggleId((toggled) => {
      const newIsToggleId = !toggled;
      localStorage.setItem("isSidebarToggleId", JSON.stringify(newIsToggleId));
      return newIsToggleId;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "isSidebarToggleId",
      JSON.stringify(isSidebarToggleId)
    );
  }, [isSidebarToggleId]);
  const toggleSidebarButtonPosition = isSidebarToggleId ? "left-1" : "left-52";
  const isMobileNow = isMobile();
  console.log(isMobileNow);

  return (
    <aside
      className="lg:block border-r border-[#091e4224] transition-all duration-100 relative"
      style={{
        width: isSidebarToggleId ? minSidebarWidth : maxSidebarWidth,
        height: "calc(100vh - 64px)",
        background: "#F6F7FB",
      }}
    >
      <Button
        onClick={() => handleToggleSidebar()}
        className={`w-10 h-8 absolute top-0 right-0 bg-white shadow-md text-slate-500 hover:bg-[#0073ea] transition hover:text-white border border-[#091e4224] rounded-full flex justify-center place-items-center`}
      >
        {isSidebarToggleId ? (
          <FaChevronRight className="mr-1 text-sm" />
        ) : (
          <FaChevronLeft className="mr-1 text-sm" />
        )}
      </Button>
      {!isSidebarToggleId && (
        <Menu
          className={`mt-10 ${className}`}
          style={{ background: "#F6F7FB", border: 0 }}
          mode="inline"
          triggerSubMenuAction="click"
          items={items}
        />
      )}
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
