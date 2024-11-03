/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type SignUpParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    dateOfBirth: string;
    email: string;
    password: string;
};

declare type LoginUser = {
    email: string;
    password: string;
};

declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    dateOfBirth: string;
};

declare type NewUserParams = {
    userId: string;
    email: string;
    name: string;
    password: string;
};

declare type Status = "Active" | "Inactive" | "Blacklisted" | "Pending";

declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
}

declare interface PaginationProps {
    page: number;
    totalPages: number;
}

declare interface AuthFormProps {
    type: "sign-in" | "sign-up";
}