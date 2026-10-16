# PetNest - Animalerie en Ligne 

Bienvenue sur le dépôt du projet **PetNest**. Ce projet consiste à développer une plateforme e-commerce et communautaire pour une animalerie en ligne (vente de produits, adoption responsable et réservation de services). Le site a été conçu en équipe dans le cadre d'un sprint de 5 jours, en suivant une approche *mobile-first*, en respectant les normes d'accessibilité (WCAG) et en s'appuyant sur un Design System via Tailwind CSS.

## Démo en ligne & Gestion de projet

Vous pouvez consulter les liens du projet ci-dessous :
- **Voir le site en ligne :** [[Lien de project](https://petnest-two.vercel.app/)]
- **Voir la planification (GitHub Projects) :** [[Lien vers le tableau Kanban / Backlog](https://github.com/users/abdellaheltrach/projects/13)]

## Sommaire

- À propos du projet
- Arborescence du site
- Fonctionnalités & Points forts
- Technologies utilisées
- Structure des fichiers
- Méthodologie & Travail d'équipe (Git Flow)
- Respect des normes, Accessibilité & SEO
- Auteur / Équipe

---

## À propos du projet

PetNest réunit en un seul endroit la vente de produits pour animaux, un espace d'adoption responsable et un module de réservation de services. L'objectif était de transformer une maquette Figma en un site statique hautement interactif, responsive, accessible et fidèle aux principes d'UI/UX.

### Contexte & Organisation :
- **Analyse & Planification :** Découpage de la maquette en composants, identification des tokens du Design System (couleurs, typographies, espacements) et création des *User Stories* (Backlog sur GitHub Projects).
- **Collaboration :** Utilisation de **Git Flow** (`main`, `develop`, branches `feature/*`) avec validation par *Pull Requests* relues et fusionnées en équipe.

---

## Arborescence du site

Le site est composé des 5 pages principales suivantes :

1. **Accueil (`index.html`) :** Hero en carrousel, présentation des produits vedettes, animaux à adopter, marques partenaires et newsletter.
2. **Catalogue (`catalogue.html`) :** Grille de produits, système de filtrage par animal et tri par prix, gestion des ruptures de stock et pagination statique.
3. **Détail produit (`produit.html`) :** Galerie d'images (principale et vignettes), informations détaillées, gestion des quantités, ajout au panier et système d'onglets (description/avis) avec formulaire d'avis.
4. **Adoption (`adoption.html`) :** Bandeau de sensibilisation, grille des animaux à adopter, fiches détaillées et formulaire de demande d'adoption validé.
5. **Services et contact (`services.html`) :** Présentation des services et tarifs en grille, FAQ interactive en accordéon, formulaire de rendez-vous et section de contact (coordonnées, carte, réseaux sociaux).

---

## Fonctionnalités & Points forts

- **Mobile-First & Responsive Design :** Intégration fluide adaptée à tous les écrans (Mobile < 768px, Tablette 768px - 1023px, Ordinateur ≥ 1024px).
- **Interactions JavaScript :** Carrousel dynamique, accordéon pour la FAQ, gestion des onglets et manipulation des classes (`classList`, `data-attributes`).
- **Accessibilité (WCAG) :** Utilisation d'attributs ARIA (`role="tablist"`, `aria-selected`, `aria-expanded`, `aria-invalid`), structure de titres hiérarchisée (un seul `<h1>` par page) et association rigoureuse des labels aux champs de formulaires.
- **Formulaires sécurisés et ergonomiques :** Champs de saisie contrôlés avec gestion des erreurs et messages de confirmation.

---

## Structure des fichiers

```text
petnest/
│
├── index.html            # Page d'accueil
├── catalogue.html        # Page catalogue des produits
├── produit.html          # Page détail d'un produit
├── adoption.html         # Page dédiée à l'adoption
├── services.html         # Page des services et contact
│
├── css/
│   ├── output.css        # Fichier CSS compilé (Tailwind CSS)
│   └── input.css         # Fichier source Tailwind / styles personnalisés
│
├── js/
│   ├── main.js           # Script principal / global
│   ├── carrousel.js      # Gestion du carrousel (Accueil)
│   ├── onglets.js        # Gestion des onglets (Détail produit)
│   └── accordion.js      # Gestion de la FAQ (Services)
│
├── assets/               # Images, icônes et polices
│   └── images/
│
├── tailwind.config.js    # Configuration du Design System Tailwind
└── README.md             # Présentation du projet
