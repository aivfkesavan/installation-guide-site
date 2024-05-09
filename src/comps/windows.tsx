
function Windows() {
  return (
    <div className="text-sm">
      <div className="mt-2 mb-5">
        <p className="text-base font-medium text-neutral-700">Minimum System Requirements:</p>
        <p className="pl-2 text-gray-800">* RAM: 16GB</p>
        <p className="pl-2 text-gray-800">* Processor: Intel Core i5 8th Generation or higher</p>
      </div>

      <div>
        <h3 className="mb-1 text-lg font-medium">Installation Steps:</h3>
        <p className="pl-2">
          - Download the Installer from the official site. <a href="" className=" text-[13px] text-amber-600 hover:underline">Download Link</a>
        </p>
        <p className="pl-2">
          - Disable Your Antivirus Temporarily <span className="text-[13px]">(Before installing, temporarily disable your antivirus software to avoid any installation issues)</span>
        </p>
        <p className="pl-2">
          - Install the Software <span className="text-[13px]">(Make sure you have an active internet connection to setup the app on first time installation)</span>
        </p>
      </div>
    </div>
  )
}

export default Windows
