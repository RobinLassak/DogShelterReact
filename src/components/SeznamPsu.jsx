import React, { useState } from "react";
import "./SeznamPsu.css";

function SeznamPsu({ data, smazaniPsa }) {
  return (
    <div className="row d-flex justify-content-center text-center">
      <div className="col-sm-12 col-md-9 col-lg-5 col-12 my-5">
        <table className="table table-dark table-striped me-2 text-center">
          <thead>
            <tr>
              <th scope="col">Jmeno</th>
              <th scope="col">Rasa</th>
              <th scope="col">Vek</th>
              <th scope="col" className="text-center">
                Smazat
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((jedenPes) => (
              <tr key={jedenPes.id}>
                <td>{jedenPes.name}</td>
                <td>{jedenPes.breed}</td>
                <td>{jedenPes.age}</td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => smazaniPsa(jedenPes.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SeznamPsu;
