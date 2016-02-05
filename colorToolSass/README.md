## Color tool by Matthieu Coulon

Fichier SCSS pour ajouter plusieurs couleurs et des options darker et lighter
pour assombrir ou éclaircir. S'utilise directement dans le html après compilation
du fichier scss.

**A inclure : **
le fichier styles.css déjà compilé
```html
<link rel="stylesheet" type="text/css" href="stylesheets/styles.css">
```

**Par exemple :**

```html
<h4 class="tag-red lighter-5"> Hello World</h4>
```

Le nom peut être changé
``` css
$colors : (
    "purple"    :#d645de,
    "red"       : #c0392b,
    "green"     : #2ecc71,
    "blue"      : #3498db,
    "yellow"    : #f1c40f,
    "orange"    : #e67e22,
    "black"     : #000000,
    "grey"      : #95a5a6,
    "cyan"      : #95a5a6,
    "blue-grey" : #34495e,
    "default"   : #34495e
);

// pour chaque couleur on crée une classe .tag-couleur avec le background qui va.
@each $nom, $bgcolor in $colors {
    .tag-#{$nom} { background-color:$bgcolor; }
 }
```

ici :

        .tag-#{$nom}
