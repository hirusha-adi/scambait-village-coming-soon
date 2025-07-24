"use client"

import { Github, Twitter, DiscIcon as Discord, Mail, Shield, Terminal, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Typewriter } from 'react-simple-typewriter'


export default function ComingSoon() {

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated red glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-6 border-b border-red-900/30">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-white">Scambait Village</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span className="text-red-400">[@DEFCON 33]</span>
              <span className="text-gray-500">|</span>
              <span className="text-green-400">UNDER DEVELOPMENT</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="container mx-auto text-center max-w-4xl">
            {/* Terminal-style coming soon */}
            <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-8 mb-8 backdrop-blur-sm">
              <div className="flex items-center mb-4 text-red-400 text-sm">
                <span className="mr-2">root@scambaitvillage:~$</span>
                <span className="animate-pulse">_</span>
              </div>

              <div className="bg-black/80 border border-red-500/30 rounded-md p-6 mb-6 font-mono text-xs md:text-sm overflow-x-auto">
                <div className="flex items-center justify-center">
                  {/* ACTUAL IMAGE GOES HERE */}
                  <div className="my-5">
                    <img src="/logo.png" alt="Logo" className="w-72" />
                  </div>
                </div>
                {/* <div className="text-red-500 whitespace-pre leading-tigh font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 animate-pulse"> */}
                <div className="text-red-500 whitespace-pre leading-tigh font-bold mb-6">
                  {`
 ██████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗ ██████╗     ███████╗ ██████╗  ██████╗ ███╗   ██╗██╗
██╔════╝██╔═══██╗████╗ ████║██║████╗  ██║██╔════╝     ██╔════╝██╔═══██╗██╔═══██╗████╗  ██║██║
██║     ██║   ██║██╔████╔██║██║██╔██╗ ██║██║  ███╗    ███████╗██║   ██║██║   ██║██╔██╗ ██║██║
██║     ██║   ██║██║╚██╔╝██║██║██║╚██╗██║██║   ██║    ╚════██║██║   ██║██║   ██║██║╚██╗██║╚═╝
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝    ███████║╚██████╔╝╚██████╔╝██║ ╚████║██╗
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝
                                                                                             
`}
                </div>
                <div className="text-white mt-2 text-center">
                  {/* <span className="text-red-400">VILLAGE</span> <span className="text-gray-500">|</span>{" "} */}
                  <div className="text-green-400 text-4xl min-h-16">
                    <Typewriter words={["@ DEFCON 33", "Expect the unexpected!"]} loop={true} typeSpeed={75} />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900/30 border border-red-900/20 rounded-lg p-6 backdrop-blur-sm">
                <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Scambaiting</h3>
                <p className="text-gray-300 text-sm">
                  Join the fight against scammers. Learn techniques, share experiences, and protect others from fraud.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-red-900/20 rounded-lg p-6 backdrop-blur-sm">
                <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">DefCon Village</h3>
                <p className="text-gray-300 text-sm">
                  Experience the ultimate scam baiting community at DefCon. Network, learn, and collaborate.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-red-900/20 rounded-lg p-6 backdrop-blur-sm">
                <Zap className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Elite Training</h3>
                <p className="text-gray-300 text-sm">
                  Advanced workshops, tools, and methodologies for effective scam baiting operations.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-red-900/30 p-6 bg-gray-900/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3 text-center">Connect</h4>
              <div className="flex justify-center space-x-6">
                <Link href="https://discord.gg/kmu6yKGXGV" className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                  </svg>
                  <span className="sr-only">Discord</span>
                </Link>
                <Link href="https://x.com/ScambaitVillage" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">X (formely Twitter)</span>
                </Link>
              </div>
            </div>

            <div className="border-t border-red-900/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2025 ScamBaitVillage. All rights reserved.</p>
              <p className="mt-2 md:mt-0">
                <span className="text-red-400">{">"}</span> Coming Soon!
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
