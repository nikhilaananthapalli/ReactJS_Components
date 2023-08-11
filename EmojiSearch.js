import React,{useState} from 'react'

const emojiData=[
    {
        id:1,
        symbol:"😀",
        name:"smile"
    },
    {
        id:2,
        symbol:"😡",
        name:"angry"
    },
    {
        id:3,
        symbol:"😭",
        name:"cry"
    },
    {
        id:4,
        symbol:"😞",
        name:"sad"
    },
    {
        id:5,
        symbol:"😎",
        name:"cool"
    },
    {
        id:6,
        symbol:"😄",
        name:"laugh"
    },
    {
        id:7,
        symbol:"🥳",
        name:"celebration"
    },
    {
        id:8,
        symbol:"🤩",
        name:"Happy"
    },
    {
        id:9,
        symbol:"😴",
        name:"sleepy"
    },
    {
        id:10,
        symbol:"😓",
        name:"sad"
    }
]
export default function EmojiSearch() {
    const [searchEmoji,setSearchEmoji] = useState("")
    const handleChange=(e) =>{
        setSearchEmoji(e.target.value)
    }
    const showEmoji = emojiData.filter((emoji)=>{
        const emojiName= emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase())
    });

  return (
    
    <div className='Main'>
        <h1>React Emoji App</h1>
        <input type='text' placeholder='Search for emoji..' value={searchEmoji} onChange={handleChange}></input>
        <div className='emoji'>
            {
                showEmoji.map((emoji) => emoji.symbol)
            }
        </div>
    </div>
  )
}
