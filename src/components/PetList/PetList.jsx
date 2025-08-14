// src/components/PetList/PetList.jsx

const PetList = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        <ul>
          {props.pets.map((pet) => (
            <li key={pet._id}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};




export default PetList;
