//Bu sayfa kullanıcının yapacağı get isteklerini içeriyor
// Ayırmamın sebebi app.js çok karışmaması için  ~ Oğuzhan Bayrak
const express = require("express");
const router = express.Router();
const connection = require("../models/connection");

router.get("/", function(req, res) {
  res.render("anasayfa");
});
router.get("/kayit-ol", function(req, res) {
  res.render("kayıtOl");
});
router.get("/uye-giris", function(req, res) {
  res.render("uyeGiris");
});
router.get("/iletisim", function(req, res) {
  res.render("iletisim");
});
router.get("/hakkimizda", function(req, res) {
  res.render("hakkimizda");
});
router.get("/randevual", function(req, res) {
  res.render("randevual");
});
router.post("/randevual",function(req,res){
  var isim =req.body.rIsim;
  var email =req.body.rEmail;
  var telefon=req.body.rTel;
  var servis;
  
  var servisDeger=document.getElementById('servis').nodeValue;
  if(degerServis=="servisEvet")
  {
    servis=req.body.rServisEvet;
  }
  else
  {
    servis=req.body.rServisHayır;
  }
  var video;
  var videoDeger=document.getElementById("rVideo");
  if(videoDeger=="videoEvet")
  {
    video=req.body.rVideoEvet;
  }
  else
  {
    video=req.body.rServisHayır;
  }
  var hakem;
  var hakemDeger=document.getElementById("rhakem");
  if(hakemDeger=="hakemEvet")
  {
    hakem=req.body.rHakemEvet;
  }
  else
  {
    hakem=req.body.rHakemHayır;
  }

  var eksikOyuncu=req.body.rOyuncu;

  var odeme;
  var odemeDeger=document.getElementById("rOdeme");
  if(odemeDeger=="nakit")
  {
    odeme=req.body.rOdemeNakit;
    console.log(odeme);
  }
  else
  {
    odeme=req.body.rOdemeKart;
  }

  



  
});
router.get("/kayitli-randevular", function(req, res) {
  res.render("kayitli-randevular");
});
router.get("/randevu-guncelle", function(req, res) {
  res.render("randevu-guncelle");
});
router.get("/randevu-iptal", function(req, res) {
  res.render("randevu-iptal");
});
router.get("/dacik-saha", function(req, res) {
  res.render("dacik-saha");
});
router.get("/kapali-saha", function(req, res) {
  res.render("kapali-saha");
});
router.get("/isitmali-saha", function(req, res) {
  res.render("isitmali-saha");
});


router.get("/galeri", function(req, res) {
  res.render("galeri");

});
router.get("/google-kayit", function(req, res) {
  res.render("google-kayit");
})
router.get("/face-kayit", function(req, res) {
  res.render("face-kayit");
})
router.get("/2fa-giris", function(req, res) {
  res.render("2fa-giris");
})
router.get("/halisaha-degerlendirme", function(req, res) {
  res.render("halisaha-degerlendirme");
})
router.get("/profil-guncelle", function(req, res) {
  res.render("profil-guncelle");
})
router.get("/sosyalmedya", function(req, res) {
  res.render("sosyalmedya");
})

module.exports = router;