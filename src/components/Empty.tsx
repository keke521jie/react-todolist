interface EmptyProps {
  children?: string;
}

export function Empty(props: EmptyProps) {
  return (
    <div className="flex flex-col items-center p-[10px] rounded bg-gray-50 w-[100%] text-[18px] font-bold">
      <img
        className="w-[100%]"
        src="https://iconfont.alicdn.com/p/illus/preview_image/B0ynp9sgwReN/858ea87e-0768-4fea-a36f-b782ccfcd8f4.png"
        alt={props.children ?? "空空如也"}
      />
      <div>{props.children ?? "空空如也"}</div>
    </div>
  );
}
