import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
const tweetsData = [   
    {
        handle: `@TrollBot66756542 💎`,
        profilePic: `troll.jpg`,
        likes: 27,
        retweets: 10,
        tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },    
    {
        handle: `@Elon ✅`,
        profilePic: `musk.png`,
        likes: 6500,
        retweets: 234,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
                  {
                handle: `@TomCruise ✅`,
                profilePic: `tcruise.png`,
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
                  {
                handle: `@ChuckNorris ✅`,
                profilePic: `chucknorris.jpeg`,
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
        {
        handle: `@NoobCoder12`,
        profilePic: `flower.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Are you a coder if you only know HTML?`,
        replies: [
            {
                handle: `@StackOverflower ☣️`,
                profilePic: `overflow.png`,
                tweetText: `No. Obviosuly not. Go get a job in McDonald's.`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: `love.png`,
                tweetText: `You are wonderful just as you are! ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },     
]
const actualContent=document.getElementById("actual-content")
actualContent.innerHTML=othersTweetData(tweetsData)
document.addEventListener('click',function(e){
    if(e.target.dataset.like){
        likesChanger(e.target.dataset.like)
    }
    else if(e.target.dataset.retweet){
        retweetChanger(e.target.dataset.retweet)
    }
    else if(e.target.dataset.comment){
        replyShower(e.target.dataset.comment)
    }
    else if(e.target.id==='tweet-botton'){
        tweetTheText(e.target.id)
    }
})
function tweetTheText(targetId){
    const userTextTweet=document.getElementById("text-content")
    if(userTextTweet.value){
        console.log("yes")
        tweetsData.unshift({
            handle: `@Prash`,
            profilePic: `scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: userTextTweet.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    render()
    userTweetText.value = ''
    }
}
function replyShower(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}
function likesChanger(targetUID){
    const tweetUID=tweetsData.filter(function(tweet){
        return tweet.uuid===targetUID
    })[0]
    if(tweetUID.isLiked){
        tweetUID.likes--
        tweetUID.isLiked=false
    }
    else {
        tweetUID.likes++
        tweetUID.isLiked=true
    }
    render()
}
function retweetChanger(targetUID){
    const tweetUID=tweetsData.filter(function(target){
        return target.uuid===targetUID
    })[0]
    if(tweetUID.isRetweeted){
        tweetUID.retweets--
        tweetUID.isRetweeted=false
    }
    else{
        tweetUID.retweets++
        tweetUID.isRetweeted=true
    }
    render()
}
function othersTweetData(){
    let likeIconClass=''
    let innerHtml=` `
    tweetsData.forEach(function(tweetdata){
    likeIconClass=''
    if (tweetdata.isLiked){
        likeIconClass='liked'
        console.log('change')
    }
    let retweetIconClass=''
    if(tweetdata.isRetweeted){
        retweetIconClass='retweeted'
    }
    let repliesHtml=` `
    if(tweetdata.replies.length>0){
        tweetdata.replies.forEach(function(reply){
            repliesHtml+=`
            <div class=main-content>
                <div class="new-header">
                <img  class="profile-pic" src='${reply.profilePic}'>
                    <div class="content">
                        <p class='tweet-handle'>${reply.handle}</p>
                        <p class='tweet-Text'>${reply.tweetText}</p>
                    </div>
                </div>
            </div>`
        })
    }
        innerHtml+=`<hr>
        <div class='new-header'><img
            src='${tweetdata.profilePic}'
            class="profile-pic">
            <div class="tweet-content">
            <p class='tweet-handle'>${tweetdata.handle}</p>
            <p class='tweet-Text'>${tweetdata.tweetText}</p>
            </div>
            </div>
            <div class='tweet-data'>
            <span class='tweet-detail'>
            <i class="fa-regular fa-comment-dots"
            data-comment='${tweetdata.uuid}'></i>
            ${tweetdata.replies.length}
            </span>
            <span class='tweet-detail'>
            <i class="fa-solid fa-heart ${likeIconClass}" 
            data-like='${tweetdata.uuid}'></i> ${tweetdata.likes}
            </span>
            <span class='tweet-detail'>
            <i class="fa-solid fa-retweet ${retweetIconClass}" 
            data-retweet='${tweetdata.uuid}'></i> ${tweetdata.retweets}
            </span>
            </div>
            <div class="hidden" id="replies-${tweetdata.uuid}">
                ${repliesHtml}
            </div>   
        </div>
            `
    })
    return(innerHtml)
}
function render(){
    document.getElementById('actual-content').innerHTML = othersTweetData()
}
render()