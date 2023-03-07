import { Component } from "react"
interface ISearch {
    onSearch: (value: string) => void
}

export default class SearchInput extends Component<ISearch> {

    render() {
        return (
            <input
                type="text"
                placeholder="Find shop by name"
                onChange={(e) => this.props.onSearch(e.target.value)}
            />
        )
    }
}