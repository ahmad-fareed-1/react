import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
            <div>
                <h1>Custom Aap !!</h1>
            </div>
    )
}

const anotherElement = (
    <a href= "http://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Chai aur code"
 
const reactElement = React.createElement(
    'a',
    {href: 'http://google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
)



ReactDOM. createRoot(document.getElementById('root')).
    render(
        reactElement 
)
