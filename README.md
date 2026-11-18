🌐 Live demo: https://hamza-474.github.io/homepage/

# Homepage — Personal Website of Hamza Madni

This is a four-page personal website for Hamza Madni, a Computer Science graduate from the University of Sahiwal and an AI automation developer, built with HTML, CSS, JavaScript and Bootstrap 5 for Harvard's CS50x (Week 8). The site introduces who I am, what I have built, and how to reach me: a Home page with a time-based greeting and a dark/light mode toggle, an About page with my story, education and skills, a Projects page covering FinLedger AI, data analysis work and CS50 coursework, and a Contact page with my email, GitHub and LinkedIn plus a message form that confirms on the page without reloading.

**Live demo (original CS50x version):** https://hamza-474.github.io/cs50x-projects/week8/homepage/

## Pages

| Page | What is on it |
| --- | --- |
| `index.html` | Hero, time-based greeting, dark/light toggle, "What I Do" cards, links to Projects and Contact |
| `about.html` | My story, profile photo, education table, skills list |
| `projects.html` | FinLedger AI, Data Analysis Projects, CS50 Coursework cards; GitHub link |
| `contact.html` | Email, GitHub, LinkedIn and location; contact form with on-page confirmation |

## How to run

Open `index.html` in any modern browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Bootstrap 5 is loaded from the jsDelivr CDN, so an internet connection is needed for the full Bootstrap styling and the mobile navigation toggle.

## Files

| File | Purpose |
| --- | --- |
| `index.html` / `about.html` / `projects.html` / `contact.html` | The four pages, sharing one navbar and footer |
| `styles.css` | Custom styling on top of Bootstrap: navy/teal/coral palette, hero, cards, dark mode |
| `script.js` | Automatic footer year, time-based greeting, dark/light toggle, contact-form confirmation |
| `specification.txt` | CS50x specification checklist: HTML tags, CSS properties, JavaScript and Bootstrap features used |

## Design

The palette is an analogous-complementary scheme: deep navy `#0f2b46` and teal `#0e7c7b` (neighbouring blue hues on the colour wheel) carry the navbar, hero gradient, footer and headings, while a complementary coral `#e85d3f` is used sparingly for call-to-action buttons and card accents so the eye lands on the actions first. Dark mode deepens the same navy family instead of introducing new hues. Full colour notes are in `../NOTES.md` of the Week 8 prep folder.

## Author

Hamza Madni — Harvard CS50x, Week 8 (HTML, CSS, JavaScript).
GitHub: [hamza-474](https://github.com/hamza-474) · LinkedIn: [hamza-madni-76b18a385](https://www.linkedin.com/in/hamza-madni-76b18a385/)
