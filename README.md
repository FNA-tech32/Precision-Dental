# Precision Dental — Clinique Dentaire de Haute Précision

> Site web moderne, performant et conforme aux normes RGPD pour la clinique dentaire **Precision Dental**, située au Mans (Sarthe, France).

---

## 🌟 Présentation du Projet

**Precision Dental** est une vitrine web haut de gamme conçue pour une clinique dentaire d'excellence. Développée avec les dernières technologies du web (**Next.js 16 App Router**, **React 19**, **Tailwind CSS v4** et **Framer Motion**), l'application offre une expérience patient fluide, rassurante et interactive, du premier contact jusqu'à la prise de rendez-vous.

Le site intègre une conformité juridique complète (**RGPD / e-Privacy**), des données structurées pour le référencement local (**Schema.org LocalBusiness / Dentist**), ainsi qu'une palette complète de canaux de contact directs et alternatifs.

---

## ✨ Fonctionnalités Clés

- **📱 Design Réactif & Expérience Utilisateur Premium** :
  - Navigation ergonomique avec barre d'en-tête translucide (*backdrop-blur*) et menu mobile fluide.
  - Animations délicates et immersives orchestrées avec *Framer Motion*.
  - Typographies modernes *Plus Jakarta Sans* et *Inter* pour une lisibilité clinique irréprochable.

- **🦷 Catalogue des Soins & Traitements** :
  - Fiches détaillées : Prévention & Détartrage, Orthodontie invisible, Implants dentaires guidés 3D, Blanchiment dentaire professionnel, Endodontie sous microscope, Odontologie pédiatrique.
  - Accordéons interactifs présentant les bénéfices de chaque traitement.

- **📅 Prise de Rendez-vous & Formulaire Intelligent** :
  - Formulaire de demande de première consultation avec validation instantanée (nom, téléphone français, e-mail, motif).
  - Retour visuel immédiat avec confirmation de prise en charge sous 24h ouvrées.

- **💬 Intégration WhatsApp Direct** :
  - Bouton flottant permanent en bas à droite pour engager un dialogue rapide avec l'équipe soignante ou la permanence d'urgence.

- **👨‍⚕️ Présentation de l'Équipe Médicale & Parcours Patient** :
  - Profils des praticiens spécialistes (chirurgiens-dentistes, orthodontistes, pédodontistes).
  - Déroulé clair en 4 étapes du parcours de soin (Bilan 3D, Plan sur-mesure, Réalisation indolore, Suivi préventif).

- **⭐ Avis Patients & Accordéon FAQ** :
  - Témoignages certifiés avec notation par étoiles.
  - Foire aux questions dynamique répondant aux interrogations tarifaires, mutuelles, financements et urgences.

- **⚖️ Conformité RGPD Complète (Droit Français)** :
  - Pages légales dédiées : [Mentions Légales](/mentions-legales), [Politique de Confidentialité](/politique-confidentialite), [Politique de Cookies](/cookies).
  - Consentement explicite sur les formulaires de collecte.

- **🚀 Optimisation SEO & Référencement Local** :
  - Métadonnées OpenGraph et Twitter Cards dynamiques.
  - Balisage sémantique Schema.org JSON-LD (`Dentist`, `MedicalBusiness`, `LocalBusiness`) avec coordonnées géographiques, horaires et points de contact.
  - Fichiers `sitemap.xml`, `robots.txt` et `manifest.webmanifest` intégrés.

---

## 📞 Coordonnées & Canaux de Contact

Le cabinet met à disposition des patients plusieurs canaux de communication directs et alternatifs :

| Canal | Détails & Coordonnées | Utilisation / Disponibilité |
| :--- | :--- | :--- |
| **Marque / Clinique** | **Precision Dental** | Clinique dentaire de haute précision |
| **Ligne Principale (Accueil)** | [**+33 2 43 28 85 90**](tel:+33243288590) | Accueil téléphonique, prises de rendez-vous standards |
| **Ligne Alternative & Urgences** | [**+33 6 45 89 12 34**](tel:+33645891234) | Ligne mobile directe, urgences dentaires, permanence |
| **WhatsApp Officiel** | [**Écrire sur WhatsApp**](https://wa.me/33645891234) | Échanges rapides, envois de photos / devis, permanence weekend |
| **E-mail Principal** | [**contact@precisiondental.fr**](mailto:contact@precisiondental.fr) | Demandes d'informations générales, secrétariat |
| **E-mail Alternatif (RDV & Devis)** | [**rdv@precisiondental.fr**](mailto:rdv@precisiondental.fr) | Gestion des devis, plannings et télétransmission |
| **Adresse Physique** | **28 Boulevard René Levasseur, 72000 Le Mans, France** | Situé en plein centre-ville |
| **Accès & Transports** | Tramway T1 / T2 (*Arrêt République / Préfecture*) | Parking public souterrain République à 50 mètres |

### Horaires d'Ouverture

- **Lundi à Vendredi** : 08h30 – 13h00 et 14h00 – 19h30
- **Samedis** : 09h00 – 14h00 (*Consultations programmées & Urgences*)
- **Dimanches & Jours fériés** : Fermé (*Permanence d'orientation assurée via WhatsApp*)

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
- **Bibliothèque UI** : [React 19](https://react.dev/)
- **Langage** : [TypeScript 5](https://www.typescriptlang.org/) (Mode strict activé)
- **Feuilles de style** : [Tailwind CSS v4](https://tailwindcss.com/) avec `@tailwindcss/postcss`
- **Animations** : [Framer Motion 12](https://motion.dev/)
- **Iconographie** : [Lucide React](https://lucide.dev/)
- **Polices** : Google Fonts (*Plus Jakarta Sans* pour les titres, *Inter* pour le corps)

---

## 📁 Architecture du Projet

```text
├── app/
│   ├── layout.tsx                     # Layout racine, polices, métadonnées globales & Schema.org
│   ├── page.tsx                       # Page d'accueil assemblant toutes les sections
│   ├── globals.css                    # Directives Tailwind CSS v4 & styles globaux
│   ├── sitemap.ts                     # Générateur de plan de site sitemap.xml
│   ├── robots.ts                      # Configuration des règles de crawl pour les moteurs de recherche
│   ├── manifest.ts                    # Manifest PWA / Web App
│   ├── icon.tsx / apple-icon.tsx      # Favicons vectoriels dynamiques (Next.js ImageResponse)
│   ├── mentions-legales/page.tsx      # Page mentions légales conforme LCEN
│   ├── politique-confidentialite/page.tsx # Page RGPD conforme CNIL / UE
│   └── cookies/page.tsx               # Information et gestion des cookies
├── components/
│   ├── layout/                        # Header, Footer, Logo, MobileMenu
│   ├── legal/                         # LegalLayout pour les pages juridiques
│   ├── ui/                            # Boutons, Conteneurs, FormField, SectionHeading, etc.
│   ├── icons/                         # BrandIcons (Facebook, Instagram, WhatsApp) & ToothIcon
│   └── whatsapp-button.tsx            # Bouton d'accès rapide WhatsApp flottant
├── sections/
│   ├── hero.tsx                       # Section Hero avec statistiques et CTA
│   ├── services.tsx                   # Grille des 6 domaines de soins dentaires
│   ├── benefits.tsx                   # Section "Pourquoi nous choisir" & imagerie technologique
│   ├── team.tsx                       # Présentation des praticiens
│   ├── process.tsx                    # Les 4 étapes du parcours de soin
│   ├── testimonials.tsx               # Retours d'expérience et notes patients
│   ├── cta-banner.tsx                 # Bannière d'incitation à la prise de rendez-vous
│   ├── faq.tsx                        # Accordéon de questions récurrentes
│   └── contact.tsx                    # Formulaire de réservation & carte Google Maps
├── lib/
│   ├── site-config.ts                 # Source unique de vérité (noms, téléphones, adresses, liens)
│   ├── schema.ts                      # Générateur Schema.org JSON-LD (Dentist / LocalBusiness)
│   ├── utils.ts                       # Utilitaire clsx / tailwind-merge
│   └── data/                          # Données structurées (services, équipe, avis, faq, étapes)
├── types/
│   └── index.ts                       # Définitions des types TypeScript
├── public/
│   └── images/                        # Photographies cliniques et portraits de l'équipe
├── package.json
└── tsconfig.json
```

---

## 🚀 Installation & Lancement Local

### Prérequis

- [Node.js](https://nodejs.org/) version 18.18+ ou 20+
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### Instructions

1. **Cloner ou naviguer dans le répertoire du projet** :
   ```bash
   cd "Precision Dental"
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

4. **Vérifier le typage et le code (Lint)** :
   ```bash
   npm run lint
   ```

5. **Compiler pour la production** :
   ```bash
   npm run build
   npm run start
   ```

---

## ⚙️ Personnalisation Simple (`lib/site-config.ts`)

Pour modifier les informations de l'établissement (numéros de téléphone, e-mails, adresse, horaires d'ouverture ou liens de réseaux sociaux), il suffit d'éditer le fichier central [`lib/site-config.ts`](file:///c:/Users/QBS%20Accounting/Documents/websites/Precision%20Dental/lib/site-config.ts). Tous les composants, en-têtes, pieds de page, formulaires et balises SEO se mettront à jour automatiquement.

---

## 📄 Licence & Droits

© 2026 **Precision Dental**. Tous droits réservés.
Ce projet est optimisé pour être déployé directement sur [Vercel](https://vercel.com/) ou tout environnement d'hébergement Node.js / Docker.
