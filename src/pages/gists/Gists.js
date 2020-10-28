import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {GistContext} from "../../contexts/GistContext";
import GistsTable from "./GistsTable";
import Card from "../../components/Card";
import ButtonWIthIcon from "../../components/ButtonWIthIcon";
import { getAuthenticatedUser, PageNumbers } from "../../utils";
import { SyncLoader } from "react-spinners";
import useApi from "../../hooks/useApi";
import {
  StyledFooterDiv,
  StyledGistDiv,
  StyledLayoutButton,
  StyledLoaderDiv,
} from "./Gists.styles";

const Gists = () => {
  const { state, dispatch } = GistContext()

  const { getGists } = useApi("");
  const [layout, setLayout] = useState("list");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gistPerPage] = useState(15);

  const indexOfLastGist = currentPage * gistPerPage;
  const indexOfFirstGist = indexOfLastGist - gistPerPage;
  const currentGists = state.myData.slice(indexOfFirstGist, indexOfLastGist);
  const pageNumbers = PageNumbers(state.myData.length, gistPerPage);

  useEffect(() => {
    if (getAuthenticatedUser()) {
      setLoading(true);
      getGists(window.localStorage.getItem("token")).then((data) => {
        if (data) {
          dispatch({ type: "FETCH_GISTS", payload: data });
          setLoading(false);
        }
      });
    }
  }, []);

  const renderGrid = useMemo(() => {
    return currentGists.map((gist) => <Card key={gist.id} gist={gist} />);
  }, [currentGists]);

  console.log(renderGrid);

  return (
    <div>
      {loading && (
        <StyledLoaderDiv>
          <SyncLoader
            size={15}
            //size={"150px"} this also works
            color={"#5acba1"}
            loading={true}
          />
        </StyledLoaderDiv>
      )}

      {!loading && (
        <div className={"container"}>
          <StyledLayoutButton>
            <ButtonWIthIcon
              icon={"fa fa-list"}
              handleClick={() => setLayout("list")}
            />
            <span className={"text-muted mr-1"}>|</span>
            <ButtonWIthIcon
              icon={"fa fa-th"}
              handleClick={() => setLayout("grid")}
            />
          </StyledLayoutButton>

          <div className={"container"}>
            {layout === "list" && (
              <StyledGistDiv>
                <GistsTable gists={currentGists} />
              </StyledGistDiv>
            )}

            {layout === "grid" && (
              <StyledGistDiv>
                <div className={"row"}>{renderGrid}</div>
              </StyledGistDiv>
            )}
          </div>
          <StyledFooterDiv>
            <div className={"btn-center"}>
              <ButtonWIthIcon
                handleClick={(e) => {
                  if (currentPage < pageNumbers.length)
                    setCurrentPage(Number(currentPage + 1));
                }}
                font={"small"}
                background={"#5acba1"}
                color={"white"}
                text={"Next Page"}
                icon={"fa fa-arrow-right"}
              />
            </div>
            <div className={"page-buttons"}>
              <ButtonWIthIcon
                handleClick={(e) => {
                  if (currentPage > 1) {
                    setCurrentPage(Number(currentPage - 1));
                  }
                }}
                background={"#5acba1"}
                color={"white"}
                font={"x-small"}
                icon={"fa fa-arrow-left"}
              />

              <ButtonWIthIcon
                handleClick={(e) => {
                  if (currentPage < pageNumbers.length)
                    setCurrentPage(Number(currentPage + 1));
                }}
                background={"#5acba1"}
                color={"white"}
                font={"x-small"}
                icon={"fa fa-arrow-right"}
              />
            </div>
          </StyledFooterDiv>
        </div>
      )}
    </div>
  );
};

export default Gists;
