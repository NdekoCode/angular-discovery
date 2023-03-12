
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
Ce qui va generer les 4 fichiers de composant dont:

- un fichier pour le HTML
- Un fichier pour le CSS
- un fichier pour la logique TypeScript
- Un fichier optionnel si nous souhaitons ajouter les test unitaires.

## Comprendre les moduless

Angular propose un concept de module à fin de mieux structurer le code et faciliter la réutilisation et le partage.
Chaque application Angular a au moins un module appeler `AppModule` que nous retrouvons dans le fichier `app.module.ts`.
Un module Angular est un mécanisme permettant de regrouper des composants ou des services, directives, pipes, de définir les dependance et de definir leurs visibilités.
Un module Angular est définie grace à son décorateur `@NgModule()`, il est également définie grace à une classe ici `AppModule` qui reste généralement vide.
Le décorateur `@NgModule` possède plusieurs proprieter

- declaration: qui définie la liste des composants, si un composant ne fugure pas dans cette liste, Angular ne le detectera tout simplement pas et ne seront pas présent dans l'application.
- imports: est une liste, celle-ci définie la liste de dépendance du module
- providers: est une liste qui nous permet de definir les services à utiliser dans mon composant et ainsi dans les enfants de mon composant.
- bootstrap: Est un tableau qui permet de définir le composant racine de l'application, autrement dit la vue principale de l'application qui heberge toutes les autres vues de l'application.

```{TS}
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { HeaderComponent } from './header/header.component';
import { ImageSnapComponent } from './image-snap/image-snap.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    ImageSnapComponent,
    CardFooterComponent,
    CardBodyComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    ArticleComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // Pour initiailiser le module de traitement de langue
  constructor() {
    registerLocaleData(fr.default);
  }
}

```

## Data-binding

Data-binding: liaison des données, c'est la communication entre votre code TypeScript et votre template HTML qui est montrer à l'utilisateur
Cette communication peut prendre plusieurs forme comme:

### string interpolation

 `String interpolation` ou l'interpollation des texte permet de transferer les données du code typescript vers le template HTML.
 Pour afficher du contenus en HTML dont la donnée est réaliter stocker dans une variable TypeScript on utilise le `string interpolation`

```{HTML}
 <p class="card-text">
      {{ post.description }}
  </p>
```

![STRING INTERPOLATION](/src/assets/images/docs/string-interpolation.png "STRING INTERPOLATION")

### attribute binding ou property binding

Le property binding est également appeler liaison par propriéter, il s'agit d'une autre manière de créer une communication dynamic entre votre TypeScript et votre template HTML.
Celui-ci s'utilise meme sur les attribut HMTL ou les proprieter HTML sous forme de crocher `[]`, par exemple

```{HTML}
  <img [src]="post.image" class="card-img-top" [alt]="post.title" />
```

De cette façon ce que contient nos guillements ne seront plus interpreter comme etant du texte mais comme etant une expression TypeScript.

![attribute binding ou property binding](/src/assets/images/docs/property-binding.png "attribute binding ou property binding")

En resumer le propertie binding vous permet de recuperer une donnée présente dans votre TypeScript à fin de l'inserer dans votre template HTML, plus précisement pour la donnée comme valeur à l'attribut d'une balise HTML.

### Event Binding

A fin de rendre notre application dynamic il faut que l'utilisateur puisse interagir avec elle, pour cela nous utilisons des evenements comme le clic, le scroll ou l'ecriture sur un clavier.
En Angular pour ajouter les evenement on utilise une syntaxe un peu similaire à celui des propertie binding mais à la passe des crochet on utilise les parenthèses `()` et à l'interieur de ces parenthèses on met le nom de l'evement à laquelle on va egaliser une fonction TypeScript qui sera executer quand l'utilisera va declencher cet evenement.
Pour les methodes lier aux evenement il existe une convention de nomenclature qui dit que les methodes qui seront executer par des evenement devront commencer avec `on` suivit du nom de la fonction, cela permet de suivre plus facilement l'execution des methodes lorsque l'application devient plus complex.

```{HTML}
    <button type="button" (click)="onLike()" class="btn btn-primary">
      like
    </button>
```

![Event Binding](/src/assets/images/docs/event-binding.png "Event Binding")

### Two-Way binding ou La liaison à double sens

Jusqu'ici nous realisions une liaison uni-directionnelle, càd nous envoyons des données depuis notre code TypeScript vers le template HTML mais jusqu'à present nous ne pouvions pas faire le sens inverse càd envoyer des données du template HTML vers le TypeScript, le two-way binding va nous permettre de mettre en place cela.
Le two-way binding utilise la liaison par proprieter et la liaison par evenement en meme temps voilà pourquoi sa syntaxe sont des crochet contenant des parathèse `[()]`, on l'utilise par exemple pour les formulaire à fin de pouvoir declarer ou recuperer le contenus des champs.

Pour recuperer le contenus d'un champs pour l'envoyer du HMTL vers le typescript et ainsi utiliser le two-way binding il nous faudra importer le module `FormsModule` depuis `@angular/forms` dans `AppModule` et le mettre dans la clé `imports` de la liste se trouvant dans le docorateurs `@NgModule`.
Si nous ne faisons pas cela, la fonctionnalité `two-way binding` ne sera pas actif dans notre application.
Ainsi pour utiliser le two way binding sur un element de type formulaire on utilise `[(nGModel)]="LavaleurTSAuquelIlSeraLier"` .

```{HTML}

    <input
      type="text"
      placeholder="Entrer un commentaire"
      [(ngModel)]="comment"
    />
    <p>COMMENTAIRE: {{ comment }}</p>
```

Ainsi chaque changement sur le champs qui est lier à votre variable sera impacter sur votre variable et donc votre variable enverra ses données dans le template HTML et le template HTML envera ses données dans le TypeScript.

![Two-Way binding ou La liaison à double sens](/src/assets/images/docs/two-way-binding.png "Two-Way binding ou La liaison à double sens")

### Transmettre les données vers un composant enfant

  On peut passer des éléments à un component depuis son parent. et pour ça il va falloir créer une nouvelle propriété personnaliser depuis votre composant enfant mais qui peut être injecter depuis l’extérieur et pour faire cela on va utiliser le décorateur `@Input` que l’on va importer depuis `@angular/core` cet `Input` permet de rendre possible l’injection des propriétés depuis l’extérieur.

et pour l’utiliser on fait :

```tsx
@Input() NameOfProps: TypeOfPropsImportFromModel
```

On appel le décorateur comme une fonction suivis du nom de la propriété qui sera considérer et puis deux point `“:”` et préciser son type.

Pour qu'une propriété puisse être injectée **depuis l'extérieur** d'un component, il faut lui ajouter le décorateur  `@Input()`.

`Input` doit êtr importer depuis  `@angular/core` , Maintenant, dans `app.component.ts` ou le parent de votre Component – créez une propriété du type de votre propriété et initialisez-la dans `ngOnInit()`.
N'oubliez pas d'implémenter `OnInit` pour pouvoir utiliser `ngOnInit()` dans `AppComponent` ou dans votre composant parent !

Vous allez maintenant utiliser l'**attribute binding** pour lier cette propriété que vous venez de créer à la propriété personnalisée créer dans votre composant enfant dans votre composant parent :

`@Input()` crée comme un attribut HTML auquel on peut lier une valeur, tout comme vous l'avez fait avec l'attribut `src` de l'élément image !

#### En resumer

- Une propriété personnalisée est rendue injectable depuis l'extérieur grâce au décorateur `@Input()`.
- Une propriété en `@Input()` est utilisable comme n'importe quelle autre propriété : on peut en afficher les éléments, les modifier…
- On lie ensuite une valeur à cette propriété depuis le component parent avec l'attribute binding, c'est-à-dire le nom de la propriété entre crochets `[]` en passant la valeur entre les guillemets.

![Transmettre les données vers un composant enfant](/src/assets/images/docs/data-to-child.png "Transmettre les données vers un composant enfant")

### Transmettre des données d'un composant enfant vers un composant parant

Pour recuperer les informations d'un composant et le renvoyer vers son parent nous auront besoins d'utiliser des evenements personnabliser, pour cela il faut integrer des nouvelles fonctionnalités dans notre composant enfant qui sont `Output` et `EventEmitter` et cela depuis `@angular/core`.
On va ainsi utiliser le decorateur `@Output` pour créer un evenement, l'evenement en question sera un objet de la classe `EventEmitter`, par exemple

```{TS}
@Output info = new EventEmitter<string>();
```

 Puis dans une methode d'action comme `onLike` on va emmet l'evenement avec la methode `emit` qui va s'utiliser sur l'instance de la classe `EventEmitter` et donc.

 ```{TS}
 OnLike() {
  this.price++;
  this.info.emit(this.post.title); // va remonter le contenis de post.title au composant parent
 }
 ```

Ainsi pour capturer l'evenement créer dans le composant enfant on peut ecouter cet evement d'une manière classique depuis le composant parent de votre application et lui associer un methode pour capturer la valeur inclus dans l'evement que l'on a emit depuis le composant enfant, cette methode en question on doit lui passer la proprieter `$event` qui lui contient la valeur des données passer dans le composant enfant.
Ainsi
