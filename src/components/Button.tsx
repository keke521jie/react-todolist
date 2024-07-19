import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <div
      className={`${props.className} w-[80px] h-[35px] bg-sky-400 rounded-lg border border-[#d9d9d9] text-[14px] text-white text-center leading-[35px] active:bg-sky-500 mx-[5px] cursor-pointer`}
      onClick={props.onClick}
    >
      {props.children ?? "button"}
    </div>
  );
}
