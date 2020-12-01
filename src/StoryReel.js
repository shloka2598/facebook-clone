import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png" 
            profileSrc="https://avatars2.githubusercontent.com/u/24712956?s-400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4" 
            title="Sonny Sangha" />

            <Story 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU" 
            profileSrc="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0x00ffffff-no-rj" 
            title="Clever Programmer" />

            <Story 
            image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
            profileSrc="http://shlokatech.in/Images%20by%20Me/Shloka_Tech_Only_Logo-removebg-preview.png" 
            title="Shloka Tech" />

            <Story 
            image="https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg" 
            profileSrc="https://yt3.ggpht.com/a/AATXAJwBtKw7erVLtS31HvYvlsqSZ5tPti-kxeJNjEebiQ=s88-c-k-c0x00ffffff-no-rj" 
            title="Aaron Bernath" />

            <Story 
            image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
            profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg" 
            title="Naz" />
        </div>
    )
}

export default StoryReel;