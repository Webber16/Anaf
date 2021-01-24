import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [cui, setCui] = useState("");
  const [data, setData] = useState("");
  // const [info, setInfo] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [back, setBack] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // setInfo([{ cui, data }]);
    let info = [{ cui, data }];
    console.log(info);
    fetch("https://localhost:8080", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
      // }).then((response) => {
      //   console.log(info);
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setBack(response);
      });
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  // let raspuns = response;
  return (
    <div className="App">
      <h1>Motor Căutare CUI</h1>
      {/* {submitting && <div>Submitting Form...</div>} */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>CUI - exemplu: 1234</p>
            <input
              onChange={(event) => setCui(event.target.value)}
              value={cui}
              name="CUI"
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>DATA - exemplu: 2020-01-17</p>
            <input
              onChange={(event) => setData(event.target.value)}
              value={data}
              name="DATA"
            />
          </label>
        </fieldset>
        <button type="submit">CAUTĂ</button>
      </form>

      <table>
        <tr>
          {back && (
            <p>
              <th>CUI - </th> <td> {back.found[0].cui}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Denumire - </th> <td>{back.found[0].denumire}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Adresa - </th> <td>{back.found[0].adresa}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>SCP TVA - </th> <td>{back.found[0].scpTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată început SCP TVA - </th>{" "}
              <td>{back.found[0].data_inceput_ScpTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată sfârșit SCP TVA - </th>{" "}
              <td>{back.found[0].data_sfarsit_ScpTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Anul imp SCP TVA - </th>{" "}
              <td>{back.found[0].data_anul_imp_ScpTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Mesaj SCP TVA - </th> <td>{back.found[0].mesaj_ScpTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată început TVA inc - </th>{" "}
              <td>{back.found[0].dataInceputTvaInc}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată sfârșit TVA inc - </th>{" "}
              <td>{back.found[0].dataSfarsitTvaInc}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată actualizare TVA inc - </th>
              <td>{back.found[0].dataActualizareTvaInc}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată publicare TVA inc - </th>{" "}
              <td>{back.found[0].dataPublicareTvaInc}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Tip act TVA inc - </th> <td>{back.found[0].tipActTvaInc}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Status TVA încasare - </th>{" "}
              <td>{back.found[0].statusTvaIncasare}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată inactivare - </th>{" "}
              <td>{back.found[0].dataInactivare}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată reactivare - </th>{" "}
              <td>{back.found[0].dataReactivare}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată publicare - </th> <td>{back.found[0].dataPublicare}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată radiere - </th> <td>{back.found[0].dataRadiere}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Status inactivi - </th>{" "}
              <td>{back.found[0].statusInactivi}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată început Split TVA - </th>{" "}
              <td>{back.found[0].dataInceputSplitTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Dată anulare Split TVA - </th>{" "}
              <td>{back.found[0].dataAnulareSplitTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>Status Split TVA - </th>{" "}
              <td>{back.found[0].statusSplitTVA}</td>
            </p>
          )}
        </tr>
        <tr>
          {back && (
            <p>
              <th>IBAN - </th> <td>{back.found[0].iban}</td>
            </p>
          )}
        </tr>
      </table>
      <footer>
        <p>2021 | Poenar I. Bogdan</p>
        <p>poenarbogdan@yahoo.com</p>
      </footer>
    </div>
  );
}

export default App;
