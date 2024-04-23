"use client";

import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {

    return (
        <>
            {children}
            <ToastContainer
                toastClassName={(context) =>
                    "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-stone-900"
                }
                bodyClassName={() => "text-sm font-white font-med block p-3"}
                position="bottom-right"
                autoClose={3000}
            />
        </>
    );
}
