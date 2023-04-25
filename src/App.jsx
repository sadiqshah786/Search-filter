import { Form } from "react-bootstrap"
import { Users } from "./users"
import { useState } from "react";
import TableData from "./components/Table";
function App() {
  const [query, setQuery] = useState("")

  // const keys = ["first_name", "last_name", "email"]

  // const search = (data) => {
  //   return data.filter((item) => {
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   })
  // }


  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].includes(query))
    )
  }
  return (
    <>
      <h1 className="text-2xl text-center mt-4 font-bold body-font font-poppins ">Search Filter</h1>
      <div className="text-center w-3/5 m-auto my-2">
        <Form.Control onChange={(e) => setQuery(e.target.value)} type="email" placeholder="Search data..." className="shadow-none mt-4 py-1 px-2 outline-none rounded-md border-2 border-gray-400 w-1/4" />
      </div>
      <div className="px-6">
        <TableData data={search(Users)} />
      </div>
    </>
  )
}

export default App
