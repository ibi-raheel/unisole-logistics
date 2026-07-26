# UniSole Logistics — Website

A fast, responsive marketing site for UniSole Logistics (truck dispatch service).
Built with plain HTML/CSS/JS — no build step, no dependencies.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, stats, services, why-us, equipment, testimonials, CTA |
| `services.html` | Full service list |
| `equipment.html` | Equipment types dispatched |
| `how-it-works.html` | 4-step onboarding process |
| `pricing.html` | Pricing plans + what's included |
| `about.html` | Company story & values |
| `contact.html` | Get Started form + contact details |
| `faq.html` | Frequently asked questions |

## Run locally
Just open `index.html` in a browser. Or serve it:
```bash
cd /Users/ibi/Documents/Unisole
python3 -m http.server 8000
# visit http://localhost:8000
```

## Placeholders to replace (search & replace across all files)
When you send me your real details, swap these everywhere:
- **`(000) 000-0000`** → your real phone number
- **`tel:+10000000000`** → your phone in the format `tel:+1XXXXXXXXXX`
- **`info@unisolelogistics.com`** → your real email
- **`Address coming soon`** → your office address
- Testimonials on `index.html` are sample quotes — swap for real ones when you have them
- Stats (`$2.6M+`, `98%`, etc.) are placeholders — update with real numbers

## Logo
`assets/logo-mark.svg` is a recreated version of your hexagon "S" mark so the site
looks complete now. Drop your official PNG/SVG into `assets/` and update the
`<img src>` in the header/footer if you'd like to use the exact file.

## The contact form
The form currently shows a success message but doesn't send anywhere yet.
To make it live (free options): [Formspree](https://formspree.io),
[Web3Forms](https://web3forms.com), or Netlify Forms. I can wire this up when ready.

## Deploy (free)
Drag the folder into [Netlify Drop](https://app.netlify.com/drop) or connect it to
[Vercel](https://vercel.com) / GitHub Pages. It's a static site — hosting is free.
