# Telia Lightweight AI – prototypprojekt

Snabba, klickbara prototyper i Telias visuella stil. Byggda med [Astro](https://astro.build), HTML och CSS.

- `/` – startsida som listar alla sidor i projektet
- `/components` – visuellt galleri över alla komponenter

Regler för hur projektet ska byggas vidare står i [CLAUDE.md](CLAUDE.md).

---

## Krav

| Verktyg | Version | Kommentar |
|---|---|---|
| Node.js | **22.23.4 eller senare** (rekommenderat: 24) | Krävs av Astro 7. Versionen står i `.nvmrc`. |
| npm | 9.6.5 eller senare | Följer med Node.js. |
| Git | valfri | Behövs bara om projektet hämtas via Git. |
| Claude Code | senaste | Valfritt, för att bygga vidare med AI. |

---

## Manuell installation (för människor)

### 1. Hämta projektet

Kopiera projektmappen till datorn, eller klona den om den ligger i ett Git-repo:

```sh
git clone <repo-url> telia-lightweight-ai
cd telia-lightweight-ai
```

Kopiera **inte** med mapparna `node_modules/`, `dist/` och `.astro/`. De skapas på nytt i steg 3.

### 2. Installera Node.js

**macOS** (med [Homebrew](https://brew.sh)):

```sh
# Installera Homebrew om det saknas
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Installera nvm och sedan Node enligt .nvmrc
brew install nvm
mkdir -p ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"; . "$(brew --prefix nvm)/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
nvm install
nvm use
```

**Windows:** installera Node.js 24 LTS från [nodejs.org](https://nodejs.org) eller kör `winget install OpenJS.NodeJS.LTS`. Starta sedan om terminalen.

**Linux:** installera [nvm](https://github.com/nvm-sh/nvm) och kör `nvm install && nvm use` i projektmappen.

Kontrollera installationen:

```sh
node -v   # ska visa v22.23.4 eller senare
npm -v
```

### 3. Installera beroenden

Kör i projektmappen:

```sh
npm install
```

### 4. Starta utvecklingsservern

```sh
npm run dev
```

Öppna sedan <http://localhost:4321>.

### 5. (Valfritt) Installera Claude Code

```sh
npm install -g @anthropic-ai/claude-code
claude
```

Kör `claude` i projektmappen. Claude Code läser `CLAUDE.md` automatiskt och följer projektets regler.

---

## Kommandon

| Kommando | Gör |
|---|---|
| `npm run dev` | Startar utvecklingsservern på <http://localhost:4321> |
| `npm run build` | Bygger en statisk version till `dist/` |
| `npm run preview` | Visar det byggda resultatet lokalt |

---

## Projektstruktur

```text
telia-lightweight-ai/
├── CLAUDE.md              Regler för hur projektet byggs vidare (läses av AI)
├── README.md              Den här filen
├── .nvmrc                 Node-version
├── package.json
├── astro.config.mjs
├── assets/                Bilder som användaren lägger till och hänvisar till
└── src/
    ├── assets/            Ikoner, logotyper, flaggor, betalmetoder och typsnitt (TeliaSans)
    ├── components/        Återanvändbara komponenter (Button, Input, …)
    ├── layouts/           Layout.astro – sidmall som alla sidor använder
    ├── pages/             En fil = en sida. index.astro listar alla sidor automatiskt.
    └── styles/            tokens.css (Purpur-tokens) och global.css
```

### Lägga till en ny sida

Skapa en fil i `src/pages/`, till exempel `src/pages/kassa.astro`:

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Kassa – Telia prototyp" description="Kort beskrivning av sidan.">
  <main>…</main>
</Layout>
```

Sidan dyker automatiskt upp på startsidan. Namnet i listan är delen av `title` före " – ".

---

## Felsökning

| Problem | Lösning |
|---|---|
| `npm install` klagar på Node-version | Kör `nvm install && nvm use` eller uppgradera Node till 22.23.4 eller senare. |
| `command not found: npm` | Node är inte installerat eller terminalen behöver startas om. |
| Port 4321 är upptagen | Kör `npm run dev -- --port 4322`. |
| Typsnittet ser fel ut | Kontrollera att `src/assets/fonts/` innehåller TeliaSans-filerna (`.woff2`). |

---

## Instruktioner för AI-agenter

> Den här sektionen är skriven för en AI-agent, till exempel Claude Code, som ska sätta upp projektet på en ny dator där inget är installerat. Kör stegen i ordning. Kontrollera varje steg innan du går vidare. Fråga användaren innan du installerar något globalt eller kör `sudo`.

**Mål:** projektet ska köras med `npm run dev`, och <http://localhost:4321/> ska svara med HTTP 200.

1. **Identifiera operativsystemet** med `uname -s` (macOS/Linux) eller `$env:OS` (Windows PowerShell).
2. **Kontrollera Node.js** med `node -v`.
   - Om Node saknas eller är äldre än `v22.23.4`, installera Node enligt `.nvmrc`:
     - macOS: kontrollera `brew -v`. Installera Homebrew om det saknas (be användaren bekräfta). Kör sedan `brew install nvm`, konfigurera `NVM_DIR` i `~/.zshrc` enligt avsnittet ovan och kör `nvm install && nvm use`. Alternativt kan du köra `brew install node@24` och lägga det i PATH.
     - Linux: installera nvm via det officiella installationsskriptet från github.com/nvm-sh/nvm och kör sedan `nvm install && nvm use`.
     - Windows: `winget install OpenJS.NodeJS.LTS`.
   - Kontrollera igen med `node -v`.
3. **Gå till projektroten**, alltså mappen som innehåller `package.json` och `CLAUDE.md`.
4. **Ta bort gamla byggfiler** om de har kopierats från en annan dator: `rm -rf node_modules dist .astro`.
5. **Installera beroenden** med `npm install`. Rapportera eventuella fel ordagrant till användaren.
6. **Kontrollera att nödvändiga mappar finns:**
   - `src/assets/fonts/` ska innehålla TeliaSans-filerna (`*.woff2`). Om de saknas: meddela användaren. Skapa inte ersättningsfiler.
   - `assets/` i projektroten: skapa den med `mkdir -p assets` om den saknas.
7. **Starta och verifiera:**
   - Starta `npm run dev` i bakgrunden.
   - Vänta tills `curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/` returnerar `200`.
   - Kontrollera även `/components` på samma sätt.
8. **Rapportera** till användaren: Node-version, om installationen lyckades, URL:en till utvecklingsservern och eventuella fel.
9. **Innan du bygger något nytt:** läs [CLAUDE.md](CLAUDE.md) och följ reglerna där.

**Kända problem:** `npm run build` kan misslyckas om en sida importerar en bild som inte finns i `src/assets/`. Felet visar vilken fil och rad det gäller. Rapportera det till användaren i stället för att ta bort importen.
