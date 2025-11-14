// Navigasi antar menu
const navButtons = document.querySelectorAll('.nav button');
const pages = document.querySelectorAll('.page');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    pages.forEach(p => {
      p.classList.remove('active');
      if (p.id === target) {
        setTimeout(() => p.classList.add('active'), 200);
      }
    });
    navButtons.forEach(b => b.classList.toggle('active', b === btn));
  });
});

// Data Sertifikat
const certData = {
  aguna: [
    "assets/certificates/Aguna Corse/Certificate aguna1.jpg",
    "assets/certificates/Aguna Corse/Cerficate Aguna Corse 2.jpg",
    "assets/certificates/Aguna Corse/Cerficate Aguna Corse 3.jpg",
    "assets/certificates/Aguna Corse/Certificate Aguna Corse 4.jpg",
    "assets/certificates/Aguna Corse/Certificate Agua Corse 5.jpg"
  ],
  fortinet: [
    "assets/certificates/Fortinet/Certificate Fortinet 1.jpg",
    "assets/certificates/Fortinet/Certificate Fortinet 2.jpg"
  ],
  idn: [
    "assets/certificates/IDN/Certificate IDN 1.jpg",
    "assets/certificates/IDN/Certificate IDN 2.jpg"
  ],
  linkedin: [
    "assets/certificates/Linkedin/certificate linkedin1.jpg"
  ]
};

const certTabs = document.querySelectorAll('#cert-tabs .btn');
const certGrid = document.getElementById('cert-grid');

function loadCertificates(type) {
  certGrid.classList.remove('show');
  setTimeout(() => {
    certGrid.innerHTML = certData[type]
      .map(src => `<div class="cert"><img src="${src}" alt="${type}"></div>`)
      .join('');
    certTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.cert === type));
    certGrid.classList.add('show');
  }, 300);
}

certTabs.forEach(btn => btn.addEventListener('click', () => loadCertificates(btn.dataset.cert)));
window.addEventListener('load', () => loadCertificates('aguna'));
