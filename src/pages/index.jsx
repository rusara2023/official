import * as React from "react"
import HomeLayout from "../layout/homeLayout";
const IndexPage = () => {
  return (
    <HomeLayout>
      <h1 className="text-white text-5xl">TASF</h1>
    </HomeLayout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
