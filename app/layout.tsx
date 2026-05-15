import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InterviewLens — Record & Analyze Technical Interviews for Bias',
  description: 'Record coding interviews, analyze question difficulty, time allocation, and interviewer behavior to identify hiring bias. Built for HR teams at tech companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0d4d99cf-abc1-4689-b235-1cd3c7bdb9a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
