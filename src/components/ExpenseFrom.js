import React from 'react'
import moment from'moment'
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format('MMM Do, YYYY'))


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    // state = {
    //     description: '',
    //     note:'',
    //     amount: '',
    //     createdAt: moment(),
    //     calendarFocused: false,
    //     error: ''
    // }
    onDescriptionChage = (e) => {
        const description = e.target.value
        this.setState(() => ({description}) )
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value                  
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){                                      //  regex101.com regular expression
            this.setState(() => ( {amount} ))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ( {focused} ) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmitForm = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),          // createdAt is type of moment
                note: this.state.note
            })
            console.log('submitted')
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitForm}>
                    <input 
                        type="text"
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChage}
                    />
                    <input 
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        />

                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />


                    <textarea 
                        placeholder='Add a note for your expence (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}