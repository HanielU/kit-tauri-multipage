import { twMerge } from "tailwind-merge";
import type { TransitionConfig } from "svelte/transition";
import { cubicOut } from "svelte/easing";
import { type ClassValue, clsx } from "clsx";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export type FlyAndScaleParams = {
  y?: number;
  x?: number;
  start?: number;
  duration?: number;
};
export const flyAndScale = (
  node: Element,
  params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString = (style: Record<string, number | string | undefined>): string => {
    return Object.keys(style).reduce((str, key) => {
      if (style[key] === undefined) return str;
      return str + key + ":" + style[key] + ";";
    }, "");
  };
  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
      return styleToString({
        transform: transform + "translate3d(" + x + "px, " + y + "px, 0) scale(" + scale + ")",
        opacity: t,
      });
    },
    easing: cubicOut,
  };
};

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// used to ensure only number input from text field
export function setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
    textbox.addEventListener(
      event,
      function (
        this: (HTMLInputElement | HTMLTextAreaElement) & {
          oldValue: string;
          oldSelectionStart: number | null;
          oldSelectionEnd: number | null;
        }
      ) {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
          this.value = this.oldValue;
          if (this.oldSelectionStart !== null && this.oldSelectionEnd !== null) {
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
          }
        } else {
          this.value = "";
        }
      }
    );
  });
}

// make sure only numbers enter input field
export const numbersOnly = (input: HTMLInputElement) => setInputFilter(input, (value) => /^\d*$/.test(value));

export function msToTime(ms: number): string {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);

  const parts = [];
  if (hours > 0) parts.push(`${hours}H`);
  if (minutes > 0) parts.push(`${minutes}M`);
  if (seconds > 0) parts.push(`${seconds}S`);

  return parts.join(" ") || "0S";
}

export function getAvatarFallback(name?: string) {
  return name
    ?.split(" ")
    .map((n) => n[0])
    .join("");
}
