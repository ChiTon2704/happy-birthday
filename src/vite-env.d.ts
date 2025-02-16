/// <reference types="vite/client" />

declare namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": unknown;
    }
  }
  
  declare module '*.png' {
    const value: number;
    export = value;
  }
  
  declare module '*.jpg' {
    const value: number;
    export = value;
  }
  
  declare module '*.webp' {
    const value: number;
    export = value;
  }