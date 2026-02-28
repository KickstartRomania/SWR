"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  /** Light variant for use on dark backgrounds (e.g. blue commitment card) */
  variant?: "default" | "light";
  name?: string;
}

export function CustomSelect({
  id,
  options,
  placeholder = "Select an option",
  required = false,
  value: controlledValue,
  onChange,
  className = "",
  variant = "default",
  name,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(controlledValue ?? "");
  const [dropdownRect, setDropdownRect] = useState({ top: 0, left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const selectedOption = options.find((o) => o.value === value);
  const displayText = selectedOption?.label ?? placeholder;

  const isLight = variant === "light";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const updateRect = () => {
        if (buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          setDropdownRect({
            top: rect.bottom + 8,
            left: rect.left,
            width: rect.width,
          });
        }
      };
      updateRect();
      window.addEventListener("scroll", updateRect, true);
      window.addEventListener("resize", updateRect);
      return () => {
        window.removeEventListener("scroll", updateRect, true);
        window.removeEventListener("resize", updateRect);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  const handleSelect = (option: SelectOption) => {
    const newValue = option.value;
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index?: number) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isOpen && index === undefined) {
        setIsOpen(true);
      } else if (isOpen && index !== undefined) {
        handleSelect(options[index]);
      }
    }
    if (e.key === "ArrowDown" && !isOpen) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <input
        type="hidden"
        id={id}
        name={name ?? id}
        value={value}
        required={required}
        readOnly
      />
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        onKeyDown={(e) => handleKeyDown(e)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${id}-label`}
        className={`
          w-full px-4 py-3 rounded-xl font-medium text-left
          flex items-center justify-between gap-3
          cursor-pointer transition-all duration-200
          border-2 focus:outline-none focus:ring-2 focus:ring-sw-blue focus:ring-offset-2
          ${isLight
            ? "doodle-border doodle-shadow bg-white text-foreground border-foreground hover:border-sw-blue hover:shadow-[4px_4px_0px_var(--foreground)]"
            : "doodle-border doodle-shadow bg-white text-foreground border-foreground hover:border-sw-blue hover:shadow-[8px_8px_0px_var(--foreground)] active:shadow-[3px_3px_0px_var(--foreground)] active:translate-x-[2px] active:translate-y-[2px]"
          }
        `}
      >
        <span className={!selectedOption ? "text-foreground/60" : ""}>{displayText}</span>
        <span
          className={`inline-block transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              role="listbox"
              aria-labelledby={`${id}-label`}
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                absolute z-[9999] py-2
                doodle-border doodle-shadow rounded-xl overflow-hidden
                bg-white
                shadow-[6px_6px_0px_var(--foreground)]
              "
              style={{
                top: dropdownRect.top,
                left: dropdownRect.left,
                width: dropdownRect.width,
                position: "fixed",
              }}
            >
            {options.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onClick={() => handleSelect(option)}
                className={`
                  px-4 py-3 cursor-pointer font-medium
                  transition-colors duration-150
                  ${value === option.value
                    ? "bg-sw-blue-washed text-sw-navy border-l-4 border-l-sw-blue"
                    : "hover:bg-sw-blue-washed/70 text-foreground"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    {value === option.value && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  {option.label}
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
