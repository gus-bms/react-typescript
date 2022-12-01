import React from "react";

interface MyProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Component: React.FC<MyProps> = (props) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Component;