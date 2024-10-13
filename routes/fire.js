const admin = require("firebase-admin");

const serviceAccount = require("../proyek-kp-7ed06-firebase-adminsdk-n1ubv-b0948aedb7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
