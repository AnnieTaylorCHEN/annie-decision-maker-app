import React from 'react'

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [], 
        selectedOption: undefined
    }
  
    handleDeleteOptions = () =>  {
        this.setState(() => ({options: []}))
    }

    handleClearSelected = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }))
      }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleAddOption = (option) => {
        if (!option){
            return 'Please enter valid value.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exists.'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e){
        }
        
     }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
     }

    componentWillUnmount(){
        console.log('component will unmount!')
    }


    render(){
        const subtitle = 'Put your future in the hands of a computer. Let it decide what to do.'
        

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                    
                    <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                    
                    <OptionModal 
                    ariaHideApp ={false}
                    selectedOption = {this.state.selectedOption}
                    handleClearSelected = {this.handleClearSelected}/>
                </div>
                
            </div>
        )
    }
}

