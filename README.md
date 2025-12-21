# Portfolio Template 2025

🚀 **Live Demo**: https://valeria45x.github.io/portfolio-template-2025/

## 📋 Project Description

A modern, responsive portfolio template built with Tailwind CSS and vanilla JavaScript. This project demonstrates professional web development practices including responsive design, animations, and semantic HTML.

## 🛠️ Tech Stack

- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla ES6+
- **Deployment**: GitHub Pages

## 🚀 Setup Instructions

### Local Development

1. Clone the repository:
```bash
   git clone https://github.com/Valeria45x/portfolio-template-2025
   cd portfolio-template-2025
```

2. Open `index.html` in your browser:
   - Simply double-click `index.html`, or
   - Use Live Server extension in VS Code

**No build process needed!** Just open the HTML file.

## 📁 Project Structure
```
portfolio-template-2025/
├── assets/
│   ├── css/
│   │   └── style.css       # Custom CSS
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Project images
├── docs/                   # Documentation
├── index.html              # Main page
├── 404.html                # Custom 404 page
├── README.md               # This file
└── .gitignore
```

## ✨ Features

- ✅ Responsive design (mobile-first)
- ✅ Fluid typography with clamp()
- ✅ Smooth scroll navigation
- ✅ Mobile menu toggle
- ✅ Modern CSS animations
- ✅ Accessibility support (reduced motion)
- ✅ Semantic HTML5

## 🎨 Customization

### Colors
Edit the Tailwind config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',    // Change these
                secondary: '#8B5CF6',
                accent: '#EC4899',
            }
        }
    }
}
```

### Content
- Update text in `index.html`
- Add your projects to the Projects section
- Update contact information

### Skills Section

1. **Change category names and icons:**
   - Edit `Category 1` and `Category 2` to your skill categories
   - Change emojis: 💻 🎨 🚀 ⚡ 🔧 📱 etc.

2. **Update skill names:**
   - Replace `Skill 1`, `Skill 2`, etc. with your actual skills

3. **Adjust skill levels:**
   - Modify the percentages (e.g., `90%`, `85%`)
   - Update `data-width="90%"` to match

4. **Add/remove skills:**
   - Copy a skill block and paste to add more
   - Delete a skill block to remove

5. **Change bar color:**
   - Current: `bg-blue-500`
   - Options: `bg-purple-500`, `bg-green-500`, `bg-indigo-500`, etc.

## 🤖 AI Assistant Usage

This project was developed with AI assistance following a two-phase approach:
- **Phase 1**: Planning (documented in `docs/plan1.md`)
- **Phase 2**: Implementation

## 📄 License

MIT License - See LICENSE file for details

## 👤 Author

Valeria Cabrera
- GitHub: [@Valeria45x](https://github.com/Valeria45x)

## 🙏 Acknowledgments

Created as part of Web Atelier (UDIT) course project.
```
MIT License

Copyright (c) 2025 Valeria Cabrera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.