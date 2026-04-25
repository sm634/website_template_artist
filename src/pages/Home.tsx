import React, { useState } from 'react';
import { site } from '../content/site';
import { artist } from '../content/artist';
import Section from '../components/Section';
import Button from '../components/Button';
import MandalaPattern from '../components/MandalaPattern';
import GalleryGrid from '../components/GalleryGrid';

// ---- Hero ---------------------------------------------------------------

function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      {/* Background mandala watermarks */}
      <MandalaPattern
        size={600}
        className="hero__mandala"
        style={{ color: 'var(--mandala-color)' }}
        petals={12}
      />
      <MandalaPattern
        size={300}
        className="hero__mandala-2"
        style={{ color: 'var(--mandala-color)' }}
      />

      <div className="hero__content">
        <span className="hero__eyebrow">{site.tagline}</span>
        <h1 className="hero__title">{site.title}</h1>
        <p className="hero__tagline">Watercolour &amp; Mixed Media</p>
        <p className="hero__description">{site.description}</p>
        <div className="hero__actions">
          <Button href="#gallery">View Gallery</Button>
          <Button href="#commissions" variant="outline">Commission a Work</Button>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}

// ---- About --------------------------------------------------------------

function About() {
  return (
    <Section id="about" variant="surface" label="About the Artist" title={artist.name}>
      <div className="about__grid container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="about__image-wrap">
          <img
            src={artist.profileImagePath}
            alt={artist.profileImageAlt}
            className="about__image"
            onError={(e) => {
              const wrap = (e.target as HTMLImageElement).parentElement;
              if (wrap) {
                (e.target as HTMLImageElement).style.display = 'none';
                const placeholder = wrap.querySelector('.about__image-placeholder') as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }
            }}
          />
          {/* Shown when image fails to load */}
          <div className="about__image-placeholder" style={{ display: 'none' }}>
            <span>Artist photo</span>
          </div>
          <MandalaPattern
            size={120}
            className="about__image-mandala"
            style={{ color: 'var(--accent)' }}
          />
        </div>

        <div className="about__text">
          <div className="about__bio">
            {artist.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---- Gallery ------------------------------------------------------------

function Gallery() {
  return (
    <Section id="gallery" variant="alt" label="Gallery" title="Collections">
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <GalleryGrid />
      </div>
    </Section>
  );
}

// ---- Artist Statement ---------------------------------------------------

function Statement() {
  const { statement } = artist;
  return (
    <Section id="statement" variant="surface">
      <div className="statement__inner container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <MandalaPattern
          size={80}
          className="statement__mandala-top"
          style={{ color: 'var(--accent)' }}
        />
        <span className="section__label">{statement.heading}</span>
        <blockquote className="statement__quote">&ldquo;{statement.body[0]}&rdquo;</blockquote>
        <div className="statement__body">
          {statement.body.slice(1).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <MandalaPattern
          size={80}
          className="statement__mandala-bottom"
          style={{ color: 'var(--accent)' }}
          petals={12}
        />
      </div>
    </Section>
  );
}

// ---- Process ------------------------------------------------------------

function Process() {
  const { process } = artist;
  return (
    <Section id="process" variant="alt" label="How I Work" title={process.heading}>
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="process__steps">
          {process.steps.map((step) => (
            <div key={step.number} className="process__step">
              <span className="process__step-number">{step.number}</span>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---- Milestones ---------------------------------------------------------

function Milestones() {
  const { milestones } = artist;
  return (
    <Section id="milestones" variant="surface" label="Journey" title={milestones.heading}>
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="milestones__list">
          {milestones.items.map((item, i) => (
            <div key={i} className="milestone">
              <span className="milestone__year">{item.year}</span>
              <div className="milestone__body">
                <h3 className="milestone__title">{item.title}</h3>
                <p className="milestone__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---- Commissions --------------------------------------------------------

function Commissions() {
  const { commissions } = artist;

  const statusClass =
    commissions.status === 'open' ? 'commissions__status--open' :
    commissions.status === 'waitlist' ? 'commissions__status--waitlist' :
    'commissions__status--closed';

  const statusLabel =
    commissions.status === 'open' ? 'Commissions Open' :
    commissions.status === 'waitlist' ? 'Waitlist Open' :
    'Commissions Closed';

  return (
    <Section id="commissions" variant="alt" label="Custom Work" title={commissions.heading}>
      <div className="container commissions__max" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className={`commissions__status ${statusClass}`}>
          <span className="commissions__status-dot" />
          <span>{statusLabel}</span>
          <span style={{ opacity: 0.7 }}>&mdash;</span>
          <span>{commissions.statusNote}</span>
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '64ch' }}>
          {commissions.intro}
        </p>

        <div className="commissions__tiers">
          {commissions.tiers.map((tier) => (
            <div key={tier.title} className="commission-tier">
              <h3 className="commission-tier__title">{tier.title}</h3>
              <p className="commission-tier__size">{tier.size}</p>
              <p className="commission-tier__price">{tier.price}</p>
              <p className="commission-tier__desc">{tier.description}</p>
              <ul className="commission-tier__includes">
                {tier.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="commissions__note">{commissions.note}</p>
        <Button href="#contact" variant="outline">Get in Touch</Button>
      </div>
    </Section>
  );
}

// ---- Contact ------------------------------------------------------------

function Contact() {
  const { contact } = artist;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static site: form uses mailto action; this just shows a thank-you note
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    window.location.href = `mailto:${contact.email}?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    setSubmitted(true);
  }

  return (
    <Section id="contact" variant="surface" label="Say Hello" title={contact.heading}>
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="contact__grid">
          {/* Info column */}
          <div className="contact__info">
            <p style={{ color: 'var(--text-muted)', maxWidth: '42ch', marginBottom: '1rem' }}>
              {contact.intro}
            </p>

            <div className="contact__detail">
              <span className="contact__detail-label">Email</span>
              <a href={`mailto:${contact.email}`} className="contact__detail-value">
                {contact.email}
              </a>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-label">Location</span>
              <span className="contact__detail-value">{contact.location}</span>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-label">Find me</span>
              <div className="contact__social">
                {contact.social.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact__social-platform">{s.platform}</span>
                    <span>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div>
            <p className="contact__form-note" style={{ marginBottom: '1.5rem' }}>
              {contact.formNote}
            </p>
            {submitted ? (
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.05rem' }}>
                Thank you — your mail client should have opened. I look forward to hearing from you.
              </p>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Commission enquiry / General hello / ..."
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me what you're looking for..."
                    required
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---- Page ---------------------------------------------------------------

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Gallery />
      <Statement />
      <Process />
      <Milestones />
      <Commissions />
      <Contact />
    </main>
  );
}
