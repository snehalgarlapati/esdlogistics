import { createFileRoute } from "@tanstack/react-router";
import { Plane, Ship, Truck, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-cargo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ESD Logistics — Air, Ocean & Road Cargo in Hyderabad" },
      {
        name: "description",
        content:
          "ESD Logistics moves air, ocean and road cargo from Hyderabad. Efficient logistics, superior service, dependable delivery. Call 9100825137.",
      },
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

const services = [
  {
    icon: Plane,
    title: "Air Cargo",
    tagline: "Fast. Reliable. Global.",
    copy: "Priority air freight for time-critical consignments, with door-to-airport and door-to-door handling.",
  },
  {
    icon: Ship,
    title: "Ocean Cargo",
    tagline: "Sail Beyond Boundaries.",
    copy: "FCL and LCL sea freight, customs documentation and port clearance across major global trade lanes.",
  },
  {
    icon: Truck,
    title: "Road Cargo",
    tagline: "Driven to Deliver.",
    copy: "Full and part truckload movement across India with tracked pickups and scheduled deliveries.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm">
          <a
            href="mailto:esdlogistics2024@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            esdlogistics2024@gmail.com
          </a>
          <div className="flex items-center gap-5">
            <a
              href="tel:+919100825137"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-primary" />
              91008 25137
            </a>
            <a
              href="tel:+916281974914"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-primary" />
              62819 74914
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="Cargo plane, container ship and freight truck at a port at night"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
          <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
            <p className="text-xs tracking-[0.45em] text-primary">HYDERABAD · INDIA</p>
            <h1 className="mt-6 font-display text-5xl leading-tight text-gold md:text-7xl">
              ESD LOGISTICS
            </h1>
            <div className="rule-gold mx-auto mt-6 w-64" />
            <p className="mt-6 text-sm tracking-[0.28em] text-muted-foreground uppercase md:text-base">
              Efficient logistics · Superior service · Dependable delivery
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919100825137"
                className="rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-widest text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-opacity hover:opacity-90"
              >
                Request a quote
              </a>
              <a
                href="#services"
                className="rounded-sm border border-primary/60 px-8 py-3 text-sm font-medium tracking-widest text-primary uppercase transition-colors hover:bg-primary/10"
              >
                Our services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <div className="rule-gold mx-auto w-40" />
            <h2 className="mt-6 font-display text-3xl text-gold md:text-4xl">OUR SERVICES</h2>
            <div className="rule-gold mx-auto mt-6 w-40" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map(({ icon: Icon, title, tagline, copy }) => (
              <article
                key={title}
                className="group border border-border/70 bg-card/60 p-8 text-center transition-colors hover:border-primary/70"
              >
                <span className="mx-auto flex size-20 items-center justify-center rounded-full border border-primary/70">
                  <Icon className="size-9 text-primary" strokeWidth={1.2} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-gold">{title.toUpperCase()}</h3>
                <div className="rule-gold mx-auto mt-4 w-24" />
                <p className="mt-4 text-primary/90">{tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl text-gold">Freight handled end to end</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                From a single pallet to full container loads, ESD Logistics plans the route,
                prepares the paperwork and keeps your consignment moving. Our team coordinates
                pickup, customs and last-mile delivery so you deal with one point of contact for
                every shipment.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6">
              {[
                ["Air, ocean & road", "Modes covered"],
                ["Door to door", "Pickup & delivery"],
                ["Customs support", "Documentation handled"],
                ["Dedicated desk", "One point of contact"],
              ].map(([term, detail]) => (
                <div key={term} className="border border-border/60 p-5">
                  <dt className="font-display text-lg text-primary">{term}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="font-display text-3xl text-gold md:text-4xl">GET IN TOUCH</h2>
            <div className="rule-gold mx-auto mt-6 w-40" />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="border border-border/70 p-8 text-center">
              <Phone className="mx-auto size-6 text-primary" strokeWidth={1.3} />
              <h3 className="mt-4 font-display text-xl text-foreground">Call</h3>
              <a href="tel:+919100825137" className="mt-3 block hover:text-primary">
                +91 91008 25137
              </a>
              <a href="tel:+916281974914" className="mt-1 block hover:text-primary">
                +91 62819 74914
              </a>
            </div>
            <div className="border border-border/70 p-8 text-center">
              <Mail className="mx-auto size-6 text-primary" strokeWidth={1.3} />
              <h3 className="mt-4 font-display text-xl text-foreground">Email</h3>
              <a
                href="mailto:esdlogistics2024@gmail.com"
                className="mt-3 block break-all hover:text-primary"
              >
                esdlogistics2024@gmail.com
              </a>
            </div>
            <div className="border border-border/70 p-8 text-center">
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
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          ESD Logistics · Hyderabad, Telangana
        </div>
      </footer>
    </div>
  );
}
