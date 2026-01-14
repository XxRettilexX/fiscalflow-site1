import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", highlight = false }) => {
    return (
        <div
            className={`
        rounded-2xl p-6 transition-all duration-300
        ${highlight
                    ? "bg-fiscal-surface shadow-xl shadow-fiscal-primary/10 border border-fiscal-primary/10"
                    : "bg-fiscal-surface shadow-sm border border-fiscal-border hover:shadow-md"}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
