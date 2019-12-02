import React from "react";

export default function ({label, fields}) {
    return (
        <div className="form__group">
            <p className="form__label">{label}</p>
            { fields.map(({tag, ...settings}, i) => {
                return (
                    <div className="form__field" key={i}>
                        {!tag && (<input {...settings} />)}
                        {tag === 'textarea' && <textarea {...settings} />}
                    </div>
                    )
                }
            )
            }
        </div>
    )
}