import React from "react";

export default function (props) {
 return (
    <section className={`${props.classes} panel`}>
        {props.children}
    </section>
 )
}