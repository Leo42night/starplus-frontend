# Starplus-Frontend
Setup untuk team front-end agar dapat membuat kode tanpa terbebani file back-end.
- [File Project](https://drive.google.com/drive/folders/1DIFmoUGeUehtDxHtdMcmOLfCBp9s1Ko4?usp=drive_link)
- Original Repo: [ikhsanhmr/starplus](https://github.com/ikhsanhmr/starplus)
- Template: [starplus.co.id](https://starplus.co.id/index.html)
- Contoh: [plnnusadaya.co.id](https://plnnusadaya.co.id/)

## Running
```
pnpm install
pnpm dev
```

## Aturan Bersama
Kode css dari template diganti ke tailwind. Agar tiap proyek tim tidak saling menimpa, tim dapat menambah tailwind di setiap file masing" `import './tailwind.css'` (sesuaikan path nya).

## Issue
- Navigasi: warna text navigasi menghilang ketika tailwind aktif (override)
- Home: testimonial slider gk aktif (mungkin di js-nya)

## JOBS Set Data 🌟
File data ada di `src/data/`.
- Home: List service, list team, list testimoni, list blog
- Service: list service
- Team: list team
- Pages-blog: list blog (image, judul, deskripsi) dikelompokkan dalam paginasi
- Pages-single: 
  - variabel post (judul, deskripsi, author {name, image, description})
  - *recentPost* buat variabel list, [*feature*,*popular*,*latest*] buat variabel list group, categories list group, comment list group.  


## Shortcut keyboard
- `rafce`: react arrow function export, komponen standar untuk elemen tiap file `.tsx` (butuh ekstensi 1)

## Recomended VSCode Extension
1. `ES7+ React/Redux/React-Native snippets`: snippet react
2. `Tailwind CSS IntelliSense`: Ngasih saran kode tailwind & nampilkan isi class

## More Rule
- Assets & svg.
  - Jika Anda ingin file `.svg` memiliki interaktivitas atau perubahan di dalam komponen React, letakkan di `src/`.
  - Jika file `.svg` hanya digunakan sebagai aset statis seperti gambar di halaman HTML, letakkan di `public/`.
- CSS
  - Gunakan `index.css` untuk mendefinisikan gaya global
  - Gunakan `App.css` untuk komponen spesifik
- Styling in `.tsx` file
  - in React TypeScript, the style attribute expects a JavaScript object where CSS property names are written in camelCase (not kebab-case) and the values are appropriately formatted. ex `style={{clipPath: "polygon(74.1%)"}}`