import React, { ChangeEvent, Component } from "react"
import { IShops } from "../../types"
interface IAdd {
    addBtn: (newshop: {
        name: string,
        open_time: string,
        close_time: string,
        metres: number
    }) => void
}

export default class AddInput extends Component<IAdd> {
    state = {
        name: '',
        open_time: '',
        close_time: '',
        metres: 0,
    }

    inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "metres") {
            this.setState({ [event.target.name]: +event.target.value })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    submit = () => {
        this.props.addBtn(this.state)
    }

    render() {

        return (
            <div className="flex flex-col w-64 justify-center items-center border-double border-2 border-indigo-600 rounded-md my-2 list-decimal mx-1.5">
                <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.inputChange}
                    className="w-48 border border-black-600 m-2"
                    placeholder="Name"
                />
                <input type="text"
                    name="open_time"
                    value={this.state.open_time}
                    onChange={this.inputChange}
                    className="w-48 border border-black-600 m-2"
                    placeholder="Open time"
                />
                <input type="text"
                    name="close_time"
                    value={this.state.close_time}
                    onChange={this.inputChange}
                    className="w-48 border border-black-600 m-2"
                    placeholder="Close time"
                />
                <input type="number"
                    name="metres"
                    value={this.state.metres}
                    onChange={this.inputChange}
                    className="w-48 border border-black-600 m-2"
                    placeholder="Metres"
                />
                <button className="w-48 border border-black m-2" onClick={this.submit}>Add new shop</button>
            </div>
        )
    }
}