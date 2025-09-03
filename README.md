# Psí Útulek - React Aplikace

## Popis aplikace

Psí Útulek je webová aplikace vytvořená v Reactu pro správu psího útulku. Aplikace umožňuje správcům sledovat seznam psů, přidávat nové psy a spravovat zásoby útulku.

## Funkce

### Seznam psů
- Zobrazení všech psů v útulku v přehledné tabulce
- Informace o každém psovi: jméno, rasa, věk
- Možnost smazat psa z útulku

### Přidání nového psa
- Formulář pro zadání údajů o novém psovi
- Validace formuláře - všechny pole musí být vyplněna
- Automatické generování ID pro nového psa
- Kontrola dostatku zásob před přidáním

### Sklad útulku
- Přehled aktuálních zásob: granule (kg), vakcíny (ks), léky (ks)
- Možnost doplnit zásoby do skladu
- Automatické odečítání zásob při přidání nového psa
- Validace formuláře pro doplnění zásob

## Technické detaily

### Technologie
- **Frontend**: React 19.0.0
- **Styling**: Bootstrap 5.3.3, CSS
- **Build tool**: Vite 6.1.0
- **Package manager**: npm

### Struktura projektu
```
src/
├── components/
│   ├── FormularProPridani.jsx    # Formulář pro přidání psa
│   ├── FormularProPridani.css    # Styly formuláře
│   ├── SeznamPsu.jsx             # Komponenta pro zobrazení seznamu psů
│   └── SeznamPsu.css             # Styly seznamu psů
├── App.jsx                        # Hlavní komponenta aplikace
├── App.css                        # Hlavní styly
├── main.jsx                       # Vstupní bod aplikace
├── index.css                      # Základní styly
└── dogsData.json                 # Počáteční data psů
```

### Komponenty

#### App.jsx
Hlavní komponenta aplikace, která:
- Spravuje stav seznamu psů a zásob
- Obsahuje logiku pro přidávání a mazání psů
- Řídí přepínání mezi stránkami (seznam psů vs. sklad)
- Validuje dostatek zásob před přidáním psa

#### SeznamPsu.jsx
Komponenta pro zobrazení seznamu psů:
- Zobrazuje data v Bootstrap tabulce
- Obsahuje tlačítko pro smazání každého psa
- Responzivní design pro různé velikosti obrazovek

#### FormularProPridani.jsx
Formulář pro přidání nového psa:
- Pole pro jméno, rasu a věk
- Validace formuláře
- Automatické generování ID
- Responzivní layout

### Datový model

#### Pes
```json
{
  "id": 1,
  "name": "Rex",
  "breed": "smeták",
  "age": 7
}
```

#### Zásoby
```json
{
  "granule": 35,    // v kg
  "vakciny": 15,    // v kusech
  "leky": 25        // v kusech
}
```

### Logika aplikace

#### Přidání psa
- Kontrola dostatku zásob (5 kg granulí, 1 vakcína, 2 léky na psa)
- Automatické odečtení zásob z aktuálního stavu
- Upozornění při nedostatku zásob

#### Správa skladu
- Možnost doplnit zásoby pomocí formuláře
- Validace formuláře - alespoň jedno pole musí být vyplněno
- Okamžité aktualizace stavu zásob

## Instalace a spuštění

### Požadavky
- Node.js 18+ 
- npm

### Instalace
```bash
npm install
```

### Vývoj
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview buildu
```bash
npm run preview
```

## Autor

**Robin Lassak**

## Poznámka

Tato aplikace byla vytvořena jako celodenní školní cvičení v Reactu. Slouží jako demonstrace základních React konceptů jako jsou:
- Komponenty a jejich props
- State management pomocí useState
- Event handling
- Conditional rendering
- Formuláře a validace
- Responzivní design s Bootstrap

## Deployment

Aplikace je nastavena pro automatický deployment na webhosting Endora pomocí GitHub Actions. Při pushi na master větev se automaticky spustí build a deploy na FTP server.
