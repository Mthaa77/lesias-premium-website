# Website image uploads

Upload Lesia's Educational Services website images here.

Recommended files:

- `hero-students.jpg` — premium hero background or student montage
- `graduation-01.jpg` — graduation image
- `classroom-01.jpg` — classroom image
- `campus-soshanguve.jpg` — Soshanguve campus image
- `campus-hammanskraal.jpg` — Hammanskraal campus image
- `logo.png` — official Lesia's logo
- `founder-or-principal.jpg` — MB Kadiaka or leadership profile photo

How to use in Next.js:

```tsx
import Image from "next/image";

<Image
  src="/images/hero-students.jpg"
  alt="Lesia's Educational Services students"
  width={1200}
  height={800}
/>
```

Static public path example:

```txt
/images/hero-students.jpg
```
