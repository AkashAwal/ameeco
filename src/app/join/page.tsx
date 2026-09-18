import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export default function Join() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center overflow-x-hidden bg-[var(--background)]">
      <header className="flex w-full flex-col items-center pt-0">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Ameeco"
            width={220}
            height={200}
            priority
            className="h-auto w-[130px]"
          />
        </Link>
        <div className="-mt-4 w-full h-px bg-white" />
      </header>

      <main className="flex w-full flex-1 flex-col items-center px-6 py-10 text-center">
        <h1
          className="heading-stroke font-[family-name:var(--font-luckiest-guy)] text-3xl tracking-tight"
          style={{ color: "#5e3825" }}
        >
          Join the list
        </h1>
        <p
          className="mt-3 max-w-md text-lg text-[#5e3825]"
          style={{ fontFamily: "var(--font-baloo-2)" }}
        >
          Drop your details and be the first to know when the Galleria store
          opens, plus{" "}
          <span className="font-bold">
            a little surprise waiting just for the early ones.
          </span>
        </p>

        <Image
          src="/mascot-cookies.webp"
          alt=""
          width={260}
          height={260}
          className="mt-3 w-[150px]"
        />

        <SignupForm />

        <Link
          href="/"
          className="mt-8 text-base text-[#5e3825] underline"
          style={{ fontFamily: "var(--font-baloo-2)" }}
        >
          Back to home
        </Link>
      </main>
    </div>
  );
}
