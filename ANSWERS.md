# Theoretical Knowledge Assessment

## Database & ORM Questions

- Q1. Database Choice Explain the difference between SQL and NoSQL databases. In what scenarios would you choose one over the other? Give a concrete example for each.

`SQL permet la structure des données via le lien entre les tables (foreign et primary keys), c'est idéal pour créer de la cohérence entre les données. NoSQL est utile lors de l'enregistrement de données volumineuses grâce aux documents présents dans les collections. La préférence de NoSQL va se trouver lors de la gestion de beaucoup de données (réseaux sociaux, shop) tandis que le SQL va être préféré lors de l'utilisation de données liées à différentes sujets (banques, RH). `

- Q2. ORM Understanding What is an ORM (Object-Relational Mapping)? What are the main advantages and potential drawbacks of using an ORM like Prisma or TypeORM in a Node.js application?

`Un ORM permet la liaison et la communication entre le serveur backend ainsi qu'avec la base de données. Celui-ci permet de réaliser des requêtes à la base de données tout en evitant les injections SQL d'un utilisateur malveillant. Cela permet aussi une facilité d'utilisation de la base de données du développeur car il offre une meilleure lisibilité en utilisant des objets. En cas de mauvaise utilisation des ORM, il se peut que des soucis de performances d'ajoutent à cause d'une mauvaise manipulation des données. Et l'utilisation d'un ORM est plus stricte qu'une requete SQL classique (ou NoSQL pour Mangoose).`

- Q3. Database Relations In the context of our TODO application, imagine we want to add "Categories" where each TODO belongs to one category, but each category can have multiple TODOs. What type of database relationship is this? How would you structure this in a relational database?

`Il s'agit d'une relation One to Many car une tâche peut posséder une catégorie mais chaque catégorie peut être utilisée plusieurs fois. Dans le cadre de tables SQL, il faudrait ajouter une donnée qui donne stocke une foreign key vers la table des catégories vers la catégorie correspondante qui elle meme possède une primary key qui permet l'identification.`

## API Design Questions

- Q4. RESTful Principles Explain what makes an API "RESTful". What are the key principles of REST architecture? In our TODO API, why did we use different HTTP methods (GET, POST, PUT, DELETE)?

`Il faut que l'API soit stateless (donc qui ne stocke pas d'état pour les données et permet l'indépendance de chaque requête. Chaque valeur de l'API est identifiée à un chemin spécifique ce qui permet une grande facilité pour retrouver ces données lors des appels d'API. Chaque type de méthodes HTTP permettent une utilisation propre des données (afin de manipuler ou retrouver les données tels qu'on le souhaite) : GET (récupération de données), POST (Ajout de données), PUT (Modification de données existantes)et DELETE (suppression de données).`

- Q5. API Status Codes For each of the following scenarios, what HTTP status code would you return and why?
    - Successfully creating a new TODO `: 201 => creation in a POST request`
    - Requesting a TODO that doesn't exist `: 404 => not found`
    - Trying to update a TODO with invalid data `: 400 => bad request`
    - Server encounters an unexpected error `: 500 => Internal server error`

`Chaque code de statut concerne un type de retour d'information. Les principaux sont les suivants. Entre 200 et 299, ce sont les codes positifs de retours. Entre 300 et 399, ce sont les codes de redirections (au cas ou l'utilisateur se soit perdu ou que la requête réalisée nécessite une redirection vers une page spécifique, par ex: après validation du login, redirection vers la page de l'utilisateur). Entre 400 et 499 ce sont des erreurs provenant du client (par exemple le dev à entré une mauvaise données lors de l'envoi d'un formulaire ou un appel à été fait mais n'existe pas au chemin spécifié). Entre 500 et 599, ce sont les codes erreurs du serveur (il y a eut une erreur du chargement d'une page à cause d'un rechargement du serveur et cela empeche le client d'aller plus loin dans son processus).`

- Q6. API Versioning Why is API versioning important? Describe at least two different approaches to versioning an API (e.g., /api/v1/todos vs /api/todos).

`L'intérêt de créer des versions différentes d'API permet une réécriture des points d'API sans perturber les versions déployées. Ce système est intéressant dans le cas d'application conséquentes qui peuvent évoluer avec le temps (c'est-à-dire la grande majorité des applications avec un but de business). Il est possible de créer du versionning directement dans l'url des requêtes mais il est aussi possible d'ajouter la version dans le body ou encore dans le header des requêtes. En insérant la version directement dans l'url, cela permet d'avoir une visibilité rapide sur la version mais cela peut aussi allonger celle-ci.`

## Frontend Concepts

- Q7. State Management Explain the difference between local component state (useState), global state management (Context API, Redux), and server state management (React Query). When would you use each?

`La gestion de l'état en locale permet la gestion des données nécesssaire aux composants présents sur la page et la gestion des inputs (permet une manipulation en locale tout comme une variable locale). La gestion globale d'état permet le stockage et la gestion des données synchrones nécessaire à travers l'ensemble d'une application (gestion de la session/authentification, gestion du thème, notifications). La gestion d'état au niveau serveur permet la gestion des données asynchones (qui ne sont pas prérequises à l'affichage d'une page et qui peuvent apparaître plus tard). Celle-ci va être utilisées lors de la gestion des items du site (par exemple le catalogue de produits d'un shop).`

- Q8. React Query Benefits Why did we choose React Query for this exercise instead of using regular fetch calls with useEffect? List at least 3 specific benefits.

`useEffect est un hook intégré à React permettant la gestion des données dans différents contextes (à chaque frames, à l'affichage de la page ou encore à chaque changement de valeur d'une ou plusieurs variables). React Query permet une optmisation des performances en gérant lui-même certains aspects comme le caching (récupération accélérée des données déjà fetchée une première fois), le chargement différé (lazy loading, qui permet à un élément de charger en asynchrone afin de faciliter le chargement de la page principale affichée) ou encore accéler la mise à jour des données lors des appels API.`

- Q9. Component Design What is the difference between a "controlled" and "uncontrolled" component in React? Which approach did you use for your TODO form and why?

`Un composant controllé est un composant qui gère un état et qui le manipule, à l'inverse le composant non-controllé peut afficher des données mais en aucun cas le controlle. Idéallement on préfère avoir le moins de composant controllé afin de mettre en cache les composants non-controllés (et donc accélère l'affichage de ceux-ci) et le composant parent controllant ces mêmes composants permet la gestion plus globale de ceux-ci. Dans le projet, j'ai eut le temps de créer le composant 'status' qui est un composant non-controllé mais qui reçoit sa fonction de modification depuis le parent qui, lui, modifie les données. Cela permet d'éviter de se répéter dans différents composants et de rassembler les données au même niveau lors de l'envoi des données par exemple pour un form.`

## Server-Side vs Client-Side Rendering

- Q10. SSR vs CSR Explain the difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR). What are the advantages and disadvantages of each approach?

`Le SSR permet la génération des pages HTML en amont (donc au niveau du serveur) afin d'alléger le client lorsqu'il reçoit la page. Ceci permet une facilitation de génération du SEO car les robots des moteurs de recherche ne doivent pas faire charger l'ensemble de la page du côté client. Ceci pose un soucis au niveau du coût serveur car c'est lui qui encaisse l'ensemble des chargements des pages. Au contraire, le CSR, le serveur ne génère rien et envoi au client une version simplifiée du site et donc c'est au client de générer sa page HTML. Cela permet une grande capacité au niveau de l'interactivité au niveau client mais cela va ralentir le chargement initiale de la page et durant l'utilisation de celle-ci. Il est donc essentiel de mixer les deux pratiques afin d'améliorer l'expérience utilisateur au chargement initial de la page mais de laisser une grande capacité d'interaction du client.`

- Q11. Next.js Rendering In Next.js App Router, what is the difference between a Server Component and a Client Component? When would you use 'use client' directive and why?

`La directive 'use client' ou 'use server' permet de distinguer les chargements réalisés côtés client ou côté serveur (voir SSR vs CSR). Tous les composants vont être clients et les routes d'API vont être serveur. Entre les deux, on va mixer les deux pratiques pour accéler le chargement de la page et permettre une interaction fluide de l'utilisateur avec l'UI/UX.`

- Q12. Hydration What is "hydration" in the context of React and Next.js? Why is it important for SSR applications?

´L'hydratation est la gestion de la DOM par React. React essaye d'ajouter des évènements à la DOM tout en affichant celle-ci. C'est donc une gestion entre le pré-rendu de la page HTML et l'amélioration de l'interactivité et des fonctionnalité. Souvent, il est possible que l'hydratation ne se fait pas correctement car React suis une suite précise des rendus et des processus. Et donc lors d'une modification de variable, si nous faisons une mauvaise utilisation d'un hook ou une manipulation classique javascript, alors, il est possible que le changement souhaité ne s'applique pas (et peut aussi créer des erreurs de ce fait).´

## Performance & Best Practices

- Q13. Code Splitting What is code splitting and why is it important for web application performance? How does Next.js handle code splitting automatically?

`Cela permet de charger uniquement le code nécessaire à l'affichage et la gestion d'une page/composant. Next.js l'applique automatiquement via la gestion des routes et notamment lors du préchargement de certaines pages. Donc il va créer un package avec le code nécessaire pour la page sélectionnnée de l'utilisateur. C'est aussi utilisé lors de l'utilisation du composant Link de next qui va pré-charger les éléments nécessaires au cas où l'utilisateur souhaite cliquer sur le bouton/lien.`

- Q14. TypeScript Benefits You were required to use TypeScript for this exercise. Explain 3 specific benefits TypeScript provides compared to plain JavaScript, especially in a team environment.

`Typescript permet le typage du code. C'est un avantage par rapport à Javascript car cela permet une optimisation des données (le type de données est prédéfinis à sa création et donc permet au système d'allouer une partie plus restreinte stockage en fonction du type), il permet d'éviter les erreurs entre les échanges (en spécifiant le type de données en input et en output d'une fonction, cela empêche toute erreurs en cas d'utilisation car le compilateur sera mis en erreur, javascript est beaucoup plus permissif à ce niveau-là).`

- Q15. Security Considerations Imagine our TODO API is now public and accessed by a web frontend. What are 3 security concerns you would need to address? (Think about authentication, data validation, CORS, etc.)

`Pour tout accès de données, il faut une gestion d'utilisateurs (et donc aussi de session pour vérifier régulièrement la validation des tokens de sessions => si la session est expirée ou non, le hashage des mots de passes). Celle-ci doit-être gérée par le middleware qui, avant de charger une page ou un élément, va faire ses différents checks d'authentification. Il faut aussi penser à envoyer le moins de données possible depuis le frontend lors de la gestion de données vers le backend (possible de trouver les informations du user depuis le backend et de gérer la modification des données en accords avec les restrictions de l'entreprise), tout cela en bloquant un maximum au niveau frontend les données potentiellement fauduleuses/incorrectes. Et pour finir le déploiement du site en protocole sécurisé (HTTPS) afin de limiter les échanges frauduleux des pages.`