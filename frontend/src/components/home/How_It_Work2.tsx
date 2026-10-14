"use client";

import { useLanguage } from "@/context/language-context";
import {
    Terminal,
    Key,
    PencilRuler,
    CheckCircle2,
    Copy,
    LayersArrowUp,
} from "lucide-react";

// --- Language Dictionary ---
const dictionary = {
    en: {
        badge: "AI / Intelligence Layer",
        mainTitle: "Audit order fraud\nfrom your business desk.",
        mainDesc: "Connect Smart Seller OS's intelligence layer to your dashboard. Automatically calculate multi-signal risk scores or query hidden business patterns with automated risk factor explainability. The seller always stays in control.",

        feature1Title: "Works with any sales channel",
        feature1Desc: "Analyze signals seamlessly across Facebook, WhatsApp, or manual COD entries.",
        feature2Title: "Scoped fraud API keys",
        feature2Desc: "Secure tokens use permission-based scopes like fraud.read and fraud.override. Revoke them anytime.",
        feature3Title: "Insights right from your inbox",
        feature3Desc: "Check customer risk scores, cancellation history, and fake-order metrics without leaving the chat.",

        // Mockup strings
        mockPrompt: "Why did my revenue decrease this week? Check order fraud.",
        mockToolName: "smart_seller_os · analyze_fraud_risk",
        mockDone: "done",
        mockTeam: "status",
        mockTeamValue: "CRITICAL RISK",
        mockTemplate: "factors",
        mockTemplateValue: "4 failed deliveries + repeated phone number",
        mockResultTitle: "Analysis complete. The system detected high-risk COD indicators. Flagging order for explicit seller review.",
        mockLink: "smartseller.os/api/v1/fraud/ORD-10231",
    },
    bn: {
        badge: "AI / ইন্টেলিজেন্স লেয়ার",
        mainTitle: "আপনার ডেস্ক থেকেই\nফেক অর্ডার ট্র্যাক করুন।",
        mainDesc: "Smart Seller OS-এর ইন্টেলিজেন্স লেয়ারটি আপনার ড্যাশবোর্ডের সাথে কানেক্ট করুন। কাস্টমারের একাধিক সিগন্যাল ট্র্যাক করে অটোমেটিক রিস্ক স্কোর হিসাব করুন এবং নিখুঁত ব্যাখ্যা সহ ব্যবসায়িক ক্ষতির ঝুঁকি দূর করুন। চূড়ান্ত সিদ্ধান্ত সবসময় সেলারেরই থাকবে।",

        feature1Title: "যেকোনো সেলস চ্যানেলে কাজ করে",
        feature1Desc: "ফেসবুক, হোয়াটসঅ্যাপ বা ম্যানুয়াল ক্যাশ অন ডেলিভারি (COD) সব জায়গার অর্ডার সিগন্যাল একসাথে অ্যানালাইসিস করুন।",
        feature2Title: "সুরক্ষিত ফ্রড প্রিভেনশন এপিআই (API)",
        feature2Desc: "টোকেনগুলো সরাসরি fraud.read এবং fraud.override পারমিশন অনুযায়ী কাজ করে। প্রয়োজন অনুযায়ী যেকোনো সময় রিভোক করতে পারবেন।",
        feature3Title: "ইনবক্স থেকেই রিস্ক ইনসাইট",
        feature3Desc: "চ্যাট উইন্ডো না ছেড়েই কাস্টমারের রিস্ক স্কোর, পূর্বের ক্যান্সেলেশন হিস্ট্রি এবং ফেক-অর্ডার মেট্রিক্স চেক করুন।",

        // Mockup strings
        mockPrompt: "এই সপ্তাহে কেন রেভিনিউ কমে গেল? ফ্রড অর্ডারগুলো চেক করো।",
        mockToolName: "smart_seller_os · analyze_fraud_risk",
        mockDone: "সম্পন্ন",
        mockTeam: "স্ট্যাটাস",
        mockTeamValue: "CRITICAL RISK",
        mockTemplate: "কারণসমূহ",
        mockTemplateValue: "৪টি ডেলিভারি ফেইল + একই ফোন নাম্বারের পুনরাবৃত্তি",
        mockResultTitle: "অ্যানালাইসিস সম্পন্ন। সিস্টেমে উচ্চ-ঝুঁকিপূর্ণ COD ইন্ডিকেটর পাওয়া গেছে। অর্ডারটি সেলার রিভিউ কিউতে পাঠানো হলো।",
        mockLink: "smartseller.os/api/v1/fraud/ORD-10231",
    }
};

export default function HowItWorksCard() {
    const { lang } = useLanguage();
    const t = dictionary[lang];

    return (
        <section className="relative w-full py-8 sm:py-16">
            <div className="">

                {/* Main Card Wrapper */}
                <div className="overflow-hidden rounded-[2.5rem] bg-[#FCFAF8] p-6 ring-1 ring-black/5 sm:p-10 lg:p-14 dark:bg-[#141414] dark:ring-white/10">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* Left Side: Content */}
                        <div className="flex flex-col items-start">
                            {/* Badge */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-200/50 px-3 py-1.5 text-xs font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                                <Terminal className="size-3.5" />
                                {t.badge}
                            </div>

                            {/* Title with whitespace-pre-line to handle line breaks */}
                            <h2 className="text-heading mb-4">
                                {t.mainTitle}
                            </h2>

                            <p className="mb-8 max-w-lg text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                {t.mainDesc}
                            </p>

                            {/* Features List */}
                            <div className="w-full space-y-3">
                                {/* Feature 1 */}
                                <div className="flex gap-4 rounded-2xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5">
                                    <LayersArrowUp className="mt-0.5 size-5 shrink-0 text-[#ff6f42]" />
                                    <div>
                                        <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">{t.feature1Title}</h4>
                                        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{t.feature1Desc}</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-4 rounded-2xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5">
                                    <Key className="mt-0.5 size-5 shrink-0 text-orange-500" />
                                    <div>
                                        <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">{t.feature2Title}</h4>
                                        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{t.feature2Desc}</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex gap-4 rounded-2xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5">
                                    <PencilRuler className="mt-0.5 size-5 shrink-0 text-[#ff6f42]" />
                                    <div>
                                        <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">{t.feature3Title}</h4>
                                        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{t.feature3Desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: AI Client Mockup */}
                        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                            <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-2xl ring-1 ring-white/10">

                                {/* Mockup Header (Window Controls) */}
                                <div className="flex items-center gap-2 border-b border-white/5 bg-[#141414] px-4 py-3">
                                    <div className="flex gap-1.5">
                                        <div className="size-3 rounded-full bg-[#FF5F56]"></div>
                                        <div className="size-3 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="size-3 rounded-full bg-[#27C93F]"></div>
                                    </div>
                                    <div className="ml-4 flex items-center gap-2 text-xs font-medium text-white/50">
                                        <Terminal className="size-3.5" />
                                        AI client
                                    </div>
                                </div>

                                {/* Mockup Body */}
                                <div className="p-5 sm:p-6 space-y-6">

                                    {/* User Prompt Bubble */}
                                    <div className="flex justify-end">
                                        <div className="rounded-2xl rounded-tr-sm bg-orange-500 px-4 py-3 text-sm font-medium text-white shadow-sm">
                                            {t.mockPrompt}
                                        </div>
                                    </div>

                                    {/* AI Action Block */}
                                    <div className="rounded-xl bg-[#222222] p-4 ring-1 ring-white/5">
                                        {/* Tool Header */}
                                        <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="flex size-6 items-center justify-center rounded bg-[#ff6f42]/20 text-[#ff6f42]">
                                                    <Terminal className="size-3.5" />
                                                </div>
                                                <span className="font-mono text-xs text-white/80">{t.mockToolName}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                                                <CheckCircle2 className="size-3" />
                                                {t.mockDone}
                                            </div>
                                        </div>

                                        {/* Tool Params */}
                                        <div className="mt-3 grid grid-cols-[80px_1fr] gap-y-2 text-xs">
                                            <span className="font-mono text-white/40">{t.mockTeam}</span>
                                            <span className="text-white/80">{t.mockTeamValue}</span>

                                            <span className="font-mono text-white/40">{t.mockTemplate}</span>
                                            <span className="text-white/80">{t.mockTemplateValue}</span>
                                        </div>
                                    </div>

                                    {/* AI Response */}
                                    <div className="flex gap-4">
                                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 mt-0.5">
                                            {/* Simple AI Icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-white/70">
                                                <path d="M12 8V4H8"></path>
                                                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                                                <path d="M2 14h2"></path>
                                                <path d="M20 14h2"></path>
                                                <path d="M15 13v2"></path>
                                                <path d="M9 13v2"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}