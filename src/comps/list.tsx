import { FaAppStoreIos, FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import useMiscStore from "../store/misc";

type item = {
  title: string
  icon: any
}

const list: item[] = [
  {
    title: "Windows",
    icon: <FaWindows className=" text-3xl md:text-6xl" />,
  },
  {
    title: "MacOS",
    icon: <FaApple className=" text-3xl md:text-6xl" />,
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

type addiProps = {
  selected: string
  onSelect: (v: string) => void
}

function Card({ title, icon, selected, onSelect }: item & addiProps) {
  return (
    <div
      className={`dc flex-col px-4 py-4 md:py-6 rounded-lg border shadow cursor-pointer hover:shadow-amber-200 ${selected === title ? "text-amber-600 shadow-amber-200 border-amber-400" : ""}`}
      onClick={() => onSelect(title)}
    >
      {icon}
      <h2 className="text-base md:text-lg font-medium">{title}</h2>
    </div>
  )
}

function List() {
  const selected = useMiscStore(s => s.selected)
  const update = useMiscStore(s => s.update)

  const onSelect = (val: string) => update({ selected: val })

  return (
    <div className="mini-scroll-bar grid grid-cols-[repeat(4,140px)] md:grid-cols-4 gap-5 pb-2 md:pb-0 pr-6 md:pr-12 my-6 overflow-x-auto">
      {
        list.map(l => (
          <Card
            {...l}
            key={l.title}
            selected={selected}
            onSelect={onSelect}
          />
        ))
      }
    </div>
  )
}

export default List