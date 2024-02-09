"use client";

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {

    useEffect(() => {
        Crisp.configure("723b4320-f9a4-4e5e-acc6-85938c86f651");
    }, []);

return null
}
