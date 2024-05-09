
function Android() {
  return (
    <div className="text-sm">
      <div>
        <h3 className="mb-1 text-lg font-medium">Installation Steps:</h3>
        <ul>
          <li className="mb-2">
            <p>1. Setup the Desktop App</p>
            <p className="pl-4 text-[13px]">- Follow the installation instructions for your desired desktop.</p>
          </li>

          <li className="mb-2">
            <p>2. Download the Mobile App</p>
            <p className="pl-4 text-[13px]">- <a href="" className="text-[13px] text-amber-600 hover:underline" download>Click here</a> to download the HaiVE-AI Studio Android app.</p>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-1 text-lg font-medium">App Usage Guide</h3>
        <ul>
          <li className="mb-2">
            <p>1. Start the Server:</p>
            <p className="pl-4 text-[13px]">- Open the HaiVE-AI Studio desktop app.</p>
            <p className="pl-4 text-[13px]">- Log in with your email and password.</p>
            <p className="pl-4 text-[13px]">- Go to the Local AI Server page.</p>
            <p className="pl-4 text-[13px]">- Select Model and Start server.</p>
            <p className="pl-4 text-[13px]">- Click Go Public.</p>
            <p className="pl-4 text-[13px]">- Invite a friend by entering their email.</p>
          </li>

          <li className="mb-2">
            <p>2. Use Your LLM on Mobile:</p>
            <p className="pl-4 text-[13px]">- Open the HaiVE-AI Studio App.</p>
            <p className="pl-4 text-[13px]">- Go to the AI Servers page by navigating from menu(at the top right)</p>
            <p className="pl-4 text-[13px]">- Select your user email from the dropdown menu.</p>
            <p className="pl-4 text-[13px]">- Click Device and connect.</p>
            <p className="pl-4 text-[13px]">- Now you can use the Model in our app.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Android
