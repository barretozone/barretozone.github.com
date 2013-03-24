// Icons used into the markers options
var marka = new google.maps.MarkerImage(
  '/theme/images/gmaps/photo.png',
  new google.maps.Size(32,37),
  new google.maps.Point(0,0),
  new google.maps.Point(16,37)
);
var marka2 = new google.maps.MarkerImage(
  '/theme/images/gmaps/m_vint1.png',
  new google.maps.Size(59,50),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var marka3 = new google.maps.MarkerImage(
  '/theme/images/gmaps/marker-images/praktiker.png',
  new google.maps.Size(59,50),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

// markers definition list
var list = [
  { address : "67 Avenue de Nice, Antibes, France", 
    data: { 
      type: "magaza",
      magazaID:1, 
      magazaGrubuID:1, 
      adi: "Media Markt Ankara Çankaya", 
      adres: "Kentpark AVM Mustafa Kemal Mah. No:164 Eskişehir Yolu Çankaya 06520 Ankara", 
      bilgi: "Hergün 10:00 - 23:00 saatleri arasında hizmet vermektedir", 
      logo: "mediamarkt.png",
      brosurID:141, 
      brosur: "/theme/images/gmaps/noBrochure.png" 
    }, 
    options: { 
      icon: marka
    } 
  },
  { address : "route des lucioles, Sophia-Antipolis, France", 
    data: { 
      type: "magaza", 
      magazaID:1,
      magazaGrubuID:1,
      adi: "Media Markt Ankara Eryaman", 
      adres: "Optimum Outlet ve Eğlence Merkezi Eryaman Ayaş Yolu No: 93/208 Etimesgut 06930 Ankara", 
      bilgi: "Hergün 10:00 - 23:00 saatleri arasında hizmet vermektedir", 
      logo: "mediamarkt.png", 
      brosurID:141, 
      brosurID:141,
      brosur: "/theme/images/gmaps/noBrochure.png" 
    }, 
    options: { 
      icon: marka
    } 
  },
  { address : "5464 Economos, Guadalajara, Mexico",
    data: {
      type: "magaza",
      magazaID:1, 
      magazaGrubuID:1,
      adi: "Guadalajara, Mexico", 
      adres: "Forum Ankara Outlet Yozgat Bulvarı No:99 Ovacık Mevkii Etlik Keçiören 06110 Ankara ", 
      bilgi: "Hergün 10:00 - 23:00 saatleri arasında hizmet vermektedir", 
      logo: "mediamarkt.png",
      brosurID:141, 
      brosur: "/theme/images/gmaps/noBrochure.png" 
    }, 
    options: { 
      icon: marka 
    } 
  },
  { address : "Tlachihualtepetl, Puebla, Mexico",
    data: {
      type: "magaza",
      magazaID:1, 
      magazaGrubuID:1,
      adi: "Cholula, Mexico", 
      adres: "Tlachihualtepetl Cerro Hecho a mano : La piramide mas grande de America", 
      bilgi: "Enero 2012",
      brosurID: "https://picasaweb.google.com/115519843718865582152/AntibesHome02", 
      brosur: "/theme/images/thumbs/marseille_small.jpg" 
    }, 
    options: { 
      icon: marka 
    } 
  },
  { lat: 39.910460, 
    lng: 32.778241, 
    data: {
      type: "magaza",
      magazaID:1,
      magazaGrubuID:1, 
      adi: "Bauhaus Cepa", 
      adres: "Cepa Alışveriş Merkezi Eskişehir Yolu 7. km 06520 Söğütözü / Ankara", 
      bilgi: "Hergün 10:00 - 23:00 saatleri arasında hizmet vermektedir", 
      logo: "bauhaus.png",
      brosurID:141, 
      brosur: "/theme/images/gmaps/noBrochure.png" 
    }, 
    options: { 
      icon: marka2 
    } 
  },
  { lat: 40.019029, 
    lng: 32.821795, 
    data: {
      type: "magaza",
        magazaID:1,
        magazaGrubuID:1, 
        adi: "Bauhaus Etlik", 
        adres: "Forum Alışveriş Merkezi Yozgat Bulvarı NO:99 Ovacık Mevkii 06170 Etlik-Keçiören / Ankara", 
        bilgi: "Hergün 10:00 - 23:00 saatleri arasında hizmet vermektedir", 
        logo: "bauhaus.png",
        brosurID:141, 
        brosur: "/theme/images/gmaps/noBrochure.png" 
      }, 
    options: { 
      icon: marka2 
    } 
  },
  { lat: 39.883586, 
    lng: 32.758961, 
    data: {
      type: "magaza", 
      magazaID:1, 
      magazaGrubuID:1,
      adi: "ANKARA BİLKENT PRAKTİKER", 
      adres: "Bilkent Center Eskişehir Yolu 8.km Bilkent / Ankara", 
      bilgi: "Hergün 10:00 - 22:00 saatleri arasında hizmet vermektedir", 
      brosur: "/theme/images/thumbs/marseille_small.jpg" 
    }, 
    options: { 
      icon: marka3 
    } 
  },
  { lat: 39.971727, 
    lng: 32.823372, 
    data: {
      type: "magaza",magazaID:1,
      magazaGrubuID:1, 
      adi: "ANKARA ETLİK PRAKTİKER", 
      adres: " Halil Sezai Erkut Caddesi, Afra Sokak, 1/A Etlik / Ankara", 
      bilgi: "Hergün 10:00 - 22:00 saatleri arasında hizmet vermektedir", 
      logo: "praktiker.png", 
      brosurID:141,
      brosur: "/theme/images/gmaps/noBrochure.png" 
    }, 
    options: { 
      icon: marka3 
    } 
  }
];