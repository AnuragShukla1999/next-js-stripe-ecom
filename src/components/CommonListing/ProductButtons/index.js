"use client";

import { GlobalContext } from "@/context";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";



export default function ProductButton({ item }) {
    const pathName = usePathname();

    const {
        setCurrentUpdatedProduct,
        setComponentLevelLoader,
        componentLevelLoader, 
        user,
        showCartModal,
        setShowCartModal,
    } = useContext(GlobalContext);

    const router = useRouter();

    const isAdminView = pathName.includes("admin-view");
     
}