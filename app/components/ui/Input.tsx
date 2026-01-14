import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = "", id, ...props }) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-fiscal-text mb-1.5">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`
          w-full px-4 py-3 rounded-xl border bg-fiscal-surface text-fiscal-text placeholder-fiscal-text-muted/70
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-fiscal-primary/20 focus:border-fiscal-primary
          disabled:bg-fiscal-bg disabled:text-fiscal-text-muted
          ${error ? "border-fiscal-danger focus:border-fiscal-danger focus:ring-fiscal-danger/20" : "border-fiscal-border"}
          ${className}
        `}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-fiscal-danger">{error}</p>}
        </div>
    );
};
