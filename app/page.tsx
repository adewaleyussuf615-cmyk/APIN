"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, MapPin, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import { capabilities, impactStats, navItems } from "@/lib/content";

const heroImages = [
  "/assets/events/Symposium_2024_2-2.png",
  "/assets/events/Symposium_2024_31.png",
  "/assets/home/Home-Page-Photo-slide-4.jpg",
  "/assets/home/Home-Page-Photo-Slide-3.jpg",
];

function Mark() {
  return <Image className="brand-logo" src="/APIN-PUBLIC-HEALTH-INITIATIVES-Logo.webp" alt="APIN Public Health Initiatives" width={210} height={210} priority />;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="APIN home"><Mark /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}<ChevronDown size={13} strokeWidth={1.8} /></a>)}
        </nav>
        <div className="header-actions">
          <a className="search-link" href="/search"><Search size={18} /><span>Search</span></a>
          <a className="contact-button" href="/contact">Partner with APIN <ArrowUpRight size={16} /></a>
          <button
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>
            {label}<ArrowUpRight size={17} />
          </a>
        ))}
        <a href="/events" onClick={() => setMenuOpen(false)}>Events & symposium<ArrowUpRight size={17} /></a>
        <a href="/careers" onClick={() => setMenuOpen(false)}>Careers<ArrowUpRight size={17} /></a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>Partner with APIN<ArrowUpRight size={17} /></a>
      </nav>
    </>
  );
}

export default function Home() {
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveHeroImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-slideshow" aria-hidden="true">
          {heroImages.map((image, index) => <div className={`hero-slide${index === activeHeroImage ? " is-active" : ""}`} key={image} style={{ backgroundImage: `url("${image}")` }} />)}
        </div>
        <div className="hero-copy">
          <p className="eyebrow">APIN Public Health Initiatives <span>25 years of impact</span></p>
          <h1>This is APIN.<br /><em>Health that lasts.</em></h1>
          <p className="hero-intro">We are a leading non-governmental organisation providing cutting-edge, sustainable approaches to address HIV/AIDS and other diseases of public health importance in Nigeria and Africa.</p>
          <div className="hero-links"><a className="red-button" href="/about">About APIN <ArrowUpRight size={17} /></a><a className="text-link" href="/impact">See our impact <ArrowUpRight size={17} /></a></div>
        </div>
        <div className="scroll-note"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="stats-band" aria-label="APIN impact statistics">
        <div className="section-kicker">APIN / At a glance</div>
        <div className="stats-grid">{impactStats.map((stat) => <article className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.period} · {stat.geography}</small><small className="source">Source: {stat.source}</small></article>)}</div>
        <a className="stats-link" href="/impact">Explore the data <ArrowUpRight size={16} /></a>
      </section>

      <section className="capabilities section-wrap">
        <div className="section-heading"><div><p className="eyebrow">Our capabilities</p><h2>Health is a system.<br /><em>So is our approach.</em></h2></div><p className="heading-note">We connect expertise across programmes, institutions and communities to make progress that lasts.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <a className="capability" href="/expertise" key={item.number}><span className="cap-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="round-arrow"><ArrowUpRight size={17} /></span></a>)}</div>
        <a className="underlined-link" href="/expertise">View all capabilities <ArrowUpRight size={16} /></a>
      </section>

      <section className="where-section">
        <div className="section-wrap where-layout"><div><p className="eyebrow">Where we work</p><h2>Local knowledge.<br /><em>National reach.</em></h2><p className="body-copy">From community health workers to national institutions, our work is rooted in the places and partnerships that make change possible.</p><a className="text-link dark-link" href="/where-we-work">Explore our work across Nigeria <ArrowUpRight size={17} /></a></div><div className="map-panel"><div className="map-grid" /><div className="nigeria-shape"><span className="map-state state-1" /><span className="map-state state-2" /><span className="map-state state-3" /><span className="map-state state-4" /><span className="map-state state-5" /></div><div className="map-label label-1"><MapPin size={14} /> Lagos</div><div className="map-label label-2"><MapPin size={14} /> Abuja</div><div className="map-label label-3"><MapPin size={14} /> Kano</div><div className="map-legend"><span className="legend-dot" /> APIN presence <b>36 states</b></div></div></div>
      </section>

      <section className="impact-teaser section-wrap"><div className="impact-number">01 <span>/ 03</span></div><div><p className="eyebrow">Our impact</p><h2>Evidence that moves<br /><em>health forward.</em></h2><p className="body-copy">We make the work visible: the results, the lessons and the people behind every number.</p><a className="red-button" href="/impact">Visit the impact hub <ArrowUpRight size={17} /></a></div><div className="quote-block"><span className="quote-mark">“</span><blockquote>We are not just delivering projects. We are building the capacity to deliver health for generations.</blockquote><cite>— APIN Public Health Initiatives</cite></div></section>

      <section className="knowledge-strip"><div className="section-wrap knowledge-layout"><div><p className="eyebrow">From the knowledge centre</p><h2>Ideas into<br /><em>action.</em></h2></div><article className="featured-resource"><span className="resource-type">Featured resource</span><h3>Explore APIN research, reports, publications and implementation lessons.</h3><a className="underlined-link" href="/publications">Browse the knowledge centre <ArrowUpRight size={16} /></a></article></div></section>

      <section className="careers-teaser section-wrap">
        <div>
          <p className="eyebrow">Careers at APIN</p>
          <h2>Do work that<br /><em>improves health.</em></h2>
        </div>
        <div>
          <p className="body-copy">Join multidisciplinary teams working across programmes, laboratories, data, research, operations and community health.</p>
          <div className="career-links">
            <a className="red-button" href="/careers">Explore careers <ArrowUpRight size={17} /></a>
            <a className="underlined-link" href="/careers/internships">Internships <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="footer-top"><a className="brand footer-brand" href="/"><Mark /></a><div><p className="footer-label">Stay connected</p><p className="footer-copy">Updates on the work shaping a healthier Nigeria.</p></div><a className="red-button" href="/contact">Contact APIN <ArrowUpRight size={17} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} APIN Public Health Initiatives</span><span>Abuja · Lagos · Across Nigeria</span><div className="footer-links"><a href="/careers">Careers</a><a href="/gallery">Gallery</a><a href="/events">Events</a><a href="/accountability">Accountability & governance <ArrowUpRight size={14} /></a></div></div></footer>
    </main>
  );
}
