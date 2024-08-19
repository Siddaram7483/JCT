import { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
  ]);

  const handleAddImage = () => {
    const newImages = [
      ...images,
      'https://via.placeholder.com/800x600',
    ];
    setImages(newImages);
  };

  const todayEvents = [
    {
      title: 'Orphanage Visit',
      description: 'Today we visited a local orphanage and spent time with the olders  parents.',
    },
    {
      title: 'Skill Development Workshop',
      description: 'We conducted a workshop on coding skills for olders  parents in our program.',
    },
    {
      title: 'Art Exhibition',
      description: 'Our annual art exhibition showcased the creative talents of our olders  parents.',
    },
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h2>Explore Our Gallery</h2>
        <p>Check out the moments captured from our events and activities. See what we did today:</p>
        <div className={styles.todayEvents}>
          {todayEvents.map((event, index) => (
            <div key={index} className={styles.event}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.images}>
        {images.map((imageUrl, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={imageUrl} alt={`Image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={handleAddImage}>Add More Images</button>
    </section>
  );
};

export default Gallery;
