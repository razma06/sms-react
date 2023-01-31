import React, { useRef, useState } from "react";
import { PhoneForm } from "./PhoneContainer.styled";
import axios from "axios";

const Form = () => {
    const sender = useRef() as React.MutableRefObject<HTMLInputElement>;
    const tel = useRef() as React.MutableRefObject<HTMLInputElement>;
    const message = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const [messageFromServer, setMessageFromServer] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendSMS = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        axios
            .post("http://localhost:3000/", {
                sender: sender.current.value,
                tel: tel.current.value,
                mess: message.current.value,
            })
            .then((res) => {
                console.log(res);
                setMessageFromServer(res.data);
            })
            .catch((err) => {
                console.log(err);
                setMessageFromServer(err.response.data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <PhoneForm onSubmit={(e) => sendSMS(e)}>
            <input
                type="text"
                placeholder="Sender Name"
                className="sender"
                ref={sender}
                required
            />
            <input
                type="tel"
                placeholder="Sender Number"
                className="tel"
                pattern="\+[0-9]\d-?+{1,20}-?+"
                ref={tel}
                required
            />
            <div className="container">
                {messageFromServer ? <p>{messageFromServer} </p> : null}
                <textarea
                    cols={30}
                    rows={8}
                    ref={message}
                    maxLength={159}
                    required
                />
                <input
                    type="submit"
                    className="submit"
                    value={isLoading ? "Loading..." : "Send"}
                    disabled={isLoading}
                />
            </div>
        </PhoneForm>
    );
};

export default Form;
