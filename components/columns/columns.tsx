"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
    id: number;
    orgName: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
};

function getStatusClasses(status: string): { textClass: string; bgClass: string } {
    switch (status.toLowerCase()) {
        case "blacklisted":
            return { textClass: "text-red-600", bgClass: "bg-red-100" };
        case "pending":
            return { textClass: "text-yellow-500", bgClass: "bg-yellow-100" };
        case "inactive":
            return { textClass: "text-gray-500", bgClass: "bg-gray-100" };
        case "active":
            return { textClass: "text-green-600", bgClass: "bg-green-100" };
        default:
            return { textClass: "text-black", bgClass: "bg-gray-100" };
    }
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "orgName",
        header: "Organisation",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone Number",
    },
    {
        accessorKey: "dateJoined",
        header: "Date Joined",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            const { textClass, bgClass } = getStatusClasses(status);
            return (
                <span className={`inline-block px-3 py-1 rounded-2xl ${textClass} ${bgClass}`}>
                    {status}
                </span>
            );
        },
    },
];
