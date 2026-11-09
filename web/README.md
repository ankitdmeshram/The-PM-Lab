# The PM Lab website

Marketing site for The PM Lab, built with Next.js and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `app/_content/ai-fullstack.ts` — all text for the AI Full Stack course page (`/ai-full-stack-developer`).
- `app/_content/home.ts` — all homepage text, stats, programs, testimonials and contact details. Values marked `PLACEHOLDER` must be replaced before launch.
- `app/_components/` — homepage sections (header, hero, sections, footer).
- `app/globals.css` — brand colours and fonts.
- `app/icon.svg` — favicon.

## WhatsApp updates form

The "Get daily updates" form saves sign-ups to a Google Sheet. Until it's connected,
the form opens WhatsApp with the person's details pre-filled instead.

To connect it (about 5 minutes):

1. Create a Google Sheet. In row 1 add the headers: `Timestamp`, `Name`, `WhatsApp`, `I am a`, `Course`, `Source`.
2. In the sheet, open **Extensions → Apps Script**, delete the sample code and paste:

   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].appendRow([
       new Date(), data.name, data.whatsapp, data.status, data.course, data.source,
     ]);
     return ContentService.createTextOutput("ok");
   }
   ```

3. Click **Deploy → New deployment**, choose type **Web app**, set
   *Execute as* to **Me** and *Who has access* to **Anyone**, then **Deploy** and allow access.
4. Copy the web app URL (it ends in `/exec`) and paste it into `updatesFormEndpoint`
   in `app/_content/home.ts`.

Each sign-up then appears as a new row in the sheet.
