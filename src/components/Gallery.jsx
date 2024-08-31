import Blog from "./Blog"
import Jsx from "./Jsx"

export default function Gallery() {
  return (
    <div>
        <h3>Frist components</h3>
        <Profile></Profile>
        <Blog></Blog>
        <hr />
        <Jsx></Jsx>
    </div>
  )
}


export  function Profile() {
  return (
    <div>
        <h2>Profile components</h2>
    </div>
  )
}


