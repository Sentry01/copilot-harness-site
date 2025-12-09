import './App.css'

function App() {
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
    </main>
  )
}

export default App
