# Wild Heroes

Nous allons créer une application affichant une liste de super héros.

Clone le projet et installe les dépendances avec la commande `npm i`

## 1. Data

Dans le composant `<App />`, `fetch` l'api [data.json](https://akabab.github.io/superhero-api/api/) via un `useeffect` et stock le retour dans un state.

## 2. Liste

Dans ton componsant `<App />`, appelle le composant `<HeroesList />` en lui passant en props la liste des héros récupérés.

Fait un `console.log` des props pour vérifier que tout a bien été reçu.

Dans le jsx de `<HeroesList />`, affiche la liste des noms des héros.

## 3. Détail

Dans ton composant `<HeroesList />`, modifie l'affichage de tes héros afin d'appeler le composant `<HeroesItem />` et en lui passant les informations d'un héros par les props.

Modifie le composant `<HeroesItem />` afin d'afficher quelques informations d'un héros :

- son nom
- son image "xs" si elle existe
- son alignement

## 4. Favoris

Dans ton composant `<HeroesItem />`, ajoute un bouton permettant d'ajouter ou retirer un super héros à tes favoris, qui impactera un état `favorite`.

## 5. Alignement

Dans `<HeroesList />`, ajoute trois boutons avant ta liste :

- All
- Good
- Evil

Lors du clic sur un de ces boutons, un etat "alignment" doit être modifié avec les valeurs correspondantes ("all" par défaut).

Ajouter un filtre sur la liste des héros affiché afin de ne garder que les héros de l'alignement correspondant.

## 6. Filtrage

Dans `<HeroesList />`, ajoute un label "Rechercher" et un champs texte, avant la liste.

À la modification du texte du champs, filtrer les héros pour n'afficher que ceux dont le nom correspont à la recherche.

## 7. Détail

Ajoute dans le composant `<App />` la configuration nécessaire à la création des routes suivantes :

- "/" affiche la liste des super héros
- "/heroes/:id" qui affichera le composant `<HeroesDetail />` que tu vas créer.

En fonction de l'identifiant dans l'url, le composant `<HeroesDetail />` doit filtrer les données afin d'afficher le nom et les statistiques du héros qui correspond.

Ajout dans `<HeroesDetail />` un bouton "Back to the list" qui renvoie sur la liste des héros.
