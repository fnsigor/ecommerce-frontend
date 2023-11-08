import Repo from "@/components/Repo"
import { User } from "@/components/User"
import Link from "next/link"
import { Suspense } from "react"


export const revalidate = 30


export default function Home() {




  return (
    <>
      <h1>HOME</h1>

      <Suspense fallback={<p>carregando dados do usuario</p>}>
        <User />
      </Suspense>

      <Suspense fallback={<p>carregando repositorios</p>}>
  
      <Repo /> 
      </Suspense>

    </>

  )
}
