document.addEventListener("DOMContentLoaded", () => {
  const liste = document.getElementById("formListesi");
  const veriler = JSON.parse(localStorage.getItem("destekTalepleri") || "[]");
  if (veriler.length === 0) {
    liste.innerHTML = "<li>Henüz destek formu gönderilmedi.</li>";
    return;
  }
  veriler.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>#${i+1}</strong> - Departman: ${item.departman} | Saat: ${item.saat} | İsim: ${item.isim}`;
    liste.appendChild(li);
  });
});
