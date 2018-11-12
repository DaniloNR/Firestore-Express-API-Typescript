# Firebase Firestore ExpressJs API with Typescript
A REST API using firebase, firestore as database, express js and typescript.

### Prerequisites
1. The latest copy of the `firebase-tools`.
2. The latest version of `firebase-admin` and `firebase-functions`

### Configuration
To start just configure your .firebaserc with your project name
```javascript
{
  "projects": {
    "default": "[YOUR-PROJECT]"
  }
}
```
Install packages under root and inside functions folder:
1. `$ npm install`
2. `$ cd functions`
3. `$ npm install`

To watch typescript for changes:
1. `$ cd functions`
2. `$ npm run watch`

To run a local server run (on project root folder): 
* `$ firebase serve`

OBS: You will have to restart the local server every time you make some changes. Also, the typescript watcher must run alognside so the changes may take effect.

All routes are mapped to webAPI function, you can check all logs on firebase console.
