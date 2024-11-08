"use client";

import { cn, updateUrl } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export interface TabTypes {
    name: string;
    href: string;
}

interface Props {
    tabs: TabTypes[];
}

export default function Tabs({ tabs }: Props) {
    const currentTab = useSearchParams().get("tab") || tabs[0].href;
    const router = useRouter();

    return (
        <div className="py-4 px-3">
            <nav className="-mb-px flex space-x-8 " aria-label="Tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() =>
                            router.push(
                                updateUrl("tab", tab.href, ["query", "specialist", "page"])
                            )
                        }
                        className={cn(
                            tab.href === currentTab
                                ? "border-[#213F7D] border-b-4 text-[#213F7D]"
                                : "text-[#4F5E71CC]",
                            "group inline-flex justify-between gap-20 items-center py-1 px-1 text-[15px] font-normal transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap"
                        )}
                    >
                        <span>{tab.name}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
