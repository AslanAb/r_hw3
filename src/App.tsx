import React, { Component } from "react"
import { IShops } from "./types"
import Shops from "./components/Shops/Shops"
import AddInput from "./components/AddInput/AddInput"
import SearchInput from "./components/SearchInput/SearchInput"

interface IApp {
  shops: IShops[],
  searchShop: string
}

export default class App extends Component<{}, IApp> {

  state = {
    shops: [
      { id: 1, name: 'Macdonalds', open_time: '10:30', close_time: '18:30', metres: 500, is_important: false },
      { id: 2, name: 'KFC', open_time: '11:30', close_time: '19:30', metres: 600, is_important: true }
    ],
    searchShop: ''
  }

  addInputBtn = (newshop: {
    name: string,
    open_time: string,
    close_time: string,
    metres: number,
  }) => {

    this.setState((state) => {
      const newShop: IShops = {
        id: Math.random(),
        name: newshop.name,
        open_time: newshop.open_time,
        close_time: newshop.close_time,
        metres: newshop.metres,
        is_important: false
      }
      return {
        shops: [...state.shops, newShop]
      }
    })
  }

  onSearch = (value:string) => {
    this.setState({searchShop: value})
  }

  render() {
    const {searchShop, shops } = this.state
    const filteredShops = shops.filter(shop => shop.name.toLowerCase().includes(searchShop.toLowerCase()))
    return (
      <div className="flex">
        <Shops shops={filteredShops} />
        <AddInput addBtn={this.addInputBtn} />
        <SearchInput onSearch={this.onSearch}/>
      </div>
    )
  }
}
