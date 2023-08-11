import React from 'react'

export default function NameList() {
    const name = [
        {
            id:1,
            name:'Steve',
            heroName:'Captain America'
        },
        {
            id:2,
            name:'Dustin',
            heroName:'Hulk'
        },
        {
            id:3,
            name:'Peter',
            heroName:'Brut'
        },
        {
            id:4,
            name:'Mike',
            heroName:'Doctor Strange'
        }
    ];
  return (
    <div>
        <h1>NameList</h1>
        {
       name.map((n)=> <h2>I am {n.name} also known as {n.heroName}</h2>)
        }
    </div>
  )
}
