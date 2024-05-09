
function MacOS() {
  return (
    <div className="scroll-y pr-6 md:pr-12 text-xs md:text-[13px]">
      <div className="mt-2 mb-5">
        <p className="text-sm md:text-base font-medium text-neutral-700">Minimum System Requirements:</p>
        <p className="pl-2 text-gray-800">* <span className="font-medium">RAM:</span> 8GB</p>
        <p className="pl-2 text-gray-800">* <span className="font-medium">Processor:</span> M1/M2/M3 series</p>
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
            <p className="pl-4">- Go to System Preferences {`>`} Security & Privacy.</p>
            <p className="pl-4">- Under the General tab, find "Allow apps downloaded from".</p>
            <p className="pl-4">- Select App Store and Identified Developers.</p>
          </li>

          <li className="mb-2">
            <p className="text-sm md:text-base">3. Install the Software</p>
            <p className="pl-4">- Open the downloaded ".dmg" file.</p>
            <p className="pl-4">- Drag and drop the HaiVE-AI Studio application to your Applications folder.</p>
            <p className="pl-4">- Make sure you have an active internet connection to setup the app on first time installation.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MacOS