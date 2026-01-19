import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main';

function App() {
  const username = "Max";
  const USERDATA = [
    {
      "user_id": 101,
      "userName": "Virat Kohli",
      "userRole": "Batsman",
      "userImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmrIcFwYig92o99zR_9ethhckL0wBVV_64w&s",
      "userCountry": "India"
    },
    {
      "user_id": 102,
      "userName": "MS Dhoni",
      "userRole": "Batsman/WK",
      "userImg": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/401100/401144.jpg",
      "userCountry": "India"
    },
    {
      "user_id": 103,
      "userName": "Rohit Sharma",
      "userRole": "Batsman/Captain",
      "userImg": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/rohit-sharma-131403807-3x4_0.jpg?VersionId=COBnAcc0cITb2LBHRtFiGikchODjVwYf",
      "userCountry": "India"
    },
    {
      "user_id": 104,
      "userName": "Hardik Pandya",
      "userRole": "All-rounder",
      "userImg": "https://images.indianexpress.com/2025/09/Hardik-Pandya-skills.jpg",
      "userCountry": "India"
    }
  ]
  return (
    <>
      <Header username={username}/>
      <Main userdata={USERDATA}/>
    </>
  )
}

export default App
