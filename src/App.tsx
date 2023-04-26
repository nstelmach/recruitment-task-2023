import * as React from "react";
import "./styles/style.css";
import Content from "./components/Content";
import { getDefinitions } from "./api/contentAPI";
import { useEffect, useState } from "react";
import { Layout } from "./types/model";

export default function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Layout | null>(null);

  // it's worth using react query, but due to the fact that it's only fetched once, I used axios
  useEffect(() => {
    getDefinitions()
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  // to run json-server type "npm run watch-json-server", available on http://localhost:8080/definition
  // to run app, in another terminal type "npm start", available on http://localhost:3000/

  return (
    <div className="main">
      <h1>{data?.title}</h1>
      <div className="content">{data && <Content data={data} />}</div>
    </div>
  );
}
