import React, { Component } from "react";
import FormGroup from "../FormGroup/FormGroup";
import FilePicker from "../FilePicker/FilePicker";

class Letter extends Component {
    state = {
        formData: {
            subject: "Тема письма",
            fromName: "Имя отправителя",
            fromEmail: "Адрес отправителя (email)",
            toName: "Имя получателя",
            toEmail: "Адрес получател (email)",
            message: "текстовая версия письма",
            attaches: [{"name" : "имя файла","content": "содержимое файла закодированное base64","encoding" : "base64"}]
          },
    }
    handlerInputOnChange = (e) => {
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }
    handlerFilePicker = (e) => {
        e.preventDefault();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    
    render () {
        console.log(this.state)
        return (
            <div className="mail" onDragOver={this.handlerFilePicker}>
              <h1 className="mail__title">Отправлялка сообщений</h1>
                <article className="mail__form form">
                    <FormGroup
                        label="От кого"
                        onChange={this.handlerInputOnChange}
                        fields={[
                            { name: "fromName", placeholder: "Имя", onChange: this.handlerInputOnChange},
                            { name: "fromEmail", placeholder: "Email", onChange: this.handlerInputOnChange}
                        ]}
                    />
                    <FormGroup
                        label="Кому"
                        onChange={this.handlerInputOnChange}
                        fields={[
                            { name: "toName", placeholder: "Имя", onChange: this.handlerInputOnChange},
                            { name: "toEmail", placeholder: "Email", onChange: this.handlerInputOnChange}
                        ]}
                    />
                    <FormGroup
                        label="Тема письма"
                        value={this.state.formData.subject}
                        fields={[
                            { name: "subject", onChange: this.handlerInputOnChange}
                        ]}
                    />
                    <FormGroup
                        label="Сообщение"
                        onChange={this.handlerInputOnChange}
                        fields={[
                            { name: "message", tag: "textarea", onChange: this.handlerInputOnChange}
                        ]}
                    />
                    <FilePicker className="form__filepicker" onChange={this.handlerFilePicker} />
                    <div className="form__footer" onClick={this.handleSubmit}>              
                        <button className="form__submit btn">Отправить</button>
                    </div>
                </article>
            </div>
        )
    }
}

export default Letter;