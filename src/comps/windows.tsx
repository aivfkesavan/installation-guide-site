
function Windows() {
  return (
    <div className="scroll-y pr-6 md:pr-12 text-xs md:text-[13px]">
      <div className="mt-2 mb-5">
        <p className="text-sm md:text-base font-medium text-neutral-700">Minimum System Requirements:</p>
        <p className="pl-2 text-gray-800">* <span className="font-medium">RAM:</span> 16GB</p>
        <p className="pl-2 text-gray-800">* <span className="font-medium">Processor:</span> Intel Core i5 8th Generation or higher</p>
      </div>

      <div>
        <h3 className="mb-1 text-base md:text-lg font-medium">Installation Steps:</h3>
        <ul>
          <li className="mb-2">
            <p className="text-sm md:text-base">1. Download the Installer</p>
            <p className="pl-4">- Download the Installer from the official site. <a href="" className="text-amber-600 hover:underline" download>Click here</a> to download.</p>
          </li>

          <li className="mb-2">
            <p className="text-sm md:text-base">2. Adjust Security Settings</p>
            <p className="pl-4">- Before installing, temporarily disable your antivirus software to avoid any installation issues.</p>
          </li>

          <li className="mb-2">
            <p className="text-sm md:text-base">3. Install the Software</p>
            <p className="pl-4">- Open the downloaded ".exe" file.</p>
            <p className="pl-4">- Follow the on-screen instructions to complete the installation.</p>
            <p className="pl-4">- Make sure you have an active internet connection to setup the app on first time installation.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Windows
