import React, {useState, useEffect}  from 'react';
import { parseISO, startOfWeek, endOfWeek, isWithinInterval } from 'date-fns';
import { Link } from 'react-router-dom';
import LogoUGA from './logo';

function Creneaux(){
    const [creneaux, setCreneaux] = useState([]);
    const [creneauxem, setCreneauxem] = useState([]);
  
    useEffect(() => {
  fetch("http://localhost:3001/rpc/get_cours_enseignant?id_enseignant=1")
    .then((response) => response.json())
    .then((data) => {
      const now = new Date();
      const start = startOfWeek(now);
      const end = endOfWeek(now);

      const weeklyCreneaux = data.filter((creneau) => {
        const date = parseISO(creneau.date_heure);
        return isWithinInterval(date, { start, end });
      });

      setCreneaux(weeklyCreneaux);
    });
    fetch("http://localhost:3001/rpc/get_cours_emarges?id_enseignant=1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCreneauxem(data);})
}, []);

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
<br />
<h1 class="text-4xl font-extrabold dark:text-white text-center m-10">Créneaux pas encore émargés</h1>
<table class="table-auto m-auto border-collapse border border-slate-400">
  <thead className='bg-blue-950 text-orange-600'>
    <tr>
      <th class="border border-slate-300 ">Heure de début</th>
      <th class="border border-slate-300 ">Promo</th>
      <th class="border border-slate-300 ">Matière</th>
      <th class="border border-slate-300 ">Séance</th>
      <th class="border border-slate-300 ">Groupe</th>
      <th class="border border-slate-300 ">Action</th>
    </tr>
  </thead>
  <tbody>
  {creneaux.map((c) => (
              <tr key={c.creneau_id}>
                <td>{c.date_heure}</td>
                <td>{c.nom_promotion}</td>
                <td>{c.nom_matiere}</td>
                <td>{c.nom_seance}</td>
                <td>{c.nom_groupe}</td>
                <td><a href={`/emargement?id=${c.creneau_id}`}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#1C274C"></path> </g></svg></a></td>
              </tr>
            ))}
    </tbody>
    </table>
    <h2 class="text-4xl m-10 font-extrabold dark:text-white text-center">Créneaux déjà émargés</h2>
<table class="table-auto m-auto border-collapse border border-slate-400">
  <thead className='bg-blue-950 text-orange-600'>
    <tr>
      <th class="border border-slate-300 ">Heure de début</th>
      <th class="border border-slate-300 ">Promo</th>
      <th class="border border-slate-300 ">Matière</th>
      <th class="border border-slate-300 ">Séance</th>
      <th class="border border-slate-300 ">Groupe</th>
      <th class="border border-slate-300 ">Action</th>
    </tr>
  </thead>
  <tbody>
  {creneauxem.map((cr) => (
              <tr key={cr.creneau_id}>
                <td>{cr.date_heure}</td>
                <td>{cr.nom_promotion}</td>
                <td>{cr.nom_matiere}</td>
                <td>{cr.nom_seance}</td>
                <td>{cr.nom_groupe}</td>
                <td><a href={`/emargement?id=${cr.creneau_id}`}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20.75C10.078 20.7474 8.23546 19.9827 6.8764 18.6236C5.51733 17.2645 4.75265 15.422 4.75 13.5C4.75 13.3011 4.82902 13.1103 4.96967 12.9697C5.11032 12.829 5.30109 12.75 5.5 12.75C5.69891 12.75 5.88968 12.829 6.03033 12.9697C6.17098 13.1103 6.25 13.3011 6.25 13.5C6.25 14.6372 6.58723 15.7489 7.21905 16.6945C7.85087 17.6401 8.74889 18.3771 9.79957 18.8123C10.8502 19.2475 12.0064 19.3614 13.1218 19.1395C14.2372 18.9177 15.2617 18.37 16.0659 17.5659C16.87 16.7617 17.4177 15.7372 17.6395 14.6218C17.8614 13.5064 17.7475 12.3502 17.3123 11.2996C16.8771 10.2489 16.1401 9.35087 15.1945 8.71905C14.2489 8.08723 13.1372 7.75 12 7.75H9.5C9.30109 7.75 9.11032 7.67098 8.96967 7.53033C8.82902 7.38968 8.75 7.19891 8.75 7C8.75 6.80109 8.82902 6.61032 8.96967 6.46967C9.11032 6.32902 9.30109 6.25 9.5 6.25H12C13.9228 6.25 15.7669 7.01384 17.1265 8.37348C18.4862 9.73311 19.25 11.5772 19.25 13.5C19.25 15.4228 18.4862 17.2669 17.1265 18.6265C15.7669 19.9862 13.9228 20.75 12 20.75Z" fill="#000000"></path> <path d="M12 10.75C11.9015 10.7505 11.8038 10.7313 11.7128 10.6935C11.6218 10.6557 11.5392 10.6001 11.47 10.53L8.47 7.53003C8.32955 7.38941 8.25066 7.19878 8.25066 7.00003C8.25066 6.80128 8.32955 6.61066 8.47 6.47003L11.47 3.47003C11.5387 3.39634 11.6215 3.33724 11.7135 3.29625C11.8055 3.25526 11.9048 3.23322 12.0055 3.23144C12.1062 3.22966 12.2062 3.24819 12.2996 3.28591C12.393 3.32363 12.4778 3.37977 12.549 3.45099C12.6203 3.52221 12.6764 3.60705 12.7141 3.70043C12.7518 3.79382 12.7704 3.89385 12.7686 3.99455C12.7668 4.09526 12.7448 4.19457 12.7038 4.28657C12.6628 4.37857 12.6037 4.46137 12.53 4.53003L10.06 7.00003L12.53 9.47003C12.6704 9.61066 12.7493 9.80128 12.7493 10C12.7493 10.1988 12.6704 10.3894 12.53 10.53C12.4608 10.6001 12.3782 10.6557 12.2872 10.6935C12.1962 10.7313 12.0985 10.7505 12 10.75Z" fill="#000000"></path> </g></svg></a></td>
              </tr>
            ))}
    </tbody>
    </table>
</main>
    );
}
export default Creneaux;