import Image from "next/image";
import React from "react";
import { RouterOutputs } from "~/utils/api";
import {
  BsShop,
  BsStarFill,
  BsPercent,
  BsFillHeptagonFill,
} from "react-icons/bs";

type Props = {
  contents: RouterOutputs["content"]["getAllContents"] | undefined;
};

const ContentList = ({ contents }: Props) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "BsShop":
        return <BsShop style={{color: "#159DD8", fontSize: 28}} />;
      case "BsStarFill":
        return <BsStarFill style={{color: "#159DD8", fontSize: 28}}/>;
      case "BsPercent":
        return <BsPercent style={{color: "#159DD8", fontSize: 28}}/>;
      case "BsFillHeptagonFill":
        return <BsFillHeptagonFill style={{color: "#159DD8", fontSize: 28}}/>;
      default:
        return null;
    }
  };
  return (
    <>
      {contents &&
        contents.map((content) => (
          <div
            key={content.id}
            className="flex w-56 flex-col items-center gap-3 text-center"
          >
            {getIconComponent(content.icon)}
            <h3 className="font-bold">{content.title}</h3>
            <p className="text-[12px]">{content.subtitle}</p>
            <button className="w-40 rounded-xl bg-slate-400 px-2 text-[11px] font-semibold text-white">
              DAHA FAZLASINI GÖR
            </button>
          </div>
        ))}
    </>
  );
};

export default ContentList;
