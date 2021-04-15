import React, { Component } from 'react'
import './ToggleDarkMode.css'
export class ToggleDarkMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDark: localStorage.getItem('theme') === 'dark',
        }
        this.toggleThemeChange = this.toggleThemeChange.bind(this)
    }
    componentDidMount() {
        this.DarkModeToggle()
    }
    DarkModeToggle() {
        document
            .getElementsByTagName('html')[0]
            .setAttribute('data-theme', localStorage.getItem('theme'))
    }

    toggleThemeChange() {
        const { isDark } = this.state
        if (isDark) {
            localStorage.setItem('theme', 'light')
            document
                .getElementsByTagName('HTML')[0]
                .setAttribute('data-theme', 'light')
        } else {
            localStorage.setItem('theme', 'dark')
            document
                .getElementsByTagName('HTML')[0]
                .setAttribute('data-theme', 'dark')
        }
        this.setState({ isDark: localStorage.getItem('theme') === 'dark' })
    }
    render() {
        let icon
        console.log(this.state)
        if (this.state.isDark) {
            icon = <i className='fas fa-moon' data-tip='dark mode is on' />
        } else {
            icon = <i className='fas fa-sun' data-tip='dark mode is off' />
        }
        return (
            <div className='toggleDarkMode'>
                <label
                    className='toggleDarkMode-lable'
                    htmlFor='toggleDarkMode'
                >
                    {icon}
                </label>
                <input
                    className='toggleDarkMode-input'
                    id='toggleDarkMode'
                    name='toggleDarkMode'
                    type='checkbox'
                    defaultChecked={this.state.isDark}
                    onChange={this.toggleThemeChange}
                />
            </div>
        )
    }
}

export default ToggleDarkMode
