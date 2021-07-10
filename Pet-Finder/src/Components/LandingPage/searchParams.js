import { useState,useEffect } from "react";
import Results from "../Results/results";
import useBreedList from "../useBreedList/useBreedList";
import './searchParams.scss';


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);


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
         <form 
            onSubmit={ e =>{
                 e.preventDefault();
                 requestPets();
         }}>
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
                       {breeds.map((breed) => (
                            <option value={breed} key={breed}>
                                {breed}
                            </option>
                        ))}
                </select>
             </label>
             <button>submit</button>
         </form>
         <Results pets={pets} />
        </div>
    )
}

export default SearchParams;