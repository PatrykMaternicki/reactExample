import React, { Component } from 'react';
import personArray from './Model/person.js';
import itemArray from './Model/Item.js';
class example2 extends Component{
    constructor(){
      super();
      this.foundedItems = [];
      this.state = {
        pickedPerson : Object,
        isSelectActive : false,
        itemList : [],
        foundedItems: false,
        notFoundUser: '',


      }
    }

  componentWillMount(){
    console.log(personArray);
    console.log(itemArray);
  }

  pickPerson(e){
    console.log(e.target.dataset.forgeinkey);
    var person = {};
    person.id = e.target.dataset.id;
    person.nameAndSurname = e.target.value;
    person.fkey = e.target.dataset.forgeinkey;
    this.setState({pickedPerson:person});
    this.setState({isSelectActive:true});
    this.findItem(person.fkey);
  }

  findItem(key){
    this.foundedItems = [];
    itemArray.forEach((element)=>{this.checkItemWhichHaveSameKey(element,key)});
    if (this.foundedItems.length == 0){
      this.setState({notFoundUser:'Uzytkownik nie posiada zadneo sprzetu'});
      this.setState({foundedItems:false});
      return;
    }
    this.setState({itemList:this.foundedItems});
    this.setState({foundedItems:true})
  }

  checkItemWhichHaveSameKey(element,value){
    if (element.forgein_key == value) this.foundedItems.push(element);
  }
  buildComponentOption(){
    let list = [];
    for (var i = 0; i < personArray.length; i++){
      list.push(<option data-id={personArray[i].id} data-forgeinKey={personArray[i].forgein_Key} onClick={(e)=>{this.pickPerson(e)}} value={personArray[i].nameAndsurName}>{personArray[i].nameAndsurName}</option>);
      console.log('Wchodzisz w petle');
    }
    return list;
  }
  buildRow (){
    let list = [];
    console.log(this.state.itemList);
    for (let i = 0; i < this.state.itemList.length; i++){
      list.push(<tr><td>{this.state.itemList[i].id}</td><td>{this.state.itemList[i].name}</td><td>{this.state.itemList[i].forgein_key}</td></tr>);
    }

    return list;
  }
  render(){
    return(
      <section>
      <select>
      {this.buildComponentOption()}
      </select>
      {!this.state.isSelectActive ? (
        <p> Wybierz osobę </p>
     ) : (
       <div>
       <p>Wybrales</p>
       <ol>
       <li>ID : {this.state.pickedPerson.id}</li>
       <li>Imie i nazwisko : {this.state.pickedPerson.nameAndSurname}</li>
       </ol>
       </div>
     )}
      {!this.state.foundedItems ? (
        <span>{this.state.notFoundUser}</span>
      ): (
        <section>
        <p>Tabela przedmiotow </p>
        <table>
        <tbody>
        <tr>
        <th>ID</th><th>Nazwa przedmiotu</th><th>FK_KEY</th>
        </tr>
        {this.buildRow()}
        </tbody>
        </table>

        </section>
      )}
      </section>

    )

  }
}

export default example2
