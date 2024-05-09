import useMiscStore from './store/misc';

import logo from './assets/logo.png';

import Android from './comps/android';
import Windows from './comps/windows';
import MacOS from './comps/macos';
import List from './comps/list';
import IOS from './comps/ios';
import Web from './comps/web';

const list = ["Desktop", "Mobile"]

function AppRoutes() {
  const misc = useMiscStore()

  return (
    <section className="dc h-screen p-4 md:p-8 bg-neutral-100">
      <div className='dfc gap-0 max-w-4xl w-full h-full py-4 pl-6 md:pl-12 pr-0 rounded-md bg-white'>
        <div className='dc pr-6 md:pr-12'>
          <img
            src={logo}
            alt="logo"
            className='w-8 h-8 md:w-12 md:h-12'
          />
          <h1 className='text-base xs:text-lg md:text-2xl font-semibold'>
            HaiVE-AI Studio Installation Guide
          </h1>
        </div>

        <div className='dc mt-4 gap-0'>
          {
            list.map(l => (
              <button
                key={l}
                onClick={() => misc.update(l === "Desktop" ? { tab: "Desktop", selected: "Windows" } : { tab: "Mobile", selected: "Website" })}
                className={`px-4 py-1.5 text-sm border border-amber-400 ${l === "Desktop" ? "rounded-l-md" : "rounded-r-md"} ${misc.tab === l ? " bg-amber-300" : ""}`}
              >
                {l}
              </button>
            ))
          }
        </div>
        <List />

        {
          misc.selected === "Windows" &&
          <Windows />
        }

        {
          misc.selected === "MacOS" &&
          <MacOS />
        }

        {
          misc.selected === "Android" &&
          <Android />
        }

        {
          misc.selected === "IOS" &&
          <IOS />
        }

        {
          misc.selected === "Website" &&
          <Web />
        }
      </div>
    </section>
  )
}

export default AppRoutes
