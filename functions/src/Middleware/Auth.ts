import * as admin from 'firebase-admin'

export class Auth {

  public firebaseAuth(req, res, next): void {
    if (req.header('Authorization')) {
      admin.auth().verifyIdToken(req.header('Authorization'))
        .then(user => {
          res.locals.user = user
          next()
        })
        .catch(err => {res.status(401).json(err)})
    } else {
      res.status(401).json({ error: 'Authorization header is not found'})
    }
  }
}