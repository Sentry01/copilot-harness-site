import './App.css'

function CopyButton({ text }) {
  return (
    <button
      className="ml-2 px-3 py-1 text-sm rounded bg-[#238636] hover:bg-[#2ea043] text-white"
      onClick={() => navigator.clipboard?.writeText(text)}
      aria-label="Copy to clipboard"
    >
      Copy
    </button>
  )
}

function App() {
  const installCmd = `# Prerequisites\n# - gh CLI\n# - Node.js >= 18\n# - Python (optional for harness)\n\n# Clone and start\ngit clone https://github.com/Sentry01/copilot-harness-site.git\ncd copilot-harness-site\nchmod +x init.sh && ./init.sh`
  const usageCmd = `# Example: start session\n./init.sh\n# Agents work via GitHub issues & projects\n# Verify UI with Playwright MCP`

  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-12 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Copilot Harness</h1>
        <p className="mt-4 text-lg md:text-xl text-[#8B949E]">Long-running autonomous coding with GitHub Copilot</p>
        <p className="mt-6 max-w-2xl mx-auto text-[#C9D1D9]">Run autonomous coding agents that coordinate via GitHub Issues & Projects, verify changes with Playwright MCP, and hand off sessions seamlessly.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/Sentry01/copilot-harness-site" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-semibold">Get Started</a>
          <a href="https://github.com/Sentry01/copilot-harness-site" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-[#161B22] hover:bg-[#0b121a] text-white border border-[#30363D]">View on GitHub</a>
        </div>
        <div className="mt-12 mx-auto max-w-3xl text-left bg-[#161B22] border border-[#30363D] rounded-xl p-4 font-mono">
          <pre className="overflow-x-auto">
{`# Start an autonomous session\n./init.sh  # starts dev server\n# Agent works through GitHub issues\n# Playwright MCP verifies features`}
          </pre>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="px-6 md:px-12 py-16 md:py-24" id="quick-start">
        <h2 className="text-3xl md:text-4xl font-bold">Quick Start</h2>
        <p className="mt-2 text-[#8B949E]">Follow the checklist and use the copy buttons to get going.</p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-[#C9D1D9]">
          <li className="flex items-start gap-2">
            <span className="inline-block w-5 h-5 rounded-full bg-[#238636] mt-0.5" aria-hidden="true"></span>
            Install GitHub CLI (gh)
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-5 h-5 rounded-full bg-[#238636] mt-0.5" aria-hidden="true"></span>
            Install Node.js 18+
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-5 h-5 rounded-full bg-[#238636] mt-0.5" aria-hidden="true"></span>
            Optional: Python for harness scripts
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-5 h-5 rounded-full bg-[#238636] mt-0.5" aria-hidden="true"></span>
            gh auth login (uses existing auth)
          </li>
        </ul>

        <div className="mt-8 space-y-6">
          <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#8B949E]">Installation</span>
              <CopyButton text={installCmd} />
            </div>
            <pre className="mt-2 overflow-x-auto font-mono text-sm whitespace-pre-wrap">{installCmd}</pre>
          </div>

          <div className="bg-[#161B22] border border-[#30363D] rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#8B949E]">Usage</span>
              <CopyButton text={usageCmd} />
            </div>
            <pre className="mt-2 overflow-x-auto font-mono text-sm whitespace-pre-wrap">{usageCmd}</pre>
          </div>
        </div>

        <div className="mt-6">
          <a href="https://github.com/Sentry01/copilot-harness-site" target="_blank" rel="noreferrer" className="text-[#8B5CF6] hover:underline">View Full Documentation</a>
        </div>
      </section>
    </main>
  )
}

export default App
