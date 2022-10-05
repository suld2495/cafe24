import type { NextPage } from 'next'
import Router from 'next/router'
import { useState } from 'react'
import { saveUser } from '../services/api/user.api'

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { name, email }
      await saveUser(body);
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={submitData}>
      <h1>Signup user</h1>
      <input
        autoFocus
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        type="text"
        value={name}
      />
      <input
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="text"
        value={email}
      />
      <input
        disabled={!name || !email}
        type="submit"
        value="Signup"
      />
    </form>
  )
}

export default Home
