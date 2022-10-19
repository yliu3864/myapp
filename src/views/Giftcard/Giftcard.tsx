import React, { useState, useRef, useEffect } from "react";
import * as cardsApi from "../../../src/apis/cards"
import CardTable from '../../components/Elements/CardTable'

export default function Giftcard() {
    interface DataType {
        key: string;
        name: string;
        price: number;
        image: string;
    }
    const [tableData, setTableData] = useState<DataType[]>();

    async function getAllGroups() {
        await cardsApi.getAllCards('GiftCard').then((res: any) => {
            const { products } = res.data.result.products;
            let data: DataType[] = [];
            for (const itm of products) {
                data.push({
                    key: itm.id,
                    name: itm.productName,
                    price: itm.minAmount,
                    image: itm.imageUrl
                });
            }
            setTableData(data);
            console.log(data);
            
        })
    }

    useEffect(() => {
        getAllGroups();
    }, []);

    return (
        <div>
            <CardTable data = {tableData}></CardTable>
        </div>
    )
}
