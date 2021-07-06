import { useState,useEffect } from "react";
import Bird from '../Bird-Page/bird';
import './land.scss';


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);


    useEffect( () => {
        requestPets();
    },[]); // eslint-disable-line

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log(json);
        setPets(json.pets);
    }


    return(
        <div className="search-params">
         <form>
             <label htmlFor="location">
                 Location
                 <input id="location" onChange={(event) => setLocation(event.target.value)} value={location} placeholder="location" />
             </label>
             <br/>
             <label htmlFor="animal">
                Animal
                <select id="animal" value={animal} onChange={e => setAnimal(e.target.value)} onBlur={e => setAnimal(e.target.value)}>
                    <option />
                       {ANIMALS.map(animal => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>
                        ))}
                </select>
             </label>
             <br/>
             <label htmlFor="breed">
                Breeds
                <select id="breed" value={breed} onChange={e => setBreed(e.target.value)} onBlur={e => setBreed(e.target.value)}>
                    <option />
                       {BREEDS.map(breed => (
                            <option value={breed} key={breed}>
                                {breed}
                            </option>
                        ))}
                </select>
             </label>
             <button>submit</button>
         </form>
         {
            pets.map(pet => (
                <Bird name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
            ))
         }
        </div>
    )
}

export default SearchParams;