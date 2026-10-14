"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
    ChevronDown,
    Menu,
    Moon,
    Sun,
    MessageSquare,
    Languages
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

// --- Language Dictionary ---
const dictionary = {
    en: {
        features: "Features",
        templates: "Templates",
        pricing: "Pricing",
        tools: "Tools",
        resources: "Resources",
        signup: "Sign up",
        login: "Log in",
    },
    bn: {
        features: "ফিচার",
        templates: "টেমপ্লেট",
        pricing: "প্রাইসিং",
        tools: "টুলস",
        resources: "রিসোর্স",
        signup: "সাইন আপ",
        login: "লগ ইন",
    },
};

const navLinks = [
    { title: "features", href: "#" },
    { title: "templates", href: "#", items: ["Sprint", "Kanban", "Icebreaker"] },
    { title: "pricing", href: "#" },
    { title: "tools", href: "#", items: ["Timer", "Voting", "Analytics"] },
    { title: "resources", href: "#", items: ["Blog", "Docs", "Community"] },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [lang, setLang] = React.useState<"en" | "bn">("en");
    const [mounted, setMounted] = React.useState(false);

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const t = dictionary[lang];

    const toggleLanguage = () => {
        setLang((prev) => (prev === "en" ? "bn" : "en"));
    };

    if (!mounted) return null;

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/80">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative flex size-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                        <MessageSquare className="size-4" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Smart Seller <span className="text-orange-500">OS</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        link.items ? (
                            <DropdownMenu key={link.title} modal={false}>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                                        {t[link.title as keyof typeof t]}
                                        <ChevronDown className="size-3" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="center" className="w-48 rounded-xl">
                                    {link.items.map((item) => (
                                        <DropdownMenuItem key={item} className="cursor-pointer rounded-lg">
                                            {item}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                            >
                                {t[link.title as keyof typeof t]}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2">

                    {/* Theme Toggle */}
                    <div className="hidden sm:flex items-center rounded-full bg-neutral-100 p-0.5 dark:bg-neutral-800">
                        <button
                            onClick={() => setTheme("light")}
                            className={cn(
                                "flex size-7 items-center justify-center rounded-full transition-colors",
                                theme === "light"
                                    ? "bg-white text-orange-500 shadow-sm dark:bg-neutral-700 dark:text-orange-400"
                                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                            )}
                            aria-label="Light mode"
                        >
                            <Sun className="size-3.5" />
                        </button>
                        <button
                            onClick={() => setTheme("dark")}
                            className={cn(
                                "flex size-7 items-center justify-center rounded-full transition-colors",
                                theme === "dark"
                                    ? "bg-white text-blue-500 shadow-sm dark:bg-neutral-700 dark:text-blue-400"
                                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                            )}
                            aria-label="Dark mode"
                        >
                            <Moon className="size-3.5" />
                        </button>
                    </div>

                    {/* Language Toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleLanguage}
                        className="hidden sm:flex items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                        <Languages className="size-3.5" />
                        {lang === "en" ? "EN" : "BN"}
                    </Button>

                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-2 ml-2">
                        <Button variant="ghost" className="rounded-full text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                            {t.signup}
                        </Button>
                        <Button className="rounded-full bg-neutral-900 px-5 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                            {t.login}
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden rounded-full text-neutral-600 dark:text-neutral-400">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-75 rounded-l-2xl border-l border-black/5 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/95">
                            <div className="flex flex-col gap-6 pt-8">
                                {/* Mobile Nav Links */}
                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.title}
                                            href={link.href}
                                            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                                        >
                                            {t[link.title as keyof typeof t]}
                                        </Link>
                                    ))}
                                </nav>

                                <hr className="border-black/5 dark:border-white/10" />

                                {/* Mobile Settings */}
                                <div className="flex flex-col gap-4 px-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Theme</span>
                                        <div className="flex items-center rounded-full bg-neutral-100 p-0.5 dark:bg-neutral-800">
                                            <button
                                                onClick={() => setTheme("light")}
                                                className={cn(
                                                    "flex size-7 items-center justify-center rounded-full transition-colors",
                                                    theme === "light" ? "bg-white text-orange-500 shadow-sm dark:bg-neutral-700 dark:text-orange-400" : "text-neutral-500"
                                                )}
                                            >
                                                <Sun className="size-3.5" />
                                            </button>
                                            <button
                                                onClick={() => setTheme("dark")}
                                                className={cn(
                                                    "flex size-7 items-center justify-center rounded-full transition-colors",
                                                    theme === "dark" ? "bg-white text-blue-500 shadow-sm dark:bg-neutral-700 dark:text-blue-400" : "text-neutral-500"
                                                )}
                                            >
                                                <Moon className="size-3.5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Language</span>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={toggleLanguage}
                                            className="rounded-full px-3 text-xs font-semibold"
                                        >
                                            <Languages className="mr-1.5 size-3.5" />
                                            {lang === "en" ? "English" : "বাংলা"}
                                        </Button>
                                    </div>
                                </div>

                                <hr className="border-black/5 dark:border-white/10" />

                                {/* Mobile Auth Buttons */}
                                <div className="flex flex-col gap-3 px-3">
                                    <Button variant="outline" className="w-full rounded-full dark:border-white/10 dark:text-white">
                                        {t.signup}
                                    </Button>
                                    <Button className="w-full rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                                        {t.login}
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    );
}