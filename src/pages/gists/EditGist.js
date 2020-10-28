import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import useApi from "../../hooks/useApi";

const EditGist = ({ match }) => {
  const id = match.params.gistId;

  const [gist, setGist] = useState("");
  const { gistsById } = useApi("");
  useEffect(() => {
    gistsById(id).then((data) => {
      if (data) {
        setGist(data);
      }
    });
  }, []);
  console.log(gist);
  return (
    <div>
      {gist.owner && (
        <div>
          <Card edit={true} singleGist={true} gist={gist} />
        </div>
      )}
    </div>
  );
};

export default EditGist;
