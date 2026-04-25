import React from 'react';
import { Artwork } from '../content/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

const STATUS_LABELS: Record<string, string> = {
  available: 'Available',
  sold: 'Sold',
  'personal collection': 'Personal Collection',
  'not for sale': 'Not for Sale',
};

const STATUS_CSS: Record<string, string> = {
  available: 'status--available',
  sold: 'status--sold',
  'personal collection': 'status--personal',
  'not for sale': 'status--notforsale',
};

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(artwork);
    }
  }

  return (
    <article
      className="artwork-card"
      onClick={() => onClick(artwork)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${artwork.title}`}
    >
      <div className="artwork-card__image-wrap">
        <img
          src={artwork.imagePath}
          alt={artwork.altText}
          className="artwork-card__image"
          loading="lazy"
          onError={(e) => {
            // Hide broken image; show placeholder background
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      <div className="artwork-card__body">
        <span className="artwork-card__collection">{artwork.collection}</span>
        <h3 className="artwork-card__title">{artwork.title}</h3>
        <p className="artwork-card__meta">
          {artwork.year} &middot; {artwork.medium}
        </p>
      </div>

      <div className="artwork-card__footer">
        <span className={`artwork-card__status ${STATUS_CSS[artwork.status] ?? ''}`}>
          {STATUS_LABELS[artwork.status] ?? artwork.status}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>View &rarr;</span>
      </div>
    </article>
  );
}
