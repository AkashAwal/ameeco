import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the list",
  description:
    "Sign up to be the first to know when Ameeco opens at The Galleria, Gurgaon on September 25, 2026, plus a first-come-first-served surprise for early joiners.",
};

export default function JoinLayout({ children }: LayoutProps<"/join">) {
  return children;
}
