import React from "react";
const dummydata = [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": true,
      "userId": 68
    }
  ]
function MyTable() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dummydata.map((data) => (
            <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.completed}</td>
            <td>{data.userId}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </>
  );
}

export default MyTable;
