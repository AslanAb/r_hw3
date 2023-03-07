import React, { Component } from "react";
import { IShops } from "../../types";

export default class Shop extends Component<IShops> {

    render() {
        const shopObj = this.props  

        return (
            <div className="flex flex-col w-64 justify-center items-center bg-red-50 border-double border-4 border-indigo-600 rounded-md my-2 list-decimal mx-1.5">
                <h1 className="bold">Name: {shopObj.name}</h1>
                <span>Work time from {shopObj.open_time} to {shopObj.close_time}</span>
                <span>{shopObj.metres} km from delivery adress</span>
            </div>
        )
    }
}