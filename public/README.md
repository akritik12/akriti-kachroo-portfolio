# Public assets

Add these files here — the code already looks for them at these exact names:

- **`resume.pdf`** — your resume. The "Resume" link in the Connect & Profile
  card (`components/About.tsx`) already points to `/resume.pdf` and downloads
  it directly; nothing else to change.

- **`favicon.ico`** — your browser-tab icon, referenced in `app/layout.tsx`.

- **`profile.jpg`** (optional) — a real photo, to replace the "AK" monogram
  placeholder. In `components/About.tsx`, find this block inside the avatar
  card:
  ```tsx
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="font-heading text-[7rem] font-bold text-base/90 select-none">
      <image>
    </span>
  </div>
  ```
  Replace it with:
  ```tsx
  import Image from "next/image";
  // ...
  <Image
    src="/profile.jpg"
    alt="Akriti Kachroo"
    fill
    className="object-cover"
  />
  ```
  (Add the `import Image from "next/image";` line near the top of the file,
  next to the other imports.)

- **`og-image.jpg`** (optional, 1200×630) — the preview image shown when the
  site link is shared on social media or Slack. Add
  `openGraph: { images: ["/og-image.jpg"] }` inside the `metadata` object in
  `app/layout.tsx`.
