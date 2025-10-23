# 🎭 Playwright Test

## 📘 Opis
Ovaj projekt sadrži automatizirane end-to-end testove za aplikaciju  
[Baasic Photo Gallery Demo](https://demo.baasic.com/angular/starterkit-photo-gallery/main)  
Testovi su izrađeni korištenjem **Playwright** frameworka, organizirani prema Page Object Model (POM) strukturi.

---

## ⚙️ Korišteni Framework 
- **Playwright** 

---

## 🧭 Upute za pokretanje testova

1. **Preuzmi projekt**
   - Preuzmi GitHub repozitorij **Mono** i otvori ga u **Visual Studio Code**.

2. **Pozicioniraj se na testove**
   - U VS Code-u otvori folder  **`Mono`** koji sadrži sve test datoteke.

3. **Pokreni terminal**
   - Otvori integrirani terminal (`Ctrl + ~` ili *View → Terminal*).

4. **Pokreni Playwright UI**
   - U terminal upiši naredbu:
     ```bash
     npx playwright test --ui
     ```
   - Nakon nekoliko sekundi otvorit će se **Playwright Test Runner UI**.

5. **Pokretanje testova**
   - U Playwright sučelju prikazat će se svi testovi:
     - **albums**
     - **search**
     - **login**
     - **photos**
   - Svaki test pokreni zasebno klikom na ▶️ (Run).

---

## ✅ Pokriveno testovima

| Modul  | Opis funkcionalnosti                                                                 |
|---------|--------------------------------------------------------------------------------------|
| **Login** | Pozitivan i negativan scenarij prijave korisnika s ispravnim i neispravnim podacima.                        |
| **Albums** | Kreiranje novog albuma i provjera da se ispravno prikazuje u galeriji.           |
| **Search** | Pretraga pojma (npr. “cat”), otvaranje i zatvaranje slike iz rezultata.          |
| **Photos** | Otvaranje fotografije iz profila, pregled i zatvaranje slike.         |

---

## 💡 Napomena
- Testove je moguće pokrenuti i iz komandne linije (bez UI-a):
  ```bash
  npx playwright test
