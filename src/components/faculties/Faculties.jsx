import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import axios from "axios";
import baseUrl from "../Myconst";
import Loading from "../Loading";

function Faculties() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get(`${baseUrl}/request/fetch/faculties`);
      if (response.data.status) {
        console.log(response.data.faculties);
        setFaculties(response.data.faculties);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // loading
  if (loading) {
    return <Loading />;
  }
  return (
    <div style={{ paddingTop: "50px" }}>
      <Banner />
      <section className="pt-4">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {faculties.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  name={value.name}
                  post={value.post}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faculties;
