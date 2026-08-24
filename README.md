# 🏁 ATX Motorsport — Site Web

Site officiel de la communauté **ATX Motorsport**, dédiée à *Assetto Corsa Competizione*.
Site statique (HTML / CSS / JS, sans framework), hébergé via **GitHub Pages**.

🔗 Site en ligne : *[à compléter une fois l'URL GitHub Pages activée]*

---

## 🛠️ Stack technique

- **HTML5 / CSS3** — pas de framework, pas de build
- **JavaScript vanilla** — un seul fichier `main.js`
- **Font Awesome 6.5.2** (CDN) — icônes
- **Google Fonts** — Orbitron (titres) / Inter (texte courant)
- **Hébergement** : GitHub Pages

Aucune installation n'est nécessaire : le site fonctionne en ouvrant directement les fichiers `.html`,
ou via l'extension VS Code **Live Server** pour un rendu plus proche de la production.

---

## 📁 Structure du projet

```
ATX-Motorsport/
├── index.html              Accueil
├── apropos.html             À propos
├── course.html               Championnats (GT3 / Endurance / Porsche Cup)
├── livrees.html              Galerie des livrées + lien de téléchargement
├── recrutement.html          Page recrutement
├── header.html               ⚠️ Référence à copier-coller (voir plus bas)
├── footer.html               ⚠️ Référence à copier-coller (voir plus bas)
│
├── assets/
│   ├── css/
│   │   ├── style.css         Styles globaux (variables, typographie, composants communs)
│   │   ├── header.css        Header + navigation
│   │   ├── footer.css        Footer
│   │   ├── course.css        Onglets et tableaux de la page Championnats
│   │   └── livrees.css       Galerie et lightbox de la page Livrées
│   │
│   ├── js/
│   │   └── main.js           Scroll header, menu mobile, onglets championnats, lightbox livrées
│   │
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   │   ├── logo/
│   │   ├── livrees/           Photos des livrées de l'équipe
│   │   ├── backgrounds/
│   │   └── voitures/
│   └── videos/
│
└── README.md
```

---

## 🧩 Comment ajouter une nouvelle page

Le site n'utilise **pas** de système d'inclusion (pas de Jekyll, pas de framework) : le header et le
footer sont dupliqués manuellement dans chaque page. Pour créer une nouvelle page :

1. Copier une page existante proche du besoin (ex. `apropos.html`) comme point de départ.
2. Remplacer le `<header>...</header>` par le contenu de **`header.html`**.
3. Remplacer le `<footer>...</footer>` par le contenu de **`footer.html`**.
4. Adapter le `<title>` et la balise `<meta name="description">`.
5. Ajouter le lien vers la nouvelle page dans la barre de navigation (`.nav-links`) de **toutes**
   les pages existantes, y compris `header.html`.

⚠️ Si vous modifiez le header ou le footer (nouveau bouton, nouveau lien...), il faut répercuter
le changement **manuellement sur chaque page**, `header.html`/`footer.html` ne sont que des fichiers
de référence, pas des fichiers réellement inclus.

---

## 🚀 Déploiement (GitHub Pages)

1. `Settings` → `Pages` sur le dépôt GitHub.
2. Source : branche `main`, dossier `/root`.
3. Le site est disponible à l'URL `https://<utilisateur>.github.io/<repo>/`.

Chaque `git push` sur la branche configurée met à jour le site en quelques minutes.

---

## ✅ À vérifier avant mise en ligne publique

- [ ] Confirmer l'adresse e-mail de contact utilisée dans les footers (`athoxmotorsport@gmail.com`)
- [ ] Vérifier que le lien Discord (`discord.gg/Vk4SD4nhbj`) est bien celui à afficher publiquement
- [ ] Renommer `banniere-site.png` si un usage futur est prévu (actuellement non utilisée sur le site)
- [ ] Compléter la page `course.html` si des sections ont été volontairement omises (setup homologué détaillé, protocole podium, etc.)
- [ ] Ajouter l'URL GitHub Pages une fois activée, en haut de ce README

---

## 📄 Licence

© 2026 ATX Motorsport — Tous droits réservés.