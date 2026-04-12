# SteadyDev Custom Agents

This workspace uses custom agents to streamline different types of work. Each agent has specific expertise and tools.

## Available Agents

### 🖊️ Blogger Agent
**Purpose:** Blog content creation, editing, and SEO management

**Use for:**
- Creating new blog posts
- Updating existing blog content
- SEO optimization (meta tags, descriptions, canonical URLs)
- Managing blog metadata (blog-posts.json)
- Updating sitemap.xml
- Suggesting hero images
- Structuring content with proper headings
- Adding FAQ sections and CTAs

**Tools:** Read, Edit, Search, Web (no terminal access)

**Invoke:** `@blogger create a blog post about...` or select "Blogger" from agent picker

---

### 💻 Code Agent
**Purpose:** Development, bug fixes, and feature implementation

**Use for:**
- Web development (HTML, CSS, JavaScript)
- .NET/C# development
- Implementing new features
- Fixing bugs and errors
- Code optimization
- Performance improvements
- Testing and validation
- Technical implementation tasks

**Tools:** Read, Edit, Search, Execute (full development toolkit)

**Invoke:** `@code fix the navigation issue` or select "Code" from agent picker

---

## How to Use

### In Chat
Type `@` followed by the agent name:
```
@blogger create a new blog post about database optimization
@code add responsive navigation menu
```

### From Agent Picker
1. Click the agent selector in the chat input
2. Choose "Blogger" or "Code"
3. Describe your task

### As Subagents
These agents can be invoked by the main agent automatically based on task type. The main agent will delegate to the appropriate specialist.

---

## Agent Responsibilities

| Task Type | Agent | Why |
|-----------|-------|-----|
| Blog post creation | Blogger | Content expertise, SEO knowledge |
| Sitemap updates | Blogger | Maintains blog metadata consistency |
| HTML/CSS changes | Code | Technical implementation skills |
| Bug fixes | Code | Debugging and testing capabilities |
| SEO optimization | Blogger | Content and metadata expertise |
| Feature development | Code | Full development toolkit access |
| Blog metadata | Blogger | Understands blog-posts.json structure |
| Performance optimization | Code | Technical profiling and optimization |

---

## Guidelines

**When to use Blogger:**
- Anything related to blog content, structure, or metadata
- SEO and discoverability improvements
- Content planning and organization
- Blog-specific file management

**When to use Code:**
- Technical implementation of features
- Bug fixes and debugging
- Performance optimization
- Testing and validation
- Any task requiring terminal/command execution

**When to use main agent:**
- General questions
- Tasks spanning multiple domains
- When you're not sure which agent to use (it will delegate)

---

## File Locations

- Agent definitions: `.github/agents/*.agent.md`
- This documentation: `.github/AGENTS.md`

## Customization

To modify agent behavior:
1. Edit the respective `.agent.md` file
2. Changes take effect immediately
3. Use clear, keyword-rich descriptions for better subagent discovery

---

*Last updated: April 12, 2026*
