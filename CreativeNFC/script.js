/* ============================================================
   CREATIVE NFC — script.js
============================================================ */

/* ============================================================
   CONFIG
============================================================ */
const INSTAGRAM = "creative.nfc";
const GMAIL = "creativenfc34@gmail.com";
const GOOGLE_REVIEW_URL = "";
const NTFY_TOPIC = "";
const CALLMEBOT_KEY = "";
const WHATSAPP = "38346300701";
const BRAND = "Creative NFC";
const PAYMENT_URL = "";
const BANK_IBAN = "";
const CODE_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours

/* ============================================================
   TRANSLATIONS
============================================================ */
const T = {
  sq: {
    nav_home:"Kryefaqja", nav_order:"Porosit", nav_demo:"Demo", nav_faq:"FAQ",
    hero_eyebrow:"Kartela & stikerë NFC", hero_pre:"Biznesi yt,", hero_grad:"i prekshëm", hero_post:"me një tap.",
    hero_lead:"Vizitkarta digjitale, menu, Google Review, WhatsApp dhe faqja e biznesit — të gjitha në një prekje.",
    cta_order:"Porosit tani", cta_demo:"Shiko demo",
    fact_no_app:"Pa aplikacion", fact_cash:"Cash pas dorëzimit", fact_delivery:"Dërgesë në gjithë Kosovën",
    tap_card:"Prek kartelën",
    uses_eyebrow:"Përdorimet", uses_title:"Një tap. Shumë mundësi.", uses_sub:"Çdo kartelë ose stiker programohet për atë që i duhet biznesit tënd.",
    use_menu_t:"Menu digjitale", use_menu_d:"Klienti e prek stikerin në tavolinë dhe menuja hapet direkt në telefon.",
    use_review_t:"Google Review", use_review_d:"Më shumë vlerësime pozitive me vetëm një prekje — pa kërkim në Google.",
    use_card_t:"Vizitkartë digjitale", use_card_d:"Kontakt, WhatsApp dhe rrjetet sociale në një link të vetëm.",
    use_wifi_t:"Wi-Fi falas", use_wifi_d:"Klienti lidhet me Wi-Fi me një prekje — pa shtypur fjalëkalim.",
    how_eyebrow:"Si funksionon", how_title:"Tre hapa deri te një tap", how_sub:"Pa aplikacione, pa llogari, pa komplikime.",
    step1_t:"Porosit", step1_d:"Zgjidh sasinë, dërgo porosinë në WhatsApp dhe na trego çfarë do të hapë kartela.",
    step2_t:"Programojmë", step2_d:"Ne vendosim linkun dhe e testojmë para dorëzimit.",
    step3_t:"Përdore", step3_d:"Klienti e prek telefonin dhe hapet faqja. Pa aplikacion, pa pagesë mujore.",
    home_cta_title:"Gati për ta bërë biznesin tënd të prekshëm?", home_cta_sub:"Kartela, stikerë dhe faqe web — të gjitha me një tap.",
    order_eyebrow:"Porosit", order_title:"Porosit kartelën NFC", order_sub:"Zgjidh sasinë, apliko kod zbritjeje dhe zgjidh mënyrën e pagesës.",
    ptab_card_name:"Kartela NFC", ptab_card_price:"15 € / 1 copë", ptab_logo_name:"Stikerë me logo", ptab_logo_note:"+ shtesë sipas sasisë",
    logonote:"Në versionin me logo, logoja shtohet si dizajn custom dhe shkarkohet te WhatsApp.",
    discount_label:"Kodi i zbritjes", discount_apply:"Zbato", discount_remove:"Hiq",
    line_subtotal:"Çmimi origjinal", line_unit:"Çmimi / copë", line_ship:"Posta", line_total:"Totali", line_free:"Falas",
    btn_wa_order:"Porosit në WhatsApp", btn_complete:"Plotëso porosinë",
    pay_eyebrow:"Pagesa", pay_title:"Mënyrat e pagesës", pay_sub:"Zgjidh mënyrën që të përshtatet më mirë.",
    pay_cash_badge:"Rekomanduar", pay_cash_t:"Cash në dorëzim", pay_cash_d:"Paguan kur ta marrësh porosinë. Nuk kërkohet pagesë paraprake.",
    pay_card_t:"Kartë bankare", pay_card_d:"Visa dhe Mastercard — pagesë e sigurt.", pay_card_cta:"Paguaj me kartë",
    pay_bank_t:"Transfertë bankare", pay_bank_iban:"IBAN:", pay_bank_cta:"Kopjo IBAN", pay_total:"Totali i porosisë:",
    order_cta_title:"Nuk je i sigurt çfarë të zgjedhësh?", order_cta_sub:"Na shkruaj në WhatsApp — të ndihmojmë.", order_cta_ask:"Pyet në WhatsApp",
    demo_eyebrow:"Demo", demo_title:"Si duket pas një tap", demo_sub:"Shembull i kartelës dhe butonave që hapen në telefonin e klientit.",
    tab_card:"Kartela", tab_menu:"Menu", tab_review:"Review", tab_site:"Faqe",
    demo_hint:"Kliko një tab për të parë si duket.",
    works_eyebrow:"Punët", works_title:"Faqe web që hapen me një prekje", works_sub:"Shembuj të faqeve që lidhen direkt me kartelën NFC.",
    btn_ig_works:"Shiko punët në Instagram", btn_want_similar:"Dua një faqe të ngjashme",
    form_title:"Porosi custom për një faqe interneti",
    form_type:"Lloji", form_biz:"Biznesi", form_desc:"Çfarë dëshiron", form_budget:"Buxheti", form_deadline:"Afati", form_name:"Emri", form_phone:"Telefoni", form_submit:"Dërgo në WhatsApp",
    form_biz_ph:"Emri i biznesit", form_desc_ph:"P.sh. një faqe me menu dhe WhatsApp", form_budget_ph:"€ ose -", form_deadline_ph:"P.sh. 2 javë",
    form_type_menu:"Menu online", form_type_shop:"Dyqan online", form_type_portfolio:"Portfolio", form_type_biz:"Faqe biznesi", form_type_landing:"Landing page",
    faq_eyebrow:"FAQ", faq_title:"Pyetje të shpeshta", faq_sub:"Gjërat që pyesin më shpesh bizneset.",
    faq_biz_h:"Për biznesin",
    faq_q1:"Punon në çdo telefon?", faq_a1:"Punon në shumicën e iPhone dhe Android me NFC.",
    faq_q2:"A ka pagesë mujore?", faq_a2:"Jo. Paguan vetëm një herë kur e blen kartelën ose stikerin.",
    faq_q3:"Çfarë është stikeri NFC me logo?", faq_a3:"Stiker me çip NFC dhe logon e biznesit tënd të printuar sipër.",
    faq_q4:"Mund të kem disa veprime?", faq_a4:"Zakonisht një kartelë hap një veprim. Për më shumë, lidhim një faqe të vetme.",
    faq_order_h:"Për porosinë",
    faq_q5:"Kush e programon?", faq_a5:"Ne. Na tregon çfarë dëshiron dhe kartela vjen gati.",
    faq_q6:"Mund ta ndryshoj linkun?", faq_a6:"Po, çipi mund të rishkruhet. Na shkruaj në WhatsApp.",
    faq_q7:"Si paguhet?", faq_a7:"Cash, me kartë ose transfertë. Pa pagesë paraprake.",
    faq_q8:"Bëni edhe web faqe?", faq_a8:"Po. Shiko shembujt në faqen e demos.",
    contact_eyebrow:"Kontakt", contact_title:"Na kontakto", contact_sub:"Përgjigjemi shpejt në WhatsApp.",
    contact_phone:"Telefon", contact_wa:"WhatsApp", contact_ig:"Instagram", contact_mail:"Gmail", contact_wa_send:"Dërgo mesazh",
    cta_final_title:"Gati për të porositur?", cta_final_sub:"Zgjidh sasinë dhe dërgo porosinë në WhatsApp.",
    footer_brand_p:"Kartela dhe stikerë NFC që e bëjnë biznesin të prekshëm.",
    footer_contact_h:"Kontakt", footer_info_h:"Informacion",
    footer_delivery:"Dërgesë në gjithë Kosovën", footer_cash:"Cash pas dorëzimit", footer_no_monthly:"Pa pagesë mujore",
    footer_copy:"© 2026 Creative NFC. Të gjitha të drejtat e rezervuara.", footer_credit:"Krijuar me kujdes.",
    modal_title:"Përfundo porosinë", modal_actions:"Çfarë dëshiron të hapë?",
    modal_design:"Dua dizajn custom me logon time", modal_links:"Linqet ose të dhënat",
    modal_links_ph:"P.sh. instagram.com/biznesi...", modal_biz:"Emri i biznesit", modal_name:"Emri dhe mbiemri",
    modal_phone:"Numri i telefonit", modal_addr:"Qyteti dhe adresa", modal_note:"Shkruaj çfarë dëshiron",
    modal_note_ph:"P.sh. ngjyra, tekst, logo...", modal_submit:"Konfirmo porosinë në WhatsApp", modal_foot:"Paguan cash kur e merr porosinë.",
    product_card:"kartela NFC", product_logo:"stikerë NFC me logon e biznesit",
    tier_most_sold:"Më e shitura", tier_wholesale:"Shumicë", tier_pcs:"copë",
    toast_applied_title:"Kodi u aplikua!", toast_applied_msg:"{label} u shtua në porosi.",
    toast_used_title:"Kodi është përdorur", toast_used_msg:"Ky kod u përdor së fundmi. Provo përsëri pas {time}.",
    toast_expired_title:"Kodi ka skaduar", toast_expired_msg:"\"{code}\" ka skaduar më {date}.",
    toast_invalid_title:"Kodi nuk u gjet", toast_invalid_msg:"\"{code}\" nuk është kod i vlefshëm.",
    toast_removed_title:"Kodi u hoq", toast_removed_msg:"Zbritja u hoq nga porosia.",
    toast_wa_title:"WhatsApp u hap", toast_wa_msg:"Shtyp Dërgo për ta përfunduar porosinë.",
    toast_sent_title:"Porosia u dërgua", toast_sent_msg:"Do të kontaktohemi së shpejti.",
    toast_iban_ok_title:"IBAN u kopjua", toast_iban_fail_title:"Kopjimi dështoi", toast_iban_fail_msg:"Zgjidh manualisht: {iban}",
    time_days:"{n} ditësh", time_day:"1 dite", time_hours:"{n} orësh", time_hour:"1 ore",
    wa_greeting:"Përshëndetje {brand}! Dua të pyes për kartelat NFC.",
    wa_order:"Përshëndetje {brand}! Dua të porosis {qty} {product} ({total}).",
    wa_demo_order:"Përshëndetje Creative Studio! Dua të porosis kartela NFC.",
    wa_web:"Përshëndetje! Dua të bëj një web faqe.",
    wa_similar:"Përshëndetje! Dua një web faqe si \"{name}\" ({type}).",
    order_msg_title:"Porosi e re", order_msg_product:"Produkti", order_msg_subtotal:"Nëntotali", order_msg_discount:"Zbritje",
    order_msg_ship:"Posta", order_msg_total:"Totali", order_msg_free:"Falas", order_msg_cash:"(cash në dorëzim)",
    order_msg_actions:"Veprimet", order_msg_custom_yes:"Po, me logon/dizajnin tim", order_msg_custom_no:"Jo",
    order_msg_custom:"Dizajn custom", order_msg_links:"Linqe", order_msg_biz:"Biznesi", order_msg_name:"Emri",
    order_msg_phone:"Telefoni", order_msg_addr:"Adresa", order_msg_client:"Mesazhi i klientit", order_msg_code:"Kodi",
    months:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gsh","Sht","Tet","Nën","Dhj"]
  },
  en: {
    nav_home:"Home", nav_order:"Order", nav_demo:"Demo", nav_faq:"FAQ",
    hero_eyebrow:"NFC cards & stickers", hero_pre:"Your business,", hero_grad:"one tap", hero_post:"away.",
    hero_lead:"Digital business cards, menus, Google Review, WhatsApp and your business page — all in a single tap.",
    cta_order:"Order now", cta_demo:"View demo",
    fact_no_app:"No app needed", fact_cash:"Cash on delivery", fact_delivery:"Delivery across Kosovo",
    tap_card:"Tap the card",
    uses_eyebrow:"Uses", uses_title:"One tap. Many possibilities.", uses_sub:"Each card or sticker is programmed for what your business needs.",
    use_menu_t:"Digital menu", use_menu_d:"Customers tap the sticker on the table and the menu opens on their phone.",
    use_review_t:"Google Review", use_review_d:"More positive reviews with a single tap — no Google search required.",
    use_card_t:"Digital business card", use_card_d:"Contact, WhatsApp and socials on a single link.",
    use_wifi_t:"Free Wi-Fi", use_wifi_d:"Customers connect to Wi-Fi with one tap — no password typing.",
    how_eyebrow:"How it works", how_title:"Three steps to a single tap", how_sub:"No apps, no accounts, no hassle.",
    step1_t:"Order", step1_d:"Pick a quantity, send the order on WhatsApp and tell us what the card should open.",
    step2_t:"We program it", step2_d:"We set the link and test it before delivery.",
    step3_t:"Use it", step3_d:"The customer taps their phone and the page opens. No app, no monthly fee.",
    home_cta_title:"Ready to make your business touchable?", home_cta_sub:"Cards, stickers and web pages — all with one tap.",
    order_eyebrow:"Order", order_title:"Order the NFC card", order_sub:"Pick a quantity, apply a discount code and choose your payment method.",
    ptab_card_name:"NFC card", ptab_card_price:"15 € / 1 pc", ptab_logo_name:"Stickers with logo", ptab_logo_note:"+ extra per quantity",
    logonote:"In the logo version, the logo is added as a custom design and sent via WhatsApp.",
    discount_label:"Discount code", discount_apply:"Apply", discount_remove:"Remove",
    line_subtotal:"Original price", line_unit:"Price / pc", line_ship:"Shipping", line_total:"Total", line_free:"Free",
    btn_wa_order:"Order on WhatsApp", btn_complete:"Complete order",
    pay_eyebrow:"Payment", pay_title:"Payment methods", pay_sub:"Choose the method that suits you best.",
    pay_cash_badge:"Recommended", pay_cash_t:"Cash on delivery", pay_cash_d:"Pay when you receive the order. No upfront payment.",
    pay_card_t:"Bank card", pay_card_d:"Visa and Mastercard — secure payment.", pay_card_cta:"Pay by card",
    pay_bank_t:"Bank transfer", pay_bank_iban:"IBAN:", pay_bank_cta:"Copy IBAN", pay_total:"Order total:",
    order_cta_title:"Not sure what to pick?", order_cta_sub:"Message us on WhatsApp — we'll help you.", order_cta_ask:"Ask on WhatsApp",
    demo_eyebrow:"Demo", demo_title:"What it looks like after a tap", demo_sub:"Sample of the card and buttons that open on the customer's phone.",
    tab_card:"Card", tab_menu:"Menu", tab_review:"Review", tab_site:"Page",
    demo_hint:"Click a tab to see what it looks like.",
    works_eyebrow:"Work", works_title:"Web pages that open with a tap", works_sub:"Examples of pages that link directly from the NFC card.",
    btn_ig_works:"See the work on Instagram", btn_want_similar:"I want a similar page",
    form_title:"Custom order for a website",
    form_type:"Type", form_biz:"Business", form_desc:"What you want", form_budget:"Budget", form_deadline:"Deadline", form_name:"Name", form_phone:"Phone", form_submit:"Send on WhatsApp",
    form_biz_ph:"Business name", form_desc_ph:"E.g. a page with menu and WhatsApp", form_budget_ph:"€ or -", form_deadline_ph:"E.g. 2 weeks",
    form_type_menu:"Online menu", form_type_shop:"Online store", form_type_portfolio:"Portfolio", form_type_biz:"Business page", form_type_landing:"Landing page",
    faq_eyebrow:"FAQ", faq_title:"Frequently asked questions", faq_sub:"The things businesses ask most often.",
    faq_biz_h:"For the business",
    faq_q1:"Works on every phone?", faq_a1:"Works on most iPhones and Androids with NFC.",
    faq_q2:"Is there a monthly fee?", faq_a2:"No. You pay only once when you buy the card or sticker.",
    faq_q3:"What is the NFC sticker with logo?", faq_a3:"A sticker with an NFC chip and your business logo printed on top.",
    faq_q4:"Can I have several actions?", faq_a4:"Usually one card opens one action. For more, we link a single page with all buttons.",
    faq_order_h:"For the order",
    faq_q5:"Who programs the card?", faq_a5:"We do. Tell us what you want and it arrives ready.",
    faq_q6:"Can I change the link later?", faq_a6:"Yes, the chip can be rewritten. Message us on WhatsApp.",
    faq_q7:"How do you pay?", faq_a7:"Cash, by card or bank transfer. No upfront payment.",
    faq_q8:"Do you also build websites?", faq_a8:"Yes. See the examples on the demo page.",
    contact_eyebrow:"Contact", contact_title:"Contact us", contact_sub:"We reply quickly on WhatsApp.",
    contact_phone:"Phone", contact_wa:"WhatsApp", contact_ig:"Instagram", contact_mail:"Gmail", contact_wa_send:"Send message",
    cta_final_title:"Ready to order?", cta_final_sub:"Pick a quantity and send your order on WhatsApp.",
    footer_brand_p:"NFC cards and stickers that make your business touchable.",
    footer_contact_h:"Contact", footer_info_h:"Information",
    footer_delivery:"Delivery across Kosovo", footer_cash:"Cash on delivery", footer_no_monthly:"No monthly fee",
    footer_copy:"© 2026 Creative NFC. All rights reserved.", footer_credit:"Crafted with care.",
    modal_title:"Complete order", modal_actions:"What should it open?",
    modal_design:"I want a custom design with my logo", modal_links:"Links or data",
    modal_links_ph:"E.g. instagram.com/business...", modal_biz:"Business name", modal_name:"Full name",
    modal_phone:"Phone number", modal_addr:"City and address", modal_note:"Write what you want",
    modal_note_ph:"E.g. colors, text, logo...", modal_submit:"Confirm order on WhatsApp", modal_foot:"You pay cash when you receive the order.",
    product_card:"NFC card", product_logo:"NFC stickers with business logo",
    tier_most_sold:"Best seller", tier_wholesale:"Wholesale", tier_pcs:"pcs",
    toast_applied_title:"Code applied!", toast_applied_msg:"{label} was added to your order.",
    toast_used_title:"Code already used", toast_used_msg:"This code was recently used. Try again in {time}.",
    toast_expired_title:"Code expired", toast_expired_msg:"\"{code}\" expired on {date}.",
    toast_invalid_title:"Code not found", toast_invalid_msg:"\"{code}\" is not a valid code.",
    toast_removed_title:"Code removed", toast_removed_msg:"The discount was removed from your order.",
    toast_wa_title:"WhatsApp opened", toast_wa_msg:"Tap Send to complete your order.",
    toast_sent_title:"Order sent", toast_sent_msg:"We'll be in touch soon.",
    toast_iban_ok_title:"IBAN copied", toast_iban_fail_title:"Copy failed", toast_iban_fail_msg:"Select manually: {iban}",
    time_days:"{n} days", time_day:"1 day", time_hours:"{n} hours", time_hour:"1 hour",
    wa_greeting:"Hi {brand}! I'd like to ask about NFC cards.",
    wa_order:"Hi {brand}! I'd like to order {qty} {product} ({total}).",
    wa_demo_order:"Hi Creative Studio! I'd like to order NFC cards.",
    wa_web:"Hi! I'd like a website.",
    wa_similar:"Hi! I'd like a website like \"{name}\" ({type}).",
    order_msg_title:"New order", order_msg_product:"Product", order_msg_subtotal:"Subtotal", order_msg_discount:"Discount",
    order_msg_ship:"Shipping", order_msg_total:"Total", order_msg_free:"Free", order_msg_cash:"(cash on delivery)",
    order_msg_actions:"Actions", order_msg_custom_yes:"Yes, with my logo/design", order_msg_custom_no:"No",
    order_msg_custom:"Custom design", order_msg_links:"Links", order_msg_biz:"Business", order_msg_name:"Name",
    order_msg_phone:"Phone", order_msg_addr:"Address", order_msg_client:"Customer message", order_msg_code:"Code",
    months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  },
  de: {
    nav_home:"Startseite", nav_order:"Bestellen", nav_demo:"Demo", nav_faq:"FAQ",
    hero_eyebrow:"NFC-Karten & Aufkleber", hero_pre:"Ihr Geschäft,", hero_grad:"berührbar", hero_post:"mit einem Tipp.",
    hero_lead:"Digitale Visitenkarten, Speisekarten, Google Review, WhatsApp und Ihre Firmenseite — alles mit einem Tipp.",
    cta_order:"Jetzt bestellen", cta_demo:"Demo ansehen",
    fact_no_app:"Keine App nötig", fact_cash:"Barzahlung bei Lieferung", fact_delivery:"Lieferung im ganzen Kosovo",
    tap_card:"Karte antippen",
    uses_eyebrow:"Anwendungen", uses_title:"Ein Tipp. Viele Möglichkeiten.", uses_sub:"Jede Karte wird für Ihr Geschäft programmiert.",
    use_menu_t:"Digitale Speisekarte", use_menu_d:"Kunden tippen den Aufkleber an und die Speisekarte öffnet sich.",
    use_review_t:"Google Review", use_review_d:"Mehr positive Bewertungen mit einem Tipp.",
    use_card_t:"Digitale Visitenkarte", use_card_d:"Kontakt, WhatsApp und soziale Netzwerke auf einem Link.",
    use_wifi_t:"Kostenloses WLAN", use_wifi_d:"Kunden verbinden sich mit einem Tipp — ohne Passwort.",
    how_eyebrow:"So funktioniert es", how_title:"Drei Schritte bis zum Tipp", how_sub:"Keine Apps, keine Konten, kein Aufwand.",
    step1_t:"Bestellen", step1_d:"Menge wählen, Bestellung per WhatsApp senden.",
    step2_t:"Wir programmieren", step2_d:"Wir legen den Link fest und testen ihn vor der Lieferung.",
    step3_t:"Verwenden", step3_d:"Der Kunde tippt sein Handy an und die Seite öffnet sich.",
    home_cta_title:"Bereit, Ihr Geschäft berührbar zu machen?", home_cta_sub:"Karten, Aufkleber und Webseiten — alles mit einem Tipp.",
    order_eyebrow:"Bestellen", order_title:"NFC-Karte bestellen", order_sub:"Menge wählen, Rabattcode anwenden und Zahlungsart auswählen.",
    ptab_card_name:"NFC-Karte", ptab_card_price:"15 € / 1 Stück", ptab_logo_name:"Aufkleber mit Logo", ptab_logo_note:"+ Aufpreis je Menge",
    logonote:"In der Logo-Version wird das Logo als Design hinzugefügt und per WhatsApp gesendet.",
    discount_label:"Rabattcode", discount_apply:"Anwenden", discount_remove:"Entfernen",
    line_subtotal:"Originalpreis", line_unit:"Preis / Stück", line_ship:"Versand", line_total:"Gesamt", line_free:"Kostenlos",
    btn_wa_order:"Per WhatsApp bestellen", btn_complete:"Bestellung abschließen",
    pay_eyebrow:"Zahlung", pay_title:"Zahlungsmethoden", pay_sub:"Wählen Sie die passende Methode.",
    pay_cash_badge:"Empfohlen", pay_cash_t:"Barzahlung bei Lieferung", pay_cash_d:"Sie zahlen, wenn Sie die Bestellung erhalten.",
    pay_card_t:"Bankkarte", pay_card_d:"Visa und Mastercard — sichere Zahlung.", pay_card_cta:"Mit Karte zahlen",
    pay_bank_t:"Banküberweisung", pay_bank_iban:"IBAN:", pay_bank_cta:"IBAN kopieren", pay_total:"Bestellsumme:",
    order_cta_title:"Unsicher, was Sie wählen sollen?", order_cta_sub:"Schreiben Sie uns auf WhatsApp.", order_cta_ask:"Auf WhatsApp fragen",
    demo_eyebrow:"Demo", demo_title:"So sieht es nach einem Tipp aus", demo_sub:"Beispiel der Karte und der Buttons.",
    tab_card:"Karte", tab_menu:"Speisekarte", tab_review:"Bewertung", tab_site:"Seite",
    demo_hint:"Klicken Sie auf einen Tab.",
    works_eyebrow:"Arbeiten", works_title:"Webseiten, die sich mit einem Tipp öffnen", works_sub:"Beispiele für Seiten, die mit der Karte verlinkt sind.",
    btn_ig_works:"Arbeiten auf Instagram ansehen", btn_want_similar:"Ich möchte eine ähnliche Seite",
    form_title:"Individuelle Bestellung für eine Webseite",
    form_type:"Typ", form_biz:"Geschäft", form_desc:"Was Sie möchten", form_budget:"Budget", form_deadline:"Frist", form_name:"Name", form_phone:"Telefon", form_submit:"Per WhatsApp senden",
    form_biz_ph:"Firmenname", form_desc_ph:"Z.B. eine Seite mit Speisekarte", form_budget_ph:"€ oder -", form_deadline_ph:"Z.B. 2 Wochen",
    form_type_menu:"Online-Speisekarte", form_type_shop:"Online-Shop", form_type_portfolio:"Portfolio", form_type_biz:"Firmenseite", form_type_landing:"Landingpage",
    faq_eyebrow:"FAQ", faq_title:"Häufig gestellte Fragen", faq_sub:"Was Unternehmen am häufigsten fragen.",
    faq_biz_h:"Für das Geschäft",
    faq_q1:"Funktioniert es auf jedem Handy?", faq_a1:"Es funktioniert auf den meisten iPhones und Androids mit NFC.",
    faq_q2:"Gibt es eine monatliche Gebühr?", faq_a2:"Nein. Sie zahlen nur einmal beim Kauf.",
    faq_q3:"Was ist der NFC-Aufkleber mit Logo?", faq_a3:"Ein Aufkleber mit NFC-Chip und Ihrem Logo obenauf.",
    faq_q4:"Kann ich mehrere Aktionen haben?", faq_a4:"Normalerweise öffnet eine Karte eine Aktion. Für mehr verlinken wir eine Seite mit allen Buttons.",
    faq_order_h:"Zur Bestellung",
    faq_q5:"Wer programmiert die Karte?", faq_a5:"Wir. Sie kommt einsatzbereit an.",
    faq_q6:"Kann ich den Link ändern?", faq_a6:"Ja, der Chip kann neu beschrieben werden.",
    faq_q7:"Wie zahle ich?", faq_a7:"Bar, per Karte oder Überweisung. Keine Vorauszahlung.",
    faq_q8:"Bauen Sie auch Webseiten?", faq_a8:"Ja. Sehen Sie sich die Beispiele auf der Demo-Seite an.",
    contact_eyebrow:"Kontakt", contact_title:"Kontaktieren Sie uns", contact_sub:"Wir antworten schnell auf WhatsApp.",
    contact_phone:"Telefon", contact_wa:"WhatsApp", contact_ig:"Instagram", contact_mail:"Gmail", contact_wa_send:"Nachricht senden",
    cta_final_title:"Bereit zu bestellen?", cta_final_sub:"Menge wählen und per WhatsApp bestellen.",
    footer_brand_p:"NFC-Karten und Aufkleber, die Ihr Geschäft berührbar machen.",
    footer_contact_h:"Kontakt", footer_info_h:"Information",
    footer_delivery:"Lieferung im ganzen Kosovo", footer_cash:"Barzahlung bei Lieferung", footer_no_monthly:"Keine Monatsgebühr",
    footer_copy:"© 2026 Creative NFC. Alle Rechte vorbehalten.", footer_credit:"Mit Sorgfalt gestaltet.",
    modal_title:"Bestellung abschließen", modal_actions:"Was soll es öffnen?",
    modal_design:"Ich möchte ein individuelles Design mit meinem Logo", modal_links:"Links oder Daten",
    modal_links_ph:"Z.B. instagram.com/geschaeft...", modal_biz:"Firmenname", modal_name:"Vollständiger Name",
    modal_phone:"Telefonnummer", modal_addr:"Stadt und Adresse", modal_note:"Schreiben Sie, was Sie möchten",
    modal_note_ph:"Z.B. Farben, Text, Logo...", modal_submit:"Bestellung per WhatsApp bestätigen", modal_foot:"Sie zahlen bar bei Erhalt.",
    product_card:"NFC-Karte", product_logo:"NFC-Aufkleber mit Firmenlogo",
    tier_most_sold:"Bestseller", tier_wholesale:"Großhandel", tier_pcs:"Stk",
    toast_applied_title:"Code angewendet!", toast_applied_msg:"{label} wurde hinzugefügt.",
    toast_used_title:"Code bereits verwendet", toast_used_msg:"Kürzlich verwendet. Versuchen Sie es in {time} erneut.",
    toast_expired_title:"Code abgelaufen", toast_expired_msg:"\"{code}\" ist am {date} abgelaufen.",
    toast_invalid_title:"Code nicht gefunden", toast_invalid_msg:"\"{code}\" ist kein gültiger Code.",
    toast_removed_title:"Code entfernt", toast_removed_msg:"Der Rabatt wurde entfernt.",
    toast_wa_title:"WhatsApp geöffnet", toast_wa_msg:"Tippen Sie auf Senden.",
    toast_sent_title:"Bestellung gesendet", toast_sent_msg:"Wir melden uns bald.",
    toast_iban_ok_title:"IBAN kopiert", toast_iban_fail_title:"Kopieren fehlgeschlagen", toast_iban_fail_msg:"Manuell auswählen: {iban}",
    time_days:"{n} Tagen", time_day:"1 Tag", time_hours:"{n} Stunden", time_hour:"1 Stunde",
    wa_greeting:"Hallo {brand}! Ich möchte nach NFC-Karten fragen.",
    wa_order:"Hallo {brand}! Ich möchte {qty} {product} bestellen ({total}).",
    wa_demo_order:"Hallo Creative Studio! Ich möchte NFC-Karten bestellen.",
    wa_web:"Hallo! Ich möchte eine Webseite.",
    wa_similar:"Hallo! Ich möchte eine Webseite wie \"{name}\" ({type}).",
    order_msg_title:"Neue Bestellung", order_msg_product:"Produkt", order_msg_subtotal:"Zwischensumme", order_msg_discount:"Rabatt",
    order_msg_ship:"Versand", order_msg_total:"Gesamt", order_msg_free:"Kostenlos", order_msg_cash:"(Barzahlung bei Lieferung)",
    order_msg_actions:"Aktionen", order_msg_custom_yes:"Ja, mit meinem Logo/Design", order_msg_custom_no:"Nein",
    order_msg_custom:"Individuelles Design", order_msg_links:"Links", order_msg_biz:"Geschäft", order_msg_name:"Name",
    order_msg_phone:"Telefon", order_msg_addr:"Adresse", order_msg_client:"Kundennachricht", order_msg_code:"Code",
    months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]
  },
  it: {
    nav_home:"Home", nav_order:"Ordina", nav_demo:"Demo", nav_faq:"FAQ",
    hero_eyebrow:"Tessere e adesivi NFC", hero_pre:"Il tuo business,", hero_grad:"tangibile", hero_post:"con un tocco.",
    hero_lead:"Biglietti da visita digitali, menu, Google Review, WhatsApp e pagina aziendale — tutto con un tocco.",
    cta_order:"Ordina ora", cta_demo:"Vedi demo",
    fact_no_app:"Nessuna app", fact_cash:"Pagamento alla consegna", fact_delivery:"Consegna in tutto il Kosovo",
    tap_card:"Tocca la tessera",
    uses_eyebrow:"Utilizzi", uses_title:"Un tocco. Molte possibilità.", uses_sub:"Ogni tessera è programmata per ciò che serve al tuo business.",
    use_menu_t:"Menu digitale", use_menu_d:"I clienti toccano l'adesivo e il menu si apre sul telefono.",
    use_review_t:"Google Review", use_review_d:"Più recensioni positive con un solo tocco.",
    use_card_t:"Biglietto digitale", use_card_d:"Contatti, WhatsApp e social su un unico link.",
    use_wifi_t:"Wi-Fi gratuito", use_wifi_d:"I clienti si connettono con un tocco — senza password.",
    how_eyebrow:"Come funziona", how_title:"Tre passi per un tocco", how_sub:"Nessuna app, nessun account, nessun problema.",
    step1_t:"Ordina", step1_d:"Scegli la quantità, invia l'ordine su WhatsApp.",
    step2_t:"Programmiamo", step2_d:"Impostiamo il link e lo testiamo prima della consegna.",
    step3_t:"Usa", step3_d:"Il cliente tocca il telefono e la pagina si apre.",
    home_cta_title:"Pronto a rendere tangibile il tuo business?", home_cta_sub:"Tessere, adesivi e siti web — tutto con un tocco.",
    order_eyebrow:"Ordina", order_title:"Ordina la tessera NFC", order_sub:"Scegli la quantità, applica un codice sconto e scegli il pagamento.",
    ptab_card_name:"Tessera NFC", ptab_card_price:"15 € / 1 pz", ptab_logo_name:"Adesivi con logo", ptab_logo_note:"+ extra per quantità",
    logonote:"Nella versione con logo, il logo viene aggiunto come design personalizzato e inviato su WhatsApp.",
    discount_label:"Codice sconto", discount_apply:"Applica", discount_remove:"Rimuovi",
    line_subtotal:"Prezzo originale", line_unit:"Prezzo / pz", line_ship:"Spedizione", line_total:"Totale", line_free:"Gratis",
    btn_wa_order:"Ordina su WhatsApp", btn_complete:"Completa ordine",
    pay_eyebrow:"Pagamento", pay_title:"Metodi di pagamento", pay_sub:"Scegli il metodo più adatto a te.",
    pay_cash_badge:"Consigliato", pay_cash_t:"Pagamento alla consegna", pay_cash_d:"Paghi quando ricevi l'ordine.",
    pay_card_t:"Carta bancaria", pay_card_d:"Visa e Mastercard — pagamento sicuro.", pay_card_cta:"Paga con carta",
    pay_bank_t:"Bonifico bancario", pay_bank_iban:"IBAN:", pay_bank_cta:"Copia IBAN", pay_total:"Totale ordine:",
    order_cta_title:"Non sei sicuro cosa scegliere?", order_cta_sub:"Scrivici su WhatsApp.", order_cta_ask:"Chiedi su WhatsApp",
    demo_eyebrow:"Demo", demo_title:"Come appare dopo un tocco", demo_sub:"Esempio della tessera e dei pulsanti che si aprono.",
    tab_card:"Tessera", tab_menu:"Menu", tab_review:"Recensione", tab_site:"Pagina",
    demo_hint:"Clicca una scheda.",
    works_eyebrow:"Lavori", works_title:"Pagine web che si aprono con un tocco", works_sub:"Esempi di pagine collegate alla tessera NFC.",
    btn_ig_works:"Guarda i lavori su Instagram", btn_want_similar:"Voglio una pagina simile",
    form_title:"Ordine personalizzato per un sito web",
    form_type:"Tipo", form_biz:"Attività", form_desc:"Cosa vuoi", form_budget:"Budget", form_deadline:"Scadenza", form_name:"Nome", form_phone:"Telefono", form_submit:"Invia su WhatsApp",
    form_biz_ph:"Nome attività", form_desc_ph:"Es. pagina con menu e WhatsApp", form_budget_ph:"€ o -", form_deadline_ph:"Es. 2 settimane",
    form_type_menu:"Menu online", form_type_shop:"Negozio online", form_type_portfolio:"Portfolio", form_type_biz:"Pagina aziendale", form_type_landing:"Landing page",
    faq_eyebrow:"FAQ", faq_title:"Domande frequenti", faq_sub:"Le domande più comuni delle aziende.",
    faq_biz_h:"Per l'attività",
    faq_q1:"Funziona su ogni telefono?", faq_a1:"Funziona sulla maggior parte di iPhone e Android con NFC.",
    faq_q2:"C'è un costo mensile?", faq_a2:"No. Paghi solo una volta all'acquisto.",
    faq_q3:"Cos'è l'adesivo NFC con logo?", faq_a3:"Un adesivo con chip NFC e il tuo logo stampato sopra.",
    faq_q4:"Posso avere più azioni?", faq_a4:"Di solito una tessera apre un'azione. Per più, colleghiamo una pagina con tutti i pulsanti.",
    faq_order_h:"Per l'ordine",
    faq_q5:"Chi programma la tessera?", faq_a5:"Noi. Arriva pronta all'uso.",
    faq_q6:"Posso cambiare il link?", faq_a6:"Sì, il chip può essere riscritto.",
    faq_q7:"Come si paga?", faq_a7:"Contanti, carta o bonifico. Nessun pagamento anticipato.",
    faq_q8:"Fate anche siti web?", faq_a8:"Sì. Vedi gli esempi nella pagina demo.",
    contact_eyebrow:"Contatti", contact_title:"Contattaci", contact_sub:"Rispondiamo rapidamente su WhatsApp.",
    contact_phone:"Telefono", contact_wa:"WhatsApp", contact_ig:"Instagram", contact_mail:"Gmail", contact_wa_send:"Invia messaggio",
    cta_final_title:"Pronto a ordinare?", cta_final_sub:"Scegli la quantità e invia l'ordine su WhatsApp.",
    footer_brand_p:"Tessere e adesivi NFC che rendono tangibile il tuo business.",
    footer_contact_h:"Contatti", footer_info_h:"Informazioni",
    footer_delivery:"Consegna in tutto il Kosovo", footer_cash:"Pagamento alla consegna", footer_no_monthly:"Nessun costo mensile",
    footer_copy:"© 2026 Creative NFC. Tutti i diritti riservati.", footer_credit:"Realizzato con cura.",
    modal_title:"Completa ordine", modal_actions:"Cosa deve aprire?",
    modal_design:"Voglio un design personalizzato con il mio logo", modal_links:"Link o dati",
    modal_links_ph:"Es. instagram.com/attivita...", modal_biz:"Nome attività", modal_name:"Nome completo",
    modal_phone:"Numero di telefono", modal_addr:"Città e indirizzo", modal_note:"Scrivi cosa vuoi",
    modal_note_ph:"Es. colori, testo, logo...", modal_submit:"Conferma ordine su WhatsApp", modal_foot:"Paghi in contanti alla consegna.",
    product_card:"tessera NFC", product_logo:"adesivi NFC con logo aziendale",
    tier_most_sold:"Più venduta", tier_wholesale:"Ingrosso", tier_pcs:"pz",
    toast_applied_title:"Codice applicato!", toast_applied_msg:"{label} è stato aggiunto.",
    toast_used_title:"Codice già usato", toast_used_msg:"Usato di recente. Riprova tra {time}.",
    toast_expired_title:"Codice scaduto", toast_expired_msg:"\"{code}\" è scaduto il {date}.",
    toast_invalid_title:"Codice non trovato", toast_invalid_msg:"\"{code}\" non è valido.",
    toast_removed_title:"Codice rimosso", toast_removed_msg:"Lo sconto è stato rimosso.",
    toast_wa_title:"WhatsApp aperto", toast_wa_msg:"Premi Invia per completare.",
    toast_sent_title:"Ordine inviato", toast_sent_msg:"Ti contatteremo a breve.",
    toast_iban_ok_title:"IBAN copiato", toast_iban_fail_title:"Copia fallita", toast_iban_fail_msg:"Seleziona manualmente: {iban}",
    time_days:"{n} giorni", time_day:"1 giorno", time_hours:"{n} ore", time_hour:"1 ora",
    wa_greeting:"Ciao {brand}! Vorrei informazioni sulle tessere NFC.",
    wa_order:"Ciao {brand}! Vorrei ordinare {qty} {product} ({total}).",
    wa_demo_order:"Ciao Creative Studio! Vorrei ordinare tessere NFC.",
    wa_web:"Ciao! Vorrei un sito web.",
    wa_similar:"Ciao! Vorrei un sito web come \"{name}\" ({type}).",
    order_msg_title:"Nuovo ordine", order_msg_product:"Prodotto", order_msg_subtotal:"Subtotale", order_msg_discount:"Sconto",
    order_msg_ship:"Spedizione", order_msg_total:"Totale", order_msg_free:"Gratis", order_msg_cash:"(contanti alla consegna)",
    order_msg_actions:"Azioni", order_msg_custom_yes:"Sì, con il mio logo/design", order_msg_custom_no:"No",
    order_msg_custom:"Design personalizzato", order_msg_links:"Link", order_msg_biz:"Attività", order_msg_name:"Nome",
    order_msg_phone:"Telefono", order_msg_addr:"Indirizzo", order_msg_client:"Messaggio cliente", order_msg_code:"Codice",
    months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"]
  },
  fr: {
    nav_home:"Accueil", nav_order:"Commander", nav_demo:"Démo", nav_faq:"FAQ",
    hero_eyebrow:"Cartes et stickers NFC", hero_pre:"Votre activité,", hero_grad:"tangible", hero_post:"en une touche.",
    hero_lead:"Cartes de visite digitales, menus, Google Review, WhatsApp et votre page — tout en une touche.",
    cta_order:"Commander", cta_demo:"Voir la démo",
    fact_no_app:"Aucune app requise", fact_cash:"Paiement à la livraison", fact_delivery:"Livraison partout au Kosovo",
    tap_card:"Touchez la carte",
    uses_eyebrow:"Utilisations", uses_title:"Une touche. Plein de possibilités.", uses_sub:"Chaque carte est programmée selon vos besoins.",
    use_menu_t:"Menu digital", use_menu_d:"Les clients touchent le sticker et le menu s'ouvre sur leur téléphone.",
    use_review_t:"Google Review", use_review_d:"Plus d'avis positifs en une seule touche.",
    use_card_t:"Carte de visite digitale", use_card_d:"Contact, WhatsApp et réseaux sociaux sur un seul lien.",
    use_wifi_t:"Wi-Fi gratuit", use_wifi_d:"Les clients se connectent en une touche — sans mot de passe.",
    how_eyebrow:"Comment ça marche", how_title:"Trois étapes pour une touche", how_sub:"Pas d'app, pas de compte, pas de complications.",
    step1_t:"Commander", step1_d:"Choisissez la quantité, envoyez la commande sur WhatsApp.",
    step2_t:"Nous programmons", step2_d:"Nous définissons le lien et le testons avant livraison.",
    step3_t:"Utiliser", step3_d:"Le client touche son téléphone et la page s'ouvre.",
    home_cta_title:"Prêt à rendre votre activité tangible ?", home_cta_sub:"Cartes, stickers et sites — tout en une touche.",
    order_eyebrow:"Commander", order_title:"Commander la carte NFC", order_sub:"Choisissez la quantité, appliquez un code promo et choisissez le paiement.",
    ptab_card_name:"Carte NFC", ptab_card_price:"15 € / 1 pièce", ptab_logo_name:"Stickers avec logo", ptab_logo_note:"+ supplément selon quantité",
    logonote:"Dans la version avec logo, le logo est ajouté comme design personnalisé et envoyé sur WhatsApp.",
    discount_label:"Code promo", discount_apply:"Appliquer", discount_remove:"Retirer",
    line_subtotal:"Prix original", line_unit:"Prix / pièce", line_ship:"Livraison", line_total:"Total", line_free:"Gratuit",
    btn_wa_order:"Commander sur WhatsApp", btn_complete:"Finaliser la commande",
    pay_eyebrow:"Paiement", pay_title:"Modes de paiement", pay_sub:"Choisissez la méthode qui vous convient.",
    pay_cash_badge:"Recommandé", pay_cash_t:"Paiement à la livraison", pay_cash_d:"Vous payez à la réception.",
    pay_card_t:"Carte bancaire", pay_card_d:"Visa et Mastercard — paiement sécurisé.", pay_card_cta:"Payer par carte",
    pay_bank_t:"Virement bancaire", pay_bank_iban:"IBAN :", pay_bank_cta:"Copier l'IBAN", pay_total:"Total de la commande :",
    order_cta_title:"Vous hésitez ?", order_cta_sub:"Écrivez-nous sur WhatsApp.", order_cta_ask:"Demander sur WhatsApp",
    demo_eyebrow:"Démo", demo_title:"Ce que ça donne après une touche", demo_sub:"Exemple de la carte et des boutons qui s'ouvrent.",
    tab_card:"Carte", tab_menu:"Menu", tab_review:"Avis", tab_site:"Page",
    demo_hint:"Cliquez sur un onglet.",
    works_eyebrow:"Travaux", works_title:"Pages web qui s'ouvrent d'une touche", works_sub:"Exemples de pages liées à la carte NFC.",
    btn_ig_works:"Voir les travaux sur Instagram", btn_want_similar:"Je veux une page similaire",
    form_title:"Commande personnalisée pour un site web",
    form_type:"Type", form_biz:"Activité", form_desc:"Ce que vous voulez", form_budget:"Budget", form_deadline:"Délai", form_name:"Nom", form_phone:"Téléphone", form_submit:"Envoyer sur WhatsApp",
    form_biz_ph:"Nom de l'activité", form_desc_ph:"Ex. une page avec menu et WhatsApp", form_budget_ph:"€ ou -", form_deadline_ph:"Ex. 2 semaines",
    form_type_menu:"Menu en ligne", form_type_shop:"Boutique en ligne", form_type_portfolio:"Portfolio", form_type_biz:"Page d'entreprise", form_type_landing:"Landing page",
    faq_eyebrow:"FAQ", faq_title:"Questions fréquentes", faq_sub:"Ce que les entreprises demandent le plus.",
    faq_biz_h:"Pour l'activité",
    faq_q1:"Fonctionne sur tous les téléphones ?", faq_a1:"Fonctionne sur la plupart des iPhone et Android avec NFC.",
    faq_q2:"Y a-t-il un frais mensuel ?", faq_a2:"Non. Vous payez une seule fois à l'achat.",
    faq_q3:"Qu'est-ce que le sticker NFC avec logo ?", faq_a3:"Un sticker avec puce NFC et votre logo imprimé dessus.",
    faq_q4:"Puis-je avoir plusieurs actions ?", faq_a4:"Habituellement une carte ouvre une action. Pour plus, nous lions une page avec tous les boutons.",
    faq_order_h:"Pour la commande",
    faq_q5:"Qui programme la carte ?", faq_a5:"Nous. Elle arrive prête à l'emploi.",
    faq_q6:"Puis-je changer le lien ?", faq_a6:"Oui, la puce peut être réécrite.",
    faq_q7:"Comment payer ?", faq_a7:"Espèces, carte ou virement. Sans acompte.",
    faq_q8:"Faites-vous aussi des sites ?", faq_a8:"Oui. Voir les exemples sur la page démo.",
    contact_eyebrow:"Contact", contact_title:"Contactez-nous", contact_sub:"Nous répondons vite sur WhatsApp.",
    contact_phone:"Téléphone", contact_wa:"WhatsApp", contact_ig:"Instagram", contact_mail:"Gmail", contact_wa_send:"Envoyer un message",
    cta_final_title:"Prêt à commander ?", cta_final_sub:"Choisissez la quantité et envoyez sur WhatsApp.",
    footer_brand_p:"Cartes et stickers NFC qui rendent votre activité tangible.",
    footer_contact_h:"Contact", footer_info_h:"Informations",
    footer_delivery:"Livraison partout au Kosovo", footer_cash:"Paiement à la livraison", footer_no_monthly:"Pas de frais mensuels",
    footer_copy:"© 2026 Creative NFC. Tous droits réservés.", footer_credit:"Créé avec soin.",
    modal_title:"Finaliser la commande", modal_actions:"Qu'est-ce que ça doit ouvrir ?",
    modal_design:"Je veux un design personnalisé avec mon logo", modal_links:"Liens ou données",
    modal_links_ph:"Ex. instagram.com/entreprise...", modal_biz:"Nom de l'activité", modal_name:"Nom complet",
    modal_phone:"Numéro de téléphone", modal_addr:"Ville et adresse", modal_note:"Écrivez ce que vous voulez",
    modal_note_ph:"Ex. couleurs, texte, logo...", modal_submit:"Confirmer sur WhatsApp", modal_foot:"Vous payez à la réception.",
    product_card:"carte NFC", product_logo:"stickers NFC avec logo d'entreprise",
    tier_most_sold:"Best-seller", tier_wholesale:"Gros", tier_pcs:"pcs",
    toast_applied_title:"Code appliqué !", toast_applied_msg:"{label} a été ajouté.",
    toast_used_title:"Code déjà utilisé", toast_used_msg:"Récemment utilisé. Réessayez dans {time}.",
    toast_expired_title:"Code expiré", toast_expired_msg:"\"{code}\" a expiré le {date}.",
    toast_invalid_title:"Code introuvable", toast_invalid_msg:"\"{code}\" n'est pas valide.",
    toast_removed_title:"Code retiré", toast_removed_msg:"La réduction a été retirée.",
    toast_wa_title:"WhatsApp ouvert", toast_wa_msg:"Appuyez sur Envoyer pour finaliser.",
    toast_sent_title:"Commande envoyée", toast_sent_msg:"Nous vous contacterons bientôt.",
    toast_iban_ok_title:"IBAN copié", toast_iban_fail_title:"Échec de la copie", toast_iban_fail_msg:"Sélectionnez manuellement : {iban}",
    time_days:"{n} jours", time_day:"1 jour", time_hours:"{n} heures", time_hour:"1 heure",
    wa_greeting:"Bonjour {brand} ! Je voudrais des informations sur les cartes NFC.",
    wa_order:"Bonjour {brand} ! Je voudrais commander {qty} {product} ({total}).",
    wa_demo_order:"Bonjour Creative Studio ! Je voudrais commander des cartes NFC.",
    wa_web:"Bonjour ! Je voudrais un site web.",
    wa_similar:"Bonjour ! Je voudrais un site comme \"{name}\" ({type}).",
    order_msg_title:"Nouvelle commande", order_msg_product:"Produit", order_msg_subtotal:"Sous-total", order_msg_discount:"Réduction",
    order_msg_ship:"Livraison", order_msg_total:"Total", order_msg_free:"Gratuit", order_msg_cash:"(paiement à la livraison)",
    order_msg_actions:"Actions", order_msg_custom_yes:"Oui, avec mon logo/design", order_msg_custom_no:"Non",
    order_msg_custom:"Design personnalisé", order_msg_links:"Liens", order_msg_biz:"Activité", order_msg_name:"Nom",
    order_msg_phone:"Téléphone", order_msg_addr:"Adresse", order_msg_client:"Message client", order_msg_code:"Code",
    months:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc"]
  },
  es: {
    nav_home:"Inicio", nav_order:"Pedir", nav_demo:"Demo", nav_faq:"FAQ",
    hero_eyebrow:"Tarjetas y stickers NFC", hero_pre:"Tu negocio,", hero_grad:"tangible", hero_post:"con un toque.",
    hero_lead:"Tarjetas de visita digitales, menús, Google Review, WhatsApp y tu página — todo en un toque.",
    cta_order:"Pedir ahora", cta_demo:"Ver demo",
    fact_no_app:"Sin app", fact_cash:"Pago contra entrega", fact_delivery:"Envío en todo Kosovo",
    tap_card:"Toca la tarjeta",
    uses_eyebrow:"Usos", uses_title:"Un toque. Muchas posibilidades.", uses_sub:"Cada tarjeta se programa según lo que necesite tu negocio.",
    use_menu_t:"Menú digital", use_menu_d:"Los clientes tocan el sticker y el menú se abre en su teléfono.",
    use_review_t:"Google Review", use_review_d:"Más reseñas positivas con un solo toque.",
    use_card_t:"Tarjeta de visita digital", use_card_d:"Contacto, WhatsApp y redes sociales en un solo enlace.",
    use_wifi_t:"Wi-Fi gratis", use_wifi_d:"Los clientes se conectan con un toque — sin contraseña.",
    how_eyebrow:"Cómo funciona", how_title:"Tres pasos para un toque", how_sub:"Sin apps, sin cuentas, sin complicaciones.",
    step1_t:"Pedir", step1_d:"Elige la cantidad y envía el pedido por WhatsApp.",
    step2_t:"Programamos", step2_d:"Configuramos el enlace y lo probamos antes de la entrega.",
    step3_t:"Usar", step3_d:"El cliente toca el teléfono y se abre la página.",
    home_cta_title:"¿Listo para hacer tangible tu negocio?", home_cta_sub:"Tarjetas, stickers y webs — todo con un toque.",
    order_eyebrow:"Pedir", order_title:"Pedir la tarjeta NFC", order_sub:"Elige la cantidad, aplica un código de descuento y elige el pago.",
    ptab_card_name:"Tarjeta NFC", ptab_card_price:"15 € / 1 ud", ptab_logo_name:"Stickers con logo", ptab_logo_note:"+ extra según cantidad",
    logonote:"En la versión con logo, el logo se añade como diseño personalizado y se envía por WhatsApp.",
    discount_label:"Código de descuento", discount_apply:"Aplicar", discount_remove:"Quitar",
    line_subtotal:"Precio original", line_unit:"Precio / ud", line_ship:"Envío", line_total:"Total", line_free:"Gratis",
    btn_wa_order:"Pedir en WhatsApp", btn_complete:"Completar pedido",
    pay_eyebrow:"Pago", pay_title:"Métodos de pago", pay_sub:"Elige el método que más te convenga.",
    pay_cash_badge:"Recomendado", pay_cash_t:"Pago contra entrega", pay_cash_d:"Pagas al recibir el pedido.",
    pay_card_t:"Tarjeta bancaria", pay_card_d:"Visa y Mastercard — pago seguro.", pay_card_cta:"Pagar con tarjeta",
    pay_bank_t:"Transferencia bancaria", pay_bank_iban:"IBAN:", pay_bank_cta:"Copiar IBAN", pay_total:"Total del pedido:",
    order_cta_title:"¿No estás seguro qué elegir?", order_cta_sub:"Escríbenos por WhatsApp.", order_cta_ask:"Preguntar en WhatsApp",
    demo_eyebrow:"Demo", demo_title:"Cómo se ve tras un toque", demo_sub:"Ejemplo de la tarjeta y los botones que se abren.",
    tab_card:"Tarjeta", tab_menu:"Menú", tab_review:"Reseña", tab_site:"Página",
    demo_hint:"Haz clic en una pestaña.",
    works_eyebrow:"Trabajos", works_title:"Webs que se abren con un toque", works_sub:"Ejemplos de páginas vinculadas a la tarjeta NFC.",
    btn_ig_works:"Ver los trabajos en Instagram", btn_want_similar:"Quiero una página similar",
    form_title:"Pedido personalizado para una web",
    form_type:"Tipo", form_biz:"Negocio", form_desc:"Qué quieres", form_budget:"Presupuesto", form_deadline:"Plazo", form_name:"Nombre", form_phone:"Teléfono", form_submit:"Enviar por WhatsApp",
    form_biz_ph:"Nombre del negocio", form_desc_ph:"Ej. una página con menú y WhatsApp", form_budget_ph:"€ o -", form_deadline_ph:"Ej. 2 semanas",
    form_type_menu:"Menú online", form_type_shop:"Tienda online", form_type_portfolio:"Portfolio", form_type_biz:"Página de negocio", form_type_landing:"Landing page",
    faq_eyebrow:"FAQ", faq_title:"Preguntas frecuentes", faq_sub:"Lo que más preguntan los negocios.",
    faq_biz_h:"Para el negocio",
    faq_q1:"¿Funciona en cualquier teléfono?", faq_a1:"Funciona en la mayoría de iPhone y Android con NFC.",
    faq_q2:"¿Hay cuota mensual?", faq_a2:"No. Pagas una sola vez al comprar.",
    faq_q3:"¿Qué es el sticker NFC con logo?", faq_a3:"Un sticker con chip NFC y tu logo impreso encima.",
    faq_q4:"¿Puedo tener varias acciones?", faq_a4:"Normalmente una tarjeta abre una acción. Para más, enlazamos una página con todos los botones.",
    faq_order_h:"Para el pedido",
    faq_q5:"¿Quién programa la tarjeta?", faq_a5:"Nosotros. Llega lista para usar.",
    faq_q6:"¿Puedo cambiar el enlace?", faq_a6:"Sí, el chip se puede reescribir.",
    faq_q7:"¿Cómo se paga?", faq_a7:"Efectivo, tarjeta o transferencia. Sin pago por adelantado.",
    faq_q8:"¿También hacéis webs?", faq_a8:"Sí. Mira los ejemplos en la página demo.",
    contact_eyebrow:"Contacto", contact_title:"Contáctanos", contact_sub:"Respondemos rápido en WhatsApp.",
    contact_phone:"Teléfono", contact_wa:"WhatsApp", contact_ig:"Instagram", contact_mail:"Gmail", contact_wa_send:"Enviar mensaje",
    cta_final_title:"¿Listo para pedir?", cta_final_sub:"Elige la cantidad y envía por WhatsApp.",
    footer_brand_p:"Tarjetas y stickers NFC que hacen tangible tu negocio.",
    footer_contact_h:"Contacto", footer_info_h:"Información",
    footer_delivery:"Envío en todo Kosovo", footer_cash:"Pago contra entrega", footer_no_monthly:"Sin cuota mensual",
    footer_copy:"© 2026 Creative NFC. Todos los derechos reservados.", footer_credit:"Creado con cuidado.",
    modal_title:"Completar pedido", modal_actions:"¿Qué debe abrir?",
    modal_design:"Quiero un diseño personalizado con mi logo", modal_links:"Enlaces o datos",
    modal_links_ph:"Ej. instagram.com/negocio...", modal_biz:"Nombre del negocio", modal_name:"Nombre completo",
    modal_phone:"Número de teléfono", modal_addr:"Ciudad y dirección", modal_note:"Escribe lo que quieres",
    modal_note_ph:"Ej. colores, texto, logo...", modal_submit:"Confirmar pedido en WhatsApp", modal_foot:"Pagas en efectivo al recibir.",
    product_card:"tarjeta NFC", product_logo:"stickers NFC con logo del negocio",
    tier_most_sold:"Más vendida", tier_wholesale:"Mayorista", tier_pcs:"uds",
    toast_applied_title:"¡Código aplicado!", toast_applied_msg:"{label} se ha añadido.",
    toast_used_title:"Código ya usado", toast_used_msg:"Usado recientemente. Inténtalo en {time}.",
    toast_expired_title:"Código caducado", toast_expired_msg:"\"{code}\" caducó el {date}.",
    toast_invalid_title:"Código no encontrado", toast_invalid_msg:"\"{code}\" no es válido.",
    toast_removed_title:"Código eliminado", toast_removed_msg:"El descuento se ha eliminado.",
    toast_wa_title:"WhatsApp abierto", toast_wa_msg:"Pulsa Enviar para completar.",
    toast_sent_title:"Pedido enviado", toast_sent_msg:"Te contactaremos pronto.",
    toast_iban_ok_title:"IBAN copiado", toast_iban_fail_title:"Error al copiar", toast_iban_fail_msg:"Selecciona manualmente: {iban}",
    time_days:"{n} días", time_day:"1 día", time_hours:"{n} horas", time_hour:"1 hora",
    wa_greeting:"¡Hola {brand}! Quiero información sobre tarjetas NFC.",
    wa_order:"¡Hola {brand}! Quiero pedir {qty} {product} ({total}).",
    wa_demo_order:"¡Hola Creative Studio! Quiero pedir tarjetas NFC.",
    wa_web:"¡Hola! Quiero una página web.",
    wa_similar:"¡Hola! Quiero una web como \"{name}\" ({type}).",
    order_msg_title:"Nuevo pedido", order_msg_product:"Producto", order_msg_subtotal:"Subtotal", order_msg_discount:"Descuento",
    order_msg_ship:"Envío", order_msg_total:"Total", order_msg_free:"Gratis", order_msg_cash:"(pago contra entrega)",
    order_msg_actions:"Acciones", order_msg_custom_yes:"Sí, con mi logo/diseño", order_msg_custom_no:"No",
    order_msg_custom:"Diseño personalizado", order_msg_links:"Enlaces", order_msg_biz:"Negocio", order_msg_name:"Nombre",
    order_msg_phone:"Teléfono", order_msg_addr:"Dirección", order_msg_client:"Mensaje del cliente", order_msg_code:"Código",
    months:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]
  }
};

/* ============================================================
   DISCOUNTS
============================================================ */
const DISCOUNTS = {
  "TAP10":       { type:"percent", value:10, label:{sq:"10% — porosia e parë", en:"10% — first order"}, expires:"2027-06-30" },
  "TAP15":       { type:"percent", value:15, label:{sq:"15% — porosia e parë", en:"15% — first order"}, expires:"2027-06-30" },
  "FIRSTTAP":    { type:"percent", value:15, label:{sq:"15% — tap i parë", en:"15% — first tap"}, expires:"2027-06-30" },
  "FIRSTTAP20":  { type:"percent", value:20, label:{sq:"20% — tap i parë", en:"20% — first tap"}, expires:"2027-06-30" },
  "WELCOME10":   { type:"percent", value:10, label:{sq:"10% mirëseardhje", en:"10% welcome"}, expires:"2027-06-30" },
  "WELCOME15":   { type:"percent", value:15, label:{sq:"15% mirëseardhje", en:"15% welcome"}, expires:"2027-06-30" },
  "WELCOME20":   { type:"percent", value:20, label:{sq:"20% mirëseardhje", en:"20% welcome"}, expires:"2027-06-30" },
  "WELCOME25":   { type:"percent", value:25, label:{sq:"25% mirëseardhje", en:"25% welcome"}, expires:"2027-06-30" },
  "CREATIVE5":   { type:"percent", value:5,  label:{sq:"5% zbritje Creative", en:"5% off Creative"}, expires:null },
  "CREATIVE10":  { type:"percent", value:10, label:{sq:"10% zbritje Creative", en:"10% off Creative"}, expires:null },
  "CREATIVE15":  { type:"percent", value:15, label:{sq:"15% zbritje Creative", en:"15% off Creative"}, expires:null },
  "CREATIVE20":  { type:"percent", value:20, label:{sq:"20% zbritje Creative", en:"20% off Creative"}, expires:"2027-12-31" },
  "CREATIVE25":  { type:"percent", value:25, label:{sq:"25% zbritje Creative", en:"25% off Creative"}, expires:"2027-12-31" },
  "CREATIVE30":  { type:"percent", value:30, label:{sq:"30% zbritje Creative", en:"30% off Creative"}, expires:"2027-12-31" },
  "NFC5":        { type:"percent", value:5,  label:{sq:"5% zbritje NFC", en:"5% off NFC"}, expires:"2027-12-31" },
  "NFC10":       { type:"percent", value:10, label:{sq:"10% zbritje NFC", en:"10% off NFC"}, expires:"2027-12-31" },
  "NFC15":       { type:"percent", value:15, label:{sq:"15% zbritje NFC", en:"15% off NFC"}, expires:"2027-12-31" },
  "NFC20":       { type:"percent", value:20, label:{sq:"20% zbritje NFC", en:"20% off NFC"}, expires:"2027-12-31" },
  "SMARTTAP":    { type:"percent", value:12, label:{sq:"12% — smart tap", en:"12% — smart tap"}, expires:"2027-12-31" },
  "QUICKTAP":    { type:"percent", value:10, label:{sq:"10% — quick tap", en:"10% — quick tap"}, expires:"2027-12-31" },
  "ONETAP":      { type:"percent", value:15, label:{sq:"15% — një tap", en:"15% — one tap"}, expires:"2027-12-31" },
  "INSTA5":      { type:"percent", value:5,  label:{sq:"5% — nga Instagram", en:"5% — from Instagram"}, expires:"2027-12-31" },
  "INSTA10":     { type:"percent", value:10, label:{sq:"10% — nga Instagram", en:"10% — from Instagram"}, expires:"2027-12-31" },
  "INSTA15":     { type:"percent", value:15, label:{sq:"15% — nga Instagram", en:"15% — from Instagram"}, expires:"2027-12-31" },
  "INSTA20":     { type:"percent", value:20, label:{sq:"20% — nga Instagram", en:"20% — from Instagram"}, expires:"2027-12-31" },
  "WHATSAPP10":  { type:"percent", value:10, label:{sq:"10% — nga WhatsApp", en:"10% — from WhatsApp"}, expires:"2027-12-31" },
  "WHATSAPP15":  { type:"percent", value:15, label:{sq:"15% — nga WhatsApp", en:"15% — from WhatsApp"}, expires:"2027-12-31" },
  "TIKTOK10":    { type:"percent", value:10, label:{sq:"10% — nga TikTok", en:"10% — from TikTok"}, expires:"2027-12-31" },
  "TIKTOK15":    { type:"percent", value:15, label:{sq:"15% — nga TikTok", en:"15% — from TikTok"}, expires:"2027-12-31" },
  "FRIEND10":    { type:"percent", value:10, label:{sq:"10% — rekomanduar nga mik", en:"10% — referred by a friend"}, expires:"2027-12-31" },
  "REFER10":     { type:"percent", value:10, label:{sq:"10% — referim", en:"10% — referral"}, expires:"2027-12-31" },
  "BUSINESS10":  { type:"percent", value:10, label:{sq:"10% zbritje biznesi", en:"10% business discount"}, expires:"2027-12-31" },
  "BUSINESS15":  { type:"percent", value:15, label:{sq:"15% zbritje biznesi", en:"15% business discount"}, expires:"2027-12-31" },
  "BUSINESS20":  { type:"percent", value:20, label:{sq:"20% zbritje biznesi", en:"20% business discount"}, expires:"2027-12-31" },
  "SHUMICA15":   { type:"percent", value:15, label:{sq:"15% zbritje shumicë", en:"15% wholesale discount"}, expires:"2027-12-31" },
  "SHUMICA20":   { type:"percent", value:20, label:{sq:"20% zbritje shumicë", en:"20% wholesale discount"}, expires:"2027-12-31" },
  "SHUMICA25":   { type:"percent", value:25, label:{sq:"25% zbritje shumicë", en:"25% wholesale discount"}, expires:"2027-12-31" },
  "BULK30":      { type:"percent", value:30, label:{sq:"30% — porosi e madhe", en:"30% — bulk order"}, expires:"2027-12-31" },
  "PREMIUM15":   { type:"percent", value:15, label:{sq:"15% zbritje premium", en:"15% premium discount"}, expires:"2027-12-31" },
  "PREMIUM20":   { type:"percent", value:20, label:{sq:"20% zbritje premium", en:"20% premium discount"}, expires:"2027-12-31" },
  "PREMIUM25":   { type:"percent", value:25, label:{sq:"25% zbritje premium", en:"25% premium discount"}, expires:"2027-12-31" },
  "FESTA10":     { type:"percent", value:10, label:{sq:"10% zbritje festive", en:"10% festive discount"}, expires:"2027-01-15" },
  "FESTA15":     { type:"percent", value:15, label:{sq:"15% zbritje festive", en:"15% festive discount"}, expires:"2027-01-15" },
  "FESTA20":     { type:"percent", value:20, label:{sq:"20% zbritje festive", en:"20% festive discount"}, expires:"2027-01-15" },
  "VERA10":      { type:"percent", value:10, label:{sq:"10% zbritje vere", en:"10% summer discount"}, expires:"2027-09-30" },
  "VERA15":      { type:"percent", value:15, label:{sq:"15% zbritje vere", en:"15% summer discount"}, expires:"2027-09-30" },
  "DIMRI15":     { type:"percent", value:15, label:{sq:"15% zbritje dimri", en:"15% winter discount"}, expires:"2027-02-28" },
  "DIMRI20":     { type:"percent", value:20, label:{sq:"20% zbritje dimri", en:"20% winter discount"}, expires:"2027-02-28" },
  "BLACKFRIDAY": { type:"percent", value:30, label:{sq:"30% — Black Friday", en:"30% — Black Friday"}, expires:"2026-11-30" },
  "BLACK25":     { type:"percent", value:25, label:{sq:"25% — Black Friday", en:"25% — Black Friday"}, expires:"2026-11-30" },
  "NEWYEAR20":   { type:"percent", value:20, label:{sq:"20% — Vit i Ri", en:"20% — New Year"}, expires:"2027-01-05" },
  "BAJRAM15":    { type:"percent", value:15, label:{sq:"15% — Bajram", en:"15% — Eid"}, expires:"2027-04-15" },
  "BAJRAM20":    { type:"percent", value:20, label:{sq:"20% — Bajram", en:"20% — Eid"}, expires:"2027-04-15" },
  "PAVARSIA15":  { type:"percent", value:15, label:{sq:"15% — Pavarsia", en:"15% — Independence"}, expires:"2027-02-20" },
  "LOYAL10":     { type:"percent", value:10, label:{sq:"10% — klient besnik", en:"10% — loyal customer"}, expires:"2027-12-31" },
  "LOYAL15":     { type:"percent", value:15, label:{sq:"15% — klient besnik", en:"15% — loyal customer"}, expires:"2027-12-31" },
  "LOYAL20":     { type:"percent", value:20, label:{sq:"20% — klient besnik", en:"20% — loyal customer"}, expires:"2027-12-31" },
  "RETURN15":    { type:"percent", value:15, label:{sq:"15% — mirësevjen përsëri", en:"15% — welcome back"}, expires:"2027-12-31" },
  "COMEBACK20":  { type:"percent", value:20, label:{sq:"20% — mirësevjen përsëri", en:"20% — welcome back"}, expires:"2027-12-31" },
  "FALAS3":      { type:"fixed",   value:3,  label:{sq:"3 € zbritje", en:"3 € off"}, expires:"2027-12-31" },
  "FALAS5":      { type:"fixed",   value:5,  label:{sq:"5 € zbritje", en:"5 € off"}, expires:"2027-12-31" },
  "FALAS7":      { type:"fixed",   value:7,  label:{sq:"7 € zbritje", en:"7 € off"}, expires:"2027-12-31" },
  "FALAS10":     { type:"fixed",   value:10, label:{sq:"10 € zbritje", en:"10 € off"}, expires:"2027-12-31" },
  "FALAS15":     { type:"fixed",   value:15, label:{sq:"15 € zbritje", en:"15 € off"}, expires:"2027-12-31" },
  "FALAS20":     { type:"fixed",   value:20, label:{sq:"20 € zbritje", en:"20 € off"}, expires:"2027-12-31" },
  "LAUNCH20":    { type:"percent", value:20, label:{sq:"20% — lancim", en:"20% — launch"}, expires:"2027-03-31" },
  "LAUNCH25":    { type:"percent", value:25, label:{sq:"25% — lancim", en:"25% — launch"}, expires:"2027-03-31" },
  "EARLYBIRD15": { type:"percent", value:15, label:{sq:"15% — herët", en:"15% — early bird"}, expires:"2027-03-31" },
  "FLASH10":     { type:"percent", value:10, label:{sq:"10% — flash sale", en:"10% — flash sale"}, expires:"2027-01-31" },
  "FLASH15":     { type:"percent", value:15, label:{sq:"15% — flash sale", en:"15% — flash sale"}, expires:"2027-01-31" },
  "FLASH20":     { type:"percent", value:20, label:{sq:"20% — flash sale", en:"20% — flash sale"}, expires:"2027-01-31" },
  "HAPPYHOUR":   { type:"percent", value:12, label:{sq:"12% — happy hour", en:"12% — happy hour"}, expires:"2027-06-30" },
  "VIPSECRET":   { type:"percent", value:25, label:{sq:"25% — VIP", en:"25% — VIP"}, expires:"2027-12-31" },
  "SECRET20":    { type:"percent", value:20, label:{sq:"20% — kod sekret", en:"20% — secret code"}, expires:"2027-12-31" },
  "EXPIRED2025": { type:"percent", value:50, label:{sq:"50% — ka skaduar", en:"50% — expired"}, expires:"2025-12-31" }
};

/* ============================================================
   PRODUCTS & ACTIONS
============================================================ */
const PRODUCTS = {
  card: {
    nameKey:"product_card",
    tiers: [
      { q:1,  total:15,  badgeKey:"" },
      { q:5,  total:60,  badgeKey:"tier_most_sold" },
      { q:10, total:100, badgeKey:"" },
      { q:20, total:160, badgeKey:"" },
      { q:50, total:300, badgeKey:"tier_wholesale" }
    ]
  },
  logo: { nameKey:"product_logo", logo:true, tiers: [] }
};
const LOGO_EXTRA = [3, 2.5, 2, 1.5, 1];
PRODUCTS.logo.tiers = PRODUCTS.card.tiers.map((t, i) => ({
  q: t.q,
  total: t.total + LOGO_EXTRA[i] * t.q,
  badgeKey: t.badgeKey
}));

const FREE_SHIP_FROM_EUR = 30;
const SHIPPING = 2;

const ACTIONS = {
  sq: ["Vizitkartë digjitale","Menu e ushqimeve","Google Review","Faqe interneti","WhatsApp","Instagram / TikTok / Facebook","Thirrje / SMS","Wi-Fi","Tekst","Aplikacion"],
  en: ["Digital business card","Food menu","Google Review","Website","WhatsApp","Instagram / TikTok / Facebook","Call / SMS","Wi-Fi","Text","App"],
  de: ["Digitale Visitenkarte","Speisekarte","Google Review","Webseite","WhatsApp","Instagram / TikTok / Facebook","Anruf / SMS","WLAN","Text","App"],
  it: ["Biglietto digitale","Menu","Google Review","Sito web","WhatsApp","Instagram / TikTok / Facebook","Chiamata / SMS","Wi-Fi","Testo","App"],
  fr: ["Carte de visite digitale","Menu","Google Review","Site web","WhatsApp","Instagram / TikTok / Facebook","Appel / SMS","Wi-Fi","Texte","App"],
  es: ["Tarjeta digital","Menú","Google Review","Sitio web","WhatsApp","Instagram / TikTok / Facebook","Llamada / SMS","Wi-Fi","Texto","App"]
};

/* ============================================================
   STATE & HELPERS
============================================================ */
let currentLang = (() => { try { return localStorage.getItem('cnfc_lang') || 'sq'; } catch(_) { return 'sq'; } })();
let currentTheme = (() => { try { return localStorage.getItem('cnfc_theme') || 'dark'; } catch(_) { return 'dark'; } })();
let currentProduct = "card";
let appliedDiscount = null;

const $ = id => document.getElementById(id);
const eur = n => n.toFixed(2) + " €";
const t = (key) => (T[currentLang] && T[currentLang][key]) || (T.sq[key]) || key;
const tf = (key, vars) => {
  let s = t(key);
  if (vars) for (const k in vars) s = s.replace(new RegExp('\\{' + k + '\\}','g'), vars[k]);
  return s;
};
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const setHref = (id, url) => { const el = $(id); if (el) el.href = url; };

const ico = {
  chat: '<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.6A8.4 8.4 0 1 1 21 11.5Z"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.5 3.8 5.4 3.8 8.5S14.5 18 12 20.5C9.5 18 8.2 15.1 8.2 12S9.5 6 12 3.5Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9L12 3.6Z"/></svg>'
};

/* ============================================================
   TOAST SYSTEM
============================================================ */
const TOAST_ICONS = {
  success: '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
  error: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.5"/></svg>',
  warning: '<svg viewBox="0 0 24 24"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v5M12 17v.5"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.5"/></svg>'
};

function toast(type, title, message, duration = 4200) {
  let stack = $('toastStack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'toast-stack';
    stack.setAttribute('aria-live', 'polite');
    document.body.appendChild(stack);
  }
  const item = document.createElement('div');
  item.className = 'toast-item ' + type;
  item.setAttribute('role', 'alert');
  item.style.setProperty('--toast-dur', duration + 'ms');
  item.innerHTML =
    `<div class="toast-icon">${TOAST_ICONS[type] || TOAST_ICONS.info}</div>
     <div class="toast-body">
       <div class="toast-title">${title}</div>
       ${message ? `<div class="toast-msg">${message}</div>` : ''}
     </div>
     <div class="toast-progress"></div>`;
  stack.appendChild(item);

  const active = stack.querySelectorAll('.toast-item:not(.out)');
  if (active.length > 4) {
    active[0].classList.add('out');
    setTimeout(() => active[0].remove(), 400);
  }

  const remove = () => {
    if (item.classList.contains('out')) return;
    item.classList.add('out');
    setTimeout(() => item.remove(), 400);
  };
  const timer = setTimeout(remove, duration);
  item.addEventListener('click', () => { clearTimeout(timer); remove(); });
}

/* ============================================================
   DISCOUNT HELPERS (24h cooldown)
============================================================ */
function getUsageMap() {
  try { return JSON.parse(localStorage.getItem('cnfc_code_usage') || '{}'); }
  catch (_) { return {}; }
}
function getCooldownRemaining(code) {
  const map = getUsageMap();
  const used = map[code.toUpperCase()];
  if (!used) return 0;
  const remaining = CODE_COOLDOWN_MS - (Date.now() - used);
  return remaining > 0 ? remaining : 0;
}
function markCodeUsed(code) {
  const map = getUsageMap();
  map[code.toUpperCase()] = Date.now();
  try { localStorage.setItem('cnfc_code_usage', JSON.stringify(map)); } catch (_) {}
}
function formatCooldownTime(ms) {
  const hours = Math.max(1, Math.ceil(ms / (60*60*1000)));
  return hours === 1 ? t('time_hour') : tf('time_hours', { n: hours });
}
function isExpired(discount) {
  if (!discount || !discount.expires) return false;
  const exp = new Date(discount.expires + 'T23:59:59');
  return Date.now() > exp.getTime();
}
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T12:00:00');
  const months = (T[currentLang] && T[currentLang].months) || T.en.months;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
function getDiscountLabel(d) {
  if (!d || !d.label) return '';
  if (typeof d.label === 'string') return d.label;
  if (d.label[currentLang]) return d.label[currentLang];
  if (currentLang === 'de') return d.type === 'percent' ? `${d.value}% Rabatt` : `${d.value} € Rabatt`;
  if (currentLang === 'it') return d.type === 'percent' ? `${d.value}% di sconto` : `${d.value} € di sconto`;
  if (currentLang === 'fr') return d.type === 'percent' ? `${d.value}% de réduction` : `${d.value} € de réduction`;
  if (currentLang === 'es') return d.type === 'percent' ? `${d.value}% de descuento` : `${d.value} € de descuento`;
  return d.label.en || d.label.sq || '';
}

/* ============================================================
   SEND ORDER
============================================================ */
function sendOrder(msg) {
  const fallback = () => {
    window.open(waLink(msg), '_blank');
    toast('info', t('toast_wa_title'), t('toast_wa_msg'));
  };
  const jobs = [];
  if (NTFY_TOPIC) jobs.push(fetch('https://ntfy.sh/' + encodeURIComponent(NTFY_TOPIC), {
    method:'POST',
    body:msg,
    headers:{ 'Title':'Order - Creative NFC','Priority':'high','Tags':'shopping_cart' }
  }).then(r => { if (!r.ok) throw new Error('ntfy'); }));
  if (CALLMEBOT_KEY) jobs.push(fetch(
    `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent('+' + WHATSAPP)}&text=${encodeURIComponent(msg)}&apikey=${encodeURIComponent(CALLMEBOT_KEY)}`,
    { mode:'no-cors' }
  ));
  if (!jobs.length) { fallback(); return; }
  Promise.allSettled(jobs).then(res => {
    if (res.some(r => r.status === 'fulfilled')) toast('success', t('toast_sent_title'), t('toast_sent_msg'));
    else fallback();
  });
}

function saveVcf() {
  const vcf = "BEGIN:VCARD\nVERSION:3.0\nFN:Creative Studio\nORG:Creative Studio\nTITLE:Pronar\nTEL;TYPE=CELL:+38346300701\nEND:VCARD";
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([vcf], { type: 'text/vcard' }));
  a.download = 'creative-studio.vcf';
  a.click();
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); resolve(); }
    catch (e) { reject(e); }
    finally { document.body.removeChild(ta); }
  });
}

/* ============================================================
   DEMO VIEWS
============================================================ */
function buildViews() {
  const roleMap = {sq:"Dizajn & NFC",en:"Design & NFC",de:"Design & NFC",it:"Design & NFC",fr:"Design & NFC",es:"Diseño & NFC"};
  const roleTxt = roleMap[currentLang] || roleMap.sq;
  const orderBtnMap = {sq:"Porosit NFC në WhatsApp", en:"Order NFC on WhatsApp", de:"NFC per WhatsApp bestellen", it:"Ordina NFC su WhatsApp", fr:"Commander NFC sur WhatsApp", es:"Pedir NFC por WhatsApp"};
  const saveMap = {sq:"Ruaj kontaktin",en:"Save contact",de:"Kontakt speichern",it:"Salva contatto",fr:"Enregistrer le contact",es:"Guardar contacto"};
  const callMap = {sq:"Telefono",en:"Call",de:"Anrufen",it:"Chiama",fr:"Appeler",es:"Llamar"};
  const webMap = {sq:"Krijim web faqesh",en:"Website build",de:"Webseite erstellen",it:"Crea sito web",fr:"Créer un site",es:"Crear sitio web"};
  const seeWorkMap = {sq:"Shiko punët",en:"See the work",de:"Arbeiten ansehen",it:"Vedi i lavori",fr:"Voir les travaux",es:"Ver trabajos"};
  const reviewMap = {sq:"Vlerëso në Google",en:"Review on Google",de:"Auf Google bewerten",it:"Recensisci su Google",fr:"Évaluer sur Google",es:"Reseñar en Google"};
  const menuMap = {sq:"Menuja",en:"Menu",de:"Speisekarte",it:"Menu",fr:"Menu",es:"Menú"};
  const coffeeMap = {sq:"Kafe",en:"Coffee",de:"Kaffee",it:"Caffè",fr:"Café",es:"Café"};
  const foodMap = {sq:"Ushqim",en:"Food",de:"Essen",it:"Cibo",fr:"Nourriture",es:"Comida"};
  const drinksMap = {sq:"Pije",en:"Drinks",de:"Getränke",it:"Bevande",fr:"Boissons",es:"Bebidas"};
  const lemonMap = {sq:"Limonadë",en:"Lemonade",de:"Limonade",it:"Limonata",fr:"Limonade",es:"Limonada"};
  const waterMap = {sq:"Ujë",en:"Water",de:"Wasser",it:"Acqua",fr:"Eau",es:"Agua"};
  const reviewMsgMap = {
    sq:"Na lër një vlerësim. Merr vetëm një minutë.",
    en:"Leave us a review. Takes just a minute.",
    de:"Bewerten Sie uns. Dauert nur eine Minute.",
    it:"Lasciaci una recensione. Ci vuole un minuto.",
    fr:"Laissez-nous un avis. Une minute suffit.",
    es:"Déjanos una reseña. Solo un minuto."
  };
  const pageTitleMap = {
    sq:"Faqja e biznesit",en:"Business page",de:"Firmenseite",it:"Pagina aziendale",fr:"Page professionnelle",es:"Página del negocio"
  };
  const pageRoleMap = {
    sq:"Hapet direkt në shfletues",en:"Opens in the browser",de:"Öffnet im Browser",
    it:"Si apre nel browser",fr:"S'ouvre dans le navigateur",es:"Se abre en el navegador"
  };
  const pageSubMap = {
    sq:"Çdo link që zgjedh: faqe, katalog, dyqan online ose portfolio.",
    en:"Any link you choose: page, catalog, online store or portfolio.",
    de:"Jeder Link: Seite, Katalog, Shop oder Portfolio.",
    it:"Qualsiasi link: pagina, catalogo, negozio o portfolio.",
    fr:"N'importe quel lien : page, catalogue, boutique ou portfolio.",
    es:"Cualquier enlace: página, catálogo, tienda o portfolio."
  };
  const openMap = {sq:"Hap faqen",en:"Open the page",de:"Seite öffnen",it:"Apri la pagina",fr:"Ouvrir la page",es:"Abrir página"};
  const seeProdMap = {sq:"Shiko produktet",en:"See products",de:"Produkte ansehen",it:"Vedi prodotti",fr:"Voir les produits",es:"Ver productos"};

  return {
    card: `
      <div class="avatar">CN</div>
      <h3>Creative Studio</h3>
      <div class="role">${roleTxt}</div>
      <a class="pbtn primary" href="${waLink(t('wa_demo_order'))}" target="_blank" rel="noopener">${ico.chat} ${orderBtnMap[currentLang] || orderBtnMap.sq}</a>
      <button class="pbtn" id="saveVcf" type="button">${ico.user} ${saveMap[currentLang] || saveMap.sq}</button>
      <a class="pbtn" href="tel:+38346300701">${ico.phone} ${callMap[currentLang] || callMap.sq}</a>
      <a class="pbtn" href="${waLink(t('wa_web'))}" target="_blank" rel="noopener">${ico.globe} ${webMap[currentLang] || webMap.sq}</a>
      ${INSTAGRAM ? `<a class="pbtn" href="https://ig.me/m/${INSTAGRAM}" target="_blank" rel="noopener">${ico.chat} Instagram chat</a>
        <a class="pbtn" href="https://instagram.com/${INSTAGRAM}" target="_blank" rel="noopener">${ico.instagram} ${seeWorkMap[currentLang] || seeWorkMap.sq}</a>` : ''}
      ${GMAIL ? `<a class="pbtn" href="mailto:${GMAIL}">${ico.mail} Gmail</a>` : ''}
      ${GOOGLE_REVIEW_URL ? `<a class="pbtn" href="${GOOGLE_REVIEW_URL}" target="_blank" rel="noopener">${ico.star} ${reviewMap[currentLang] || reviewMap.sq}</a>` : ''}`,
    menu: `
      <h3 style="margin-bottom:4px">Creative Bar</h3>
      <div class="role">${menuMap[currentLang] || menuMap.sq}</div>
      <div class="menu-title">${coffeeMap[currentLang] || coffeeMap.sq}</div>
      <div class="menu-item"><span>Espresso</span><span>0.80 €</span></div>
      <div class="menu-item"><span>Macchiato</span><span>1.00 €</span></div>
      <div class="menu-title">${foodMap[currentLang] || foodMap.sq}</div>
      <div class="menu-item"><span>Pizza Margarita</span><span>5.00 €</span></div>
      <div class="menu-item"><span>Burger</span><span>4.50 €</span></div>
      <div class="menu-title">${drinksMap[currentLang] || drinksMap.sq}</div>
      <div class="menu-item"><span>${lemonMap[currentLang] || lemonMap.sq}</span><span>2.00 €</span></div>
      <div class="menu-item"><span>${waterMap[currentLang] || waterMap.sq}</span><span>0.50 €</span></div>`,
    review: `
      <div class="avatar star">★</div>
      <h3>Creative Bar</h3>
      <div class="role">Google Maps</div>
      <div class="stars">★★★★★</div>
      <p class="center">${reviewMsgMap[currentLang] || reviewMsgMap.sq}</p>
      <a class="pbtn primary" href="${GOOGLE_REVIEW_URL || '#'}" ${GOOGLE_REVIEW_URL ? 'target="_blank" rel="noopener"' : ''} style="justify-content:center">${reviewMap[currentLang] || reviewMap.sq}</a>`,
    site: `
      <div class="avatar">W</div>
      <h3>${pageTitleMap[currentLang] || pageTitleMap.sq}</h3>
      <div class="role">${pageRoleMap[currentLang] || pageRoleMap.sq}</div>
      <p class="center">${pageSubMap[currentLang] || pageSubMap.sq}</p>
      <a class="pbtn primary" href="#demo" style="justify-content:center">${openMap[currentLang] || openMap.sq}</a>
      <a class="pbtn" href="#porosit" data-goto="porosit" style="justify-content:center">${seeProdMap[currentLang] || seeProdMap.sq}</a>`
  };
}

function showView(v) {
  const demoPhone = $('phoneDemo');
  if (!demoPhone) return;
  const views = buildViews();
  demoPhone.innerHTML = views[v] || views.card;
  const b = $('saveVcf');
  if (b) b.onclick = saveVcf;
}

function initDemoPhone() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(x => x.setAttribute('aria-selected', x === tab));
      showView(tab.dataset.v);
    });
  });
  showView('card');
}

/* ============================================================
   ROUTING
============================================================ */
const PAGES = ['home','porosit','demo','faq'];
const DEFAULT_PAGE = 'home';

function getPageFromHash() {
  const raw = (location.hash || '').replace(/^#\/?/, '').split(/[/?]/)[0].toLowerCase();
  return PAGES.includes(raw) ? raw : DEFAULT_PAGE;
}
function revealCurrentPage(pageName) {
  requestAnimationFrame(() => {
    document.querySelectorAll('.page[data-page="' + pageName + '"] .reveal:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.05 && r.bottom > -60) el.classList.add('in');
    });
  });
}
function showPage(name, opts = {}) {
  if (!PAGES.includes(name)) name = DEFAULT_PAGE;
  document.querySelectorAll('.tapov.open').forEach(o => o.classList.remove('open'));
  document.body.style.overflow = '';
  document.querySelectorAll('.page[data-page]').forEach(p => { p.hidden = p.dataset.page !== name; });
  document.querySelectorAll('.nav-link[data-nav]').forEach(a => {
    const on = a.dataset.nav === name;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  try { if (history.state?.page !== name) history.pushState({ page: name }, '', '#' + name); }
  catch (_) { location.hash = name; }
  if (opts.scrollToTop !== false) window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  revealCurrentPage(name);
}

document.addEventListener('click', e => {
  const navLink = e.target.closest('[data-nav]');
  if (navLink) { e.preventDefault(); showPage(navLink.dataset.nav); return; }
  const gotoLink = e.target.closest('[data-goto]');
  if (gotoLink) { e.preventDefault(); showPage(gotoLink.dataset.goto); return; }
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor && !anchor.hasAttribute('data-nav') && !anchor.hasAttribute('data-goto')) {
    const id = anchor.getAttribute('href').slice(1);
    if (id && id !== '') {
      const target = document.getElementById(id);
      const parentPage = target?.closest('.page[data-page]');
      if (target && parentPage) {
        e.preventDefault();
        const pageName = parentPage.dataset.page;
        if (parentPage.hidden) showPage(pageName, { scrollToTop: false });
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
      }
    }
  }
});

window.addEventListener('popstate', () => showPage(getPageFromHash()));

/* ============================================================
   HEADER LINKS
============================================================ */
function initHeaderLinks() {
  setHref('waTop', waLink(tf('wa_greeting', { brand: BRAND })));
  setHref('waFoot', waLink(tf('wa_greeting', { brand: BRAND })));
  setHref('waContact', waLink(tf('wa_greeting', { brand: BRAND })));
  setHref('waHelp', waLink(tf('wa_greeting', { brand: BRAND })));
  if (INSTAGRAM) {
    setHref('igBuy', 'https://ig.me/m/' + INSTAGRAM);
    setHref('igWork', 'https://instagram.com/' + INSTAGRAM);
    const igFoot = $('igFoot'); if (igFoot) igFoot.href = 'https://instagram.com/' + INSTAGRAM;
    const igWrap = $('igWrap'); if (igWrap) igWrap.hidden = false;
    const igContact = $('igContact');
    if (igContact) { igContact.href = 'https://instagram.com/' + INSTAGRAM; igContact.textContent = '@' + INSTAGRAM; }
    const igContactWrap = $('igContactWrap'); if (igContactWrap) igContactWrap.hidden = false;
  }
  if (GMAIL) {
    const mf = $('mailFoot'); if (mf) mf.href = 'mailto:' + GMAIL;
    const mt = $('mailText'); if (mt) mt.textContent = GMAIL;
    const mw = $('mailWrap'); if (mw) mw.hidden = false;
    const mc = $('mailContact'); if (mc) { mc.href = 'mailto:' + GMAIL; mc.textContent = GMAIL; }
    const mcw = $('mailContactWrap'); if (mcw) mcw.hidden = false;
  }
  if (GOOGLE_REVIEW_URL) {
    const rf = $('revFoot'); if (rf) rf.href = GOOGLE_REVIEW_URL;
    const rw = $('revWrap'); if (rw) rw.hidden = false;
  }
}

/* ============================================================
   ORDER
============================================================ */
function tierFor(qty) {
  const tiers = PRODUCTS[currentProduct].tiers;
  let te = tiers[0];
  for (const x of tiers) if (qty >= x.q) te = x;
  return te;
}
function calc() {
  const tiers = PRODUCTS[currentProduct].tiers;
  const min = tiers[0].q;
  let qty = parseInt($('qtyInput').value, 10) || min;
  qty = Math.max(min, Math.min(1000, qty));
  $('qtyInput').value = qty;
  $('qtyInput').min = min;
  const te = tierFor(qty);
  const unit = te.total / te.q;
  const sub = unit * qty;
  let discountAmount = 0;
  if (appliedDiscount) {
    if (appliedDiscount.type === 'percent') discountAmount = sub * appliedDiscount.value / 100;
    else discountAmount = Math.min(appliedDiscount.value, sub);
  }
  const ship = sub >= FREE_SHIP_FROM_EUR ? 0 : SHIPPING;
  return { qty, unit, sub, discountAmount, ship, total: sub - discountAmount + ship };
}
function bumpEl(el) {
  if (!el) return;
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}
function updatePayCard(total) {
  const card = $('payCard');
  if (!card || !PAYMENT_URL) return;
  const sep = PAYMENT_URL.includes('?') ? '&' : '?';
  card.href = PAYMENT_URL + sep + 'amount=' + total.toFixed(2) + '&currency=EUR';
}
function renderOrder() {
  const s = calc();
  $('unit').textContent = eur(s.unit);
  $('ship').textContent = s.ship ? eur(s.ship) : t('line_free');
  $('total').textContent = eur(s.total);
  bumpEl($('unit'));
  bumpEl($('total'));

  const dl = $('discountLine');
  if (dl) {
    if (s.discountAmount > 0 && appliedDiscount) {
      dl.hidden = false;
      $('discountLabel').textContent = getDiscountLabel(appliedDiscount);
      $('discountValue').textContent = '−' + eur(s.discountAmount);
    } else {
      dl.hidden = true;
    }
  }

  const subtotalLine = $('subtotalLine');
  if (subtotalLine) {
    if (s.discountAmount > 0 && appliedDiscount) {
      subtotalLine.hidden = false;
      const subtotalEl = $('subtotal');
      if (subtotalEl) subtotalEl.textContent = eur(s.sub + s.ship);
    } else {
      subtotalLine.hidden = true;
    }
  }

  const payTotal = $('payTotal');
  if (payTotal) payTotal.textContent = eur(s.total);
  updatePayCard(s.total);

  document.querySelectorAll('.tier').forEach(el => el.classList.toggle('on', parseInt(el.dataset.q, 10) === s.qty));

  const discText = appliedDiscount ? `\n${t('order_msg_code')}: ${appliedDiscount.code} (${getDiscountLabel(appliedDiscount)})` : '';
  const text = tf('wa_order', { brand: BRAND, qty: s.qty, product: t(PRODUCTS[currentProduct].nameKey), total: eur(s.total) }) + discText;
  $('waBuy').href = waLink(text);

  const discSummary = appliedDiscount ? ` • ${appliedDiscount.code} (−${eur(s.discountAmount)})` : '';
  $('modalSummary').textContent = `${s.qty} ${t(PRODUCTS[currentProduct].nameKey)} • ${t('order_msg_total')} ${eur(s.total)}${s.ship ? '' : ' • ' + t('line_free')}${discSummary}`;
  return s;
}
function animateQtyChange(oldVal, newVal) {
  if (oldVal === newVal) return;
  const input = $('qtyInput');
  if (!input) return;
  const delta = newVal - oldVal;
  const isUp = delta > 0;
  input.classList.remove('pop-up', 'pop-down');
  void input.offsetWidth;
  input.classList.add(isUp ? 'pop-up' : 'pop-down');
  setTimeout(() => input.classList.remove('pop-up', 'pop-down'), 420);
  const field = input.closest('.qty-field') || input.parentElement;
  if (!field) return;
  const float = document.createElement('span');
  float.className = 'qty-float ' + (isUp ? 'up' : 'down');
  float.textContent = (isUp ? '+' : '') + delta;
  field.appendChild(float);
  setTimeout(() => float.remove(), 900);
}
function bumpQty(delta) {
  const input = $('qtyInput');
  const oldVal = parseInt(input.value, 10) || 1;
  input.value = oldVal + delta;
  renderOrder();
  const newVal = parseInt(input.value, 10) || 1;
  animateQtyChange(oldVal, newVal);
}
function renderTiers() {
  const host = $('tiers');
  if (!host) return;
  host.innerHTML = '';
  const pcsLabel = t('tier_pcs');
  PRODUCTS[currentProduct].tiers.forEach(tier => {
    const d = document.createElement('div');
    d.className = 'tier';
    d.dataset.q = tier.q;
    d.tabIndex = 0;
    const badge = tier.badgeKey ? `<span class="badge">${t(tier.badgeKey)}</span>` : '';
    d.innerHTML = badge +
      `<div class="q">${tier.q} ${pcsLabel}</div>
       <div class="p">${eur(tier.total)}</div>
       <div class="e">${eur(tier.total / tier.q)} / ${pcsLabel}</div>`;
    const pick = () => {
      const input = $('qtyInput');
      const oldVal = parseInt(input.value, 10) || 0;
      input.value = tier.q;
      renderOrder();
      animateQtyChange(oldVal, tier.q);
    };
    d.addEventListener('click', pick);
    d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
    host.appendChild(d);
  });
  $('qtyInput').value = PRODUCTS[currentProduct].tiers[1].q;
  renderOrder();
}

/* ============================================================
   DISCOUNT UI
============================================================ */
function initDiscount() {
  const input = $('discountInput');
  const box = $('discountBox');
  if (!input) return;

  function shakeInput() {
    input.classList.remove('shake');
    void input.offsetWidth;
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  }

  function apply() {
    const code = input.value.trim().toUpperCase();
    if (!code) return;
    const discount = DISCOUNTS[code];

    if (!discount) {
      shakeInput();
      toast('error', t('toast_invalid_title'), tf('toast_invalid_msg', { code }));
      return;
    }

    if (isExpired(discount)) {
      shakeInput();
      toast('warning', t('toast_expired_title'), tf('toast_expired_msg', { code, date: formatDate(discount.expires) }));
      return;
    }

    const remaining = getCooldownRemaining(code);
    if (remaining > 0) {
      shakeInput();
      toast('error', t('toast_used_title'), tf('toast_used_msg', { time: formatCooldownTime(remaining) }));
      return;
    }

    appliedDiscount = { code, ...discount };
    input.value = code;
    input.readOnly = true;
    input.classList.add('applied');
    box.classList.add('applied', 'redeemed');
    setTimeout(() => box.classList.remove('redeemed'), 950);
    $('applyDiscount').hidden = true;
    $('removeDiscount').hidden = false;
    renderOrder();

    const s = calc();
    if (s.discountAmount > 0) {
      const floatEl = document.createElement('span');
      floatEl.className = 'discount-float go';
      floatEl.textContent = '−' + eur(s.discountAmount);
      box.appendChild(floatEl);
      setTimeout(() => floatEl.remove(), 1150);
    }

    toast('success', t('toast_applied_title'), tf('toast_applied_msg', { label: getDiscountLabel(discount) }));
  }

  function remove() {
    appliedDiscount = null;
    input.value = '';
    input.readOnly = false;
    input.classList.remove('applied');
    box.classList.remove('applied', 'redeemed');
    $('applyDiscount').hidden = false;
    $('removeDiscount').hidden = true;
    renderOrder();
    toast('info', t('toast_removed_title'), t('toast_removed_msg'));
  }

  $('applyDiscount').addEventListener('click', apply);
  $('removeDiscount').addEventListener('click', remove);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); apply(); } });
}

function initPayment() {
  if (PAYMENT_URL) {
    const c = $('payCard');
    if (c) c.hidden = false;
    updatePayCard(calc().total);
  }
  if (BANK_IBAN) {
    const b = $('payBank'); if (b) b.hidden = false;
    const ibanEl = $('payIban'); if (ibanEl) ibanEl.textContent = BANK_IBAN;
  }
  const copyBtn = $('payCopy');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const original = copyBtn.textContent;
      copyText(BANK_IBAN).then(() => {
        copyBtn.textContent = '✓';
        toast('success', t('toast_iban_ok_title'), BANK_IBAN);
        setTimeout(() => copyBtn.textContent = original, 2000);
      }).catch(() => {
        toast('warning', t('toast_iban_fail_title'), tf('toast_iban_fail_msg', { iban: BANK_IBAN }));
      });
    });
  }
}

function initOrder() {
  document.querySelectorAll('.ptab').forEach(b => {
    b.addEventListener('click', () => {
      currentProduct = b.dataset.p;
      document.querySelectorAll('.ptab').forEach(x => x.setAttribute('aria-selected', x === b));
      $('logonote').classList.toggle('on', !!PRODUCTS[currentProduct].logo);
      if (PRODUCTS[currentProduct].logo) $('customDesign').checked = true;
      renderTiers();
    });
  });
  $('minus').addEventListener('click', () => bumpQty(-1));
  $('plus').addEventListener('click', () => bumpQty(1));
  $('qtyInput').addEventListener('change', renderOrder);
  $('qtyInput').addEventListener('input', () => { if (parseInt($('qtyInput').value, 10) > 0) renderOrder(); });

  function renderActions() {
    const checks = $('checks');
    if (!checks) return;
    checks.innerHTML = '';
    (ACTIONS[currentLang] || ACTIONS.sq).forEach(a => {
      const l = document.createElement('label');
      l.innerHTML = `<input type="checkbox" value="${a}"> ${a}`;
      checks.appendChild(l);
    });
  }
  renderActions();
  window.__renderActions = renderActions;

  const openModal = () => { renderOrder(); $('modal').classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { $('modal').classList.remove('open'); document.body.style.overflow = ''; };
  $('openOrder').addEventListener('click', openModal);
  $('closeModal').addEventListener('click', closeModal);
  $('modal').addEventListener('click', e => { if (e.target === $('modal')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  $('orderForm').addEventListener('submit', e => {
    e.preventDefault();
    const s = renderOrder();
    const picked = [...document.querySelectorAll('#checks input:checked')].map(x => x.value).join(', ') || '-';
    const discLine = appliedDiscount ? `\n${t('order_msg_discount')}: ${appliedDiscount.code} (−${eur(s.discountAmount)})` : '';
    const msg =
`${t('order_msg_title')} - ${BRAND}
${t('order_msg_product')}: ${s.qty} ${t(PRODUCTS[currentProduct].nameKey)}
${t('order_msg_subtotal')}: ${eur(s.sub)}${discLine}
${t('order_msg_ship')}: ${s.ship ? eur(s.ship) : t('order_msg_free')}
${t('order_msg_total')}: ${eur(s.total)} ${t('order_msg_cash')}
${t('order_msg_actions')}: ${picked}
${t('order_msg_custom')}: ${$('customDesign').checked ? t('order_msg_custom_yes') : t('order_msg_custom_no')}
${t('order_msg_links')}: ${$('links').value || '-'}
${t('order_msg_biz')}: ${$('biz').value}
${t('order_msg_name')}: ${$('name').value}
${t('order_msg_phone')}: ${$('orderPhone').value}
${t('order_msg_addr')}: ${$('addr').value}
${t('order_msg_client')}: ${$('note').value || '-'}`;
    if (appliedDiscount) markCodeUsed(appliedDiscount.code);
    sendOrder(msg);
    closeModal();
  });

  renderTiers();
  initDiscount();
  initPayment();
}

/* ============================================================
   WORK CAROUSEL
============================================================ */
function initWorkCarousel() {
  const PROJECTS = [
    { name:"Creative Bar", type:{sq:"Menu online për kafene",en:"Menu for cafés",de:"Speisekarte für Cafés",it:"Menu per caffè",fr:"Menu pour cafés",es:"Menú para cafeterías"}, desc:{sq:"Menu që hapet me një prekje në kartelën NFC.",en:"Menu that opens with a tap on the NFC card.",de:"Speisekarte, die sich mit einem Tipp öffnet.",it:"Menu che si apre con un tocco.",fr:"Menu qui s'ouvre d'une touche.",es:"Menú que se abre con un toque."}, c1:"#2fe0b0", c2:"#0a0d14", kind:"menu" },
    { name:"Creative Design & Wear", type:{sq:"Dyqan online",en:"Online store",de:"Online-Shop",it:"Negozio online",fr:"Boutique en ligne",es:"Tienda online"}, desc:{sq:"Produkte, porosi me cash në dorëzim dhe lidhje me Instagram.",en:"Products, cash on delivery and Instagram link.",de:"Produkte, Barzahlung und Instagram-Link.",it:"Prodotti, pagamento alla consegna e link Instagram.",fr:"Produits, paiement à la livraison et lien Instagram.",es:"Productos, pago contra entrega y enlace a Instagram."}, c1:"#d6402e", c2:"#f1ece0", kind:"shop" },
    { name:"Creative NFC", type:{sq:"Faqe porosie",en:"Order page",de:"Bestellseite",it:"Pagina ordini",fr:"Page de commande",es:"Página de pedido"}, desc:{sq:"Kartela, stikerë dhe porosi direkt në WhatsApp.",en:"Cards, stickers and orders directly on WhatsApp.",de:"Karten, Aufkleber und Bestellungen auf WhatsApp.",it:"Tessere, adesivi e ordini su WhatsApp.",fr:"Cartes, stickers et commandes sur WhatsApp.",es:"Tarjetas, stickers y pedidos en WhatsApp."}, c1:"#4b83ff", c2:"#0b0e15", kind:"landing" },
    { name:"Portfolio", type:{sq:"Portfolio personal",en:"Personal portfolio",de:"Portfolio",it:"Portfolio",fr:"Portfolio",es:"Portfolio"}, desc:{sq:"Galeri punësh me animacione dhe formular kontakti.",en:"Work gallery with animations and contact form.",de:"Galerie mit Animationen und Kontaktformular.",it:"Galleria con animazioni e modulo contatti.",fr:"Galerie avec animations et formulaire de contact.",es:"Galería con animaciones y formulario de contacto."}, c1:"#ffb61e", c2:"#14110a", kind:"portfolio" },
    { name:"Faqe shërbimesh", type:{sq:"Faqe për biznes",en:"Business page",de:"Firmenseite",it:"Pagina aziendale",fr:"Page d'entreprise",es:"Página de negocio"}, desc:{sq:"Shërbimet, çmimet dhe kontakti në një faqe të vetme.",en:"Services, prices and contact on one page.",de:"Dienstleistungen, Preise und Kontakt auf einer Seite.",it:"Servizi, prezzi e contatti in una pagina.",fr:"Services, tarifs et contact sur une page.",es:"Servicios, precios y contacto en una página."}, c1:"#b07bff", c2:"#100b1a", kind:"biz" }
  ];
  const N = PROJECTS.length, step = 360 / N;
  const show = $('show'), ring = $('ring');
  if (!show || !ring) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function mock(p) {
    const hd = `<div class="hd"><div class="lg"></div><div class="nv"><i></i><i></i><i></i></div></div>`;
    const h = `<div class="h1"></div><div class="h2"></div>`;
    if (p.kind === 'menu') return hd + h + `<div class="rows"><i style="width:100%"></i><i style="width:88%"></i><i style="width:94%"></i><i style="width:80%"></i><i style="width:90%"></i></div>`;
    if (p.kind === 'shop') return hd + `<div class="grid g2"><i></i><i></i><i></i><i></i></div>`;
    if (p.kind === 'landing') return hd + h + `<div class="b2"></div><div class="grid"><i></i></div>`;
    if (p.kind === 'portfolio') return hd + `<div class="grid g3 g3m"><i></i><i></i><i></i><i></i><i></i></div>`;
    return hd + h + `<div class="grid g3"><i></i><i></i><i></i></div>`;
  }

  PROJECTS.forEach((p, i) => {
    const c = document.createElement('div');
    c.className = 'wcard';
    c.dataset.i = i;
    c.style.setProperty('--c1', p.c1);
    c.style.setProperty('--c2', p.c2);
    c.innerHTML = `<div class="wbar"><i></i><i></i><i></i><span>faqja-jote.com</span></div><div class="wbody" style="background:var(--c2)">${mock(p)}</div>`;
    ring.appendChild(c);
  });

  function layout() {
    const R = Math.round((ring.offsetWidth / 2) / Math.tan(Math.PI / N)) + 36;
    ring.querySelectorAll('.wcard').forEach((c, i) => {
      c.style.transform = `rotateY(${i * step}deg) translateZ(${R}px)`;
    });
  }
  layout();
  addEventListener('resize', layout);

  let ang = 0, vel = 0, target = null;
  let drag = false, moved = false, lx = 0, sx = 0;
  let hover = false, idleUntil = 0, cur = -1;

  function caption() {
    const p = PROJECTS[cur];
    $('pjName').textContent = p.name;
    $('pjDesc').textContent = p.desc[currentLang] || p.desc.sq;
    $('pjTag').textContent = p.type[currentLang] || p.type.sq;
    $('pjWant').href = waLink(tf('wa_similar', { name: p.name, type: p.type[currentLang] || p.type.sq }));
  }
  window.__refreshCarouselCaption = () => { if (cur >= 0) caption(); };

  function frame(now) {
    if (!drag) {
      if (target !== null) {
        ang += (target - ang) * 0.12;
        if (Math.abs(target - ang) < .05) { ang = target; target = null; }
      } else if (Math.abs(vel) > .05) {
        ang += vel; vel *= .94;
        if (Math.abs(vel) <= .05) target = Math.round(ang / step) * step;
      } else if (!reduce && !hover && now > idleUntil) {
        ang -= .12;
      }
    }
    ring.style.transform = `rotateX(-7deg) rotateY(${ang}deg)`;
    const idx = ((Math.round(-ang / step) % N) + N) % N;
    if (idx !== cur) { cur = idx; caption(); }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function go(dir) {
    const base = target !== null ? target : Math.round(ang / step) * step;
    target = base + dir * step;
    vel = 0;
    idleUntil = performance.now() + 6000;
  }
  function focusCard(i) {
    const base = -i * step, k = Math.round((ang - base) / 360);
    target = base + k * 360;
    vel = 0;
    idleUntil = performance.now() + 6000;
  }

  show.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hover = true; });
  show.addEventListener('pointerleave', () => { hover = false; });
  show.addEventListener('pointerdown', e => { drag = true; moved = false; lx = sx = e.clientX; vel = 0; target = null; try { show.setPointerCapture(e.pointerId); } catch (_) {} });
  show.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - lx;
    if (Math.abs(e.clientX - sx) > 6) moved = true;
    ang += dx * .4;
    vel = dx * .4;
    lx = e.clientX;
  });
  show.addEventListener('pointerup', e => {
    drag = false;
    idleUntil = performance.now() + 6000;
    if (!moved) {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const card = el && el.closest ? el.closest('.wcard') : null;
      if (card) focusCard(+card.dataset.i);
    }
  });
  show.addEventListener('pointercancel', () => { drag = false; });
  show.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(-1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(1); }
  });
  $('pjNext').addEventListener('click', () => go(-1));
  $('pjPrev').addEventListener('click', () => go(1));
}

function initWebForm() {
  $('webForm').addEventListener('submit', e => {
    e.preventDefault();
    const msg =
`${t('form_title')} - ${BRAND}
${t('form_type')}: ${$('wtype').value}
${t('form_biz')}: ${$('wbiz').value}
${t('form_desc')}: ${$('wdesc').value}
${t('form_budget')}: ${$('wbudget').value || '-'}
${t('form_deadline')}: ${$('wdeadline').value || '-'}
${t('form_name')}: ${$('wname').value}
${t('form_phone')}: ${$('wphone').value}`;
    sendOrder(msg);
  });
}

/* ============================================================
   3D CARD
============================================================ */
function init3DCard() {
  const scene = $('scene'), rig = $('rig'), bump = $('bump'), ripple = $('ripple');
  if (!scene || !rig) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rx = 10, ry = -18, vx = 0, vy = 0;
  let drag = false, moved = false, lx = 0, ly = 0, sx = 0, sy = 0;
  const t0 = performance.now();

  function frame(now) {
    if (!drag) { ry += vy; rx += vx; vx *= .92; vy *= .92; }
    rx = Math.max(-55, Math.min(55, rx));
    const sway = reduce ? 0 : Math.sin((now - t0) / 1800) * 5;
    rig.style.transform = `rotateX(${rx}deg) rotateY(${ry + sway}deg)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  scene.addEventListener('pointerdown', e => {
    drag = true; moved = false;
    lx = sx = e.clientX; ly = sy = e.clientY; vx = vy = 0;
    try { scene.setPointerCapture(e.pointerId); } catch (_) {}
  });
  scene.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - lx, dy = e.clientY - ly;
    if (Math.hypot(e.clientX - sx, e.clientY - sy) > 6) moved = true;
    ry += dx * .5; rx -= dy * .4;
    vy = dx * .5; vx = -dy * .4;
    lx = e.clientX; ly = e.clientY;
  });
  scene.addEventListener('pointerup', () => { drag = false; if (!moved) doTap(); });
  scene.addEventListener('pointercancel', () => { drag = false; });
  scene.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doTap(); } });

  const ov = document.createElement('div');
  ov.className = 'tapov';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-modal', 'true');
  document.body.appendChild(ov);
  ov.innerHTML = `<button class="tapx" aria-label="Close">×</button>
    <div class="phone"></div>
    <p class="tapcap"></p>
    <a class="btn btn-ghost" href="#porosit" data-goto="porosit"></a>`;

  function refreshOverlay() {
    const views = buildViews();
    ov.querySelector('.phone').innerHTML = views.card.replace('id="saveVcf"', 'data-vcf="1"');
    const capText = {
      en:'This is how the page opens when the customer taps the card.',
      de:'So öffnet sich die Seite, wenn der Kunde die Karte antippt.',
      it:'Ecco come si apre la pagina quando il cliente tocca la tessera.',
      fr:"Voici comment la page s'ouvre quand le client touche la carte.",
      es:'Así se abre la página cuando el cliente toca la tarjeta.',
      sq:'Kështu hapet faqja kur klienti prek kartelën.'
    }[currentLang] || 'Kështu hapet faqja kur klienti prek kartelën.';
    const btnText = {
      en:'See packages and prices',
      de:'Pakete und Preise ansehen',
      it:'Vedi pacchetti e prezzi',
      fr:'Voir les forfaits et prix',
      es:'Ver paquetes y precios',
      sq:'Shiko pakot dhe çmimet'
    }[currentLang] || 'Shiko pakot dhe çmimet';
    ov.querySelector('.tapcap').textContent = capText;
    ov.querySelector('.btn-ghost').textContent = btnText;
  }
  refreshOverlay();
  window.__refreshOverlay = refreshOverlay;

  function closeOv() { ov.classList.remove('open'); document.body.style.overflow = ''; }
  ov.addEventListener('click', e => {
    if (e.target.closest('[data-vcf]')) { saveVcf(); return; }
    if (e.target === ov || e.target.closest('.tapx') || e.target.closest('a')) closeOv();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOv(); });

  function doTap() {
    if (bump) { bump.classList.remove('go'); void bump.offsetWidth; bump.classList.add('go'); }
    if (ripple) { ripple.classList.remove('go'); void ripple.offsetWidth; ripple.classList.add('go'); }
    setTimeout(() => { ov.classList.add('open'); document.body.style.overflow = 'hidden'; }, reduce ? 0 : 650);
  }
}

/* ============================================================
   LANGUAGE + THEME
============================================================ */
function applyLanguage(lang) {
  if (!T[lang]) lang = 'sq';
  currentLang = lang;
  try { localStorage.setItem('cnfc_lang', lang); } catch (_) {}
  document.documentElement.setAttribute('lang', lang);

  const titleMap = {
    sq:'Creative NFC — Kartela dhe stikerë NFC',
    en:'Creative NFC — NFC cards and stickers',
    de:'Creative NFC — NFC-Karten und Aufkleber',
    it:'Creative NFC — Tessere e adesivi NFC',
    fr:'Creative NFC — Cartes et stickers NFC',
    es:'Creative NFC — Tarjetas y stickers NFC'
  };
  document.title = titleMap[lang] || titleMap.sq;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  const label = $('langLabel');
  if (label) label.textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(opt => {
    const on = opt.dataset.lang === lang;
    opt.classList.toggle('active', on);
    opt.setAttribute('aria-checked', on ? 'true' : 'false');
  });

  initHeaderLinks();
  renderTiers();
  if (window.__renderActions) window.__renderActions();
  const activeTab = document.querySelector('.tab[aria-selected="true"]');
  showView(activeTab ? activeTab.dataset.v : 'card');
  if (window.__refreshCarouselCaption) window.__refreshCarouselCaption();
  if (window.__refreshOverlay) window.__refreshOverlay();

  const minus = $('minus');
  if (minus) minus.setAttribute('aria-label', lang === 'en' ? 'Decrease' : lang === 'de' ? 'Verringern' : lang === 'it' ? 'Riduci' : lang === 'fr' ? 'Diminuer' : lang === 'es' ? 'Disminuir' : 'Zvogëlo');
  const plus = $('plus');
  if (plus) plus.setAttribute('aria-label', lang === 'en' ? 'Increase' : lang === 'de' ? 'Erhöhen' : lang === 'it' ? 'Aumenta' : lang === 'fr' ? 'Augmenter' : lang === 'es' ? 'Aumentar' : 'Rrit');
}

function applyTheme(theme) {
  currentTheme = theme;
  try { localStorage.setItem('cnfc_theme', theme); } catch (_) {}
  document.documentElement.classList.add('theme-switching');
  document.documentElement.setAttribute('data-theme', theme);
  setTimeout(() => document.documentElement.classList.remove('theme-switching'), 550);
}

/* ============================================================
   LOADER
============================================================ */
function initLoader() {
  const loader = $('loader');
  if (!loader) return;
  const bar = loader.querySelector('.loader-bar span');
  const pct = loader.querySelector('.loader-pct');
  let progress = 0;
  const target = 100;
  const tick = () => {
    progress += Math.random() * 12 + 5;
    if (progress > target) progress = target;
    if (bar) bar.style.width = progress + '%';
    if (pct) pct.textContent = Math.floor(progress) + '%';
    if (progress < target) setTimeout(tick, 70 + Math.random() * 110);
    else setTimeout(() => loader.classList.add('done'), 380);
  };
  setTimeout(tick, 180);
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const selectors = '.section-head, .use, .step, .price-box, .tiers, .phone, .webform, .contact-card, .cta-inner, .demo-text, .show, .faq > div, .pay-card';
  document.querySelectorAll(selectors).forEach(el => {
    if (el.classList.contains('reveal')) return;
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight * 0.92) el.classList.add('reveal');
  });
  document.querySelectorAll('.uses, .how, .contact-grid, .faq, .pay-grid').forEach(group => {
    [...group.children].forEach((child, i) => {
      if (child.classList.contains('reveal') || child.classList.contains('in')) return;
      const rect = child.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) child.classList.add('reveal', 'd' + Math.min(i + 1, 5));
    });
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ============================================================
   BUTTON FX
============================================================ */
function initButtonFX() {
  document.querySelectorAll('.btn, .qtyctl, .arw, .tab, .ptab, .tier, .pay-cta, .icon-btn').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      btn.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
    btn.addEventListener('pointerdown', e => {
      if (!btn.classList.contains('btn')) return;
      const r = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const fx = document.createElement('span');
      fx.className = 'ripple-fx';
      fx.style.width = fx.style.height = size + 'px';
      fx.style.left = (e.clientX - r.left) + 'px';
      fx.style.top = (e.clientY - r.top) + 'px';
      btn.appendChild(fx);
      setTimeout(() => fx.remove(), 700);
    });
  });
}

/* ============================================================
   TOGGLES
============================================================ */
function initToggles() {
  const themeBtn = $('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      themeBtn.classList.remove('switching');
      void themeBtn.offsetWidth;
      themeBtn.classList.add('switching');
      setTimeout(() => themeBtn.classList.remove('switching'), 700);
    });
  }

  const langBtn = $('langToggle');
  const langMenu = $('langMenu');
  if (!langBtn || !langMenu) return;

  function setMenu(open) {
    langMenu.classList.toggle('open', open);
    langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    setMenu(!langMenu.classList.contains('open'));
    langBtn.classList.remove('switching');
    void langBtn.offsetWidth;
    langBtn.classList.add('switching');
    setTimeout(() => langBtn.classList.remove('switching'), 700);
  });

  langMenu.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', e => {
      e.stopPropagation();
      const lang = opt.dataset.lang;
      applyLanguage(lang);
      setMenu(false);
    });
  });

  document.addEventListener('click', e => {
    if (langMenu.classList.contains('open') && !e.target.closest('.lang-dropdown')) setMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && langMenu.classList.contains('open')) setMenu(false);
  });
}

/* ============================================================
   MOBILE MENU
============================================================ */
function initMobileMenu() {
  const navToggle = $('navToggle');
  if (!navToggle) return;
  const header = navToggle.closest('header');
  const setMenu = (open) => {
    header.classList.toggle('menu-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  navToggle.addEventListener('click', (e) => { e.stopPropagation(); setMenu(!header.classList.contains('menu-open')); });
  header.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', (e) => {
    if (header.classList.contains('menu-open') && !header.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && header.classList.contains('menu-open')) setMenu(false);
  });
}

/* ============================================================
   BOOT
============================================================ */
function boot() {
  if (boot._ran) return;
  boot._ran = true;

  applyTheme(currentTheme);
  applyLanguage(currentLang);

  initLoader();
  initHeaderLinks();
  initOrder();
  initDemoPhone();
  initWorkCarousel();
  initWebForm();
  init3DCard();
  initScrollReveal();
  initButtonFX();
  initToggles();
  initMobileMenu();

  const initial = getPageFromHash();
  try { history.replaceState({ page: initial }, '', '#' + initial); } catch (_) {}
  showPage(initial, { scrollToTop: false });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}