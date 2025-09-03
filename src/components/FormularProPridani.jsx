import React, { useEffect, useState } from "react";
import "./FormularProPridani.css";

function FormularProPridani({ data, pridaniPsa }) {
  const [novyPes, setNovyPes] = useState({
    id: data.length > 0 ? Math.max(data.id) + 1 : 0,
    name: "",
    breed: "",
    age: "",
  });
  const [validacePsa, setValidacePsa] = useState(false);

  const handleAdd = (e) => {
    const zdroj = e.target.name;
    const hodnota = e.target.value;
    let pridejPsa;

    switch (zdroj) {
      case "name":
        pridejPsa = { ...novyPes, name: hodnota };
        break;
      case "breed":
        pridejPsa = { ...novyPes, breed: hodnota };
        break;
      case "age":
        pridejPsa = { ...novyPes, age: hodnota };
        break;
      default:
        break;
    }
    setNovyPes(pridejPsa);
  };
  //Validace noveho psa - pokud neni zadana jedina hodnota ve formulari, tlacitko je neaktivni
  const kontrolaPridaniPsa = () => {
    if (novyPes.name === "" || novyPes.breed === "" || novyPes.age === "") {
      setValidacePsa(false);
    } else {
      setValidacePsa(true);
    }
  };
  useEffect(() => {
    kontrolaPridaniPsa();
  }, [novyPes]);

  return (
    <div className="row d-flex justify-content-center text-center">
      <div className="col-sm-4 col-md-3 col-lg-2 col-4">
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          placeholder="Jmeno"
          value={novyPes.name}
          onChange={handleAdd}
        />
      </div>
      <div className="col-sm-4 col-md-3 col-lg-2 col-4">
        <input
          className="form-control"
          type="text"
          name="breed"
          id="breed"
          placeholder="Rasa"
          value={novyPes.breed}
          onChange={handleAdd}
        />
      </div>
      <div className="col-sm-4 col-md-3 col-lg-1 col-4">
        <input
          className="form-control"
          type="Number"
          name="age"
          id="age"
          placeholder="Vek"
          value={novyPes.age}
          onChange={handleAdd}
        />
      </div>
      <div className="row my-5">
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
          <button
            className="btn btn-danger btn-large"
            disabled={!validacePsa}
            onClick={() => pridaniPsa(novyPes)}
          >
            Pridej psa
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormularProPridani;
