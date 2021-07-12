import { useState , useEffect , useContext } from "react";
import ThemeContext from "../ThemeContext/themeContext";
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
    const [theme, setTheme] = useContext(ThemeContext);


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
             <label gtmlFor="theme">
                 <select value={theme} onChange={e => setTheme(e.target.value)} onBlur={e =>setTheme(e.target.value)}>
                     <option value="darkblue">Dark Blue</option>
                     <option value="peru">Peru</option>
                     <option value="pink">Pink</option>
                     <option value="crimson">Crimson</option>
                     <option value="chartreuse">Chartreuse</option>
                     <option value="mediumorchid">Medium Orchid</option>

                 </select>
             </label>
             <button style={{ backgroundColor: theme }}>submit</button>
         </form>
         <Results pets={pets} />
        </div>
    )
}

export default SearchParams;