import TickTacToe from '../../assests/tic-tc-toe.PNG'
import Photogallary from '../../assests/photogallery.PNG'
import CssVar from '../../assests/cssVar.PNG'
import Clock from '../../assests/Clock.PNG'
import Drumapp from '../../assests/DrumApp.PNG'
import ExpenseHandler from '../../assests/ExpenseHandler.PNG'
import BurgerBuilder from '../../assests/BurgerBuilder.PNG'
import BookStore from '../../assests/BookStore.PNG'
import PortFolio from '../../assests/PortfolioSite.PNG'
import BusApp from '../../assests/BusApp.PNG'
import WeatherApp from '../../assests/WeatherApp.PNG'
import Chatapp from '../../assests/chatapp.PNG'
import Twitter from '../../assests/twitterClone.PNG'
import smartSocial from '../../assests/smartsocial.PNG'
import EventManagement from '../../assests/EventManagement.PNG'
import Thesis from '../../assests/Thesis-HirenSavani.pdf'

export const VanillaJavscriptProjects = [
    {
        name: "tic-tac-toe Game",
        github: "https://github.com/hirensavani-99/tic-tac-toe.git",
        live: "https://tic-tac-toe-gamma-topaz.vercel.app/",
        picture: TickTacToe
    }, {
        name: "image-gallery",
        github: "https://github.com/hirensavani-99/ImageGallery.git",
        live: "https://image-gallery-green.vercel.app/",
        picture: Photogallary
    },
    {
        name: "css variable",
        github: "https://github.com/hirensavani-99/cssVariables-.git",
        live: "https://css-variables-bice.vercel.app/",
        picture: CssVar
    },
    {
        name: "Clock",
        github: "https://github.com/hirensavani-99/clock.git",
        live: "https://clock-psi-mauve.vercel.app/",
        picture: Clock
    },
    {
        name: "Drum",
        github: "https://github.com/hirensavani-99/drum-Application.git",
        live: "https://drum-application.vercel.app/",
        picture: Drumapp
    }
]

export const ReactJsProjects = [
    {
        name: "Expense Handler",
        github: "https://github.com/hirensavani-99/ExpenseHandler.git",
        live: "https://expense-handler.vercel.app/",
        picture: ExpenseHandler
    },
    {
        name: "Burger Builder",
        github: "https://github.com/hirensavani-99/burgerBuilder.git",
        live: "https://burger-builder-alpha-five.vercel.app/",
        picture: BurgerBuilder
    },
    {
        name: "Book Store",
        github: "https://github.com/hirensavani-99/Book-Store.git",
        live: "https://book-store-sigma.vercel.app/",
        picture: BookStore
    },
    {
        name: "Portfolio site",
        github: "https://github.com/hirensavani-99/PortfolioSite.git",
        live: "https://hirensavani.vercel.app/",
        picture: PortFolio
    },
    {
        name: "Bus Application",
        github: "https://github.com/hirensavani-99/busservice.git",
        picture: BusApp,
        descriotion:[
            "Search bus by city",
            "Login/logout by admin",
            "Final project of collabera training"
        ]
    }
]

export const NodeJsProjects = [
    {
        name: "Weather Application",
        github: "https://github.com/hirensavani-99/Weather_app.git",
        live: "https://kano-weather-app.herokuapp.com/",
        picture: WeatherApp,
        descriotion:[
            "Created with nodejs and handlebar",
            "First time tried to use external API",
            "Search by city"
        ]
    },
    {
        name: "Real Time Chat Application",
        github: "https://github.com/hirensavani-99/Talk.git",
        live: "https://savani-talk.herokuapp.com/",
        picture: Chatapp,
        descriotion:[
            "Implementation of socket io",
            "Enter with room number",
            "share messages and location"
        ]
    }
]


export const NextJsProjects = [
    {
        name: "Twitter Clone",
        github: "https://github.com/hirensavani-99/TwitterClone-.git",
        picture: Twitter,
        descriotion:[
            "Sign in with Twitter ",
            "Write Tweet",
            "Like Tweet"
        ]
    }
]


export const MernProjects = [
    {
        name: "Smart social",
        github: "https://github.com/hirensavani-99/TwitterClone-.git",
        picture: smartSocial,
        descriotion:[
            "Log/Logout/signUp functionality",
            "Upload post like post",
            "Search and chatting with friends",
            "All the necessary CRUD operations social media site require"
        ]
    },
    {
        name: "Event management",
        github: "https://github.com/hirensavani-99/TwitterClone-.git",
        picture: EventManagement,
        thesis : Thesis,
        descriotion:[
            "Log/Logout/signUp functionality",
            "Buy pass and generate ticket",
            "Register your Events and invite people",
            "Get help from partners to organize your events"
        ]
    }
]
