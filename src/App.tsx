import { useState } from "react";
import "./App.css";
import Phone from "@/assets/Nexus5.svg";
import {
    Flex,
    Overlay,
    PhoneContainer,
} from "./components/PhoneContainer.styled";
// @ts-ignore
import Form from "@/components/Form";
import SMSHistory from "./components/SMSHistory";

function App() {
    const [showForm, setShowForm] = useState<boolean>(true);

    return (
        <div>
            <PhoneContainer>
                <img src={Phone} alt="" />

                <Overlay>
                    <Flex>
                        <button onClick={() => setShowForm(true)}>Form</button>
                        <button onClick={() => setShowForm(false)}>
                            History
                        </button>
                    </Flex>
                    {showForm ? <Form /> : <SMSHistory />}
                </Overlay>
            </PhoneContainer>
        </div>
    );
}

export default App;
