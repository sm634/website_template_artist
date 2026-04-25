import React, { useState, useEffect, useCallback } from 'react';
import { artworks, collections, Artwork } from '../content/artworks';
import ArtworkCard from './ArtworkCard';

const STATUS_DOT_CSS: Record<string, string> = {
  available: 'modal__status-dot--available',
  sold: 'modal__status-dot--sold',
  'personal collection': 'modal__status-dot--personal',
  'not for sale': 'modal__status-dot--notforsale',
};

const STATUS_LABELS: Record<string, string> = {
  available: 'Available',
  sold: 'Sold',
  'personal collection': 'Personal Collection',
  'not for sale': 'Not for Sale',
};

function ArtworkModal({
  artwork,
  onClose,
}: {
  artwork: Artwork;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
    >
      <div className="modal">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close artwork detail"
        >
          &times;
        </button>

        <div className="modal__image-side">
          <img
            src={artwork.imagePath}
            alt={artwork.altText}
            className="modal__image"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <div className="modal__details">
          <span className="modal__collection">{artwork.collection}</span>
          <h2 className="modal__title">{artwork.title}</h2>

          <div className="modal__meta">
            <div className="modal__meta-row">
              <span className="modal__meta-label">Year</span>
              <span className="modal__meta-value">{artwork.year}</span>
            </div>
            <div className="modal__meta-row">
              <span className="modal__meta-label">Medium</span>
              <span className="modal__meta-value">{artwork.medium}</span>
            </div>
            <div className="modal__meta-row">
              <span className="modal__meta-label">Size</span>
              <span className="modal__meta-value">{artwork.size}</span>
            </div>
          </div>

          <p className="modal__description">{artwork.description}</p>

          <div className="modal__status">
            <span className={`modal__status-dot ${STATUS_DOT_CSS[artwork.status] ?? ''}`} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {STATUS_LABELS[artwork.status] ?? artwork.status}
            </span>
          </div>

          {artwork.status === 'available' && (
            <a
              href="#contact"
              className="btn btn--outline"
              onClick={onClose}
              style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}
            >
              Enquire about this work
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [activeCollection, setActiveCollection] = useState<string>('All');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filtered =
    activeCollection === 'All'
      ? artworks
      : artworks.filter((a) => a.collection === activeCollection);

  const handleOpen = useCallback((artwork: Artwork) => {
    setSelectedArtwork(artwork);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedArtwork(null);
  }, []);

  return (
    <div className="gallery__max">
      {/* Filter bar */}
      <div className="gallery__filter" role="group" aria-label="Filter by collection">
        <button
          className={`gallery__filter-btn${activeCollection === 'All' ? ' gallery__filter-btn--active' : ''}`}
          onClick={() => setActiveCollection('All')}
          aria-pressed={activeCollection === 'All'}
        >
          All works
        </button>
        {collections.map((col) => (
          <button
            key={col}
            className={`gallery__filter-btn${activeCollection === col ? ' gallery__filter-btn--active' : ''}`}
            onClick={() => setActiveCollection(col)}
            aria-pressed={activeCollection === col}
          >
            {col}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery__grid" aria-label="Artwork gallery">
        {filtered.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} onClick={handleOpen} />
        ))}
      </div>

      {/* Modal */}
      {selectedArtwork && (
        <ArtworkModal artwork={selectedArtwork} onClose={handleClose} />
      )}
    </div>
  );
}
