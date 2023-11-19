import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

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

const dbRef = ref(db, 'encomendas');

const lista = document.querySelector('.lista_pedidos')


onValue(dbRef, (snapshot) => {
    lista.innerHTML = ''

    let codigo = 156
    snapshot.forEach((pedidos) => {
        codigo++
        const dados = pedidos.val();
        console.log(codigo)
        console.log(dados.nome)
        console.log(dados.mensagem)


        const card = `  <td>#00${codigo}</td>
                        <td>${dados.mensagem}</td>
                        <td>${dados.nome}</td>
                        <td>
                        <div class="row">
                        <div class="col-md-5"><label><input id="Check1" name="Check1" type="checkbox" value="Check1">Pronto</input></label></div>
                        <div class="col-md-5"><label><input id="Check2" name="Check2" type="checkbox" value="Check2">Enviado</input></label></div>
                        </div>
                        </td>`


        const tr = document.createElement('tr')
        tr.innerHTML = card
        lista.appendChild(tr)

    });
}, {

});