import viktor_vh from "./profile_images/-2eeywh.jpg";
import emma_vh from "./profile_images/FB_IMG_1658943311682.jpg";
import johan_vh from "./profile_images/FB_IMG_1658943483683.jpg";
import lukas_vh from "./profile_images/FB_IMG_1658943475599.jpg";
import nancy_ru from "./profile_images/FB_IMG_1658943552058.jpg";

export const children = [
  {
    id: 0,
    voornaam: "Johan",
    achternaam: "Van Hulle",
    geboortedatum: "13-11-2001",
    geboorteplaats: "Gent, België",
    Geslacht: "Man",
    Gehuwd: "Ongehuwd",
    foto: johan_vh,
    huwelijk: [
      {
        voornaam: "eerste",
        achternaam: "vrouw",
        kinderen: [
          {
            id: 4,
            voornaam: "Matthias",
            achternaam: "Van Hulle",
            geboortedatum: "13-11",
            geboorteplaats: "Gent, België",
            Geslacht: "Man",
            Gehuwd: "Ongehuwd",
            kind: true,
            huwelijk: [
              {
                id: 4,
                voornaam: "Emilie",
                achternaam: "Thant",
                kinderen: [
                  {
                    id: 4,
                    voornaam: "Nathan",
                    achternaam: "Van Hulle",
                  },
                  {
                    id: 4,
                    voornaam: "Lena",
                    achternaam: "Van Hulle",
                  },
                ],
              },
            ],
            kinderen: [
              {
                id: 4,
                voornaam: "Nathan",
                achternaam: "Van Hulle",
              },
              {
                id: 4,
                voornaam: "Lena",
                achternaam: "Van Hulle",
              },
            ],
          },
        ],
      },
      {
        voornaam: "Nancy",
        achternaam: "Rutsaert",
        foto: nancy_ru,
        kinderen: [
          {
            id: 1,
            voornaam: "Viktor",
            achternaam: "Van Hulle",
            geboortedatum: "13-11-2001",
            geboorteplaats: "Gent, België",
            Geslacht: "Man",
            Gehuwd: "Ongehuwd",
            kind: true,
            foto: viktor_vh,
          },
          {
            id: 2,
            voornaam: "Lukas",
            achternaam: "Van Hulle",
            geboortedatum: "13-06-2000",
            geboorteplaats: "Gent, België",
            Geslacht: "Man",
            Gehuwd: "Ongehuwd",
            kind: true,
            foto: lukas_vh,
          },
          {
            id: 3,
            voornaam: "Emma",
            achternaam: "Van Hulle",
            geboortedatum: "15-11-1996",
            geboorteplaats: "Gent, België",
            Geslacht: "Vrouw",
            Gehuwd: "Ongehuwd",
            kind: true,
            foto: emma_vh,
          },
        ],
      },
    ],
  },
];
