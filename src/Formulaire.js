import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const Formulaire = () => {
  let navigate=useNavigate();
  const [dateDebut, setDateDebut] = useState(new Date());
  const [dateFin, setDateFin] = useState(new Date());
  const [motif, setMotif] = useState(''); // State to store chosen motif
  const [excuse, setExcuse] = useState('');
  const [justificatif, setJustificatif] = useState(null);
  const [motifs, setMotifs] = useState([]); // State to store motifs from database

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = (event) => {
      const arrayBuffer = event.target.result;
      const bytes = new Uint8Array(arrayBuffer);
      setJustificatif('\\x' + Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(''));
    };
  };

  useEffect(() => {
    // Fetch motifs from database on component mount
    fetch('http://localhost:3001/motif') // Replace with your actual motifs API endpoint
      .then((response) => response.json())
      .then((data) => setMotifs(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Gérer la logique de soumission d'excuse ici
    // Cela pourrait impliquer d'envoyer les données du formulaire à une API ou de les enregistrer localement
    const formData = {
      etatvalidation : 0,
      datedebut : dateDebut,
      datefin : dateFin,
      document : justificatif,
      motifabsence : motif,
      etudiant_id : 3,
      gestionnaire_id : 1
    };
    const response = await fetch('http://localhost:3001/justificatif', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      navigate("/");
    };

  return (
    <div>
    <Navbar />
   <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      

        <div class="col-span-full">
        <div className="sm:col-span-3">
        <label htmlFor="dateDebut" class="block text-sm font-medium leading-6 text-gray-900">Date de début : </label>
        <input
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          type="datetime-local"
          id="dateDebut"
          value={dateDebut}
          onChange={(event) => {const date = new Date(event.target.value);
  
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            const hours = ("0" + date.getHours()).slice(-2);
            const minutes = ("0" + date.getMinutes()).slice(-2);

            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:00`;
            console.log(formattedDate);
            setDateDebut(formattedDate); /*The specified value "Wed Apr 10 2024 02:00:00 GMT+0200 (heure dâÃ©tÃ© dâEurope centrale)" does not conform to the required format, "yyyy-MM-dd".*/}}
        />
        
        </div>
      <div className="sm:col-span-3">
        <label htmlFor="dateFin" class="block text-sm font-medium leading-6 text-gray-900">Date de fin : </label>
        <input
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          type="datetime-local"
          id="dateFin"
          value={dateFin}
          onChange={(event) => {const date = new Date(event.target.value);
  
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            const hours = ("0" + date.getHours()).slice(-2);
            const minutes = ("0" + date.getMinutes()).slice(-2);

            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:00`;
            console.log(formattedDate);
            setDateFin(formattedDate);}}
        />
      </div>
      <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Motif</label>
          <div class="mt-2">
            <select id="motif" value={motif} onChange={(event) => setMotif(event.target.value)} autocomplete="motif-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="">Sélectionnez un motif...</option>
            {motifs.map((motif) => (
            <option key={motif.id} value={motif.nom}>
              {motif.nom}
            </option>
          ))}
            </select>
          </div>
        </div>
        
      {motif === 'Autre' && (
        <div className="form-group">
          <label htmlFor="excuse">Excuse (si motif = autre):</label>
          <textarea
            id="excuse"
            value={excuse}
            onChange={(event) => setExcuse(event.target.value)}
          />
        </div>
      )}
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Informations supplémentaires</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>


        <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Justificatif</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Joindre un fichier</span>
                  <input name="file-upload" type="file" class=""  id="justificatif" onChange={(event) => {const file = event.target.files[0];
                  handleFileChange(event);}} />
                </label>
              </div>
              <p class="text-xs leading-5 text-gray-600">PDF, JPG, DOCX ...</p>
            </div>
          </div>
        </div>
      </div>
    </div> 

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Annuler</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Valider</button>
  </div>
</form>    
    </div>
  );
};

export default Formulaire;
