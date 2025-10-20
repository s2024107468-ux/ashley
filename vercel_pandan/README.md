# Pandan Crafts - Website Setup Guide

## Project Structure

```
project-root/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.ts           # JavaScript functionality
├── static/
│   ├── images/         # Image folder (organized by section)
    │   └── team/           # Team member photos
    │   └── team/           # Team member photos
    ├── videos/          # How-to video
└── README.md           # This file
```

## Image Naming Conventions

### Gallery Images (`static/images/gallery/`)
All gallery images follow the pattern: `pandan-craft-{view}.jpg`

| Filename | Location in HTML | Description |
|----------|------------------|-------------|
| `pandan-craft-front.jpg` | Gallery item 1 | Front view of handbag |
| `pandan-craft-side.jpg` | Gallery item 2 | Side view of handbag |
| `pandan-craft-detail.jpg` | Gallery item 3 | Close-up weaving texture |
| `pandan-craft-styled.jpg` | Gallery item 4 | Styled with items |
| `pandan-craft-outdoor.jpg` | Gallery item 5 | Outdoor natural lighting |
| `pandan-craft-collection.jpg` | Gallery item 6 | Collection of crafts |
| etc... |

**To change gallery images:**
1. Replace files in `images/gallery/` folder
2. Keep the same filenames
3. No HTML changes needed

### Team Member Images (`static/images/team/`)
All team images follow the pattern: `team-member-{number}.jpg`

| Filename | Team Member | Location in HTML |
|----------|-------------|------------------|
| `team-member-01.jpg` | Maria Santos | Team grid item 1 |
| `team-member-02.jpg` | Juan Dela Cruz | Team grid item 2 |
| `team-member-03.jpg` | Rosa Reyes | Team grid item 3 |
| `team-member-04.jpg` | Carlos Mendoza | Team grid item 4 |
| `team-member-05.jpg` | Ana Flores | Team grid item 5 |

**To change team member photos:**
1. Replace files in `images/team/` folder
2. Keep the same filenames and numbering
3. No HTML changes needed

## HTML Sections & Where to Edit

### 1. Hero Section
**File:** `index.html` (Lines ~50-70)
- **Hero Title:** "Woven Heritage, Sustainable Future"
- **Hero Description:** Main tagline text
- **Hero Image:** `./public/traditional-pandan-woven-handbag-craft.jpg`

### 2. About Section
**File:** `index.html` (Lines ~80-130)
- **Section Title:** "About Pandan Crafts"
- **About Image:** `./public/pandan-leaves-weaving-process.jpg`
- **About Content:** Main description text
- **Quick Facts:** 3 fact cards with icons and descriptions
- **Fun Fact:** "Did you know?" section

### 3. How It's Made Section
**File:** `index.html` (Lines ~140-200)
- **Section Title:** "How It's Made"
- **Steps:** 4 numbered steps (Harvest, Strip, Weave, Finish)
- **Materials:** 4 material items with icons
- **Video:** Add your video file path here

### 4. Gallery Section
**File:** `index.html` (Lines ~210-235)
- **Section Title:** "Gallery"
- **Gallery Items:** 6 images from `images/gallery/` folder
- Images automatically update when files are replaced

### 5. Team Section
**File:** `index.html` (Lines ~245-290)
- **Section Title:** "About Our Team"
- **Team Members:** 5 members with photos from `images/team/` folder
- **Mission Statement:** Team mission text

### 6. Footer
**File:** `index.html` (Lines ~300-320)
- **Footer Links:** Navigation links to all sections
- **Copyright:** Year and company name

## Quick Edit Guide

### Change Text Content
1. Open `index.html` in a text editor
2. Find the section you want to edit (see "HTML Sections" above)
3. Update the text between HTML tags
4. Save the file

### Change Images
1. Place new images in the appropriate folder:
   - Gallery images → `images/gallery/`
   - Team photos → `images/team/`
2. Use the exact filenames listed above
3. No HTML changes needed

### Add a Video
In the "How It's Made" section, find the video player and update:
\`\`\`html
<source src="./pandan-craft-tutorial.mp4" type="video/mp4">
\`\`\`
Replace `./pandan-craft-tutorial.mp4` with your video file path.

### Change Colors
Edit the CSS variables at the top of `styles.css`:
\`\`\`css
:root {
  --pandan-dark: #1a4d2e;      /* Dark green */
  --pandan-green: #2d6a4f;     /* Medium green */
  --pandan-light: #52b788;     /* Light green */
  --cream: #faf8f3;            /* Background */
  --natural-tan: #c9b8a8;      /* Accent */
  --charcoal: #2c2c2c;         /* Text */
}
\`\`\`

## File Sizes & Optimization

- **Gallery images:** Recommended 1200x800px, max 500KB each
- **Team photos:** Recommended 400x400px, max 200KB each
- **Video:** MP4 format, max 50MB for web

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All images use relative paths (`./images/gallery/`, `./images/team/`)
- Keep folder structure intact for images to load correctly
- Smooth scrolling is enabled for navigation links
- Responsive design works on all screen sizes
