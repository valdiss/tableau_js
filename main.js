document.addEventListener("DOMContentLoaded", function() {

    let people = [{
        firstname: "Valentin",
        surname: "Dissais",
        adress: "Aix"
    }, {
        firstname: "Guillaume",
        surname: "Denis",
        adress: "Marseille"
    }, {
        firstname: "Alexandra",
        surname: "Dubost",
        adress: "Marseille"
    }, {
        firstname: "Jessica",
        surname: "chéplu",
        adress: "Marseille"
    }];

    let th = document.createElement('th');
    th.innerHTML = 'Nom';
    document.querySelector('thead tr').appendChild(th);

    th = document.createElement('th');
    th.innerHTML = 'Adresse';
    document.querySelector('thead tr').appendChild(th);


    let td;
    let tr;
    let tbody = document.querySelector('tbody');
    for (let i = 0; i < people.length; i++) {
        tr = document.createElement('tr');
        tbody.appendChild(tr);

        td = document.createElement('td');
        td.innerHTML = people[i].firstname;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = people[i].surname;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = people[i].adress;
        tr.appendChild(td);
    }
    let btnv = document.querySelector('form #valider');
    btnv.addEventListener("click", function() {
        let inputp = document.getElementById('prenom');
        let inputn = document.getElementById('nom');
        let inputa = document.getElementById('adress');

        if (inputp.value && inputn.value && inputa.value) {
            tr = document.createElement('tr');
            tbody.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = inputp.value;
            tr.appendChild(td);
            inputp.value = '';

            td = document.createElement('td');
            td.innerHTML = inputn.value;
            tr.appendChild(td);
            inputn.value = '';

            td = document.createElement('td');
            td.innerHTML = inputa.value;
            tr.appendChild(td);
            inputa.value = '';
        } else {
            alert('Veuillez remplir tous les champs!');
        }
    });

    let btna = document.querySelector('form #annuler');
    btna.addEventListener("click", function() {
        if (document.querySelector('tbody tr:last-child')) {
            document.querySelector('tbody tr:last-child').remove();
        }
        else {
          alert('Y\'a plus de lignes à supprimer gros!');
        }
    });
});

// - Regarder les createDocumentFragment OK
// - Ajouter d'autres colonnes OK
// - Pouvoir ajouter des lignes avec une formulaire OK
// - Pouvoir supprimer des lignes OK
// - Pouvoir les réordonner
// - Recharger la page et les modifications
// - Back : aller chercher les infos sur une API, faire des mises à jour sans rafraîchir la page
