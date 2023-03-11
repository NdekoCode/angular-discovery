
# Decouverte d'angular

## Historique

- Developper par Google
- 2010: Lancement d'angularJS (Aujourd'hui abondonner)
- AngularJS avait une syntaxe complexe ainsi que ainsi que des limites en JavaScript celui qui lui a value la reputation d'etre difficile à apprendre et à prendre en main.
- 2016 Lancement d'Angular (Appelé aussi angular 2+), à ne pas confondre avec angularJS

Angular est un excellent choix si on souhaite une option robute pour le developpement web.

## Avantage

- Utilise une architecture MVC(Models Vues Controllerr), c'est une des architectures logicielles les plus utiliser pour les applications Web, avec le MVC la structure d'un projet est diviser en 3 parties:
  - Le Model: Il s'agit de la partie en charge de gerer les données, comme la recuperation des informations en base de données:
  - La vue: Qui gère l'interface Graphique comme le template HTML et
  - Le Controller: Gère la logique du code, il joue le role d'intermediaire entre le Model et la vue.
- C'est un framework basé sur TypeScript
- Permet de créer plus facilement des SPA(Single Page Application)
- Contrairement à React, Angular utilise une fonctionnalité de liaison de données bidirectionnelle, cela signifie qu'il a une synchronisation en temps réelle entre le model et la vue.

## Difference entre une librairie et Un framework

Angular est un Framework

### Librairie

Une librairie se traduit en francais par le mot "bibliotheque" et en réalité on peux la comparer à cella.
Dans une bibliothèque vous trouverai un nombre incalculable de livres divers et variés mais allez-vous utiliser l'ensemble des livres pour vous ?
Certainement pas, vous selectionnerai uniquement les livres dont vous avez besoin parmis tous ceux qui vous est propoper.
Une librairie est très similaire à cella, elle nous met à disposition plusieurs fonctionnalités (fonctions/modules/API) que nous pouvons integrer à notre projet ou non, son utilisation ne changera pas l'architecture de votre application

- Fournit  un ensemble de fonctions/modules/API
- Ne change pas le code au niveau structurel ou architectural

## Un framework

Dans un framework, toute l'architecture de votre application vous est imposer, un Framework est donc naturellement plus complexe car il definie un squelette, une architure où l'application definie ses propres fonctionnalités,ainsi c'est à vous d'ajouter votre propre code dans le framework, de cette façon votre code sera appeler par le framework si celui-ci est en accord avec sa structure.
L'avantage d'un framework est que les developpeur n'ont pas à savoir si une conception est bonne ou non mais simplement à implementer leurs fonctions specifiques à un domaine.

- Definie le squelette, l'architecture de l'application
- Fournit  un ensemble de fonctions/modules/API
- Change le code au niveau structurel ou architectural

### Difference

En resumer si vous utilisez une librairie c'est vous qui l'appelez tandisque si vous utilisez un Framework c'est lui qui vous appel.

## Structure d'un projet Angular

Une application angular contient plusieurs dossiers et fichiers, la plus part sont des fichiers ou des dossiers de configuration telle que

- le dossier `node_modules` qui regroupe l'ensemble des dependances de votre projet
- Le fichier `editorconfig` est en charge de la configuration de votre editeur de code.
- Le fichier `gitignore` qui specifie les fichiers et les dossiers que Angular doit ignorer
- Le fichier `angular.json` qui correspond à la configuration CLI de votre projet Angular
- Le fichier `package.json` ui regroupe l'ensemble des dependances installancer dans votre projet ainsi que le script NPM et les informations sur leurs versions sont dans le ficher `package..lock.json` ou `pnpm-lock.yaml`
- Le fichier `tsconfig.json` est un fichier qui participe à la configuration de TypeScript.
- Le repertoire `src` sera le repertoire qui nous interessera le plus car c'est lui qui contient tous les fichiers sources de notre application.
  - Son sous repertoire `/src/app` est celui qui contient tous les fichiers de composant de notre application, c'est dans ce repertoire qu'est definit la logique et les données de notre application `Angular`
  - Le repertoire `/src/assets` celui-ci contient les images et les fichiers ressources
  - Le fichier `/src/favicon.ico` est une icone qui vous permet de personnaliser vos onglets
  - Le fichier `/src/index.html` est le fichier principal de votre application
  - Nous avons le fichier `main.ts` qui est un fichier `TypeScript` qui est là pour demarrer et gerer la logique de notre application
  - Le fichier `test.ts` est présent pour gerer la création des test unitaire.
  - Nous avons le fichier `style.scss` ou `style.css` pour le style CSS
Vus que nous nous trouvons dans un framework noter que l'ensemble de notre application a déjà sa propre structure, sa propre squelette.

## Les composants

L'Un des principaux concept d'angular est que l'interface de l'application repose sur une arborescence des composants ou `component`,

### Qu'est-ce qu'un composant ?

**Un composant n'est rien d'autre qu'un blog de code réutilisable**, l'avantage est que l'on peut emboiter ces composants les un dans les autres.
Lors de la creation d'une application Angular on partira toujours d'un composant racine `AppComponent` qui represente l'ensemble de l'application, ce dernier contiendra des sous composants qui represente par exemple des zones de l'ecran comme `le menu`, la `sidebar`, `le corps de page` ou encore une `navbar`, à leurs tours ces sous composants peuvent contenir des sous composants et ainsi de suite on arrive à former une arborescence des composants.
Un composant angular représente un bout d'interface de l'application, c'est à vous de decider ce que vous mettez dans un composant, cela peut aller d'un simple button à une page Web entière.
Avec Angular un composant s'organise en 4 fichiers dont le dernier est optionnel

- un fichier pour le HTML
- Un fichier pour le CSS
- un fichier pour la logique TypeScript
- Un fichier optionnel si nous souhaitons ajouter les test unitaires.

### Comprendre le cycle de vie d'un composant

Chaque composant passe par une serie d'Etat, comme par exemple:

- l'initialisation du composant
- Sa mise à jour ou encore
- Sa destruction quand l'interface n'en a plus besoin

Il existe des fonctions appeler `lifecycle hook` ou hook de cycle de vie, donnant aux utilisateurs la possibilités d'ajouter leurs propres code à l'une ou plusieurs de ces Etas spécifique.
Les hooks de cycle de vie d'angular vont nous permettre d'executer du code lorsque un composant atteint un etat particulier lors de l'execution.
La documentation d'Angular sur [Documentation angular](https://angular.io/guide/lifecycle-hooks) nous fournit une liste de ces methodes.
Après avoir créer un composant, Angular appel les methodes des hooks de cycle de vie dans l'ordre suivant selon des moments specifiques, par exemple:

- `ngOnChange()`: est appeler lors de l'initialisation des données et à chaque fois qu'une ou plusieurs proprieter lier aux données changent (Donc il est appeler quand un composant est mis à jour)
- `ngOnInit()`: est appeler lors de l'initialisation du composant après que angular aie récupérer les données:
- `ngOnDestroy()`: est appeler au moment de la destruction d'un composant.

### Creation d'un composant

Pour créer un composant Angular, on utilise la ligne de commande en executant la commande `ng generate component NomDuComposant` ou `ng g c NomDuComposant`
