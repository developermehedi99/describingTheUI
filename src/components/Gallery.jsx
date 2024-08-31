import Blog from "./Blog"
import Jsx from "./Jsx"
import MyProfile from "./MyProfile"

export default function Gallery() {
  return (
    <div>
        <h3>Frist components</h3>
        <Profile></Profile>
        <Blog></Blog>
        <hr />
        <Jsx></Jsx>
        <MyProfile salary="30" job="developer"></MyProfile>
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


