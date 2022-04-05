import React, { useEffect, useState } from "react";
import "./Battle.css";
import axios from "axios";
import Card from "../../../Card";
import PokeListItem2 from "../../../BattleCard";
import ChartOne from "../../../ChartOne";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Battle() {
  const [genPokeListItem, setgenPokeListItem] = useState([]);
  const [genPokeListItem2, setgenPokeListItem2] = useState([]);
  const [pokemonstats, setPokeStats] = useState([]);

  const data = {
    labels: ["hp", "dmg", "atk", "special attack", "special deffence", "speed"],
    datasets: [
      {
        label: "# of Votes",
        data: pokemonstats,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
  //     .then((response) => {
  //       let pokemons = response.data.results;
  //       const pokeData = [];
  //       for (let i = 0; i < pokemons.length; i++) {
  //         pokeData.push({
  //           name: pokemons[i].name,
  //           url: pokemons[i].url,
  //         });
  //       }
  //       let startItem = pokeData.map((item) => (
  //         <Card pname={item.name} plink={item.url} />
  //       ));
  //       setgenPokeListItem(startItem);
  //     });
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
  //     .then((response) => {
  //       let pokemons = response.data.results;
  //       const pokeData2 = [];
  //       for (let i = 0; i < pokemons.length; i++) {
  //         pokeData2.push({
  //           name: pokemons[i].name,
  //           url: pokemons[i].url,
  //         });
  //       }
  //       let battleItem = pokeData2.map((item) => (
  //         <PokeListItem2 pname={item.name} plink={item.url} />
  //       ));
  //       setgenPokeListItem2(battleItem);
  //     });
  //     setPokeStats(localStorage.getItem("PokemonOne"));
  //     console.log(setPokeStats)
  // }, []);

  return (
    <>
      <div className="battleground">
        <div className="selectors">
          <div className="sel">
            <label class="dropdown">
              <div class="dd-button">Select a Pokemon</div>

              <input type="checkbox" class="dd-input" id="test" />

              <ul class="dd-menu">
                <li></li>
              </ul>
            </label>
          </div>

          <div className="sel">
            <label class="dropdown">
              <div class="dd-button">Select a Pokemon</div>

              <input type="checkbox" class="dd-input" id="test" />

              <ul class="dd-menu">
                <li>{genPokeListItem2}</li>
              </ul>
            </label>
          </div>
        </div>
        {/* <div className="row-1">
          
          <label class="dropdown">
            <div class="dd-button">Select a Pokemon</div>

            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li>{genPokeListItem}</li>
            </ul>
          </label>

          <div className="right">
           
            <label class="dropdown">
              <div class="dd-button">Select a Pokemon</div>

              <input type="checkbox" class="dd-input" id="test" />

              <ul class="dd-menu">
                <li>{genPokeListItem2}</li>
              </ul>
            </label>
          </div>
        </div> */}
        <div className="flex-container">
          <div className="flex-item">
            <div className="pokemon-1" id="imge"></div>
            <div className="stats-1">
              <h3 id="hp"> Health: </h3>
              <h3 id="dmg"> Damage: </h3>
              <h3 id="atk"> Attack: </h3>
              <h3 id="spec-atk"> Special-attack: </h3>
              <h3 id="spec-def"> Special-defense: </h3>
              <h3 id="speed"> Speed: </h3>
            </div>
          </div>
          <div className="flex-item" id="fight">
            <div className="vs"></div>
            <h5> Fight! </h5>
          </div>
          <div className="flex-item">
            <div className="pokemon-2" id="imgee2"></div>
            <div className="stats-2">
              <h3 id="hp2"> Health: </h3>
              <h3 id="dmg2"> Damage: </h3>
              <h3 id="atk2"> Attack: </h3>
              <h3 id="spec-atk2"> Special-attack: </h3>
              <h3 id="spec-def2"> Special-defense: </h3>
              <h3 id="speed2"> Speed: </h3>
            </div>
          </div>
        </div>
        <div className="row-3">
          <Radar data={data} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </>
  );
}
