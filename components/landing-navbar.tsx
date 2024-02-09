"use client";

import {Montserrat} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {useAuth} from "@clerk/nextjs";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const font = Montserrat({
    subsets: ["latin"],
    weight: ["600"],
})

export const LandingNavbar = () => {
    const {isSignedIn} = useAuth();



    return (
        <nav>

        </nav>
    )
}