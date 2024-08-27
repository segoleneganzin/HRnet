# HRnet

## Faire passer une librairie jQuery vers React

![Visuel du site](src/assets/screenshot.png)

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
- Table : [AG GRid React](https://www.ag-grid.com/react-data-grid/getting-started/)

Pour le moment, les données sont mockées (employees et departments). <br>
Les états américains permettant de remplir les options du select sont récupérés grâce à la bibliothèque [states-us](https://www.npmjs.com/package/states-us).

### 💡 Outils et technos

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,github,pnpm,redux)](https://skillicons.dev)

### 📈 Rapports de performances

### 🔨 Installation du projet

Le projet utilise NodeJS(v20.11.1) et `pnpm`<br>

➡ Cloner le projet<br>
➡ Ouvrir le dossier dans VSCode (ou tout autre IDE)<br>
➡ Installer les node-modules : `pnpm install`<br>

### 🚀 Lancement du projet

➡ Lancer l'application : `pnpm run dev`<br>

### ⚙ Contraintes techniques

➡ Utiliser Redux pour gérer le state de l'ensemble de l'application.<br>
➡ Coder en utilisant le paradigme de la programmation fonctionnelle.<br>
➡ Amélioration du style de l'application.<br>

### 🏆 Compétences évaluées

➡ Analyser la performance d'une application web.<br>
➡ Déployer une application front-end.<br>
➡ Refondre une application pour réduire la dette technique.<br>
➡ Produire de la documentation technique pour une application.<br>

# English version

# HRnet

## Migrating a jQuery Library to React

![Visuel du site](src/assets/screenshot.png)

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
- Table : [AG GRid React](https://www.ag-grid.com/react-data-grid/getting-started/)

Pour le moment, les données sont mockées (employees et departments). <br>
Currently, data (employees and departments) is mocked. U.S. states for populating the select options are retrieved using the [states-us](https://www.npmjs.com/package/states-us) library.

### 💡 Tools and Technologies

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,github,pnpm,redux)](https://skillicons.dev)

### 📈 Performance Reports

### 🔨 Project Installation

The project uses NodeJS(v20.11.1) and `pnpm`.<br>

➡ Clone the project<br>
➡ Open the folder in VSCode (or any other IDE)<br>
➡ Install the node modules: `pnpm install`<br>

### 🚀 Running the Project

➡ Start the application: `pnpm run dev`<br>

### ⚙ Technical Constraints

➡ Use Redux to manage the state of the entire application. <br>
➡ Code using the functional programming paradigm.<br>
➡ Improve the styling of the application.<br>

### 🏆 Evaluated Skills

➡ Analyze the performance of a web application.<br>
➡ Deploy a front-end application.<br>
➡ Refactor an application to reduce technical debt.<br>
➡ Produce technical documentation for an application.<br>
