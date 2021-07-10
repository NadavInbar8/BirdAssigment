import Bird from '../Pet-Page/pet';

const Results =({ pets }) => {
    return(
        <div className="search">
            {
                !pets.length ? (
                    <h2>No Pets Found</h2>
                ) : (
                        pets.map( (pet) => (
                            <Bird 
                                name={pet.name} 
                                animal={pet.animal} 
                                breed={pet.breed} 
                                key={pet.id}
                                images={pet.images}
                                location={`${pet.city}, ${pet.state}`}
                                id={pet.id} 
                            />
                        ))
                    )
            }  
        </div>
    )
 }

 export default Results