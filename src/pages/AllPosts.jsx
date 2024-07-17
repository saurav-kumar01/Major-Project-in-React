import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { PostCard, Container } from '../components'


const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
        {posts.map((post) => (
            <div className="p-2 w-1/2" key={posts.$id}>
                <PostCard {...post}/>
            </div>
        ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
