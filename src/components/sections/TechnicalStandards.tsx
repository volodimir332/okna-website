"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Droplets, Ruler, Scissors, ScanLine, Maximize, CheckCircle2, ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";

export function TechnicalStandards() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default

    const standards = [
        {
            icon: ScanLine,
            title: "Diagnostika podkladu (CM-metr)",
            description: "Nikdy nelepíme na vlhký nebo nesoudržný podklad. Provádíme měření zbytkové vlhkosti a pevnosti."
        },
        {
            icon: Droplets,
            title: "Profesionální hydroizolace",
            description: "Aplikace bezešvé membrány, bandážování rohů a prostupů. Záruka 100% nepropustnosti sprchového koutu."
        },
        {
            icon: Maximize,
            title: "Metoda Buttering-floating",
            description: "U velkoformátů nanášíme lepidlo na podklad i na dlaždici. Žádné dutiny, žádné praskání."
        },
        {
            icon: Ruler,
            title: "Dodržování norem ČSN",
            description: "Pracujeme přesně podle normy ČSN 73 3451. Garantujeme rovinnost, správný spárořez a precizní řešení dilatací."
        }
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="technicke-standardy" theme="light">
            <SectionHeader
                title="Technická preciznost"
                subtitle="Kvalita, kterou nevidíte na první pohled, ale oceníte ji po letech."
                className="[&>h2]:text-[#A5B4FC]"
            />

            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-stretch">
                {/* Content Side */}
                <div className="md:col-span-7 flex flex-col md:h-[500px] py-4 gap-12 md:gap-20">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-0 leading-tight">
                        Obklad je jen 20 % výsledku.<br />
                        <span className="text-gray-400">Zbytek je pod ním.</span>
                    </h3>

                    <div className="flex flex-col gap-8 mt-8 md:mt-0">
                        {standards.map((item, index) => {
                            const isOpen = openIndex === index;
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    className="pb-2 last:pb-0"
                                >
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full flex items-start gap-4 text-left group cursor-pointer py-2 focus:outline-none"
                                    >
                                        <div className={`flex-shrink-0 mt-1 transition-colors duration-300 ${isOpen ? 'text-[#6B7AE8]' : 'text-gray-900'}`}>
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3">
                                                <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#6B7AE8]' : 'text-gray-900'}`}>
                                                    {item.title}
                                                </h4>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#6B7AE8]' : ''}`}
                                                />
                                            </div>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed mt-2 pr-4 sm:pr-8">
                                                            {item.description}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Visual Side */}
                <div className="md:col-span-5 relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/tech-detail.jpg"
                        alt="Detail nivelačního systému a kvality obkladu"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                    />
                </div>
            </div>
        </Section>
    );
}
