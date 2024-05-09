
function Windows() {
  return (
    <div className="text-sm">
      <div className="mt-2 mb-5">
        <p className="text-base font-medium text-neutral-700">Minimum System Requirements:</p>
        <p className="pl-2 text-[13px] text-gray-800">* <span className="font-medium">RAM:</span> 16GB</p>
        <p className="pl-2 text-[13px] text-gray-800">* <span className="font-medium">Processor:</span> Intel Core i5 8th Generation or higher</p>
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
            <p className="pl-4 text-[13px]">- Before installing, temporarily disable your antivirus software to avoid any installation issues.</p>
          </li>

          <li className="mb-2">
            <p>3. Install the Software</p>
            <p className="pl-4 text-[13px]">- Open the downloaded ".exe" file.</p>
            <p className="pl-4 text-[13px]">- Follow the on-screen instructions to complete the installation.</p>
            <p className="pl-4 text-[13px]">- Make sure you have an active internet connection to setup the app on first time installation.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Windows
