const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

/**
 * Borra los datos de Firestore del usuario cuando su cuenta de Firebase Auth
 * es eliminada (tanto desde la app como desde la consola de Firebase).
 */
exports.onUserDeleted = functions.auth.user().onDelete(async (user) => {
  await admin.firestore()
    .doc(`users/${user.uid}/workspace/data`)
    .delete()
    .catch(() => {}); // Si el documento ya no existe, ignorar
});
