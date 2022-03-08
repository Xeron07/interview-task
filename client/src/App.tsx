import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Members from "./pages/mermbers";
import { selectMember } from "./features/memberReducer";
import SingleMember from "./pages/singleMember";

function App() {
  const [hasSelectedMember, setMember] = useState(false);
  const dispatch = useDispatch();

  const selectedMember = (member: any) => {
    dispatch(selectMember(member));
  };

  const showMemberList = () => {
    if (hasSelectedMember) {
      return <SingleMember />;
    } else {
      return (
        <Members onMemberSelect={setMember} selectedIndex={selectedMember} />
      );
    }
  };

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4 text-center'>ABC Club</h1>
      </div>
      <Home />
      {showMemberList()}
    </div>
  );
}

export default App;
