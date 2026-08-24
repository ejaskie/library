import './style.css'

// Database Proyek (Mudah ditambah di masa depan)
const projects = [
  {
    id: 'rembag',
    title: 'Remove Background',
    description: 'Background Remover & Pas Foto. Bukan sekadar hapus latar. Didukung AI ClipDrop & fitur editor pas foto formal otomatis.', //[cite: 1]
    url: 'https://rembag.vercel.app',
    // Ikon Gunting / Potong (SVG)
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`
  },
  {
    id: 'konver',
    title: 'Konversi Format',
    description: 'Konversi format Gambar dan Dokumen. Swiss-army knife untuk file Anda. Ubah format gambar secara lokal atau dokumen via Cloud API.', //[cite: 2]
    url: 'https://konver.vercel.app',
    // Ikon File Konversi (SVG)
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="M9 15l3 3 3-3"></path></svg>`
  },
  {
    id: 'temail', // Ditaruh nomor 3 agar pas dengan pola bento box
    title: 'Email Sementara',
    description: 'Temporary Email. Kotak masuk sementara alias disposable email. Solusi cepat menghindari spam saat daftar akun.', //[cite: 4]
    url: 'https://semail.vercel.app',
    // Ikon Mail Shield (SVG)
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
  },
  {
    id: 'dowti',
    title: 'Download VTiktok',
    description: 'Tiktok Video Downloader. Bypass client-side untuk unduh video TikTok bebas watermark. Cepat, murni, tanpa limitasi harian.', //[cite: 3]
    url: 'https://dowti.vercel.app',
    // Ikon Download (SVG)
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`
  },
  {
    id: 'kombar',
    title: 'Kompresi Gambar',
    description: 'Kompres Ukuran Gambar. Ubah ukuran gambarmu menjadi lebih kecil secara cepat, murni, tanpa limitasi harian.', //
    url: 'https://kombar.vercel.app',
    // Ikon Minimize / Compress (SVG)
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"></path><path d="M21 8h-3a2 2 0 0 1-2-2V3"></path><path d="M3 16h3a2 2 0 0 1 2 2v3"></path><path d="M16 21v-3a2 2 0 0 1 2-2h3"></path></svg>`
  },
  {
    id: 'cvkita',
    title: 'Pembuat CV',
    description: 'Pembuat CV Praktis. Tersedia ATS dan Design, buat dengan cepat, murni, tanpa limitasi harian.', //
    url: 'https://cvkita.vercel.app',
    // Ikon File / User Resume (SVG)
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="12" cy="13" r="2"></circle><path d="M8 19c0-2.2 2-4 4-4s4 1.8 4 4"></path></svg>`
  }
];

// Fungsi render dengan staggered animation
function renderProjects() {
  const grid = document.getElementById('project-grid');

  const htmlContent = projects.map((project, index) => `
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="card card-enter" style="animation-delay: ${index * 0.15}s">
      <div class="card-content">
        <div class="card-header">
          <div class="card-icon">
            ${project.svg}
          </div>
          <div class="card-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
        <h2 class="card-title">${project.title}</h2>
        <p class="card-desc">${project.description}</p>
      </div>
    </a>
  `).join('');

  grid.innerHTML = htmlContent;
}

// Setel tahun
document.getElementById('year').textContent = new Date().getFullYear();

// Jalankan saat DOM siap
document.addEventListener('DOMContentLoaded', renderProjects);