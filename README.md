# Personal Web Petik

Portofolio React satu halaman dengan desain gelap, animasi, dan navigasi halus. Proyek ini menampilkan profil singkat, skill stack interaktif, timeline edukasi, serta galeri proyek dengan tautan eksternal.

## Fitur utama

- Halaman landing modern dengan hero image dan CTA
- Navigasi tetap (sticky) di atas layar
- Seksi "About Me" dengan kartu profil visual
- Scroll velocity / parallax text effect antar seksi
- Skill stack interaktif menggunakan kartu
- Timeline educational history
- Galeri proyek dengan preview gambar dan tombol "View Project"
- Tema gelap dengan aksen hijau neon

## Teknologi

- React 19
- Vite
- Tailwind CSS 4
- GSAP
- motion
- OGL

## Struktur proyek

- `src/App.jsx` - layout utama dan data proyek
- `src/components/Navbar.jsx` - header dan navigasi
- `src/components/Hero.jsx` - hero section
- `src/components/About.jsx` - deskripsi profil
- `src/components/Stack.jsx` - kartu skill interaktif
- `src/components/ScrollVelocity.jsx` - efek scroll teks
- `src/components/Education.jsx` - timeline pendidikan
- `src/components/ProjectCard.jsx` - kartu proyek
- `src/assets/` - gambar pendukung untuk hero dan proyek

## Instalasi

1. Pasang dependensi:

```bash
npm install
```

2. Jalankan server development:

```bash
npm run dev
```

3. Buka browser dan akses URL yang ditampilkan (biasanya `http://localhost:5173`).

## Build dan preview

Untuk membuat build produksi:

```bash
npm run build
```

Untuk melihat preview build produksi:

```bash
npm run preview
```

## Catatan

- Ganti konten teks, foto, dan tautan proyek sesuai kebutuhan.
- Pastikan asset gambar di `src/assets/` tetap tersedia saat memindahkan atau deploy.
- Sesuaikan daftar skill jika menambahkan teknologi baru.
