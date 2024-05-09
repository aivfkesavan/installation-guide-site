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
    <section className="dc h-screen p-8 bg-neutral-100">
      <div className='max-w-4xl w-full h-full py-4 pl-12 pr-0 rounded-md bg-white'>
        <div className='dc'>
          <img
            src={logo}
            alt="logo"
            className='w-12 h-12'
          />
          <h1 className='text-2xl font-semibold'>
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
