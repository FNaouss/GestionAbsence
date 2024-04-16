import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import LogoUGA from './logo';

function Emargement(){
    const [etudiants, setEtudiants] = useState([]);
    const [presence, setPresence] = useState([]);
    
    const postData = {
      id : 200,
      nom: "Idrissi",
      prenom:"Taha",
      id_promo: 2,
      gestionnaire_id: 2,
      // Add other fields as necessary
    };
  
    useEffect(() => {
      fetch("http://localhost:3001/etudiant")
        .then((response) => response.json())
        .then((data) => setEtudiants(data));
    }, []);
  
    const handlePresenceChange = (idEtudiant, etat) => {
      setPresence((prevPresence) => {
        const newPresence = prevPresence.slice();
        newPresence[idEtudiant] = etat;
        return newPresence;
      });
    };
  
    const handleSave = () => {
      const etudiantsPresent = etudiants.filter(etudiant => presence[etudiant.id] === "present");
      const postData = etudiantsPresent.map(etudiant => ({
        creneau_id:2,
        etudiant_id: etudiant.id,
        // Ajoutez d'autres champs si nécessaire
      }));
      fetch("http://localhost:3001/presence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle successful response here if needed
      console.log('Data inserted successfully');
    })
    .catch(error => {
      // Handle error here
      console.error('Error inserting data:', error);
    });;
    };
    
    
    

    return(
        <main>
        <div className="App">
       <div className="shadow-md w-full relative top-0 left-0">
      <div className="md:flex items-center justify-between bg-teal-300 py-2 md:px-10 px-7 h-24">
        <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800 justify-between">
          <LogoUGA />
          <h1>Gestionnaire d'absences</h1>
        </div>
      </div>
        </div>
        <nav class="bg-blue-950">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
        <div class="hidden sm:ml-6 sm:block">
          
          <div class="flex float-left space-x-4">
          <div class="relative mt-2 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </span>
    </div>
    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Entrez un nom d'étudiant"/>
</div>
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Historique</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <div class="relative ml-3">
          <div>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
    <div class='max-w-md mx-auto'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Historique</a>
    </div>
  </div>
</nav>
</div>
<table class="table-auto m-auto border-collapse border border-slate-400">
  <thead className='bg-blue-950 text-orange-600'>
    <tr>
      <th class="border border-slate-300 ">Nom et Prénom</th>
      <th class="border border-slate-300 ">Présent</th>
      <th class="border border-slate-300 ">Absent</th>
      <th class="border border-slate-300 ">Retard</th>
    </tr>
  </thead>
  <tbody>
  {etudiants.map((etudiant) => (
              <tr key={etudiant.id}>
                <td>{etudiant.nom} {etudiant.prenom}</td>
                <td>
                  <input
                    type="radio"
                    name={etudiant.id}
                    value="present"
                    checked={presence[etudiant.id] === "present"}
                    onChange={() => handlePresenceChange(etudiant.id, "present")}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={etudiant.id}
                    value="retard"
                    checked={presence[etudiant.id] === "retard"}
                    onChange={() => handlePresenceChange(etudiant.id, "retard")}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={etudiant.id}
                    value="excuse"
                    checked={presence[etudiant.id] === "excuse"}
                    onChange={() => handlePresenceChange(etudiant.id, "excuse")}
                  />
                </td>
              </tr>
            ))}
    </tbody>
    </table>       <button onClick={handleSave}>Enregistrer</button>
</main>
    );
}
export default Emargement;