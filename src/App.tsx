import useMiscStore from './store/misc';

import logo from './assets/logo.png';

import Windows from './comps/windows';
import List from './comps/list';

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

      </div>
    </section>
  )
}

export default AppRoutes
