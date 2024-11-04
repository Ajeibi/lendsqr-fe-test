'use client';

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import './styles.scss';

const FilterPopover = () => {
    const [filters, setFilters] = useState({
        organisation: "",
        username: "",
        email: "",
        phoneNumber: "",
        dateJoined: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyFilter = () => {
        console.log(filters);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Image
                    src="/icons/filter.png"
                    alt="Filter icon"
                    width={16}
                    height={16}
                    className="trigger"
                />
            </PopoverTrigger>
            <PopoverContent className="popovercontent shadow">
                <div className="space-y-2">
                    <label className="block">
                        Organisation
                        <input
                            type="text"
                            name="organisation"
                            value={filters.organisation}
                            onChange={handleChange}
                            className="input"
                        />
                    </label>
                    <label className="block">
                        Username
                        <input
                            type="text"
                            name="username"
                            value={filters.username}
                            onChange={handleChange}
                            className="input"
                        />
                    </label>
                    <label className="block">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={filters.email}
                            onChange={handleChange}
                            className="input"
                        />
                    </label>
                    <label className="block">
                        Phone Number
                        <input
                            type="text"
                            name="phoneNumber"
                            value={filters.phoneNumber}
                            onChange={handleChange}
                            className="input"
                        />
                    </label>
                    <label className="block">
                        Date Joined
                        <input
                            type="date"
                            name="dateJoined"
                            value={filters.dateJoined}
                            onChange={handleChange}
                            className="input"
                        />
                    </label>
                    <label className="block">
                        Status
                        <select
                            name="status"
                            value={filters.status}
                            onChange={handleChange}
                            className="input"
                        >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="inactive">Blacklisted</option>
                            <option value="inactive">Pending</option>
                        </select>
                    </label>
                </div>
                <Button
                    onClick={handleApplyFilter}
                    className="btn"
                >
                    Apply Filter
                </Button>
            </PopoverContent>
        </Popover>
    );
};

export default FilterPopover;