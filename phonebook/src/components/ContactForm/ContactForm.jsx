import React, { Component } from "react";


class ContactForm extends Component{
      state = {
    name: '',
    number: '',
    };
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };


    reset = () => {
        this.setState({ name: '', number: '' });
    };
    render() {
        const { name, number } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="">
                            Name&emsp;
                            <input
                                onChange={this.handleChange}
                                type="text"
                                name="name"
                                value={name}
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                required
                            />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="">
                            Phone&emsp;
                            <input
                                onChange={this.handleChange}
                                type="tel"
                                name="number"
                                value={number}
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                                required
                            />
                        </label>
                    </p>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}
export default ContactForm;