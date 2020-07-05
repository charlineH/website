# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Install project
Pour pouvoir contribuer au projet vérifier que les outils suivants sont bien installés et suivre les étapes de configuration du poste.

### Git
Utiliser pour le versionning du projet.

Téléchargement de l'installateur ici : [ici](https://gitforwindows.org/)

**NOTE** : Pour ouvrir une invite de commande git bash : 
 1. Aller dans le dossier souhaité en utilisant l'Explorateur de fichier windows
 1. Faire une click droit
 1. Sélection Open git bash here

### NodeJs

Language utilisé pour l'angular

Téléchargement de l'installateur ici : https://nodejs.org/fr/download/

### Vscode
Logiciel utilisé pour écrire du code.

Téléchargement de l'installateur ici : https://code.visualstudio.com/download

Liste des extensions utile pour développer en angular:
* Angular Essential (Version 9)
* Gitlens - Git supercharged

### Lier son ordinateur à github

Suivre les procédures du chapitre [Connection à Github avec le protocole SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

Recommendation : 
* Ne pas faire la deuxième sous partie (_Checking for existing SSH keys_)
* Ne pas mettre de passphrase au moment de la génération de la clé. Appuyer sur entrée

### Récupérer le projet sur son poste.

1. Aller dans le dépôt github du projet website
1. Cliquer sur le bouton vert "Code"
1. Copier l'addresse SSH (dans l'input) présente dans la partie "Clone with SSH"
1. Ouvrir git bash
1. Taper la commande `git clone <addresse SSH copiée juste avant>` et faire Entrée

## Installer et lancer le projet

### Installation du projet et de ses dépendances

1. Ouvrir git bash dans le dossier du projet
1. Aller dans le dossier new-website avec la commande `cd new-website`
1. Taper la commande `npm install -g @angular/cli` pour installer angular sur l'ordinateur
1. Taper la commande `npm install` pour installer les dépendances du projet

### Lancer le projet sur l'odinateur
 1. Ouvrir git bash dans le dossier du projet.
 1. Aller dans le dossier new-website avec `cd new-website`
 1. Taper la commande `ng serve`
 1. Ouvrir Chrome et aller à l'addresse `https://localhost:4200`
