import React from "react";
import Filter from "../Components/Filter";
import styled from "styled-components";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
import {useLocation, useSearchParams} from "react-router-dom";

const Watches = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.watches);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location || data.length === 0) {
      let getSearchParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getData(getSearchParams));
    }
  }, [location.search]);

  return (
    <div>
      <WatchesData>
        <FilterComponents>
          <Filter />
        </FilterComponents>
        <AllData>
          {data.length > 0 &&
            data?.map((elem) => {
              return (
                <WatchesWrap key={elem.id}>
                  <WatchCard {...elem} />
                </WatchesWrap>
              );
            })}
        </AllData>
      </WatchesData>

      {/* <div>
        Map through the watch list here using WatchCard Component
      </div> */}
    </div>
  );
};

const WatchesData = styled.div`
  display: flex;
`;

const FilterComponents = styled.div`
  width: 300px;

  border: 1px solid red;
`;

const AllData = styled.div`
  width: 100%;
  border: 1px solid red;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: center;
`;

const WatchesWrap = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid blue;
`;

export default Watches;
