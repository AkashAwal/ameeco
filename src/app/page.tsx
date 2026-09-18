import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[480px] flex-col items-center overflow-x-hidden bg-[var(--background)]">
      <header className="flex w-full flex-col items-center pt-0">
        <Image
          src="/logo.webp"
          alt="Ameeco"
          width={220}
          height={200}
          priority
          className="h-auto w-[130px]"
        />
        <div className="-mt-4 w-full h-px bg-white" />
      </header>

      <main className="flex w-full max-w-2xl flex-1 flex-col items-center px-6 py-5 text-center">
        <h1
          className="heading-stroke font-[family-name:var(--font-heading)] text-3xl tracking-tight"
          style={{ color: "#5e3825" }}
        >
          NYC Style Cookies & Authentic Italian Gelato.
        </h1>
        <p
          className="mt-3 max-w-md text-lg text-[#5e3825]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Gooey NYC-style cookies. Creamy Italian gelato. Made fresh daily,
          right here in Gurgaon.
        </p>

        <Image
          src="/mascot-gelato.webp"
          alt=""
          width={260}
          height={260}
          className="mt-3 w-[150px]"
        />

        <Link
          href="/join"
          className="playful-btn playful-btn-jump mt-5"
          style={{ position: "relative", top: "10px" }}
        >
          Join the list
        </Link>
      </main>

      <section className="w-full max-w-2xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2
            className="heading-stroke font-[family-name:var(--font-heading)] text-3xl tracking-tight"
            style={{ color: "#5e3825" }}
          >
            Meet the founder
          </h2>

          <div className="shrink-0 rounded-3xl border-4 border-[#5e3825] bg-white p-2 pb-4 shadow-[6px_6px_0_0_#5e382555]">
            <Image
              src="/ipsita.webp"
              alt="Iipsita Gupta, founder of Ameeco"
              width={360}
              height={480}
              className="h-[320px] w-[240px] rounded-2xl object-cover"
            />
            <p
              className="mt-[15px] text-center text-3xl tracking-wide text-[#5e3825]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              IIPSITA GUPTA
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p
              className="text-lg text-[#5e3825]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ameeco began with a craving that turned into a calling. Our
              founder, Iipsita Gupta, a pastry and gelato chef, has always
              felt a deep, soulful connection to desserts &mdash; specifically
              cookie and gelato &mdash; the way a single bite can hold a
              memory, a mood, a moment of pure joy. She dreamt of sharing that
              joy with everyone around her, of making it easily accessible
              right in the heart of Gurgaon, at the Galleria. Ameeco is her
              open invitation to the city: come one, come all, and bless your
              tastebuds.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-2xl px-6 py-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            className="heading-stroke font-[family-name:var(--font-heading)] text-3xl tracking-tight"
            style={{ color: "#5e3825" }}
          >
            Launching September 25
          </h2>
          <p
            className="max-w-md text-lg text-[#5e3825]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Mark your calendars &mdash; Ameeco opens its doors at The
            Galleria, Gurgaon on September 25.
          </p>
        </div>
      </section>

      <section className="w-full max-w-2xl px-6 py-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            className="heading-stroke font-[family-name:var(--font-heading)] text-3xl tracking-tight"
            style={{ color: "#5e3825" }}
          >
            Follow us on Instagram
          </h2>
          <a
            href="https://www.instagram.com/ameeco.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-[3px] border-[#5e3825] bg-white px-5 py-2 text-lg text-[#5e3825] shadow-[3px_3px_0_0_#5e382555] transition-transform hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55 2.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.31-.88-.35-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35C9.01 3.81 9.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm6.56-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
            </svg>
            @ameeco.in
          </a>
        </div>
      </section>

      <section className="w-full max-w-2xl px-6 pt-14 text-center">
        <h2
          className="heading-stroke font-[family-name:var(--font-heading)] text-3xl tracking-tight"
          style={{ color: "#5e3825" }}
        >
          Tick tock, Gurgaon.
        </h2>
        <p
          className="mt-3 text-lg text-[#5e3825]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Keep your eyes peeled, something sweet drops on September 25.
        </p>
      </section>

      <section className="w-full">
        <Image
          src="/end-2.webp"
          alt="A fresh baked cookie, ready for you"
          width={1000}
          height={1000}
          className="h-auto w-full"
        />
      </section>
    </div>
  );
}
