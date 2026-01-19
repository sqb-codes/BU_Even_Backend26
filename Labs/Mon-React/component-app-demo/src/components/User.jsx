// export function User({userImg, userName, userRole, userCountry}) {
//     return (
//         <li>
//             <div className="userImg">
//                 <img src={userImg} alt="user-1" />
//             </div>
//             <div className="userDesc">
//                 <h2>Name: {userName}</h2>
//                 <h4>Role: {userRole}</h4>
//                 <h4>Country: {userCountry}</h4>
//             </div>
//         </li>
//     )
// }


export function User({data}) {
    return (
        <li>
            <div className="userImg">
                <img src={data.userImg} alt="user-1" />
            </div>
            <div className="userDesc">
                <h2>Name: {data.userName}</h2>
                <h4>Role: {data.userRole}</h4>
                <h4>Country: {data.userCountry}</h4>
            </div>
        </li>
    )
}