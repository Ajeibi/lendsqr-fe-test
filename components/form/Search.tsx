'use client';

import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchInput() {
    return (
        <div className="z">
            <Input
                type="text"
                placeholder="Search for anything"
                className="pl-10 pr-[120px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#213F7D]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
    );
}
