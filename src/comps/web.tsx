
function Web() {
  return (
    <div className="scroll-y pr-6 md:pr-12 text-xs md:text-[13px]">
      <div className="mb-2">
        URL Link - <a className="text-amber-600 hover:underline" href="https://gpt.haive.in/" target="_blank">click here</a> to visit the website.
      </div>

      <div>
        <h3 className="mb-1 text-base md:text-lg font-medium">Website Usage Guide</h3>
        <ul>
          <li className="mb-2">
            <p className="text-sm md:text-base">1. Start the Server:</p>
            <p className="pl-4">- Open the HaiVE-AI Studio desktop app.</p>
            <p className="pl-4">- Log in with your email and password.</p>
            <p className="pl-4">- Go to the Local AI Server page.</p>
            <p className="pl-4">- Select Model and Start server.</p>
            <p className="pl-4">- Click Go Public.</p>
            <p className="pl-4">- Invite a friend by entering their email.</p>
          </li>

          <li className="mb-2">
            <p className="text-sm md:text-base">2. Use Your LLM on Mobile:</p>
            <p className="pl-4">- Go to the website and login.</p>
            <p className="pl-4">- Go to the AI Servers page by navigating from menu(at the top right)</p>
            <p className="pl-4">- Select your user email from the dropdown menu.</p>
            <p className="pl-4">- Click Device and connect.</p>
            <p className="pl-4">- Now you can use the Model in our app.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Web
