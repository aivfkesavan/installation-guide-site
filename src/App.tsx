import useMiscStore from './store/misc';

import logo from './assets/logo.png';

import Android from './comps/android';
import Windows from './comps/windows';
import MacOS from './comps/macos';
import List from './comps/list';
import IOS from './comps/ios';

function AppRoutes() {
  const selected = useMiscStore(s => s.selected)

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

        <List />

        {
          selected === "Windows" &&
          <Windows />
        }

        {
          selected === "MacOS" &&
          <MacOS />
        }

        {
          selected === "Android" &&
          <Android />
        }

        {
          selected === "IOS" &&
          <IOS />
        }
      </div>
    </section>
  )
}

export default AppRoutes
