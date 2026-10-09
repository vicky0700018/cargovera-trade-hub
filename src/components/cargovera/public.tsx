import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { active, photos, useData, type Entry } from "@/lib/cargovera-data";
import { tradeImages } from "@/lib/trade-images";
import { TradeImage } from "./trade-image";
import { ActionLink, Brand, Button, Icon, SectionHeading } from "./ui";
const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["Global Reach", "/global-reach"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;
export function PublicLayout({ children }: { children: React.ReactNode }) {
  const { data } = useData();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Reliable partnerships. Limitless possibilities.</span>
          <span className="top-location">
            <Icon name="pin" size={12} />
            Pune, Maharashtra, India
          </span>
          <a href={`tel:${data.company.phone}`}>
            <Icon name="phone" size={12} />
            {data.company.phone}
          </a>
        </div>
      </div>
      <header className={`navbar ${open ? "menu-open" : ""}`}>
        <div className="container nav-inner">
          <Brand />
          <nav className="nav-links" aria-label="Main navigation">
            {nav.map(([n, p]) => (
              <Link
                key={p}
                to={p}
                activeOptions={{ exact: true }}
                activeProps={{ className: "active" }}
                onClick={() => setOpen(false)}
              >
                {n}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            className="mobile-toggle icon-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </Button>
          <ActionLink to="/contact" variant="gold" className="nav-cta">
            Get In Touch <Icon size={15} />
          </ActionLink>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
function Footer() {
  const { data } = useData();
  return (
    <>
      <section className="cta-band">
        <TradeImage className="cta-image" src={tradeImages.coordination.url} alt={tradeImages.coordination.alt} loading="lazy" />
        <div className="container cta-inner">
          <div>
            <h2>Let’s build your next trade opportunity.</h2>
            <p>Connect with CARGOVERA. Move your business forward.</p>
          </div>
          <ActionLink to="/contact" variant="gold">
            Get In Touch <Icon size={17} />
          </ActionLink>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <Brand light />
              <p>
                Connecting businesses, products and markets through reliable wholesale trading and
                global sourcing solutions.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                {nav.map(([n, p]) => (
                  <Link key={p} to={p}>
                    {n}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4>Our Business</h4>
              <div className="footer-links">
                {["Wholesale Trading", "Global Sourcing", "Procurement", "Trade Solutions"].map(
                  (t) => (
                    <Link to="/services" key={t}>
                      {t}
                    </Link>
                  ),
                )}
                <Link to="/why-choose-us">Why Choose Us</Link>
              </div>
            </div>
            <div>
              <h4>Contact Us</h4>
              <div className="footer-contact">
                <Icon name="pin" />
                <span>{data.company.address}</span>
              </div>
              <a className="footer-contact" href={`tel:${data.company.phone}`}>
                <Icon name="phone" />
                <span>{data.company.phone}</span>
              </a>
              {data.company.email && (
                <a className="footer-contact" href={`mailto:${data.company.email}`}>
                  <Icon name="mail" />
                  {data.company.email}
                </a>
              )}
              <div className="footer-links">
                {["linkedin", "facebook", "instagram"].map(
                  (s) =>
                    data.settings[s as "linkedin" | "facebook" | "instagram"] && (
                      <a
                        key={s}
                        href={data.settings[s as "linkedin" | "facebook" | "instagram"]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </a>
                    ),
                )}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {data.company.name}. All rights reserved.
            </span>
            <span>Designed and development by SOSynch Ai Tech</span>
            <Link to="/admin/login">Admin Login</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
function PageBanner({
  title,
  description,
  eyebrow = "CARGOVERA TRADING LLP",
  image = tradeImages.port.url,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  image?: string | undefined;
}) {
  return (
    <section className="page-banner">
      <TradeImage src={image} alt={Object.values(tradeImages).find((photo) => photo.url === image)?.alt || "International trading and wholesale operations"} />
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </div>
        <span className="eyebrow">
          <span />
          {eyebrow}
        </span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
function Intro({ detailed = false }: { detailed?: boolean }) {
  const { data } = useData();
  return (
    <section className="section section-white">
      <div className="container intro-grid">
        <div className="intro-visual">
          <TradeImage src={detailed ? tradeImages.meeting.url : tradeImages.warehouse.url} alt={detailed ? tradeImages.meeting.alt : tradeImages.warehouse.alt} loading="lazy" />
          <div className="intro-tag">
            <Icon name="globe" size={35} />
            <div>
              <strong>Built on trust.</strong>
              <span>Connected to opportunity.</span>
            </div>
          </div>
        </div>
        <div className="intro-copy">
          <SectionHeading
            eyebrow={detailed ? "Who we are" : "Welcome to Cargovera"}
            title="Powering Trade Through Reliable Connections"
          />
          <p>{data.company.about}</p>
          <div className="check-list">
            {[
              "Professional sourcing",
              "Wholesale expertise",
              "Transparent coordination",
              "Long-term partnerships",
            ].map((t) => (
              <span key={t}>
                <Icon name="check" />
                {t}
              </span>
            ))}
          </div>
          {detailed ? (
            <>
              <p>
                Led by {data.company.partners}, our focus is simple: understand your business
                requirements and connect you with practical sourcing and trading solutions.
              </p>
              <p className="mt-4">
                Based in Pune, Maharashtra, we approach every opportunity with integrity, care and a
                commitment to professional business relationships.
              </p>
            </>
          ) : (
            <ActionLink to="/about">
              Discover Our Company <Icon size={16} />
            </ActionLink>
          )}
        </div>
      </div>
    </section>
  );
}
function Stats() {
  const { data } = useData();
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {data.stats.map((s) => (
          <div className="stat" key={s.id}>
            <b>{s.value}</b>
            <strong>{s.title}</strong>
            <small>Illustrative demo value</small>
          </div>
        ))}
      </div>
    </section>
  );
}
function ProductCards({ items }: { items: Entry[] }) {
  const [detail, setDetail] = useState<Entry | null>(null);
  return (
    <>
      <div className="cards-grid">
        {items.map((p, i) => (
          <article className="product-card" key={p.id}>
            <div className="card-image">
              <TradeImage src={p.image || photos[i % photos.length]} alt={p.title} loading="lazy" />
              <span className="card-label">{p.category}</span>
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <Button variant="ghost" onClick={() => setDetail(p)}>
                View Details <Icon size={16} />
              </Button>
            </div>
          </article>
        ))}
      </div>
      {items.length === 0 && <div className="empty-state">No categories currently available.</div>}
      {detail && (
        <div className="modal-backdrop" onClick={() => setDetail(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={detail.title}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>{detail.title}</h2>
              <Button
                variant="ghost"
                className="icon-button"
                aria-label="Close details"
                onClick={() => setDetail(null)}
              >
                <Icon name="close" />
              </Button>
            </div>
            <TradeImage src={detail.image || photos[0]} alt={detail.title} />
            <p>{detail.description}</p>
            <p>
              Discuss specifications, quantities and sourcing requirements with our team. We
              coordinate solutions around your business needs.
            </p>
            <ActionLink to="/contact">
              Enquire About This Category <Icon size={16} />
            </ActionLink>
          </section>
        </div>
      )}
    </>
  );
}
function ServicesGrid() {
  const { data } = useData();
  const names = ["globe", "box", "users", "globe", "shield", "chart"];
  return (
    <div className="service-grid">
      {active(data.services).map((s, i) => (
        <article className="service-item" key={s.id}>
          <TradeImage className="service-photo" src={s.image} alt={s.title} fallback={tradeImages.distribution.url} loading="lazy" />
          <div className="service-symbol">
            <Icon name={names[i % 6]} size={25} />
          </div>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </article>
      ))}
    </div>
  );
}
const reasons = [
  [
    "Reliable Business Approach",
    "Professional and transparent communication, from the first conversation onward.",
  ],
  [
    "Flexible Sourcing",
    "Solutions shaped around your specifications, priorities and business needs.",
  ],
  [
    "Wholesale Focus",
    "A business-to-business approach designed for bulk sourcing and distribution.",
  ],
  [
    "Long-Term Partnerships",
    "Building sustainable relationships, not just completing transactions.",
  ],
  ["Professional Coordination", "Clear, consistent communication between buyers and suppliers."],
  ["Market Connectivity", "Opening conversations with wider markets and trading opportunities."],
];
function Reasons() {
  return (
    <div className="why-grid">
      {reasons.map(([t, d], i) => (
        <div className="why-item" key={t}>
          <span>0{i + 1}</span>
          <div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
function GlobalBand() {
  const { data } = useData();
  return (
    <section className="section global-section">
      <TradeImage src={tradeImages.vessel.url} alt={tradeImages.vessel.alt} loading="lazy" />
      <div className="container">
        <SectionHeading
          eyebrow="Beyond boundaries"
          title="Local Expertise. Global Perspective."
          description="Bringing businesses closer to the right sourcing opportunities. A connected approach to international trade, rooted in reliable relationships."
        />
        <div className="markets-row">
          {active(data.markets).map((m) => (
            <span className="market-chip" key={m.id}>
              {m.title}
            </span>
          ))}
        </div>
        <ActionLink to="/global-reach" variant="outline">
          Explore Our Global Reach <Icon size={16} />
        </ActionLink>
        <p className="demo-note">Market coverage shown is illustrative demo information.</p>
      </div>
    </section>
  );
}
function Testimonials() {
  const { data } = useData();
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Stronger together"
          title="Partnerships That Move Business Forward"
          description="A shared commitment to reliable coordination and lasting business relationships."
        />
        <div className="testimonials">
          {active(data.testimonials).map((t) => (
            <article className="quote" key={t.id}>
              <div className="stars">
                {Array.from({ length: Math.max(1, Math.min(5, Number(t.rating) || 5)) }, (_, i) => (
                  <Icon name="star" size={13} key={i} />
                ))}
              </div>
              <p>“{t.description}”</p>
              <div className="quote-person">
                {t.image ? (
                  <TradeImage className="avatar" src={t.image} alt={t.title} />
                ) : (
                  <span className="avatar">
                    {t.title
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
                <div>
                  <strong>{t.title}</strong>
                  <small>{t.company}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-note text-center">
          Illustrative testimonials for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
export function HomePage() {
  const { data } = useData();
  const title = data.hero.title;
  const split = title === "Connecting Global Markets Through Reliable Trade";
  return (
    <PublicLayout>
      {data.hero.status === "Active" && (
        <section className="hero">
          <TradeImage
            className="hero-image"
            src={data.hero.image || photos[0]}
            alt="Container vessel at an international shipping port"
            width={1920}
            height={1024}
          />
          <div className="container">
            <div className="hero-eyebrow">{data.company.name} · GLOBAL TRADE PARTNER</div>
            <h1>
              {split ? (
                <>
                  Connecting Global
                  <br />
                  Markets Through
                  <br />
                  <em>Reliable Trade</em>
                </>
              ) : (
                title
              )}
            </h1>
            <p>{data.hero.subtitle}</p>
            <div className="hero-actions">
              <ActionLink to={data.hero.link || "/products"} variant="gold">
                {data.hero.cta} <Icon size={17} />
              </ActionLink>
              <ActionLink to="/contact" variant="outline">
                Contact Us <Icon name="phone" size={15} />
              </ActionLink>
            </div>
            <div className="hero-proof">
              <span>
                <Icon name="shield" />
                Reliable Sourcing
              </span>
              <span>
                <Icon name="globe" />
                Global Connectivity
              </span>
              <span>
                <Icon name="users" />
                Lasting Partnerships
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <b />
            <i />
            <i />
            <span>GLOBAL TRADE, CONNECTED.</span>
          </div>
        </section>
      )}
      <section className="capability-strip">
        <div className="container capability-grid">
          {(
            [
              ["globe", "Global Sourcing", "Connecting markets & opportunities"],
              ["box", "Wholesale Trading", "Business-focused distribution"],
              ["shield", "Reliable Coordination", "Transparent at every step"],
              ["users", "Trusted Partnerships", "Growing stronger, together"],
            ] as const
          ).map(([icon, t, d]) => (
            <div className="capability" key={t}>
              <Icon name={icon} />
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Intro />
      <Stats />
      <section className="section">
        <div className="container">
          <div className="heading-row">
            <SectionHeading
              eyebrow="What we trade"
              title="Diverse Products. Dependable Sourcing."
              description="Connecting your business to the right products, across a broad range of wholesale trading categories."
            />
            <Link to="/products" className="text-link">
              Explore All Categories <Icon size={16} />
            </Link>
          </div>
          <ProductCards items={active(data.products).slice(0, 6)} />
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our expertise"
            title="Trade Solutions, Built Around You"
            description="Professional support across your sourcing and trading journey. One reliable partner, multiple possibilities."
          />
          <ServicesGrid />
          <div className="text-center mt-8">
            <ActionLink to="/services" variant="outline">
              Explore Our Services <Icon size={16} />
            </ActionLink>
          </div>
        </div>
      </section>
      <GlobalBand />
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="The Cargovera advantage"
            title="Your Business. Our Commitment."
            description="More than trading. A professional approach to every connection."
          />
          <Reasons />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="heading-row">
            <SectionHeading eyebrow="A world in motion" title="A Closer Look at Global Trade" />
            <Link to="/gallery" className="text-link">
              View Our Gallery <Icon size={16} />
            </Link>
          </div>
          <div className="gallery-preview">
            {active(data.gallery)
              .slice(0, 3)
              .map((g) => (
                <TradeImage src={g.image} alt={g.title} key={g.id} loading="lazy" />
              ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </PublicLayout>
  );
}
export function AboutPage() {
  const { data } = useData();
  return (
    <PublicLayout>
      <PageBanner
        title="About Us"
        description="A professional approach to trading. A genuine commitment to your business."
        image={tradeImages.team.url}
      />
      <Intro detailed />
      <Stats />
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our purpose"
            title="Grounded in Values. Focused on Growth."
          />
          <TradeImage className="about-partnership-photo" src={tradeImages.partnership.url} alt={tradeImages.partnership.alt} loading="lazy" />
          <div className="values-grid">
            <article className="value">
              <h3>Our Vision</h3>
              <p>{data.company.vision}</p>
            </article>
            <article className="value">
              <h3>Our Mission</h3>
              <p>{data.company.mission}</p>
            </article>
            <article className="value">
              <h3>Our Partners</h3>
              <p>{data.company.partners}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionHeading center eyebrow="What guides us" title="Our Core Values" />
          <div className="values-grid">
            {["Integrity", "Reliability", "Transparency", "Quality", "Partnership", "Growth"].map(
              (v, i) => (
                <article className="value" key={v}>
                  <Icon name={["shield", "check", "users", "box", "users", "chart"][i]} size={26} />
                  <h3 className="mt-4">{v}</h3>
                  <p>
                    {
                      [
                        "Doing business with honesty and respect.",
                        "Following through on every commitment.",
                        "Keeping communication clear and open.",
                        "Focusing on the right products and requirements.",
                        "Creating lasting, mutually valuable connections.",
                        "Looking ahead to sustainable opportunities.",
                      ][i]
                    }
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
export function ProductsPage() {
  const { data } = useData();
  const [filter, setFilter] = useState("All");
  const items = active(data.products);
  return (
    <PublicLayout>
      <PageBanner
        title="Products & Trading Categories"
        description="A diverse portfolio of wholesale categories. Sourcing solutions for your business."
        image={tradeImages.aisles.url}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our trading portfolio"
            title="The Right Products. The Right Connections."
            description="Explore our illustrative product categories and discuss your sourcing requirements with our team."
          />
          <div className="filters">
            {["All", ...new Set(items.map((i) => i.category))].map((c) => (
              <Button
                className={`filter ${filter === c ? "selected" : ""}`}
                key={c}
                onClick={() => setFilter(c)}
              >
                {c}
              </Button>
            ))}
          </div>
          <ProductCards items={items.filter((i) => filter === "All" || i.category === filter)} />
        </div>
      </section>
    </PublicLayout>
  );
}
export function ServicesPage() {
  const { data } = useData();
  return (
    <PublicLayout>
      <PageBanner
        title="Our Services"
        description="From sourcing to business connectivity, professional support at every stage of your trade journey."
        image={tradeImages.cargo.url}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Trade made connected"
            title="Solutions for Every Business Requirement"
            description="A flexible, business-first approach to wholesale sourcing and professional trade coordination."
          />
          <div className="cards-grid">
            {active(data.services).map((s) => (
              <article className="product-card" key={s.id}>
                <div className="card-image">
                  <TradeImage src={s.image || photos[0]} alt={s.title} loading="lazy" />
                </div>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link to="/contact" className="text-link">
                    Discuss Your Requirements <Icon size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our approach"
            title="Clear Communication. Practical Solutions."
          />
          <div className="values-grid">
            {[
              [
                "01",
                "Understand",
                "We begin with your specifications, objectives and sourcing priorities.",
              ],
              ["02", "Connect", "We coordinate appropriate suppliers and trading opportunities."],
              [
                "03",
                "Collaborate",
                "We maintain professional communication throughout your journey.",
              ],
            ].map(([n, t, d]) => (
              <article className="value" key={n}>
                <span className="eyebrow">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
export function GlobalPage() {
  const { data } = useData();
  return (
    <PublicLayout>
      <PageBanner
        title="Global Reach"
        description="Connecting opportunities across markets. Local understanding with an international outlook."
        image={tradeImages.air.url}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="A connected world"
            title="Opening Doors Across Markets"
            description="Our illustrative network represents the sourcing and trading opportunities we aim to develop through professional business relationships."
          />
          <div className="cards-grid">
            {active(data.markets).map((m) => (
              <article className="product-card" key={m.id}>
                <div className="card-image">
                  <TradeImage src={m.image || photos[0]} alt={m.title} loading="lazy" />
                  <span className="card-label">Demo market</span>
                </div>
                <div className="card-body">
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  <Link to="/contact" className="text-link">
                    Connect With Us <Icon size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="demo-note">
            All market coverage and connections shown are mock information, not verified operational
            claims.
          </p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our focus"
            title="Global Perspective, Practical Connections"
          />
          <div className="values-grid">
            {[
              "Global Sourcing",
              "International Trade",
              "Wholesale Distribution",
              "Business Network",
            ].map((t) => (
              <div className="value" key={t}>
                <Icon name="globe" />
                <h3 className="mt-4">{t}</h3>
                <p>
                  Professional coordination built around business needs and dependable
                  relationships.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
export function GalleryPage() {
  const { data } = useData();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Entry | null>(null);
  const items = active(data.gallery);
  return (
    <PublicLayout>
      <PageBanner
        title="Our Gallery"
        description="A visual perspective on global commerce, sourcing and the world of trade."
        image={tradeImages.containers.url}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Trade in focus"
            title="A World of Business Possibilities"
            description="Illustrative photographs of international logistics, products and professional business connections."
          />
          <div className="filters">
            {["All", ...new Set(items.map((i) => i.category))].map((c) => (
              <Button
                key={c}
                className={`filter ${filter === c ? "selected" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </Button>
            ))}
          </div>
          <div className="gallery-grid">
            {items
              .filter((i) => filter === "All" || i.category === filter)
              .map((g) => (
                <Button
                  variant="ghost"
                  className="gallery-tile !p-0"
                  key={g.id}
                  onClick={() => setSelected(g)}
                  aria-label={`View ${g.title}`}
                >
                  <TradeImage src={g.image} alt={g.title} loading="lazy" />
                  <span className="gallery-caption">
                    <strong>{g.title}</strong>
                    <small>{g.category}</small>
                  </span>
                </Button>
              ))}
          </div>
          {selected && (
            <div className="modal-backdrop" onClick={() => setSelected(null)}>
              <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-label={selected.title}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>{selected.title}</h2>
                  <Button
                    variant="ghost"
                    aria-label="Close image"
                    onClick={() => setSelected(null)}
                  >
                    <Icon name="close" />
                  </Button>
                </div>
                <TradeImage src={selected.image} alt={selected.title} />
                <p>{selected.category} · Illustrative business photography</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
export function WhyPage() {
  return (
    <PublicLayout>
      <PageBanner
        title="Why Choose CARGOVERA"
        description="A dependable approach to every product, partnership and trading opportunity."
        image={tradeImages.discussion.url}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our commitment"
            title="Built for Business. Built on Trust."
          />
          <Reasons />
        </div>
      </section>
      <GlobalBand />
    </PublicLayout>
  );
}
export function ContactPage() {
  const { data, save } = useData();
  const [sent, setSent] = useState(false);
  return (
    <PublicLayout>
      <PageBanner
        title="Contact Us"
        description="Start a conversation. Let’s explore the right trading opportunities for your business."
        image={tradeImages.commercial.url}
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              eyebrow="Let's connect"
              title="Your Next Opportunity Starts Here"
              description="Speak with CARGOVERA TRADING LLP about wholesale trading, sourcing and your business requirements."
            />
            <TradeImage className="contact-photo" src={tradeImages.partnership.url} alt={tradeImages.partnership.alt} loading="lazy" />
            <div className="contact-detail">
              <span>
                <Icon name="pin" />
              </span>
              <div>
                <h3>Our Office</h3>
                <p>{data.company.address}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Icon name="phone" />
              </span>
              <div>
                <h3>Call Us</h3>
                <a href={`tel:${data.company.phone}`}>{data.company.phone}</a>
              </div>
            </div>
            {data.company.email && (
              <div className="contact-detail">
                <span>
                  <Icon name="mail" />
                </span>
                <div>
                  <h3>Email Us</h3>
                  <a href={`mailto:${data.company.email}`}>{data.company.email}</a>
                </div>
              </div>
            )}
            <div className="contact-detail">
              <span>
                <Icon name="users" />
              </span>
              <div>
                <h3>Our Partners</h3>
                <p>{data.company.partners}</p>
              </div>
            </div>
            <a
              className="map-panel"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.company.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="pin" size={36} />
              <p>Pune, Maharashtra, India</p>
              <span className="text-link">
                View Office Location <Icon size={16} />
              </span>
            </a>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const v = Object.fromEntries(f) as Record<string, string>;
              save({
                ...data,
                enquiries: [
                  {
                    id: crypto.randomUUID(),
                    title: v["name"] || "",
                    description: v["message"] || "",
                    image: "",
                    category: "Enquiry",
                    status: "New",
                    ...v,
                    date: new Date().toISOString(),
                  },
                  ...data.enquiries,
                ],
              });
              e.currentTarget.reset();
              setSent(true);
            }}
          >
            <h3>Send an Enquiry</h3>
            {sent && (
              <div className="success-message" role="status">
                Thank you. Your demo enquiry has been saved in this browser and is available in the
                Admin Panel. No email was sent.
              </div>
            )}
            <div className="form-grid">
              {[
                ["name", "Full Name", "text", true],
                ["email", "Email", "email", true],
                ["phone", "Phone", "tel", true],
                ["company", "Company Name", "text", false],
                ["subject", "Subject", "text", true],
              ].map(([name, label, type, required]) => (
                <div className={`field ${name === "subject" ? "full" : ""}`} key={String(name)}>
                  <label htmlFor={String(name)}>
                    {label}
                    {required ? " *" : ""}
                  </label>
                  <input
                    id={String(name)}
                    name={String(name)}
                    type={String(type)}
                    required={Boolean(required)}
                    placeholder={String(label)}
                  />
                </div>
              ))}
              <div className="field full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business requirements"
                  required
                />
              </div>
            </div>
            <Button type="submit" variant="gold" className="mt-6">
              Send Enquiry <Icon size={16} />
            </Button>
            <p className="form-note">
              Demo only. Enquiries are saved in this browser, not sent to the company.
            </p>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
}
