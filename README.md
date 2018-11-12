# Firestore-Express-API-Typescript
A REST API using firebase, firestore as database, express js and typescript.

To setup just configure your .firebaserc with your project name

{
  "projects": {
    "default": "[YOUR-PROJECT]"
  }
}

To watch typescript for changes:
cd functions
npm run watch

To run a local server run (on project root folder): 
firebase serve

OBS: You will have to restart the local serve every time you make some changes. Also, the typescript watcher must run alognside so the changes may take effect.

All routes are mappet to webAPI function, you can check all logs on firebase console.
