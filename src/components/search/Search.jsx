import React, { useEffect, useState } from "react";
import baseUrl from "../Myconst";
import axios from "axios";
import Loader from "../loader/Loader";
import "./search.css";
import { Link } from "react-router-dom";

function Search(props) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.searchInput.length === 0) {
      setResults([
        {
          title: "No result found!",
          get_university: {
            name: "",
            slug: "",
          },
          get_semester: {
            semister_name: "",
          },
          get_pdf: {},
        },
      ]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/request/fetch/search/${props.searchInput}`
        );

        if (response.data.status) {
          setResults(response.data.search);
        } else {
          setResults([
            {
              title: response.data.message,
              get_university: {
                name: "",
                slug: "",
              },
              get_semester: {
                semister_name: "",
              },
              get_pdf: {},
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [props.searchInput]);

  return (
    <ul className="list-group mt-3 bg-light searchList">
      {loading && <Loader />}
      {results.map((result, index) => (
        <Link
          key={index}
          to={`/university/${result.get_university?.slug || ""}/${
            result.get_semester?.semister_name || ""
          }/${result.slug || ""}`}
        >
          <li className="list-group-item">
            {result.title}{" "}
            <sub>
              {result.get_university?.name
                ? `${result.get_university.name} | ${
                    result.get_semester.get_department?.department
                  } | ${result.get_semester?.semister_name || ""} `
                : " "}

              <span className="text-success">
                {result.get_pdf?.length
                  ? `| ${result.get_pdf.length} pdfs found !`
                  : ""}
              </span>
            </sub>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Search;
