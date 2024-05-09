
function MacOS() {
  return (
    <div className="text-sm">
      <div className="mt-2 mb-5">
        <p className="text-base font-medium text-neutral-700">Minimum System Requirements:</p>
        <p className="pl-2 text-[13px] text-gray-800">* <span className="font-medium">RAM:</span> 8GB</p>
        <p className="pl-2 text-[13px] text-gray-800">* <span className="font-medium">Processor:</span> M1/M2/M3 series</p>
      </div>

      <div>
        <h3 className="mb-1 text-lg font-medium">Installation Steps:</h3>
        <ul>
          <li className="mb-2">
            <p>1. Download the Installer</p>
            <p className="pl-4 text-[13px]">- Download the Installer from the official site. <a href="" className="text-[13px] text-amber-600 hover:underline" download>Click here</a> to download.</p>
          </li>

          <li className="mb-2">
            <p>2. Adjust Security Settings</p>
            <p className="pl-4 text-[13px]">- Go to System Preferences {`>`} Security & Privacy.</p>
            <p className="pl-4 text-[13px]">- Under the General tab, find "Allow apps downloaded from".</p>
            <p className="pl-4 text-[13px]">- Select App Store and Identified Developers.</p>
          </li>

          <li className="mb-2">
            <p>3. Install the Software</p>
            <p className="pl-4 text-[13px]">- Open the downloaded ".dmg" file.</p>
            <p className="pl-4 text-[13px]">- Drag and drop the HaiVE-AI Studio application to your Applications folder.</p>
            <p className="pl-4 text-[13px]">- Make sure you have an active internet connection to setup the app on first time installation.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MacOS