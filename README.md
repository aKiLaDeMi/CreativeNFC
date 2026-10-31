# Creative NFC

The official website for **Creative NFC** — a studio that sells NFC-enabled business cards and stickers. One tap on a card opens a menu, a Google Review page, a WhatsApp chat, a Wi-Fi network, or a business website. No app required.

This repo contains the full website: a landing page, an order system with live pricing and discount codes, a demo of what customers see when they tap a card, and a FAQ section — all in three files, no framework, no backend, no build step.

---

## What's inside

**`index.html`**
The entire markup. Includes the loading screen, header with theme and language toggles, home page, order page, demo page, FAQ page, footer, order modal, and inline script that applies the saved theme and language before the page paints (so there's no flash).

**`style.css`**
All styling in one file. Dark theme by default, light theme toggleable, six-language support baked into the layout, responsive down to 320px. Every animation — the 3D card, the floating price tag, the toast slides, the section reveals — lives here.

**`script.js`**
All the logic. Pricing tiers, quantity changes, discount validation with a 24-hour cooldown, language switching across six languages, theme switching, order form submission via WhatsApp, and every interactive element on the page.

**`README.md`**
You're reading it.

---

## What the site does

**Landing page**
Hero with a draggable 3D NFC card, sections explaining what the cards do (menus, reviews, business cards, Wi-Fi), a three-step "how it works" flow, and a call to action.

**Order page**
Pick between NFC cards and sticker versions. Adjust the quantity with + / − buttons or preset tiers (5, 10, 20, 50 units). Apply a discount code — the original price shows crossed out, the discount appears below it, and the total updates live. Choose a payment method (cash on delivery, bank card, or bank transfer) and send the order through WhatsApp in one click.

**Demo page**
Interactive phone mockup that shows what a customer sees after tapping an NFC card: contact buttons, a sample menu, a Google Review prompt, or a business page. Below that, a 3D rotating carousel of past projects and a custom website order form.

**FAQ page**
Answers to common questions about NFC compatibility, pricing, delivery, and programming. Contact cards at the bottom linking to WhatsApp, Instagram, and email.

---

## Features

- Fully responsive from 320px to 4K
- Dark and light mode, remembered per visitor
- Six languages: Albanian, English, German, Italian, French, Spanish
- Live pricing that recalculates as quantity and discount change
- 24-hour cooldown on discount codes (per browser) and calendar expiry dates
- Multiple payment options
- 3D NFC card you can drag and tap
- Toast notifications with slide-in animations
- Scroll reveal on every section
- Loading screen with brand animation
- No dependencies, no build tools, no tracking scripts

---

## License

Private project. All rights reserved.
