import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

export const loadUser = (uid) => {
    return new Promise((resolve, reject) => {
        firebase.database()
        .ref(`/users/${uid}`)
        .once('value')
        .then(snapshot => {
            const userData = snapshot.val();
            //aqui se valida si tiene asciada una imagen de avatar
            if(userData.avatar){
                //cargar url de avatar
                firebase.storage().ref().child(`/avatars/${userData.avatar}`)
                .getDownloadURL().then((url) => {
                    //aqui se actuliza el atrivuto avatar
                    userData.avatar = url;
                    resolve(userData);
                },
                (error) => { 
                    console.log(userData);
                    resolve(userData);
                });
            } else {
                resolve(userData);
            }
        })
        .catch((error) => {
            reject(new Error('Error al leer los datos del usuario'));
        });
    });
};
