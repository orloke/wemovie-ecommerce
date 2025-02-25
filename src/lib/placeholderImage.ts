import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

export const shimmer = (w: string, h: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#dfdfdf" offset="20%" />
      <stop stop-color="#cdcdcd" offset="50%" />
      <stop stop-color="#dfdfdf" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#dfdfdf" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export const placeholderImage = (w: string, h: string) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}` as PlaceholderValue;
};
