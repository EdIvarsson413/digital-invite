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
                    "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-purple-900"
                }
                bodyClassName={() => "text-lg font-white font-med block p-3"}
                autoClose={3500}
            />
        </>
    );
}
