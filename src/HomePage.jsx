import React, { useState } from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import Post from './Post'

function HomePage() {
    const [postData] = useState([{ user: 'Jarvis', postId: 0}, {user: 'GLadOS', postId: 1}
    , {user: 'Artem D', postId: 2}, {user: 'Friendly Henry', postId: 3}, {user: 'Daniel Oh', postId: 4}, {user: 'Avni Mungra', postId: 5}
    , {user: 'Yutaro Katori', postId: 6}, {user: 'Agent Smith', postId: 7}, {user: 'Paul McCartney', postId: 8}])

    //     // fetch getFeed
    //     const fetchGetFeed = await fetch('/feed', {
    //         method: 'GET'
    //     })

    // // fetch getFeed
    // const fetchGetFeed = await fetch('/feed', {
    //     method: 'GET'
    // })

    //Removed <RightBar/> from return, causes white screen, need to troubleshoot further.
    return(
        <div className='homepage'>
            <LeftBar/>
            
            <div className='postlist'>
                <ul>
                    {postData.map((post) => {
                        return (
                            <li key={post.postId}>
                                <Post value={post}></Post>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HomePage