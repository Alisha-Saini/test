import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Profile from "./Profile";

function Parent(props) {
  /**
   * Dispatch to call action.
   */
  const dispatch = useDispatch();
  /*
   *
   *Selector to get Data from Store
   *-----Reading values from Store----
   */
  const userDetailFromStore = useSelector((state) => state);

  // State
  const [posts, setPost] = useState(
    userDetailFromStore?.userType?.userData?.data
  );
  const [isListEnabled, getList] = useState(false);

  /**
   * To enable details of user by clicking button
   */
  const getDetails = () => {
    getList(true);
  };

  /**
   * Receiving from Child to Parent to handle close the lists
   */
  const onClose = () => {
    getList(false);
  };

  return (
    <div className="Parent">
      <h1>ABC IT Solutions</h1>

      <Header desc="List of Office Employees" />

      <button onClick={getDetails}>Get List </button>

      <Profile
        isListEnabled={isListEnabled}
        clientData={posts}
        onClose={onClose}
      />
    </div>
  );
}

export default Parent;
