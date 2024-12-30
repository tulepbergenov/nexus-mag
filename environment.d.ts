import "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CANONICAL_URL: string;
    }
  }
}
