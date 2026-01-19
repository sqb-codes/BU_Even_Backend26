import './Header.css'

export function Header({username}) {
    return (
        <header id='header'>
            <h1>Hello {username}</h1>
        </header>
    )
}