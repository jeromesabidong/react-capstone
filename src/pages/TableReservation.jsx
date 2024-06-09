import { useState } from "react";
import TableReservationForm from "../forms/TableReservationForm";

const TableReservation = ({ availableTimes, setAvailableTimes }) => {
    const [form, setForm] = useState({
        date: '',
        time: '',
        guests: 0,
        occasion: '',
    });

    const allowedOccasions = [ "Birthday", "Anniversary" ];

    return <>
        <TableReservationForm
            form={form}
            setForm={setForm}
            availableTimes={availableTimes}
            allowedOccasions={allowedOccasions}
        />
    </>
}

export default TableReservation;