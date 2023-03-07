import React, { Component } from "react";
import Shop from "../Shop/Shop";
import { IShops } from "../../types";

interface IShopsList {
    shops: IShops[]
}

export default class Shops extends Component<IShopsList> {


    render() {
        return (
            <div>
                {
                    this.props.shops.map((item) => {
                        return (
                            <Shop {...item} key={item.id} />
                        )
                    })
                }
            </div>
        )
    }
}