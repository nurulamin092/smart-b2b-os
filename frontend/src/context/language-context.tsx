"use client";

import * as React from "react";

type Language = "en" | "bn";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = React.useState<Language>("en");

    const toggleLanguage = () => {
        setLang((prev) => (prev === "en" ? "bn" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}