import React from 'react'
import './App.css';

const Git = (props) => {
    
    // console.log('gitAcc', props.gitAcc.login)
        return (
            <div>
            <div className='GitIntro'>
                <p className='loginName'>{props.login}</p>
                <img src={props.avatar_url} className='avatar' alt='super cool user avatar'></img>
            </div>
            <div className='GitBody'>
                <p>This user likes to, {props.bio}.</p>
                <p>{props.company} is where this user is employed.</p>
                <p>You can tell this is user is a leader, having {props.followers} followers.</p>
                {props.followers_url}
                <p>This user thinks {props.following} other users are cool enough to follow.</p>
            </div>
            <div className='GitRepo'>
                <p>Wow check out how many cool repositories this user has made,{props.public_repos}! (Check em all out here, {props.repos_url})  </p>
            </div>
            </div>
        )
}
export default Git