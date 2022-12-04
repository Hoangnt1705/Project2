window.onload = () => {
    auth.onAuthStateChanged(user => {

        if (user && user.emailVerified) {
            view.setScreenActive("cart");
            // model.getListMessage1 = async () => {
            //     try {
            //         let response = await firebaseApp.firestore()
            //             .collection("listMessage")
            //             .doc("HCPeFmWVSvC2Oh0twLJW")
            //             .get()
            //         let result = response.data().message
            //         console.log(result);
            //         view.renderListChat(result);
            //     } catch (error) {

            //     }
            // }
        }
        else {
            view.setScreenActive("cart")
        }
    });
}