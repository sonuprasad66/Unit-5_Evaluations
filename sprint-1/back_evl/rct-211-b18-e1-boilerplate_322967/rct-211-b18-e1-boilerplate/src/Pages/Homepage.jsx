import React from "react";
import axios from "axios";
import {store} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {handleFail, handleRequest, handleSuccess} from "../Redux/action";
import {useEffect} from "react";
import ProfileDataRow from "../Components/ProfileDataRow";

const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.profileData);

  const getData = () => {
    dispatch(handleRequest());
    return axios(`http://localhost:8080/profile`)
      .then((res) => {
        dispatch(handleSuccess(res.data));
      })
      .catch((err) => {
        dispatch(handleFail(err));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <div>
      <table>
        <thead style={{fontWeight: "700"}}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {data?.map((elem) => (
            <ProfileDataRow profile={elem} key={elem.id} />
          ))}

          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
