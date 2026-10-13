"use client"

import { MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <>
            <style jsx global>{`
        .hero-shimmer {
          background-image: linear-gradient(90deg, #a3a3a3, #171717, #a3a3a3, #171717, #a3a3a3);
          background-position: center;
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        :where(.dark) .hero-shimmer {
          background-image: linear-gradient(90deg, #525252, #fff, #525252, #fff, #525252);
        }
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
      `}</style>

            <section className="relative isolate overflow-hidden px-6 pt-10 lg:px-8">
                {/* Background Gradient */}
                <div className="pointer-events-none absolute -inset-x-12 -top-12 -z-10 h-[calc(100%+7rem)] rounded-[4rem] bg-linear-to-br from-[#ffe1d2] via-[#fdeee2] to-[#dceefb] opacity-90 blur-3xl sm:-inset-x-24 dark:from-[#ff6f42]/22 dark:via-transparent dark:to-sky-500/14"></div>

                <div className="mx-auto max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-neutral-900 dark:text-white">
                            Run Your Online Store <span className="hero-shimmer bg-clip-text text-transparent">Faster</span>.
                            <br />
                            Eliminate Costly <span className="hero-shimmer bg-clip-text text-transparent">Fake Orders</span>.
                        </h1>
                        <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 dark:text-neutral-400">
                            Stop juggling Facebook Messenger, spreadsheets, and courier dashboards. Centralize your orders, customer conversations, inventory, and delivery tracking in a single, high-performance workspace.
                        </p>
                    </div>

                    {/* Visual Area with Floating Cards */}
                    <div className="relative mt-16 flex justify-center">

                        {/* Left Card (Classic Sprint) */}
                        <div className="absolute top-0 left-20 z-0 hidden w-44 -rotate-6 rounded-xl bg-white p-3.5 shadow-[0_28px_60px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/8 lg:block dark:bg-neutral-900 dark:ring-white/12">
                            <p className="flex items-center gap-2 text-xs font-semibold">
                                <span className="size-2 rounded-full bg-emerald-500"></span> Interactive Dashboard
                            </p>
                            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                                <div className="space-y-1">
                                    <div className="h-1 w-6 rounded-full bg-emerald-500/70"></div>
                                    <div className="h-5 rounded bg-neutral-100 ring-1 ring-black/5 dark:bg-white/8 dark:ring-white/10"></div>
                                    <div className="h-5 rounded bg-neutral-100 ring-1 ring-black/5 dark:bg-white/8 dark:ring-white/10"></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 w-6 rounded-full bg-emerald-500/70"></div>
                                    <div className="h-5 rounded bg-neutral-100 ring-1 ring-black/5 dark:bg-white/8 dark:ring-white/10"></div>
                                    <div className="h-5 rounded bg-neutral-100 ring-1 ring-black/5 dark:bg-white/8 dark:ring-white/10"></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1 w-6 rounded-full bg-emerald-500/70"></div>
                                    <div className="h-5 rounded bg-neutral-100 ring-1 ring-black/5 dark:bg-white/8 dark:ring-white/10"></div>
                                    <div className="h-5 rounded bg-neutral-100 ring-1 ring-black/5 dark:bg-white/8 dark:ring-white/10"></div>
                                </div>
                            </div>
                            <p className="mt-2.5 text-[11px] text-neutral-500 dark:text-white/50">60% Sales</p>
                        </div>

                        {/* Left Card (Icebreaker · This or That) */}
                        <div className="absolute bottom-0 left-20 z-20 hidden w-48 rotate-5 rounded-xl bg-white p-3.5 shadow-[0_28px_60px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/8 lg:block dark:bg-neutral-900 dark:ring-white/12">
                            <p className="text-[11px] font-semibold text-neutral-500 dark:text-white/50">Manage your orders</p>
                            <div className="mt-2 grid grid-cols-2 gap-1.5">
                                <div className="rounded-lg bg-neutral-50 px-2 py-2.5 text-center text-xs font-medium ring-1 ring-black/5 dark:bg-white/6 dark:ring-white/8">Approved</div>
                                <div className="rounded-lg bg-[#fff3ec] px-2 py-2.5 text-center text-xs font-medium ring-2 ring-[#ff6f42] dark:bg-[#ff6f42]/12">Cancel</div>
                            </div>
                            <p className="mt-2 text-center text-[11px] text-[#d05d36] dark:text-[#ff946f]">Spot fake orders</p>
                        </div>

                        {/* Right Card (Microsoft Teams) */}
                        <div className="absolute top-2 right-15 z-20 hidden w-52 rotate-6 rounded-xl bg-white p-3.5 shadow-[0_28px_60px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/8 lg:block dark:bg-neutral-900 dark:ring-white/12">
                            <p className="flex items-center gap-2 text-xs font-semibold">
                                <span className="grid size-5 place-items-center rounded-md bg-[#5b5fc7] text-[10px] font-bold text-white"></span> One Unified Workspace
                            </p>
                            <p className="mt-2 text-xs/5 text-neutral-600 dark:text-white/60">Say goodbye to scattered chats.</p>
                            <span className="mt-2.5 inline-flex items-center gap-1 rounded-lg bg-[#5b5fc7] px-2.5 py-1 text-[11px] font-semibold text-white">
                                Chat Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </span>
                        </div>

                        {/* Right Card (AI client) */}
                        <div className="absolute right-15 bottom-2 z-20 hidden w-52 -rotate-3 rounded-xl bg-neutral-950 p-3.5 shadow-[0_28px_60px_-30px_rgba(15,23,42,0.55)] ring-1 ring-white/12 lg:block">
                            <p className="flex items-center gap-2 text-xs font-semibold text-white/70">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-[#ff946f]">
                                    <path d="M12 8V4H8"></path>
                                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                    <path d="M2 14h2"></path>
                                    <path d="M20 14h2"></path>
                                    <path d="M15 13v2"></path>
                                    <path d="M9 13v2"></path>
                                </svg>
                                AI client
                            </p>

                            <p className="mt-2 text-[11px]/4 text-white/50">
                                Seamlessly track the entire order lifecycle from initial confirmation to successful courier drop-off.</p>
                        </div>

                        {/* Central Image Card */}
                        <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                            <Image
                                src="https://cdn.21st.dev/assets/mirror/a9/a9c7043f8f41ca34d70f771cba29b4ba6d11ef8f5f51c90d21f220fea109d6af.png"
                                alt="Retro board interface"
                                width={1000}
                                height={700}
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="btn-primary">
                            Start Smart Seller OS
                            <MoveRight />
                        </button>
                        <button className="btn-sec">
                            <span className="size-2 rounded-full bg-emerald-500"></span>
                            Dashboard
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                        Guests join free from the board link
                    </p>
                </div>
            </section>
        </>
    );
}