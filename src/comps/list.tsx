import { FaAppStoreIos, FaApple, FaWindows } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrAndroid } from "react-icons/gr";
import useMiscStore from "../store/misc";

type item = {
  title: string
  icon: any
}


const list = {
  Desktop: [
    {
      title: "Windows",
      icon: <FaWindows className=" text-3xl md:text-6xl" />,
    },
    {
      title: "MacOS",
      icon: <FaApple className=" text-3xl md:text-6xl" />,
    },
  ],
  Mobile: [
    {
      title: "Website",
      icon: <AiOutlineGlobal className=" text-3xl md:text-6xl" />,
    },
    {
      title: "Android",
      icon: <GrAndroid className=" text-3xl md:text-6xl" />,
    },
    {
      title: "IOS",
      icon: <FaAppStoreIos className=" text-3xl md:text-6xl" />,
    },
  ]
}

type addiProps = {
  selected: string
  onSelect: (v: string) => void
}

function Card({ title, icon, selected, onSelect }: item & addiProps) {
  return (
    <div
      className={`dc w-32 md:w-40 flex-col px-4 py-4 md:py-6 rounded-lg border shadow cursor-pointer hover:shadow-amber-200 ${selected === title ? "text-amber-600 shadow-amber-200 border-amber-400" : ""}`}
      onClick={() => onSelect(title)}
    >
      {icon}
      <h2 className="text-base md:text-lg font-medium">{title}</h2>
    </div>
  )
}

function List() {
  const misc = useMiscStore()

  const onSelect = (val: string) => misc.update({ selected: val })

  return (
    <div className="mini-scroll-bar df justify-center gap-5 pb-2 pr-6 md:pr-12 my-6 overflow-x-auto">
      {
        list?.[misc.tab]?.map(l => (
          <Card
            {...l}
            key={l.title}
            selected={misc.selected}
            onSelect={onSelect}
          />
        ))
      }
    </div>
  )
}

export default List