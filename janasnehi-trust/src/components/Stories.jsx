import { useState } from 'react';
import styles from './Stories.module.css';

const Stories = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300',
      title: 'Story Title 1',
      content:
        'Heartbreaking story of an elderly uncle abandoned by his children, highlighting the challenges faced by seniors in our society.',
      expanded: false, // Track if story is expanded
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x300',
      title: 'Story Title 2',
      content:
        'Touching story of an elderly grandmother facing adversity alone, demonstrating resilience and the need for community support.',
      expanded: false,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x300',
      title: 'Story Title 3',
      content:
        'Inspiring journey of a young orphan finding hope and family, sharing the transformative impact of our organization.',
      expanded: false,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/400x300',
      title: 'Story Title 4',
      content:
        'Remarkable story of a volunteer making a difference in children\'s lives, showcasing the power of compassion and dedication.',
      expanded: false,
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/400x300',
      title: 'Story Title 5',
      content:
        'Moving tale of a child overcoming adversity and achieving dreams, emphasizing the importance of nurturing environments.',
      expanded: false,
    },
  ]);

  const toggleExpand = (id) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === id ? { ...story, expanded: !story.expanded } : story
      )
    );
  };

  const addStory = () => {
    const newStory = {
      id: stories.length + 1,
      image: 'https://via.placeholder.com/400x300',
      title: 'New Story Title',
      content: 'This is a new story added dynamically.',
      expanded: false,
    };

    setStories([...stories, newStory]);
  };

  return (
    <section id="stories" className={styles.stories}>
      <div className={styles.gradientBackground}>
        <h2>Stories</h2>
        <p>Read inspiring stories from the orphans, volunteers, and supporters.</p>
      </div>

      <button className={styles.addButton} onClick={addStory}>Add New Story</button>

      <div className={styles.storiesGrid}>
        {stories.map((story) => (
          <div key={story.id} className={styles.storyCard}>
            <div className={styles.imageContainer}>
              <img src={story.image} alt={`Story ${story.id}`} className={styles.image} />
            </div>
            <div className={styles.storyContent}>
              <h3>{story.title}</h3>
              <p className={story.expanded ? styles.expandedContent : styles.collapsedContent}>
                {story.content}
              </p>
              <button className={styles.readMore} onClick={() => toggleExpand(story.id)}>
                {story.expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;
