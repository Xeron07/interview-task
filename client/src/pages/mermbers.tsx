import * as React from "react";
import { useState, useEffect } from "react";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { MemberExpression } from "typescript";

interface IProps {
  onMemberSelect: any;
  selectedIndex: any;
}

interface State {
  membersList: any;
}

const Members: React.FC<IProps> = ({
  onMemberSelect,
  selectedIndex,
}: IProps) => {
  const members: any = useSelector((state: any) => {
    return state.members.value;
  });

  const listView = () => {
    if (members == undefined || members.length < 1) {
      return <span>No Member Added</span>;
    }
    return members.map((m: any, i: number) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>
            <img src={m.img} width='24px' height={"24px"} />
          </td>
          <td>{m.name}</td>
          <td>{m.age}</td>
          <td>{m.nationality}</td>
          <td>
            <button
              className='btn btn-primary'
              onClick={() => {
                onMemberSelect(true);
                selectedIndex(m);
              }}>
              Edit
            </button>
          </td>
          <td>
            <button className='btn btn-danger'>Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Pic</th>
            <th>Name</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{listView()}</tbody>
      </Table>
    </div>
  );
};

export default Members;
