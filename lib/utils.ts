'use client';

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";
import { useRouter } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => z.object({
  // sign up
  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  city: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  state: type === 'sign-in' ? z.string().optional() : z.string().min(2).max(10),
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  // both
  email: z.string().email(),
  password: z.string().min(8),
})

export function getUserInitials(fullName: string) {
  const [firstName, lastName] = fullName.split(" ");
  return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
}

export const getStoredUser = () => {
  if (typeof window !== "undefined") {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    return storedUser;
  }
  return { firstName: '', lastName: '' };
};

export const logout = (router: ReturnType<typeof useRouter>) => {
  localStorage.removeItem('user');
  document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  router.push('/sign-in');
};

export function updateUrl(
  param: string,
  value: number | string,
  removeItems?: string[]
) {
  if (typeof window === "undefined") return "";

  const parsedUrl = new URL(window.location.href);

  parsedUrl.searchParams.set(param, value.toString());

  removeItems?.map((item) => {
    parsedUrl.searchParams.delete(item);
  });

  return parsedUrl.toString();
}