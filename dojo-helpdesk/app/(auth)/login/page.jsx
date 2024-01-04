"use client"

import AuthForm from "../AuthForm";

export default function Login() {
  const handleSubmit = async(e, email, password) => {
    e.preventDefault();
  }

  return (
    <main>
      <h2 className="text-center">Log In</h2>
      <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}
