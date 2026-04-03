"use client";

import React, { useState } from "react";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex font-sans selection:bg-blue-500/30">
      
      {/* 1. THE SIDEBAR */}
      <aside className="w-64 border-r border-zinc-800/60 hidden md:flex flex-col p-6 sticky top-0 h-screen">
        <h1 className="text-xl font-bold mb-8 tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
          Saqlain UI
        </h1>
        <nav className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Components</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#" className="block px-3 py-2 bg-zinc-800/50 text-zinc-100 rounded-md border border-zinc-700/50 shadow-sm">
                  Button
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors">
                  Icon Button
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* 2. THE MAIN CONTENT */}
      <main className="flex-1 py-12 px-6 md:px-16 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="space-y-2 border-b border-zinc-800/60 pb-8">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">Button</h1>
            <p className="text-zinc-400 text-lg">
              Displays a button or a component that looks like a button.
            </p>
          </div>

          {/* CLI Installation Box */}
          <div className="space-y-3">
             <h2 className="text-lg font-medium text-zinc-200">Installation</h2>
             <div className="bg-[#0d0d0d] border border-zinc-800 rounded-xl p-4 flex items-center justify-between font-mono text-sm shadow-inner">
               <span className="text-zinc-300">
                 <span className="text-blue-400">npx</span> saqlain-ui add button
               </span>
               <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
               </button>
             </div>
          </div>

          {/* Component Showcase Area */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-zinc-200">Preview</h2>

            {/* Tabs Toggle */}
            <div className="flex space-x-1 border-b border-zinc-800/60">
              <button 
                onClick={() => setActiveTab("preview")} 
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${activeTab === "preview" ? "border-blue-500 text-zinc-50" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
              >
                Preview
              </button>
              <button 
                onClick={() => setActiveTab("code")} 
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${activeTab === "code" ? "border-blue-500 text-zinc-50" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
              >
                Code
              </button>
            </div>

            {/* The Canvas */}
            <div className="rounded-xl border border-zinc-800/80 bg-[#0a0a0a] overflow-hidden shadow-2xl">
              {activeTab === "preview" ? (
                // Aceternity style Grid Background Canvas
                <div className="relative flex min-h-[400px] items-center justify-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                   <div className="flex gap-4 p-6 bg-zinc-950/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl shadow-xl">
                      {/* You can replace these with your actual <Button> components later! */}
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]">Default</button>
                      <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-4 py-2 rounded-md text-sm font-medium transition-colors">Secondary</button>
                      <button className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 px-4 py-2 rounded-md text-sm font-medium transition-colors">Destructive</button>
                   </div>
                </div>
              ) : (
                // Code Block View
                <div className="p-6 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
                  <pre><code>{`import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`}</code></pre>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}