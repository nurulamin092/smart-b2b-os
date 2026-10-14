"use client";

import { useLanguage } from "@/context/language-context";
import {
    Users,
    PlayCircle,
    CheckCircle2,
    ArrowRight,
    Video,
    UserShield
} from "lucide-react";
import HowItWorksCard from "./How_It_Work2";

// --- Language Dictionary ---
const dictionary = {
    en: {
        sectionTitle: "Start seller operations from the channels your ",
        sectionDesc: "Connect Facebook Messenger, WhatsApp, and SMS right into your workspace. The platform natively links incoming messages to order entries without making you open separate tabs.",
        badge: "Smart Seller OS Teams",
        mainTitle: "Manage customer conversations directly inside your orders.",
        mainDesc: "Add automated confirmation workflows or respond manually. Import incoming orders from chats, update stock counts instantly, and handle customer replies from one centralized inbox.",
        linkText: "See how the messaging integration works",
        feature1Title: "Start where chats happen",
        feature1Desc: "Pull messages directly from external channels into a single unified workspace.",
        feature2Title: "Customer context included",
        feature2Desc: "A customer's full profile, 360° purchase history, and risk breakdown are immediately visible beside the chat.",
        feature3Title: "Production ready",
        feature3Desc: "Equipped with secure multi-tenant isolation and fast server-side validation rules.",
    },
    bn: {
        sectionTitle: "কাস্টমারদের ব্যবহৃত পরিচিত প্ল্যাটফর্ম থেকেই ",
        sectionDesc: "ফেসবুক মেসেঞ্জার, হোয়াটসঅ্যাপ এবং এসএমএস সরাসরি আপনার ওয়ার্কস্পেসে যুক্ত করুন। আলাদা ট্যাব না খুলেই প্রতিটি মেসেজকে সরাসরি অর্ডার হিস্ট্রির সাথে যুক্ত করে দেবে আমাদের প্ল্যাটফর্ম।",
        badge: "টিমস",
        mainTitle: "অর্ডারের ভেতরেই কাস্টমারের কথোপকথন ম্যানেজ করুন।",
        mainDesc: "চ্যাট থেকেই সরাসরি নতুন অর্ডার তৈরি করুন, ইনভেন্টরি আপডেট করুন এবং একটি সেন্ট্রালাইজড ইনবক্স থেকে কাস্টমারের সব রিপ্লাইয়ের উত্তর দিন। একই সাথে অটোমেটেড কনফার্মেশন মেসেজও সেট করতে পারবেন।",
        linkText: "মেসেজিং ইন্টিগ্রেশন কীভাবে কাজ করে?",
        feature1Title: "চ্যাট থেকেই কাজ শুরু",
        feature1Desc: "ফেসবুক ও হোয়াটসঅ্যাপের মেসেজগুলো সরাসরি একটি সেন্ট্রালাইজড ওয়ার্কস্পেসে নিয়ে আসুন।",
        feature2Title: "কাস্টমার হিস্ট্রি হাতের নাগালে",
        feature2Desc: "চ্যাটের পাশেই কাস্টমারের প্রোফাইল, সম্পূর্ণ কেনাকাটার ইতিহাস এবং রিস্ক স্কোর এক নজরে দেখে নিন।",
        feature3Title: "সম্পূর্ণ নিরাপদ",
        feature3Desc: "হাই-পারফরম্যান্স সার্ভার-সাইড ভ্যালিডেশন এবং সুরক্ষিত মাল্টি-ট্যানেন্ট আর্কিটেকচার দ্বারা তৈরি।",
    }
};

export default function HowItWorks() {
    const { lang } = useLanguage();

    const t = dictionary[lang];

    return (
        <section className="relative w-full py-16 sm:py-24">
            <div className="main-layout">

                {/* Header Area */}
                <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:gap-12 lg:items-end">
                    <h2 className="text-heading">
                        {t.sectionTitle} {lang === 'en' ? <span className="hero-shimmer bg-clip-text text-transparent">customers already use</span> : <span className="hero-shimmer bg-clip-text text-transparent">সেলার অপারেশন শুরু করুন।</span>}
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400 lg:pb-2">
                        {t.sectionDesc}
                    </p>
                </div>

                {/* Main Card */}
                <div className="overflow-hidden rounded-[2.5rem] bg-[#FCFAF8] p-6 ring-1 ring-black/5 sm:p-10 lg:p-14 dark:bg-[#141414] dark:ring-white/10">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* Left Side: Teams Mockup */}
                        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                            <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-lg ring-1 ring-white/10">
                                {/* Mockup Header */}
                                <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded bg-orange-500 p-1 text-white">
                                            <UserShield />
                                        </div>
                                        <span className="text-xs font-medium text-white/90">Customer Conversation</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-[11px] font-medium text-white/60">
                                        <span>Posts</span>
                                        <span>Files</span>
                                        <span className="rounded bg-white/10 px-2 py-0.5 text-white">HeyRetro</span>
                                    </div>
                                </div>

                                {/* Mockup Body */}
                                <div className="p-5">
                                    <div className="flex gap-3">
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                                            NK
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-xs font-semibold text-white">Nora</span>
                                                <span className="text-[10px] text-white/40">9:41 AM</span>
                                            </div>
                                            <p className="text-sm text-white/80">
                                                I just sent the payment confirmation details for my recent order. Let me know when it's shipped!
                                            </p>

                                            {/* Inner Card */}
                                            <div className="mt-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                                                <div className="flex items-start gap-3">
                                                    <div className="flex size-8 shrink-0 items-center justify-center rounded bg-[#ff6f42]/20 text-[#ff6f42]">
                                                        <Video className="size-4" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-sm font-semibold text-white">Order #ORD-10231</h4>
                                                        <p className="text-[11px] text-white/50">Premium Cotton T-Shirt · Total: ৳1,250</p>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex items-center justify-between">
                                                    <button className="flex items-center gap-1 rounded bg-orange-500 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-black">
                                                        View Details <ArrowRight className="size-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="flex flex-col items-start">
                            {/* Badge */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-200/50 px-3 py-1 text-sm font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                                <Users className="size-4" />
                                {t.badge}
                            </div>

                            <h3 className="mb-4 text-2xl font-medium tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                                {t.mainTitle}
                            </h3>

                            <p className="mb-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                {t.mainDesc}
                            </p>

                            <p className="mb-10 inline-flex items-center text-sm font-medium text-neutral-900 hover:underline dark:text-white">
                                {t.linkText}
                            </p>

                            {/* Features Grid */}
                            <div className="grid w-full gap-4 sm:grid-cols-3">
                                {/* Feature 1 */}
                                <div className="rounded-2xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5">
                                    <PlayCircle className="mb-3 size-5 text-[#ff6f42]" />
                                    <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">{t.feature1Title}</h4>
                                    <p className="text-xs leading-5 text-neutral-600 dark:text-neutral-400">{t.feature1Desc}</p>
                                </div>

                                {/* Feature 2 */}
                                <div className="rounded-2xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5">
                                    <Users className="mb-3 size-5 text-[#ff6f42]" />
                                    <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">{t.feature2Title}</h4>
                                    <p className="text-xs leading-5 text-neutral-600 dark:text-neutral-400">{t.feature2Desc}</p>
                                </div>

                                {/* Feature 3 */}
                                <div className="rounded-2xl bg-neutral-100 p-5 ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/5">
                                    <CheckCircle2 className="mb-3 size-5 text-[#ff6f42]" />
                                    <h4 className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">{t.feature3Title}</h4>
                                    <p className="text-xs leading-5 text-neutral-600 dark:text-neutral-400">{t.feature3Desc}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <HowItWorksCard />
            </div>
        </section>
    );
}