# Angular Beginner Workshop

We will be create a website to display Star Wars Characters! - - - > [Repository](https://github.com/Dashbrd/ng-beginner-workshop)

![app](https://snapshot-of-table.io)

## 0. Setup

<details>
  <summary>Details</summary>

### 1. Please install the following on your machine:

* Node 10.x
* Angular CLI: `npm install -g @angular/cli`
* Latest Chrome
* **highly** recommend downloading Visual Studio Code: https://code.visualstudio.com/
* install the following extensions:
        * [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
        * [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
        * [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
        * [angular2-inline](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline)
        * [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
        * [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)

### 2. Scaffold a new Angular project using the CLI

```bash
ng new ng-beginner-workshop --style=scss --routing
```

This adds support for Sass and enables routing.

* Refer to branch `initial-setup` in the repository

Your changes should look like this:
https://github.com/Dashbrd/ng-beginner-workshop/commit/394979e285538bb1ec6d01a5fa569e6260822810

### 3. Install the following project dependencies:

```bash
cd ng-beginner-workshop

npm install semantic-ui-card semantic-ui-input semantic-ui-reset semantic-ui-table
```

Configure the CLI to bundle the Semantic UI dependencies by updating the `styles` in `angular.json`

```js
"styles": [
    "./node_modules/semantic-ui-table/table.min.css",
    "./node_modules/semantic-ui-reset/reset.min.css",
    "./node_modules/semantic-ui-input/input.min.css",
    "./node_modules/semantic-ui-card/card.min.css",
    "src/styles.scss"
  ]
```

### 5. Add some quick styles:

  * Include font `<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">` in your `src\index.html`
  * Add the following CSS  your `src\styles.scss` to Apply font to your whole website

```css
body {
  background-color: #f9f9f9 !important;
  font-size: 15px;
  font-family: 'Titillium Web', sans-serif !important;
}
```

### 6. Run it :boom:
Run `npm start`.
Your Angular app will be live at `localhost:4200`

![Snapshot of Current State](snapshot-of-current-state.io)


Your changes should look like this: https://github.com/Dashbrd/ng-beginner-workshop/commit/89aa23b3d8f1034e46b6489ee77cc4f3a026c669

</details>

## 1. Your First Component

<details>
  <summary>Details</summary>

Let's generate the app's header component:

```bash
ng generate component header
```

This will automatically generate a component for you with selector `app-header` in `src\app\header`. This will also generate/modify all supporting files

* **header.component.html** (Added)
* **header.component.ts** (Added)
* **header.component.scss** (Added)
* **header.component.spec.ts** (Added)
* **app.module.ts** (modify to include a reference of `Header Component` )  

 Then we can add a property on this component:

```js
export class HeaderComponent implements OnInit {

  title = 'Star Wars Characters';

  constructor() { }

  ngOnInit() {
  }

}
```

The `HTML` template for header:

```html
<header id="particles">
  <h2>{{ title }}</h2>
</header>
```

and some styles in the header component `header.component.scss`

```css
header {
  height: 50px;
  background: #1A2129;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;

  h2 {
    color: #fff;
    margin: 0;
    padding: 10px;
    position: absolute;
    left: 10px;
  }
}
```

Finally, Add header to application by replacing  html in `app.component.html`

```html
<app-header></app-header>
<router-outler></router-outlet>
```

This should look like

![Imgur](https://i.imgur.com/vPejz5y.png)

There is a lot going on here. 
In Angular you can (one-way) data bind properties using the interpolation syntax `{{ title }}`. 

Angular gives you scoped-styled components out of the box!

![Scoped Styles](https://i.imgur.com/NsSTAn1.png)

This can be configured by changing the `ViewEncapsulation`:

![view encapsulation](https://i.imgur.com/H5gooLL.png)

You can read about `View Encapsulation` in detail here: https://blog.angular.io/the-state-of-css-in-angular-4a52d4bd2700

Commit: https://github.com/Dashbrd/ng-beginner-workshop/commit/d1f24f8b88e0ed255f0a4a44d7a4cbd74e9bb47e

</details>

## 2. Angular Directives (Built-In) & Event/Property Bindings

<details>
  <summary>Details</summary>

### Directives

 Angular has many built-in directives. Let's explore some of them.

 **`*ngIf`**

Conditionally render a component/element.

 ```html
 <span class="loader" *ngIf="loading"></span>
 ```

Here `loading` can be a property/function/expression

 **`*ngFor`**

Render a collection.

```html
<ul>
  <li *ngFor="let person of people">{{person.name}}</li>
</ul>
```

**`*ngClass`**

Dynamically set and change the CSS classes.

```html
<span class="pulse" [ngClass]="color"></span>
```

```html
<button [ngClass]="{bordered: isBordered}">Submit</button>
```

Conditionally applying a class. `bordered` is the class and value of boolean `isBordered` will decide if class needs to be added.

### Property Bindings

Property Bindings in Angular as creating using `[]`. For example:

```html
<div [style.background-color]="color"> Uses fixed `color` background</div>
```

Here `style.background-color` is an `Html` attribute and we are binding `color` property to it using `[]`

### Event Bindings

Angular allows you to bind DOM Events and Custom Events events using `()` syntax:

```html
<button (click)="submit()">Submit</button>
```

Here the `click` event of button is bound to a function `submit` which will be available in the parent component of this button.
</details>

## 3. Component Inputs

<details>
  <summary>Details</summary>

Now lets create a table of Star Wars Characters. Start by generating a `sw-people-list` component:

```bash
ng generate component sw-people-list
```

This component will be page/placeholder for our Star Wars Characters Grid. For this

* We will Configure Router
* We Make this component render in `<router-outlet></router-outlet>`

Add component in `routing module` --> `app-routing.module.ts`

```js
import { SwPeopleListComponent } from './sw-people-list/sw-people-list.component';

const routes: Routes = [
  {
    path: '',
    component: SwPeopleListComponent
  }
];
```

We will also add some styling around `router-outlet` os that we can provide style/arrangement to all the contents inside it.


```html
<div class="app">
  <div class="content">
    <router-outlet></router-outlet>
  </div>
</div>
```

```css
.app {
  margin-top: 80px;

  .content {
    max-width: 900px;
    padding: 10px;
    margin: 20px auto;
  }
}
```

The `SwPeopleList` component should have a property `swCharacters` of type `Array<StarWarsCharacter>`:

```js
swCharacters: Array<StarWarsCharacter>;
```

Create a `star-wars-character.model.ts` in `app/models`, which will hold the interface to describe `Star Wars Character` objects

```js
export interface StarWarsCharacter {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
}
```

Data Fetching / Data assignment Operations should be done in the `OnInit` life cycle hooks (which is available using `ngOnInit` Method)

Assign the following `Json` to `swCharacters` property for initialization :

```js
[
      {
        'name': 'Luke Skywalker',
        'height': '172',
        'mass': '77',
        'hair_color': 'blond',
        'skin_color': 'fair',
        'eye_color': 'blue',
        'birth_year': '19BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [
          'https://swapi.co/api/vehicles/14/',
          'https://swapi.co/api/vehicles/30/'
        ],
        'starships': [
          'https://swapi.co/api/starships/12/',
          'https://swapi.co/api/starships/22/'
        ],
        'url': 'https://swapi.co/api/people/1/'
      },
      {
        'name': 'C-3PO',
        'height': '167',
        'mass': '75',
        'hair_color': 'n/a',
        'skin_color': 'gold',
        'eye_color': 'yellow',
        'birth_year': '112BBY',
        'gender': 'n/a',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/4/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/2/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/2/'
      },
      {
        'name': 'R2-D2',
        'height': '96',
        'mass': '32',
        'hair_color': 'n/a',
        'skin_color': 'white, blue',
        'eye_color': 'red',
        'birth_year': '33BBY',
        'gender': 'n/a',
        'homeworld': 'https://swapi.co/api/planets/8/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/4/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/'
        ],
        'species': [
          'https://swapi.co/api/species/2/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/3/'
      },
      {
        'name': 'Darth Vader',
        'height': '202',
        'mass': '136',
        'hair_color': 'none',
        'skin_color': 'white',
        'eye_color': 'yellow',
        'birth_year': '41.9BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [
          'https://swapi.co/api/starships/13/'
        ],
        'url': 'https://swapi.co/api/people/4/'
      },
      {
        'name': 'Leia Organa',
        'height': '150',
        'mass': '49',
        'hair_color': 'brown',
        'skin_color': 'light',
        'eye_color': 'brown',
        'birth_year': '19BBY',
        'gender': 'female',
        'homeworld': 'https://swapi.co/api/planets/2/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [
          'https://swapi.co/api/vehicles/30/'
        ],
        'starships': [],
        'url': 'https://swapi.co/api/people/5/'
      },
      {
        'name': 'Owen Lars',
        'height': '178',
        'mass': '120',
        'hair_color': 'brown, grey',
        'skin_color': 'light',
        'eye_color': 'blue',
        'birth_year': '52BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/6/'
      },
      {
        'name': 'Beru Whitesun lars',
        'height': '165',
        'mass': '75',
        'hair_color': 'brown',
        'skin_color': 'light',
        'eye_color': 'blue',
        'birth_year': '47BBY',
        'gender': 'female',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/7/'
      },
      {
        'name': 'R5-D4',
        'height': '97',
        'mass': '32',
        'hair_color': 'n/a',
        'skin_color': 'white, red',
        'eye_color': 'red',
        'birth_year': 'unknown',
        'gender': 'n/a',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/2/'
        ],
        'vehicles': [],
        'starships': [],
        'url': 'https://swapi.co/api/people/8/'
      },
      {
        'name': 'Biggs Darklighter',
        'height': '183',
        'mass': '84',
        'hair_color': 'black',
        'skin_color': 'light',
        'eye_color': 'brown',
        'birth_year': '24BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/1/',
        'films': [
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [],
        'starships': [
          'https://swapi.co/api/starships/12/'
        ],
        'url': 'https://swapi.co/api/people/9/'
      },
      {
        'name': 'Obi-Wan Kenobi',
        'height': '182',
        'mass': '77',
        'hair_color': 'auburn, white',
        'skin_color': 'fair',
        'eye_color': 'blue-gray',
        'birth_year': '57BBY',
        'gender': 'male',
        'homeworld': 'https://swapi.co/api/planets/20/',
        'films': [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/5/',
          'https://swapi.co/api/films/4/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/'
        ],
        'species': [
          'https://swapi.co/api/species/1/'
        ],
        'vehicles': [
          'https://swapi.co/api/vehicles/38/'
        ],
        'starships': [
          'https://swapi.co/api/starships/48/',
          'https://swapi.co/api/starships/59/',
          'https://swapi.co/api/starships/64/',
          'https://swapi.co/api/starships/65/',
          'https://swapi.co/api/starships/74/'
        ],
        'url': 'https://swapi.co/api/people/10/'
      }
    ]
```

No for the component template, create a table. 

* Table header contains the attributes for Star Wars Characters we want to display.
* Table body we will use the `*ngFor` directive to render a new row for each character. For now, render empty `td` cells.

```html
<table class="ui selectable celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Birth Year</th>
      <th>Eye Color</th>
      <th>Gender</th>
      <th>Hair Color</th>
      <th>Height</th>
      <th>Mass</th>
      <th>Skin Color</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let person of swCharacters">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```

Using this approach we can render all the fields, but we are Angular and we believe in Component based development. so lets extract a Single Star Wars Character in a component

```bash
ng generate component sw-character
```

This components in order to receive data will need an input. In Angular we always prefer that components take data through inputs.
Inputs to components are denoted by `[]` square brackets :

```html
<app-my-component [info]="data"></app-my-component>
```

Here

* `info` is the input property
* `data` is the object as the being passed to input property.

Update the template of the `SwCharacter` component to render the data:

```html
<td>{{character.name}}</td>
<td>{{character.birth_year}}</td>
<td>{{character.eye_color}}</td>
<td>{{character.gender}}</td>
<td>{{character.hair_color}}</td>
<td>{{character.height}}</td>
<td>{{character.mass}}</td>
<td>{{character.skin_color}}</td>
```

Now lets Modify this component to include `app-sw-character` and remove all `td` elements for the template of `SwPeopleList`

```html
<tr app-sw-character [character]="person" *ngFor="let person of swCharacters"></tr>`
```

### Why are we using this components as a directive

We cannot simply use `<app-sw-character></app-sw-character>` inside the `table` or `tr` as this will disturb the structure of the `table`.
Rendering a component will create a wrapper component and to replace this we use the `directive` syntax of component rendering.

![Wrapper Rendering](https://i.imgur.com/Imd7ex0.png)

As described above we'll use the `Directive` syntax, for this we have to update the selector of the component

```js
selector: '[app-sw-character]',
```

`tslint` configuration doesn't allow this, so we can suppress this error. by using

```js
// tslint:disable:component-selector
@Component({
  //.....
})
```
At this moment if we try to run our application we'll get an error in the browser console

![Error](https://i.imgur.com/mOsaCFN.png)

The Angular Language Service extension will help yuo to see this error in your editor

![Error](https://i.imgur.com/7phoQVu.png)

To fix this we need to tell our component that we have to add a new input using `@Input`.

```js
@Input()
public character: StarWarsCharacter;
```

Result:

![Result](https://i.imgur.com/EPKvrJk.png)

Reference commit: https://github.com/Dashbrd/ng-beginner-workshop/commit/51eaa790330991fc75c9abcc33e626c197637bff

</details>

## 4. Component Outputs

<details>
  <summary>Details</summary>

For using Output in Angular the notation is used is `()` parenthesis for event event binding for example

```html
<button (click)="handler($event)">Submit</button>
```

DOM properties binding are done using `[]`, and events with `()`.
`$event` naming is a convention used to get the actual event object.

 We will create a search component. It will emit event for the search term we type.

It can be defined as follows : 

```html
<app-character-search (search)="filterData($event)"><app-character-search>
```

`search` is the output event.
When search will emit it will call `filterData` method to do its operation on the parent component.

The component can emit any kind of Data.

Lets create component `app-character-search`:

```bash
ng g c character-search
```

Add html to template and add some styles:

```html
<div class="ui icon input">
  <input type="text" placeholder="Search..." />
</div>
```

```css
.input {
  width: 300px;

  input {
    font-family: "Titillium Web", sans-serif;
  }
}
```

Lets add this component to `SwPeopleList` component to rendered this:

```html
<app-character-search></app-character-search>
<table class="ui selectable celled table">
  //.......
```

Lets add an output to this component.
`Output` are added suing `EventEmitter`.

We can define output as:

```js
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

//........

@Output() search = new EventEmitter<string>();
```

In order to listen to keyboard input, we have to subscribe to DOM events. Well subscribe `(change)` event for the `input` element.

```html
<input type="text" placeholder="Search..." (input)="handleInput($event)">
```

`handleInput` method will emit the input string which will be used in parent component for filtering:

```js
public handleInput(event: any) {
  this.search.emit(event.target.value);
}
```

Lets bind the `Output` events of `character-search` to its parent component `SwPeopleList` component.

```html
<app-character-search (search)="filterData($event)"></app-character-search>
```

Here we filter the list using the output from `character-search` component

```js
public filterData(event: string) {
  this.swCharacters = this.swCharacters.filter((character: StarWarsCharacter) => {
    if (character.name.includes(event)) {
      return true;
    }
    return false;
  });
}
```

Commit: https://github.com/Dashbrd/ng-beginner-workshop/commit/f985dad77ece638a7715fdcb9f49a2d5adc45b05

</details>

## 5. Services and Http

<details>
  <summary>Details</summary>

Since Angular v4 provides a default HttpClient to communicate with the backend. We will use `get` request and [SWAPI](https://swapi.co/) as backend.

To use `HttpClient` we need to add this to you application module `app.module.ts`.

Lets add `HttpClientModule` from `@angular/common/http` to imports of `app.module.ts`

```diff
  // app.module.ts

    import { AppComponent } from './app.component';
    import { AppRoutingModule } from './app-routing.module';
    import { BrowserModule } from '@angular/platform-browser';
    import { CharacterSearchComponent } from './character-search/character-search.component';
    import { HeaderComponent } from './header/header.component';
+   import { HttpClientModule } from '@angular/common/http';
    import { NgModule } from '@angular/core';
    import { SwCharacterComponent } from './sw-character/sw-character.component';
    import { SwPeopleListComponent } from './sw-people-list/sw-people-list.component';

    @NgModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SwPeopleListComponent,
        SwCharacterComponent,
        CharacterSearchComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
+       HttpClientModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
```

We will go ahead and create a `SwapiService` in `src\app\services` folder.

```bash
ng generate service services/swapi
```

In this service, we will inject the `HttpClient`,`@Injectable()` decorator allows you to use DI and inject registered services.

We will create a response model for the data that will be returned from the backend.

```js
import { StarWarsCharacter } from './star-wars-character.model';

export interface ApiResponse {
  count: number;
  next: string;
  previous?: any;
  results: StarWarsCharacter[];
}

```

Then will mark our service as `Injectable` also we will be using this service globally so will mark this to be registered in the `root` module i.e `app.module.ts`

```js
import { ApiResponse } from '../models/api-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpClient: HttpClient) {

  }

  getPeople() {
    return this.httpClient.get<ApiResponse>('https://swapi.co/api/people');
  }
}
```

Here the `getPeople` will be returning an `Observable` which we will subscribe to in our `SwPeopleList` component.
You can think of an Observable as a stream of events, emitting values to anyone who has subscribed to it.
The `HttpClient` will try to parse the Json response to your model `ApiResponse`.

In `SwPeopleList` component, we import and inject the API service.
In the `OnInit` hook, use the service to get the data.

```js
import { StarWarsCharacter } from '../models/star-wars-character.model';
import { SwapiService } from '../services/swapi.service';

...

export class SwPeopleListComponent implements OnInit {

  swCharacters: Array<StarWarsCharacter>;

  constructor(private api: SwapiService) {
  }

  ngOnInit() {
    this.api.getPeople().subscribe(response => {
      this.swCharacters = response.results;
    });
  }

...

```

### Error handling

Our UI should handle errors gracefully and display data . To handle errors, add an error handler to your .subscribe() call:

```js
    this.api.getPeople().subscribe(response => {
      this.swCharacters = response.results;
    }, (error) => {
      console.log(error);
      this.swCharacters = [];
    });
```

### Intercepting requests

You can intercept requests and responses similar to how Express middleware works. The docs are great on this, check it out: https://angular.io/guide/http#intercepting-all-requests-or-responses

Commit: https://github.com/Dashbrd/ng-beginner-workshop/commit/03d33210c0c4301d36b6b0f38c59db5bb952b8b4

</details>
