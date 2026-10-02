/**
 * Dynamic Related Posts Loader
 * Loads and renders related articles based on shared tags
 */

(function() {
  'use strict';
  
  const container = document.getElementById('relatedArticles');
  if (!container) return;
  
  const currentPostId = container.dataset.currentPost;
  const currentTags = JSON.parse(container.dataset.currentTags || '[]');
  
  // Load blog posts and find related articles
  fetch('blog-posts.json')
    .then(response => response.json())
    .then(posts => {
      const relatedPosts = findRelatedPosts(currentPostId, currentTags, posts, 3);
      
      if (relatedPosts.length > 0) {
        renderRelatedPosts(relatedPosts);
      }
    })
    .catch(error => {
      console.error('Error loading related posts:', error);
    });
  
  /**
   * Find related posts based on shared tags
   */
  function findRelatedPosts(currentId, currentTags, allPosts, limit = 3) {
    const relatedPosts = [];
    
    allPosts.forEach(post => {
      // Skip current post and unpublished posts
      if (post.id === currentId || !post.published) return;
      
      const postTags = post.tags || [];
      const sharedTags = currentTags.filter(tag => postTags.includes(tag));
      
      if (sharedTags.length > 0) {
        relatedPosts.push({
          ...post,
          sharedTagCount: sharedTags.length,
          sharedTags: sharedTags
        });
      }
    });
    
    // Sort by most shared tags, then by date (newest first)
    relatedPosts.sort((a, b) => {
      if (b.sharedTagCount !== a.sharedTagCount) {
        return b.sharedTagCount - a.sharedTagCount;
      }
      return new Date(b.date) - new Date(a.date);
    });
    
    return relatedPosts.slice(0, limit);
  }
  
  /**
   * Render related posts section
   */
  function renderRelatedPosts(posts) {
    const section = document.createElement("section");
    section.className = "related-posts-section";

    const heading = document.createElement("h2");
    heading.className = "related-posts-title";
    heading.textContent = "Continue reading";
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "f-grid related-posts-grid";
    posts.forEach(post => grid.appendChild(createPostCard(post)));

    section.appendChild(grid);
    container.appendChild(section);
  }
  
  /**
   * Create individual post card
   */
  function createPostCard(post) {
    // Styled by blog-styles.css / f.css so it follows the light and dark themes.
    const card = document.createElement("a");
    card.href = `${post.slug}.html`;
    card.className = "f-card f-card--link related-card";

    if (post.heroImage) {
      const img = document.createElement("img");
      img.src = `../${post.heroImage}`;
      img.alt = post.heroImageAlt || post.title;
      img.className = "related-card__img";
      img.loading = "lazy";
      card.appendChild(img);
    }

    const title = document.createElement("h3");
    title.className = "f-card__title related-card__title";
    title.textContent = post.title;
    card.appendChild(title);

    const excerpt = document.createElement("p");
    excerpt.className = "f-card__text";
    excerpt.textContent = post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + "..." : post.excerpt;
    card.appendChild(excerpt);

    const tags = document.createElement("div");
    tags.className = "f-tags";
    post.sharedTags.slice(0, 2).forEach(tag => {
      const t = document.createElement("span");
      t.className = "f-tag";
      t.textContent = tag;
      tags.appendChild(t);
    });
    card.appendChild(tags);

    const foot = document.createElement("div");
    foot.className = "f-card__foot related-card__foot";
    foot.innerHTML = `<span>${post.readTime}</span><span>Read article →</span>`;
    card.appendChild(foot);

    return card;
  }
  
  // Add responsive CSS for mobile
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .related-posts-section {
        padding: 30px 20px !important;
        margin-top: 40px !important;
      }
      
      .related-posts-section h2 {
        font-size: 1.4em !important;
        margin-bottom: 25px !important;
      }
      
      .related-posts-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
    }
    
    @media (max-width: 480px) {
      .related-posts-section {
        padding: 25px 15px !important;
        margin-top: 35px !important;
        border-radius: 8px !important;
      }
      
      .related-posts-section h2 {
        font-size: 1.3em !important;
        margin-bottom: 20px !important;
      }
      
      .related-posts-grid {
        gap: 18px !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
