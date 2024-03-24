"use client";

import { createContext, useState } from "react";


export const GlobalContext = createContext(null);


export const initialCheckoutFormData = {
    shippingAddress: {},
    paymentMethod: "",
    totalPrice: 0,
    isPaid: false,
    paidAt: new Date(),
    isProcessing: true,
};


const protectedRoutes = ["cart", "checkout", "account", "orders", "admin-view"];

const protectedAdminRoutes = [
  "/admin-view",
  "/admin-view/add-product",
  "/admin-view/all-products",
];


export default function GlobalState({ children }) {
    const [showNavModal, setShowNavModal] = useState(false);

    const [isAuthUser, setIsAuthUser] = useState(null);
    const [user, setUser] = useState(null);


    return (
        <GlobalContext.Provider
            value={{
                showNavModal,
                setShowNavModal,
                isAuthUser,
                setIsAuthUser,
                user,
                setUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}