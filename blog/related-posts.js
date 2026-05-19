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
    const section = document.createElement('section');
    section.style.cssText = 'margin-top: 60px; padding: 40px 30px; background: linear-gradient(135deg, #0f1729 0%, #0a0f1a 100%); border-radius: 12px; border: 1px solid #2D3748; box-shadow: 0 4px 16px rgba(0,0,0,0.3);';
    
    const heading = document.createElement('h2');
    heading.style.cssText = 'color: #60A5FA; margin-top: 0; margin-bottom: 30px; font-size: 1.6em; text-align: center;';
    heading.textContent = '📖 Continue Reading';
    section.appendChild(heading);
    
    const grid = document.createElement('div');
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;';
    
    posts.forEach(post => {
      const card = createPostCard(post);
      grid.appendChild(card);
    });
    
    section.appendChild(grid);
    container.appendChild(section);
  }
  
  /**
   * Create individual post card
   */
  function createPostCard(post) {
    const card = document.createElement('a');
    card.href = `${post.slug}.html`;
    card.style.cssText = 'display: flex; flex-direction: column; background: #1A202C; border-radius: 10px; overflow: hidden; border: 1px solid #2D3748; text-decoration: none; transition: all 0.3s ease; color: inherit; box-shadow: 0 2px 8px rgba(0,0,0,0.2);';
    
    // Hover effects
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
      card.style.boxShadow = '0 12px 24px rgba(59,130,246,0.3)';
      card.style.borderColor = '#3b82f6';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      card.style.borderColor = '#2D3748';
    });
    
    // Image section
    if (post.heroImage) {
      const imageContainer = document.createElement('div');
      imageContainer.style.cssText = 'width: 100%; height: 180px; overflow: hidden; background: #0B0F14;';
      
      const img = document.createElement('img');
      img.src = `../${post.heroImage}`;
      img.alt = post.heroImageAlt || post.title;
      img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;';
      
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
      });
      
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
      });
      
      imageContainer.appendChild(img);
      card.appendChild(imageContainer);
    }
    
    // Content section
    const content = document.createElement('div');
    content.style.cssText = 'padding: 20px; display: flex; flex-direction: column; flex-grow: 1;';
    
    // Title
    const title = document.createElement('h3');
    title.style.cssText = 'color: #60A5FA; margin: 0 0 12px 0; font-size: 1.05em; line-height: 1.4; font-weight: 600;';
    title.textContent = post.title;
    content.appendChild(title);
    
    // Excerpt
    const excerpt = document.createElement('p');
    excerpt.style.cssText = 'color: #9CA3AF; font-size: 0.88em; margin: 0 0 15px 0; line-height: 1.6; flex-grow: 1;';
    const excerptText = post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt;
    excerpt.textContent = excerptText;
    content.appendChild(excerpt);
    
    // Tags
    const tagsContainer = document.createElement('div');
    tagsContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;';
    
    post.sharedTags.slice(0, 2).forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.style.cssText = 'background: #0B0F14; color: #60A5FA; padding: 4px 10px; border-radius: 4px; font-size: 0.75em; border: 1px solid #2D3748;';
      tagSpan.textContent = tag;
      tagsContainer.appendChild(tagSpan);
    });
    
    content.appendChild(tagsContainer);
    
    // Footer with read time and CTA
    const footer = document.createElement('div');
    footer.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #2D3748;';
    
    const readTime = document.createElement('span');
    readTime.style.cssText = 'color: #6B7280; font-size: 0.8em;';
    readTime.textContent = post.readTime;
    
    const cta = document.createElement('span');
    cta.style.cssText = 'color: #3b82f6; font-size: 0.85em; font-weight: 600;';
    cta.textContent = 'Read article →';
    
    footer.appendChild(readTime);
    footer.appendChild(cta);
    content.appendChild(footer);
    
    card.appendChild(content);
    
    return card;
  }
})();
