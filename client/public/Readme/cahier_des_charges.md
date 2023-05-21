# Application e-commerce
---------------------------------------------------------------
Cible de l'application : ados, jeunes adultes, adultes, les vieux

*Langages utilisés*

> HTML/CSS
> Javascript
> JSX
> SQL

*Outils nécessaires*

> Base de données : MySQL, gestion --> phpMyAdmin et Wampserver, Mocodo -> MCD
> Back-end : Node js
> Front-end : React
> Git
> WebStorage

*Modules/librairies à utiliser*

**>Back-end :**

> Mysql2 -> module de gestion de base de données//
> Express -> framework pour gérer les routes//
> Bcrypt -> cryptage des mots de passes
> UUID -> Pour gérer l'id unique lors de la création d'un produit //
> Nodemon -> Pour un watcher en mode développement//
> Dotenv -> accès aux variables d'environnement//
> express-session -> sessions connectées
> formidable -> formulaires

**>Front-end :**

> react //
> react-dom // 
> react-router-dom //
> redux
> react-font-awesome
> fontawesome@svg-core
> fortawesome/free-solid-svg-icons
> fontawesome/free-regular-svg-icons
> normalize.css


**Fonctionnalités** : 
                  - Fichier de thés en JSON : 
                        > Qu'est-ce qu'un thé ?
                            > id, title, content, photo, price, category, stock, poids, customer, user(admin), orders, date d'ajout du produit

                  - Listing de produits (nouveauté -> date de première vente, best-seller -> le plus vendu, favori -> choisi par l'admin ou le thé ayant les avis les plus +++), slider, routage lien vers détail thé sur la page Home (fetch API), affichage des prix en calculant le minimum, sous-menu catégories /category/:id

                  - Listing des produits et routage lien vers détail dans la page thés /thés (fetch API)

                  - Accès au détail d'un produit, sélection du poids par le client, sélection de la quantité désirée par le client, bouton ajouter au panier -> form envois des données à la liste du panier sur la page thés/detail/:id (fetch API) (routage vers panier post et affichage texte si rupture de stock)

                  - Listing des produits ajoutés avec infos sur quantité choisie par le client, le nom du thé, le prix pour chaque produit, le prix total sans les frais de port (bouton validation du panier post form) dans la page panier /basket

                  - header principale : changement d'état du prix total avec une fonction

                  - Une page Admin avec un menu latéral (nav) qui affiche chaque fonctionnalité sélectionnée et un formulaire de connexion (accès via cet url /admin) : 

                    1. Thés
                        + Liste de tous les thés :

                            1. Affichage d'un thé  'R' -> read
                            2. Modifier les infos du thé 'U' -> update
                            3. Effacer le thé   'D' -> delete

                        + Un formulaire pour ajouter un nouveau thé 'C' -> create

                    2. Catégories

                        + Liste de toutes les catégories :

                            1. Affichage d'une catégorie  'R' -> read
                            2. Modifier les infos d'une catégorie 'U' -> update
                            3. Effacer la catégorie   'D' -> delete

                        + Un formulaire pour ajouter une nouvelle catégorie 'C' -> create

                    3. Poids

                        + Liste de tous les poids :

                            1. Affichage d'un poids  'R' -> read
                            2. Modifier les infos du poids 'U' -> update
                            3. Effacer le poids   'D' -> delete

                        + Un formulaire pour ajouter un nouveau poids 'C' -> create


                    4. Commandes

                        + Liste de toutes les commandes :

                            1. Affichage d'une commande  'R' -> read
                            2. Modifier les infos d'une commande et Changer le statut de la commande 'U' -> update



**Style**

Les couleurs seront : vert et blanc cassé.
>> fichier normalize.css à ajouter
>> font family Amaranth police, open sans -> fontawesome ou google fonts
>> mobile-first, tablette et desktop -> plusieurs images en fonction de la taille de l'écran
>> 3 breakpoints mobile - tablette - desktop -> 480px, 728px et 1100px max
>> respect des maquettes fournis 

>> -> Home : - pas de slider ni de photo promotionnelle ni de titre h2 dans le mobile, nav verticale pour le header verticale et pas de ribbon, navs footer en verticale, voir images(si tailles différentes selon mobile et desktop) 
>> - réapparition de tous les éléments à partir de la tablette

>> -> About : - disposition verticale pas de sortie de flux des images dans le mobile
>> - tablette et desktop sortie images flux + infos complémentaires verticale
>> header et footer en module css car même pour chaque page

>> -> Thés : - disposition verticale et disparition des images des catégories dans le mobile et tablette
>> - réapparrition des images et disposition horizontale dans le desktop

>> -> Détail Thé : - disposition verticale dans le mobile et horizontale dans tablettes et desktop
>> - largeur écran tablette et mobile article mais centré dans desktop

```css
/* font-family: 'Amaranth', sans-serif; */
/* Polices utilisé -> Amaranth et Open Sans

- code couleurs :
    - #666
    - #f2f2f2
    - #96b011
    - #b09067

Largeur maximal : 1100px
Hauteur de ligne : 1.4 */
/* VARIABLES */
:root {
    --color-primary: #96b011; /*title*/
    --color-bcg: #f2f2f2; /* blanc cassé background, nav, header, footer*/
    --color-text: #666; /*gris texte*/
    --color-cta: #b09067; /*orange call to action*/
    --font-title: 'Amaranth', sans-serif;
    --font-text: 'Open Sans', 'Helvetica Neue', sans-serif;
}

```

**Structure**


app_cupoftea
|    |_ .env
|    |_ client
|    |_ node_modules
|    |_ public
|    |   |_ fonts
|    |   |_ Readme
|    |   |_ index.html
|    |_ src
|        |_ assets
|        |    |_ images
|        |_ datas  
|        |    |_ datasFooter.js
|        |_ hooks
|        |   |_ reducers
|        |   |_ redux
|        |_ views
|        |   |_ MainComponents
|        |   |   |_ FooterComponents
|        |   |   |_ HeaderComponents
|        |   |   |_ Header.jsx
|        |   |   |_ Footer.jsx
|        |   |_ Pages
|        |   |   |_ Home
|        |   |   |   |_ Components
|        |   |   |   |_ Home.jsx
|        |   |   |_ About
|        |   |   |   |_ Components
|        |   |   |   |_ About.jsx
|        |   |   |_ Teas
|        |   |   |   |_ Components
|        |   |   |   |_ Teas.jsx
|        |   |   |   |_ TeaDetail.jsx
|        |   |   |_ Admin
|        |   |   |   |_ Components
|        |   |   |   |_ Admin.jsx
|        |   |   |   
|        |_ App.jsx
|        |_ index.js
|        |_ index.css
|_ node_modules
|_ server
    |_ config
    |   |_ const.js
    |   |_ database.js
    |_ controllers
    |    |   |_ homeController.js
    |    |   |_ teaShopController.js
    |    |   |_ teaDetailController.js
    |    |   |_ aboutController.js
    |    |   |_ admin
    |    |        |_ Create
    |    |        |_ Delete           
    |    |        |_ Read           
    |    |        |_ Update            
    |    |        |_ adminController.js                     
    |    |_ middlewares
    |    |   |_ errorPage.js
    |    |_ utils
    |    |    |_ utils.js
    |    |_ routers
    |    |   |_ home.routers.js
    |    |   |_ teaShop.routers.js
    |    |   |_ aboutRouter.js
    |    |   |_ admin.routers.js
    |    |_ server.js

    ...

//à compléter au fur et à mesure la hiérarchie des dossiers, détailler composant react/, maquettes html à faire/, pseudo-code des fonctionnalités à faire

## Marche à suivre

Base de données à faire avec MCD -> MLD/, création dans phpMyAdmin/, ajouter des éléments dans chaque table dans page admin

Node js à faire Page Admin avec connexion db+ vue à créer avec react + requêtes sql à exécuter avec query() + routages post plusieurs forms + hooks

Page Home vue + reqs sql (3 select + min price) + routages (détail) + hooks

Page Thés vue + reqs sql (catégorie + liste thés + min price) + routages (détail)

Page Détail Thé vue + reqs sql (thé avec id + select poids + select quantity par customer) + middlewares(calcul prix en fonction du poids + panier) + routage + hooks

Page About vue react + routage

