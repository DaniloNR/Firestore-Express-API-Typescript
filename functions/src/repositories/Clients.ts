import * as admin from 'firebase-admin'

class clientRepository {
  create(client) {
    return admin.firestore().collection('clients').add(client)
  }
  read() {
    return admin.firestore().collection('clients').get()
  }
  update(id, client) {
    return admin.firestore().collection('clients').doc(id).update(client)
  }
  delete(id) {
    return admin.firestore().collection('clients').doc(id).delete()
  }
  find(id) {
    return admin.firestore().collection('clients').doc(id).get()
  }
}

export default new clientRepository()