import { createFileRoute } from "@tanstack/react-router";
import {
  Plane,
  Ship,
  Truck,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
  FileCheck2,
  Headphones,
  PackageSearch,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-cargo.jpg";
import airImage from "@/assets/service-air.jpg";
import oceanImage from "@/assets/service-ocean.jpg";
import roadImage from "@/assets/service-road.jpg";
import warehouseImage from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESD Logistics — Air, Ocean & Road Cargo in Hyderabad" },
      {
        name: "description",
        content:
          "ESD Logistics moves air, ocean and road cargo from Hyderabad. Efficient logistics, superior service, dependable delivery. Call 9100825137.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "ESD Logistics — Air, Ocean & Road Cargo" },
      {
        property: "og:description",
        content:
          "Efficient logistics, superior service, dependable delivery. Air, ocean and road freight from Hyderabad, Telangana.",
      },
      { property: "og:url", content: "https://esdlogistics.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://esdlogistics.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          additionalType: "https://schema.org/MovingCompany",
          name: "ESD Logistics",
          description:
            "Air, ocean and road cargo services from Hyderabad, Telangana, including door-to-door pickup, customs documentation and delivery.",
          url: "https://esdlogistics.lovable.app/",
          email: "esdlogistics2024@gmail.com",
          telephone: "+919100825137",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Building No. 29-1085, Neredmet, Vinayak Nagar",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500056",
            addressCountry: "IN",
          },
          areaServed: "IN",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Cargo services",
            itemListElement: ["Air Cargo", "Ocean Cargo", "Road Cargo"].map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s },
            })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["Services", "#services"],
  ["Why us", "#why"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: Plane,
    image: airImage,
    title: "Air Cargo",
    tagline: "Fast. Reliable. Global.",
    copy: "Priority and consolidated air freight for time-critical consignments, with door-to-airport and door-to-door handling.",
    points: ["Express & general air freight", "Airport pickup and delivery", "Perishable & sensitive cargo"],
  },
  {
    icon: Ship,
    image: oceanImage,
    title: "Ocean Cargo",
    tagline: "Sail Beyond Boundaries.",
    copy: "FCL and LCL sea freight with customs documentation and port clearance across major global trade lanes.",
    points: ["FCL & LCL containers", "Port clearance support", "Break-bulk & project cargo"],
  },
  {
    icon: Truck,
    image: roadImage,
    title: "Road Cargo",
    tagline: "Driven to Deliver.",
    copy: "Full and part truckload movement across India with tracked pickups and scheduled delivery windows.",
    points: ["FTL & PTL across India", "Scheduled pickups", "Last-mile delivery"],
  },
];

const advantages = [
  { icon: Headphones, title: "One point of contact", copy: "A dedicated desk owns your shipment from booking to proof of delivery." },
  { icon: FileCheck2, title: "Paperwork handled", copy: "Customs documentation, e-way bills and shipping papers prepared for you." },
  { icon: ShieldCheck, title: "Careful handling", copy: "Correct packing advice, sealing and cargo insurance guidance on request." },
  { icon: Clock, title: "Responsive updates", copy: "Status shared over call or WhatsApp at every key milestone." },
];

const process = [
  ["01", "Share your cargo", "Tell us the origin, destination, weight and dimensions."],
  ["02", "Get a quote", "We compare air, ocean and road options and quote the best fit."],
  ["03", "Pickup & documentation", "We collect the cargo and prepare all shipping paperwork."],
  ["04", "Delivery & proof", "Cargo is delivered and confirmed back to you with proof."],
];

const industries = [
  "Pharma & healthcare",
  "Engineering goods",
  "Textiles & apparel",
  "Electronics",
  "FMCG & retail",
  "Machinery & spares",
  "E-commerce parcels",
  "Household moves",
];

const faqs = [
  [
    "Which cities and ports do you serve?",
    "We move cargo across India by road and handle air and ocean shipments through major Indian gateways, coordinated from our Hyderabad office.",
  ],
  [
    "Can you handle customs documentation?",
    "Yes. We prepare and coordinate shipping and customs paperwork for both import and export consignments.",
  ],
  [
    "How do I get a quote?",
    "Call 91008 25137 or email esdlogistics2024@gmail.com with origin, destination, weight and dimensions, and we will revert with options.",
  ],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border/50 bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-xs text-muted-foreground">
          <a href="mailto:esdlogistics2024@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
            <Mail className="size-3.5 text-primary" />
            esdlogistics2024@gmail.com
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-primary" />
            Neredmet, Hyderabad, Telangana
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm border border-primary/60">
              <Ship className="size-5 text-primary" strokeWidth={1.3} />
            </span>
            <span className="font-display text-lg leading-none tracking-widest text-gold">
              ESD LOGISTICS
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] text-muted-foreground uppercase md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+919100825137"
            className="rounded-sm bg-primary px-4 py-2 text-xs font-medium tracking-widest text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            91008 25137
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="Cargo plane, container ship and freight truck at a port at night"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
            <div className="max-w-3xl">
              <p className="text-[0.7rem] tracking-[0.45em] text-primary">
                HYDERABAD · TELANGANA · INDIA
              </p>
              <h1 className="mt-6 font-display text-4xl leading-tight text-gold md:text-6xl">
                Freight moved by air, ocean and road
              </h1>
              <div className="rule-gold mt-6 w-56" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                ESD Logistics plans the route, prepares the paperwork and keeps your consignment
                moving — efficient logistics, superior service, dependable delivery.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-widest text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-opacity hover:opacity-90"
                >
                  Request a quote <ArrowRight className="size-4" />
                </a>
                <a
                  href="#services"
                  className="rounded-sm border border-primary/60 px-8 py-3 text-sm font-medium tracking-widest text-primary uppercase transition-colors hover:bg-primary/10"
                >
                  Our services
                </a>
              </div>
            </div>
          </div>

          <div className="relative border-t border-border/60 bg-card/50">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-border/50 px-6 md:grid-cols-4 md:divide-x">
              {[
                ["3 modes", "Air, ocean and road"],
                ["Door to door", "Pickup and delivery"],
                ["Customs ready", "Documentation handled"],
                ["Pan-India", "Road network coverage"],
              ].map(([term, detail]) => (
                <div key={term} className="px-2 py-6 text-center md:px-6">
                  <dt className="font-display text-lg text-primary md:text-xl">{term}</dt>
                  <dd className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="text-center">
            <p className="text-[0.7rem] tracking-[0.4em] text-primary">WHAT WE MOVE</p>
            <h2 className="mt-4 font-display text-3xl text-gold md:text-4xl">OUR SERVICES</h2>
            <div className="rule-gold mx-auto mt-6 w-40" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map(({ icon: Icon, image, title, tagline, copy, points }) => (
              <article
                key={title}
                className="group overflow-hidden border border-border/70 bg-card/60 transition-colors hover:border-primary/70"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} handled by ESD Logistics`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="size-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute bottom-4 left-6 flex size-12 items-center justify-center rounded-full border border-primary/70 bg-background/70">
                    <Icon className="size-6 text-primary" strokeWidth={1.2} />
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-gold">{title.toUpperCase()}</h3>
                  <p className="mt-2 text-sm text-primary/90">{tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="scroll-mt-24 border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-[0.7rem] tracking-[0.4em] text-primary">WHY ESD LOGISTICS</p>
              <h2 className="mt-4 font-display text-3xl text-gold md:text-4xl">
                Freight handled end to end
              </h2>
              <div className="rule-gold mt-6 w-40" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                From a single pallet to full container loads, our team coordinates pickup, customs
                and last-mile delivery so you deal with one point of contact for every shipment.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {advantages.map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="border border-border/60 bg-background/40 p-5">
                    <Icon className="size-5 text-primary" strokeWidth={1.3} />
                    <h3 className="mt-3 font-display text-lg text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={warehouseImage}
                alt="Warehouse with palletised cargo ready for dispatch"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full border border-border/60 object-cover"
              />
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="text-center">
            <p className="text-[0.7rem] tracking-[0.4em] text-primary">HOW IT WORKS</p>
            <h2 className="mt-4 font-display text-3xl text-gold md:text-4xl">FROM BOOKING TO PROOF</h2>
            <div className="rule-gold mx-auto mt-6 w-40" />
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {process.map(([step, title, copy]) => (
              <li key={step} className="border-t border-primary/50 pt-6">
                <span className="font-display text-3xl text-primary/70">{step}</span>
                <h3 className="mt-3 font-display text-xl text-gold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-border/60 bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl text-gold md:text-3xl">Cargo we handle</h2>
              <p className="text-sm text-muted-foreground">
                Not listed? <a href="#contact" className="text-primary hover:underline">Ask us</a>.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {industries.map((i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 border border-border/60 bg-background/40 px-4 py-2 text-sm text-muted-foreground"
                >
                  <PackageSearch className="size-4 text-primary" strokeWidth={1.3} />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl text-gold md:text-4xl">
            FREQUENT QUESTIONS
          </h2>
          <div className="rule-gold mx-auto mt-6 w-40" />
          <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
            {faqs.map(([q, a]) => (
              <div key={q} className="py-6">
                <h3 className="font-display text-lg text-foreground">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-border/60 bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center">
              <p className="text-[0.7rem] tracking-[0.4em] text-primary">TALK TO US</p>
              <h2 className="mt-4 font-display text-3xl text-gold md:text-4xl">GET IN TOUCH</h2>
              <div className="rule-gold mx-auto mt-6 w-40" />
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                Send us the origin, destination, weight and dimensions of your cargo and we will
                quote the best air, ocean or road option.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="border border-border/70 bg-background/40 p-8 text-center">
                <Phone className="mx-auto size-6 text-primary" strokeWidth={1.3} />
                <h3 className="mt-4 font-display text-xl text-foreground">Call</h3>
                <a href="tel:+919100825137" className="mt-3 block hover:text-primary">
                  +91 91008 25137
                </a>
                <a href="tel:+916281974914" className="mt-1 block hover:text-primary">
                  +91 62819 74914
                </a>
              </div>
              <div className="border border-border/70 bg-background/40 p-8 text-center">
                <Mail className="mx-auto size-6 text-primary" strokeWidth={1.3} />
                <h3 className="mt-4 font-display text-xl text-foreground">Email</h3>
                <a
                  href="mailto:esdlogistics2024@gmail.com"
                  className="mt-3 block break-all hover:text-primary"
                >
                  esdlogistics2024@gmail.com
                </a>
              </div>
              <div className="border border-border/70 bg-background/40 p-8 text-center">
                <MapPin className="mx-auto size-6 text-primary" strokeWidth={1.3} />
                <h3 className="mt-4 font-display text-xl text-foreground">Office</h3>
                <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
                  Building No. 29-1085, Neredmet,
                  <br />
                  Vinayak Nagar, Hyderabad,
                  <br />
                  Medchal Malkajgiri, Telangana 500056
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-widest text-gold">ESD LOGISTICS</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Efficient logistics, superior service, dependable delivery — air, ocean and road cargo
              from Hyderabad.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-primary">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+919100825137" className="hover:text-primary">
                  +91 91008 25137
                </a>
              </li>
              <li>
                <a href="mailto:esdlogistics2024@gmail.com" className="break-all hover:text-primary">
                  esdlogistics2024@gmail.com
                </a>
              </li>
              <li>Neredmet, Hyderabad, Telangana 500056</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} ESD Logistics · Hyderabad, Telangana
          </div>
        </div>
      </footer>
    </div>
  );
}
