import React from 'react'
import styles from  "./Upcoming.module.css"

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useFetch from '../../Hooks/useFetch';
import { FiArrowRightCircle } from 'react-icons/fi';

const Upcomming = () => {

  // const API = "db055fd0-6974-4232-bb32-933ff430ef70";
  const API = "dhgfhjdsgfsgf"

  const { data } = useFetch(
    `https://api.cricapi.com/v1/series?apikey=${API}`
    //https://api.cricapi.com/v1/series?apikey=${API}
  );
  const matchdata = data.data;
  console.log("matchdata", matchdata);





  const dispatch = useDispatch();
  const [serchParams, setSearchParams] = useSearchParams();
  const urlcategory = serchParams.getAll("category");
  const [category, setCategory] = useState(urlcategory || []);


   const handleClick = (e) => {
     const option = e.target.value;
     let newcategory = [...category];
     if (category.includes(option)) {
       newcategory.splice(newcategory.indexOf(option), 1);
     } else {
       newcategory.push(option);
     }
     setCategory(newcategory);
     console.log(newcategory);
   };

   useEffect(() => {
     if (category) {
       setSearchParams({ category });
       //setSearchParams({category:categoryvalue},{replace:true})
     }
   }, [category, setSearchParams, dispatch]);




  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <button
            onClick={handleClick}
            value="T20"
            defaultChecked={category.includes("T20")}
          >
            T20
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="Test"
            defaultChecked={category.includes("test")}
          >
            Test
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="Domestic"
            defaultChecked={category.includes("Domestic")}
          >
            Domestic
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="Youth"
            defaultChecked={category.includes("Youth")}
          >
            Youth
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="Fc"
            defaultChecked={category.includes("FC")}
          >
            FC
          </button>
        </div>
      </div>
      {/* ********************************************* */}
      <div style={{display:""}}>
        {matchdata &&
          matchdata.map((elem) => {
            //console.log(info.id);
            return (
              <>
                <div style={{border:"1px solid"}}>
                  <div className={styles.upcom}>
                    <div className={styles.contai}>
                      <div
                        style={{ color: "rgb(87, 82, 82)", fontWeight: "700" }}
                      >
                        {elem.startDate}
                      </div>
                      <div style={{ color: "black", fontWeight: "900" }}>
                        {elem.name}
                      </div>
                      <div
                        style={{ color: "rgb(87, 82, 82)", fontWeight: "700" }}
                      >
                        {elem.endDate}
                      </div>
                    </div>

                    <hr />
                  </div>
                </div>
              </>
            );
          })}

        {/* ******************************************************** */}
        <div className={styles.adds_box} style={{ marginTop: "0px" }}>
          <div>
            <div>
              <b>Quike Links</b>
              {/* ************************************************** */}
              <div>
                <a className="active" href="#home">
                  <div className={styles.filter}>
                    <p style={{ color: "blue", size: 70 }}>
                      <FiArrowRightCircle />
                    </p>

                    <span>Zimbabwe v india</span>
                  </div>
                </a>
              </div>
              <div>
                <a className="active" href="#home">
                  <div className={styles.filter}>
                    <p style={{ color: "blue", size: 70 }}>
                      <FiArrowRightCircle />
                    </p>

                    <span> Asia Cup QLF</span>
                  </div>
                </a>
              </div>
              {/* ****************************************** */}
              <hr style={{ width: "310px" }} />
              <a href="file:///home/rehana/Desktop/MasaiProject/LiveScore/liveScoreHome.html">
                Desktop Scoreboard
              </a>
              <p style={{ color: "gray" }}>
                A mini Scoreboard that stay with <br />
                you and updates all the current matches
              </p>
              <link href="https://www.espncricinfo.com/ci/engine/series/index.html" />
              <h4>Series Archive</h4>
              <link href="https://www.espncricinfo.com/ci/engine/match/index.html?view=calendar" />
              <h4>International calender</h4>
            </div>
          </div>

          <div className={styles.add}>
            <img
              src="https://tpc.googlesyndication.com/simgad/13683194396473605559?"
              alt="adds"
            />
          </div>
          <div className={styles.add1}>
            <img
              src="https://tpc.googlesyndication.com/simgad/13342522690102732645?"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ********************************************************* */}
    </>
  );
}

export default Upcomming