'use client'

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await axios.post('/api/user', { username, email, password })
      .then(response => {
        alert(response.data.message)
        console.log(response)
      })
      .catch(error => {
        if (error.status === 400) {
          // alert('Client Error')
          alert(error.response.data.message)
          console.log(error)
          return
        }
        alert('Error')
        console.log(error)
      })
  }

  return (
    <div className="my-5">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-[80%] block mx-auto p-3 rounded-lg text-black"
      />
      <br />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[80%] block mx-auto p-3 rounded-lg text-black"
      />
      <br />
      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-[80%] block mx-auto p-3 rounded-lg text-black"
      />
      <br />
      <button onClick={handleSubmit} className="w-[80%] block mx-auto p-3 rounded-lg bg-blue-600 text-white">Submit</button>
    </div>
  );
}
