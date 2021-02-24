import React from "react";

import { Avatar as User, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface PropsType {
  size?: number;
  src?: string;
}

const Avatar: React.FC<PropsType> = ({ size, src }) => {
  return (
    <div className="avatar">
      <span>
        <User src={src} size={size} shape="square" icon={<UserOutlined />} />
      </span>
    </div>
  );
};

export default Avatar;
