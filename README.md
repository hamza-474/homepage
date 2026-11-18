🌐 Live demo: https://hamza-474.github.io/homepage/

# Homepage — Personal Website of Hamza Madni

This is a four-page personal website for Hamza Madni, a Computer Science graduate from the University of Sahiwal and an AI automation developer, built with HTML, CSS, JavaScript and Bootstrap 5 for Harvard's CS50x (Week 8). The Home page has been redesigned in a clean, reference-style layout: a thin mint top bar with my email, a letter-spaced header, a hero with my portrait and the headline "I help ideas turn into working software", two mint offer cards (AI Automation, and Web Apps & Data Tools), a strip of the platforms my work is live on, an about section with my portrait, a "How I Work" checkmark band, and a "Recommended By" section naming my two referees. The About, Projects and Contact pages keep the site's original styling and content.

## Pages

| Page | What is on it |
| --- | --- |
| `index.html` | Mint top bar, letter-spaced header with theme toggle, hero with portrait, offer cards, live-on badges, about section, "How I Work" band, recommendations |
| `about.html` | My story, profile photo, education table, skills list |
| `projects.html` | FinLedger AI, Data Analysis Projects, CS50 Coursework cards; GitHub link |
| `contact.html` | Email, GitHub, LinkedIn and location; contact form with on-page confirmation |

## How to run

Open `index.html` in any modern browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Bootstrap 5 is loaded from the jsDelivr CDN, so an internet connection is needed for the full Bootstrap styling.

## Files

| File | Purpose |
| --- | --- |
| `index.html` / `about.html` / `projects.html` / `contact.html` | The four pages |
| `styles.css` | Shared styling: the original navy/teal/coral palette for About/Projects/Contact, plus the v2 `ref-` classes (mint + deep navy home page) and dark mode |
| `script.js` | Automatic footer year, time-based greeting, dark/light toggle, contact-form confirmation |
| `assets/hamza-portrait.png` | Hamza's portrait, used in the hero and about sections of the Home page |
| `specification.txt` | CS50x specification checklist: HTML tags, CSS properties, JavaScript and Bootstrap features used |
| `DESIGN-NOTES.md` | The v2 home-page design: section list, palette with where each colour is used, and the colour-theory verdict |

## Design

The redesigned Home page uses an analogous palette: mint/sage `#d7e8df` (top bar, offer cards, checkmark band) and deep navy-teal `#143642` (headings, buttons, footer) are neighbouring blue-green hues on the colour wheel (~152° and ~197°), so the page feels calm and professional, with white space keeping it light. Dark mode turns the mint surfaces into a deep green-navy so text stays readable. Full notes are in `DESIGN-NOTES.md`.

## Author

Hamza Madni — Harvard CS50x, Week 8 (HTML, CSS, JavaScript).
GitHub: [hamza-474](https://github.com/hamza-474) · LinkedIn: [hamza-madni-76b18a385](https://www.linkedin.com/in/hamza-madni-76b18a385/)
