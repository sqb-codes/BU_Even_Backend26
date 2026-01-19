import './Main.css';
import { User } from './User';

export function Main({userdata}) {
    return (
        <div id="users">
            <ul>

                {
                    userdata.map((item) => (
                        <User data={item}/>
                    ))
                }

                {/* <User {...userdata[0]}/>
                <User {...userdata[1]}/>
                <User {...userdata[2]}/> */}

                {/* <User
                    img={userdata[0].userImg}
                    userName={userdata[0].userName}
                    userRole={userdata[0].userRole}
                    userCountry={userdata[0].userCountry}
                />

                <User
                    img={userdata[1].userImg}
                    userName={userdata[1].userName}
                    userRole={userdata[1].userRole}
                    userCountry={userdata[1].userCountry}
                /> */}

                {/* <User 
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmrIcFwYig92o99zR_9ethhckL0wBVV_64w&s" 
                    userName="Virat kohli" 
                    userRole="Batsman"
                    userCountry="India"
                    /> */}

                {/* <User 
img="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/401100/401144.jpg" 
                    userName="MS Dhoni" 
                    userRole="Batsman/WK"
                    userCountry="India"
                    /> */}

                {/* <User 
                    img="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/rohit-sharma-131403807-3x4_0.jpg?VersionId=COBnAcc0cITb2LBHRtFiGikchODjVwYf" 
                    userName="Rohit Sharma" 
                    userRole="Batsman/Captain"
                    userCountry="India"
                    /> */}

            </ul>
        </div>
    )
}