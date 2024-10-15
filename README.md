# HRnet (English version below)

## Faire passer une librairie jQuery vers React

### 📚 Présentation

Ce projet correspond à la migration d'une application web interne jQuery vers React. <br>
👉 [Code de l'ancienne application](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) <br>
Le but de ce changement est de réduire la dette technique et d'améliorer la performance de l'application web.<br>
L'application permet la gestion des dossiers des employés :<br>

- Ajout de nouveaux employés
- Consultations des employés

Les plugins JQuery ont été remplacés :<br>

- Select : composant interne
- Modal : [sg-modal-lib](https://www.npmjs.com/package/sg-modal-lib)
- Date picker : [MUIDatePicker](https://mui.com/x/react-date-pickers/date-picker/)
- Table : [react-data-table-component](https://www.npmjs.com/package/react-data-table-component)

Pour le moment, les données sont mockées (employees et departments). <br>
Les états américains permettant de remplir les options du select sont récupérés grâce à la bibliothèque [states-us](https://www.npmjs.com/package/states-us).

### 🖥 Mock-up du site

#### Page d'accueil

![Visuel de la page d'accueil](src/assets/img/screenshot-mock/home.png)

#### Création d'employé

![Visuel de la page de création d'employé](src/assets/img/screenshot-mock/create-employee.png)

#### Liste d'employés

![Visuel de la page de la liste d'employés](src/assets/img/screenshot-mock/employees-list.png)

### 💡 Outils et technos

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,github,pnpm,redux)](https://skillicons.dev)

### 🔨 Installation du projet

#### Prérequis

- **[NodeJS](https://nodejs.org/fr/)** (^20.11.1)
- **[Git](https://git-scm.com/)** (^2.44.0)
- **[npm](https://www.npmjs.com/)** (^10.2.4)

➡ Cloner le projet<br>
➡ Ouvrir le dossier dans VSCode (ou tout autre IDE)<br>
➡ Installer les dépendances : `pnpm install`<br>

### 🚀 Lancement du projet

➡ Lancer l'application : `pnpm run dev`<br>

### ⚙ Contraintes techniques

➡ Utiliser Redux pour gérer le state de l'ensemble de l'application.<br>
➡ Coder en utilisant le paradigme de la programmation fonctionnelle.<br>
➡ Amélioration du style de l'application.<br>
➡ Amélioration des performances de l'application.<br>

### 📈 Rapports de performances

![Rapports de performances](src/assets/img/screenshot-reports/hrnet%20lighthouse.png)

### 📦 Dépendances

#### Bibliothèques Principales

- **[React](https://reactjs.org/)** (^18.3.1): Une bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **[React-DOM](https://reactjs.org/docs/react-dom.html)** (^18.3.1): Le package qui sert de point d'entrée pour les chemins de rendu liés au DOM.
- **[React-Redux](https://react-redux.js.org/)** (^9.1.2): Les liaisons officielles de React pour Redux.
- **[React Router DOM](https://reactrouter.com/web/guides/quick-start)** (^6.26.2): Le routage déclaratif pour React.js.
- **[@reduxjs/toolkit](https://redux-toolkit.js.org/)** (^2.2.8): Un ensemble d'outils pour simplifier l'utilisation de Redux et améliorer les flux de travail.

#### UI et Stylisation

- **[MUI](https://mui.com/)** (^6.0.0): Une bibliothèque de composants React suivant les spécifications Material Design.
- **[MUI X Date Pickers](https://mui.com/x/react-date-pickers/)** (^7.19.0): Un ensemble de composants pour la sélection de dates et d'heures.
- **[Sass](https://sass-lang.com/)** (^1.79.4): Un langage de préprocesseur qui est interprété ou compilé en feuilles de style en cascade (CSS).
- **[React Data Table Component](https://react-data-table-component.netlify.app/)** (^7.6.2): Une bibliothèque pour la gestion des tableaux de données dans les applications React.

#### Utilitaires

- **[Day.js](https://day.js.org/)** (^1.11.13): Une alternative rapide et légère à Moment.js pour la gestion des dates.
- **[Prop-Types](https://www.npmjs.com/package/prop-types)** (^15.8.1): Vérification des types à l'exécution pour les props React et les objets similaires.
- **[React Hook Form](https://react-hook-form.com/)** (^7.53.0): Une bibliothèque de formulaires performante, flexible et extensible pour React.
- **[Redux Persist](https://github.com/rt2zz/redux-persist)** (^6.0.0): Une bibliothèque pour persister et réhydrater un store Redux.
- **[sg-modal-lib](https://www.npmjs.com/package/sg-modal-lib)** (^1.1.7): Composant pour la création de modale.
- **[States-US](https://www.npmjs.com/package/states-us)** (^1.1.1): Une bibliothèque pour les données des états américains.
- **[UUID](https://github.com/uuidjs/uuid)** (^10.0.0): Une bibliothèque pour générer des UUIDs.
- **[Styled-components](https://styled-components.com/)** (^6.1.13): Une bibliothèque CSS-in-JS qui permet de styliser les composants React.

#### Outils de Développement

- **[Vite](https://vitejs.dev/)** (^5.4.8): Un outil de développement frontend de nouvelle génération visant à fournir une expérience de développement plus rapide et plus légère.
- **[ESLint](https://eslint.org/)** (^9.12.0): Un outil pour identifier et signaler les erreurs trouvées dans le code ECMAScript/JavaScript.
- **[Plugins ESLint](https://eslint.org/docs/user-guide/configuring/plugins)** : Plugins pour étendre les fonctionnalités d'ESLint, y compris `eslint-plugin-react` (^7.37.1) pour des règles de linting spécifiques à React.

### 🏆 Compétences évaluées

➡ Analyser la performance d'une application web.<br>
➡ Déployer une application front-end.<br>
➡ Refondre une application pour réduire la dette technique.<br>
➡ Produire de la documentation technique pour une application.<br>

### 👷‍♀️ Auteurs

- **Ségolène Ganzin** ([GitHub Profile](https://github.com/segoleneganzin/))

# English version

# HRnet

## Migrating a jQuery Library to React

### 📚 Overview

This project involves migrating an internal web application from jQuery to React.<br>
👉 [Code of the old application](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) <br>
The goal of this transition is to reduce technical debt and improve the performance of the web application. The application allows for employee file management :<br>

- Adding new employees
- Viewing employees

jQuery plugins have been replaced with :<br>

- Select : internal component
- Modal : [sg-modal-lib](https://www.npmjs.com/package/sg-modal-lib)
- Date picker : [MUIDatePicker](https://mui.com/x/react-date-pickers/date-picker/)
- Table : [Material React Table](https://www.material-react-table.com/)

Pour le moment, les données sont mockées (employees et departments). <br>
Currently, data (employees and departments) is mocked. U.S. states for populating the select options are retrieved using the [states-us](https://www.npmjs.com/package/states-us) library.

### 🖥 Site mock up

#### Home page

![Site visual](src/assets/img/screenshot3.png)

#### Create employee

![Create employee page visual](src/assets/img/screenshot-mock/create-employee.png)

#### Employees list

![Employees list page visual](src/assets/img/screenshot-mock/employees-list.png)

### 💡 Tools and Technologies

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,github,pnpm,redux)](https://skillicons.dev)

### 🔨 Project Installation

#### Prerequisites

- **[NodeJS](https://nodejs.org/fr/)** (^20.11.1)
- **[Git](https://git-scm.com/)** (^2.44.0)
- **[npm](https://www.npmjs.com/)** (^10.2.4)

➡ Clone the project<br>
➡ Open the folder in VSCode (or any other IDE)<br>
➡ Install dependencies : `pnpm install`<br>

### 🚀 Running the Project

➡ Start the application: `pnpm run dev`<br>

### ⚙ Technical Constraints

➡ Use Redux to manage the state of the entire application. <br>
➡ Code using the functional programming paradigm.<br>
➡ Improve the styling of the application.<br>
➡ Improved application performance.<br>

### 📈 Performance Reports

![Performance reports](src/assets/img/screenshot-reports/hrnet%20lighthouse.png)

### 📦 Dependencies

#### Main Libraries

- **[React](https://reactjs.org/)** (^18.3.1): A JavaScript library for building user interfaces.
- **[React-DOM](https://reactjs.org/docs/react-dom.html)** (^18.3.1): The package that serves as the entry point for DOM-related rendering paths.
- **[React-Redux](https://react-redux.js.org/)** (^9.1.2): The official React bindings for Redux.
- **[React Router DOM](https://reactrouter.com/web/guides/quick-start)** (^6.26.2): Declarative routing for React.js.
- **[@reduxjs/toolkit](https://redux-toolkit.js.org/)** (^2.2.8): A set of tools for simplifying Redux usage and improving workflows.

#### UI and Styling

- **[MUI](https://mui.com/)** (^6.0.0): A React component library following Material Design specifications.
- **[MUI X Date Pickers](https://mui.com/x/react-date-pickers/)** (^7.19.0): A set of components for date and time selection.
- **[Sass](https://sass-lang.com/)** (^1.79.4): A preprocessor language that is interpreted or compiled into cascading style sheets (CSS).
- **[React Data Table Component](https://react-data-table-component.netlify.app/)** (^7.6.2): A library for managing data tables in React applications.

#### Utilities

- **[Day.js](https://day.js.org/)** (^1.11.13): A fast and lightweight alternative to Moment.js for date management.
- **[Prop-Types](https://www.npmjs.com/package/prop-types)** (^15.8.1): Runtime type checking for React props and similar objects.
- **[React Hook Form](https://react-hook-form.com/)** (^7.53.0): A performant, flexible, and extensible form library for React.
- **[Redux Persist](https://github.com/rt2zz/redux-persist)** (^6.0.0): A library to persist and rehydrate a Redux store.
- **[sg-modal-lib](https://www.npmjs.com/package/sg-modal-lib)** (^1.1.7): A component for creating modals.
- **[States-US](https://www.npmjs.com/package/states-us)** (^1.1.1): A library for data on U.S. states.
- **[UUID](https://github.com/uuidjs/uuid)** (^10.0.0): A library for generating UUIDs.
- **[Styled-components](https://styled-components.com/)** (^6.1.13): A CSS-in-JS library that allows styling React components.

#### Development Tools

- **[Vite](https://vitejs.dev/)** (^5.4.8): A next-generation frontend development tool aimed at providing a faster and lighter development experience.
- **[ESLint](https://eslint.org/)** (^9.12.0): A tool for identifying and reporting errors found in ECMAScript/JavaScript code.
- **[ESLint Plugins](https://eslint.org/docs/user-guide/configuring/plugins)**: Plugins to extend ESLint's functionality, including `eslint-plugin-react` (^7.37.1) for React-specific linting rules.

### 🏆 Evaluated Skills

➡ Analyze the performance of a web application.<br>
➡ Deploy a front-end application.<br>
➡ Refactor an application to reduce technical debt.<br>
➡ Produce technical documentation for an application.<br>

### 👷‍♀️ Author

- **Ségolène Ganzin** - Initial work and main development ([GitHub Profile](https://github.com/segoleneganzin/))
