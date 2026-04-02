import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-24 font-sans">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">My UI Library</h1>
          <p className="text-zinc-400 text-lg">
            Beautifully designed components that you can copy and paste into your apps. 
            Accessible. Customizable. Open Source.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <code className="bg-zinc-900 px-4 py-2 rounded-md border border-zinc-800 text-sm font-mono text-emerald-400">
              npm link
            </code>
            <span className="text-zinc-500 text-sm">Run this first to enable the CLI</span>
          </div>
        </div>

        <hr className="border-zinc-800" />

        {/* Component Showcase */}
        <div className="space-y-16">
          
          {/* 1. Standard Button */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Button</h2>
              <p className="text-zinc-400 text-sm">Displays a button or a component that looks like a button.</p>
            </div>
            
            <div className="p-10 border border-zinc-800 rounded-xl bg-zinc-900/50 flex items-center justify-center gap-4">
              <Button>Default</Button>
              <Button className="bg-white text-black hover:bg-zinc-200">Secondary</Button>
              <Button className="bg-red-500 hover:bg-red-600">Destructive</Button>
            </div>

            <div className="bg-black p-4 rounded-lg border border-zinc-800 font-mono text-sm text-zinc-300">
              <span className="text-pink-500">my-ui</span> add button
            </div>
          </section>

          {/* 2. Icon Button */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Icon Button</h2>
              <p className="text-zinc-400 text-sm">A button with a built-in trailing icon, requiring <code className="text-emerald-400">lucide-react</code>.</p>
            </div>
            
            <div className="p-10 border border-zinc-800 rounded-xl bg-zinc-900/50 flex items-center justify-center gap-4">
              <IconButton>Get Started</IconButton>
              <IconButton className="bg-blue-600 hover:bg-blue-700">Continue</IconButton>
            </div>

            <div className="bg-black p-4 rounded-lg border border-zinc-800 font-mono text-sm text-zinc-300">
              <span className="text-pink-500">my-ui</span> add icon-button
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}