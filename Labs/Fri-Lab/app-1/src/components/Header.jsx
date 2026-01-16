import { Nav } from "./Navigation";

export function Header({username}) {
    return (
        <header>
            <h2>Hello {username}</h2>
            <Nav/>
        </header>
    )
}