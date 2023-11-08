import React from 'react'

const Repo = async () => {

    await new Promise(resolve => setTimeout(resolve, 5000))

    const response = await fetch('https://api.github.com/users/fnsigor/repos', {
    next: {
      revalidate: 30
    }
  }) //requisição server side, sem necessidade do getStatic Props
  const repos = await response.json()


  return (
    <>
      <h1>Repos</h1>

      <pre>
        {JSON.stringify(repos, null, 2)}
      </pre>

    </>

  )
}

export default Repo