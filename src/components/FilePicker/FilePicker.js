import React, { Component, Fragment } from "react";

const Uploads = ({files, onRemove}) => (
    <ul className="filepicker__uploads">
        {files.map((file) => (
            <li className="file" key={file.id}>
                <i className="file__icon i i-attach"></i>
                <span className="file__name">{file.name}</span>
                <span className="file__type">{file.type}</span>
                <button className="file__delete" onClick={onRemove} data-file-id={file.id}><i className="i i-delete"></i> Удалить</button>
            </li>
        ))}
    </ul>
)

class FilePicker extends Component {
    state = {
        files: [],
        dropStatus: false
    }

    handleRemoveItem = (e) => {
        const id = Number(e.target.dataset.fileId);
        this.setState({
            ...this.state,
            files: this.state.files.filter(file => (file.id !== id))
        })
    }

    handlerUpload = (e) => {

    }
    
    render () {
        return (
            <Fragment>
                <div className={`${this.props.className} filepicker`}>
                    {this.state.files.length > 0 && <Uploads files={this.state.files} onRemove={this.handleRemoveItem}/>}
                    <button className="filepicker__btn" onClick={this.handlerUpload}>
                        <i className="i i-attach"></i> Прикрепить файл
                    </button>
                    {this.state.dropStatus && 
                        <div className="filepicker__dropZone">
                            <p className="filepicker__dropCaption">Бросайте файлы сюда, я ловлю</p>
                            <p className="filepicker__dropHelper">Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</p>
                        </div>
                    }   
                </div>
            </Fragment>
        )
    }
}

export default FilePicker;