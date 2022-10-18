import React, { useState, useRef, useEffect } from "react";
import * as cardsApi from "../../../src/apis/cards"

export default function Groupon() {
    const [groupon,setGroupon] = useState<any>(null);

    async function getAllGroups() {
        await cardsApi.getAllCards('Groupon').then((res:any) => {
            console.log(res)
            setGroupon(res.data.result);
            })
    }
    
    useEffect(() => {
    getAllGroups();
    }, []);
    return (
        <div>
Groupon
        </div>
    )
}
