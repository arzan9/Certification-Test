# CCAR-F Practice Exam Simulator

Simulator latihan ujian **Claude Certified Architect – Foundations (CCAR-F)**, dibuat berdasarkan *Exam Guide v1.0 (Juli 2026)*.

Website statis (HTML + JavaScript), **100% offline**, tanpa install apa pun.

---

## Cara buka di local

### Cara 1 — Klik dua kali (paling gampang)
1. Buka folder project ini di Finder.
2. Klik dua kali **`index.html`**.
3. Terbuka di browser default. Selesai.

> Karena semua file lokal dan dipanggil lewat `<script src>`, cara ini jalan langsung dari `file://` — tidak perlu server.

### Cara 2 — Lewat browser
- Buka browser (Chrome / Safari / Firefox / Edge).
- Tekan `Ctrl+O` (Windows/Linux) atau `Cmd+O` (Mac), lalu pilih `index.html`.

### Cara 3 — Local server (opsional)
Kalau mau jalan lewat `http://` (mis. browser tertentu membatasi `file://`):

```bash
# dari dalam folder project
python3 -m http.server 8000
```
Lalu buka: <http://localhost:8000>

Alternatif (kalau ada Node.js): `npx serve` lalu buka URL yang muncul.

---

## Isi paket

- **5 paket latihan** (Paket Latihan 1–5).
- Tiap paket = **1 mock exam utuh**: **60 soal**, **120 menit**.
- **300 soal total**, semua unik (tidak ada yang berulang antar paket).

---

## Aturan ujian (sesuai Exam Guide)

| Ketentuan        | Nilai |
|------------------|-------|
| Jumlah soal      | 60 per paket |
| Batas waktu      | 120 menit (auto-submit saat habis) |
| Format soal      | Multiple-choice & multiple-response (tertulis "Select N") |
| Skoring          | Skala 100–1000 |
| Nilai lulus      | ≥ 720 |
| Hasil            | Pass / Fail + persentase benar per domain |

Catatan:
- Soal multiple-response bernilai **all-or-nothing** (tidak ada nilai parsial), sesuai skoring ujian asli.
- Bisa navigasi bebas antar soal, **flag** soal untuk ditinjau, dan review sebelum submit.
- Soal yang tidak dijawab dihitung salah.

## Bobot domain (blueprint)

| Domain | Bobot |
|--------|-------|
| D1 · Agentic Architecture & Orchestration | 27% |
| D2 · Tool Design & MCP Integration | 18% |
| D3 · Claude Code Configuration & Workflows | 20% |
| D4 · Prompt Engineering & Structured Output | 20% |
| D5 · Context Management & Reliability | 15% |

---

## Alur pakai

1. Buka `index.html`.
2. Di homepage, pilih salah satu **Paket Latihan 1–5**.
3. Baca layar aturan, klik **Start exam**.
4. Kerjakan 60 soal dalam 120 menit (timer jalan, auto-submit saat habis).
5. Klik **Review & Submit** → **Submit exam**.
6. Lihat **score report**: skor skala, Pass/Fail, persentase per domain, plus **review jawaban + penjelasan** tiap soal.

---

## Struktur file

```
Certification Test/
├── index.html        # aplikasi ujian (UI, timer, skoring, review)
├── questions.js      # Paket Latihan 1  (packages A–E)
├── questions2.js     # Paket Latihan 2  (packages F–J)
├── questions3.js     # Paket Latihan 3  (packages K–O)
├── questions4.js     # Paket Latihan 4  (packages P–T)
├── questions5.js     # Paket Latihan 5  (packages U–Y)
└── README.md
```

Semua file `questions*.js` harus berada **di folder yang sama** dengan `index.html`.

---

## Menambah / mengedit soal

Tiap soal berbentuk objek di file `questions*.js`:

```js
{
  d: 1,                       // domain 1–5
  s: "Customer Support Resolution Agent",  // nama scenario
  q: "Teks pertanyaan…",
  o: ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
  a: [0],                     // index jawaban benar; >1 index = multiple-response
  e: "Penjelasan kenapa jawaban ini benar."
}
```

- `a: [0]` → single-answer (jawaban opsi pertama).
- `a: [0, 2]` → multiple-response (harus pilih opsi 1 dan 3, all-or-nothing).

Simpan file, refresh browser — perubahan langsung terlihat.

---

*Simulator latihan. Tidak berafiliasi dengan ujian resmi Anthropic / Pearson VUE. Materi soal orisinal, mengacu pada Exam Guide publik.*
