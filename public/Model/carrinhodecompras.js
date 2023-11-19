
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBlgxMItCttU0-FU9aEWfMol0nw3Xyfvpw",
    authDomain: "cupcakedreams-afaff.firebaseapp.com",
    databaseURL: "https://cupcakedreams-afaff-default-rtdb.firebaseio.com",
    projectId: "cupcakedreams-afaff",
    storageBucket: "cupcakedreams-afaff.appspot.com",
    messagingSenderId: "188111181236",
    appId: "1:188111181236:web:4340fb85f99bf6acd64ee1",
    measurementId: "G-E05WEXKT3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

 // Menu carrinho.
document.querySelector('#btn-proximo').addEventListener('click', () => {
    const total = document.getElementById("total");
    const texto = total.innerText

    const items = document.querySelectorAll('ul[id="lista-carrinho"]');

    const carrinho = []
    for (const item of items) {
        carrinho.push(item.innerText);

    }
  
    push(ref(db, 'carrinho/'), {
        pedido: carrinho,
        total: texto

    })
        .then(() => {
            // Encomenda registra.
            window.location.href = '../View/testeformcorp.html';
        })
        .catch(() => {
            // Ocorreu um erro ao tentar registra.
            alert('Erro ao registrar');
        });
});


