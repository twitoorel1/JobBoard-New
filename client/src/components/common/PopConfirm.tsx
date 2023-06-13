import React, { FC, ReactNode, MouseEvent } from "react";
import { message, Popconfirm } from "antd";

const confirm = (e: MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success("Click on Yes");
};

const cancel = (e: MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error("Click on No");
};

type PopConfirmProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
  placement?: any;
  okText?: string;
  cancelText?: string;
  confirm?: Function | undefined | any;
  cancel?: Function | undefined | any;
};

const PopConfirm: FC<PopConfirmProps> = ({
  children,
  confirm,
  placement = "topRight",
  title = "delete",
  description = "Are you sure you want to delete",
  okText = "yes",
  cancelText = "no",
}) => {
  return (
    <Popconfirm
      onConfirm={() => confirm()}
      onCancel={() => {
        return;
      }}
      title={title}
      placement={placement}
      description={description}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Popconfirm>
  );
};

export default PopConfirm;
