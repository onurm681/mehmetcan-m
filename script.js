document.getElementById("destekBtn").addEventListener("click", () => {
  document.getElementById("destekForm").style.display = "block";
});
document.getElementById("kapamaBtn").addEventListener("click", () => {
  document.getElementById("destekForm").style.display = "none";
});
document.getElementById("destekFormu").addEventListener("submit", async function(e) {
  e.preventDefault();
  const departman = document.getElementById("departman").value;
  const saat = document.getElementById("saat").value;
  const isim = document.getElementById("isim").value;
  const data = {
    content: "**Yeni Destek Talebi Geldi!**",
    embeds: [{
      title: "Destek Talebi",
      fields: [
        { name: "Departman", value: departman },
        { name: "Saat Aralığı", value: saat },
        { name: "Flört/Sevgili/Ex İsmi", value: isim },
        { name: "Admin Panel", value: window.location.origin + "/admin.html" }
      ]
    }]
  };
  // Webhook URL'sini buraya ekleyin
  const webhookURL = "https://discord.com/api/webhooks/1385662025077887176/A0gpxg7OIszxZhvrddcEAW6K7iUZf6Xq2sm6v_sfhi4T6gkXbPwuyYMPQaVNPZ4-gJT2";
  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const mevcut = JSON.parse(localStorage.getItem("destekTalepleri") || "[]");
  mevcut.push({ departman, saat, isim });
  localStorage.setItem("destekTalepleri", JSON.stringify(mevcut));
  alert("Form başarıyla gönderildi!");
  document.getElementById("destekForm").reset();
  document.getElementById("destekForm").style.display = "none";
});
