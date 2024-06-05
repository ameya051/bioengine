import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import AnimatedShinyText from '../../magicui/animated-shiny-text'
import { MoveRight } from 'lucide-react'

function GitHubBtn() {
  return (
    <Link
          href="https://github.com/ameya051/ai-twitter-bio-generator"
          target="_blank"
          className=""
        >
          <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Star on Github</span>
                <MoveRight
                  className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  size={16}
                />
              </AnimatedShinyText>
            </div>
          </div>
        </Link>
  )
}

export default GitHubBtn