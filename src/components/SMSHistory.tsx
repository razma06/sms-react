import axios from "axios";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { SMSCard, SMSContainer } from "./PhoneContainer.styled";

interface sms {
    id: number;
    sender: string;
    receiver: string;
    message: string;
    date: string;
}

const SMSHistory = () => {
    const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;
    const datefrom = useRef() as MutableRefObject<HTMLInputElement>;
    const dateto = useRef() as MutableRefObject<HTMLInputElement>;

    const [history, setHistory] = useState<sms[]>([]);
    const [error, setError] = useState<string>("");

    const filter = () => {
        axios
            .get(
                `http://localhost:3000/history/filter?receiver=${phoneRef.current.value}&datefrom=${datefrom.current.value}&dateto=${dateto.current.value}`
            )
            .then((res) => {
                console.log(res.data);

                setHistory(res.data);
                setError("");
            })
            .catch((err) => {
                console.log(err);
                setError("Something happened");
            });
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/history")
            .then((res) => {
                setHistory(res.data);
                setError("");
            })
            .catch((err) => {
                console.log(err);
                setError("Something happened");
            });
    }, []);
    return (
        <div>
            {error ? <p>{error}</p> : null}
            <input
                ref={phoneRef}
                type="text"
                name=""
                placeholder="Filter By phone number"
            />
            <input ref={datefrom} type="date" />
            <input ref={dateto} type="date" />
            <button onClick={filter}>Filter</button>
            <SMSContainer>
                {history.map((sms) => {
                    return (
                        <SMSCard key={sms.id}>
                            <p>{sms.sender}</p>
                            <p>{sms.receiver}</p>
                            <p>{sms.message}</p>
                            <p>{sms.date}</p>
                        </SMSCard>
                    );
                })}
            </SMSContainer>
        </div>
    );
};

export default SMSHistory;
