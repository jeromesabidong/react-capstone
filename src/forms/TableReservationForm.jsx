import { useEffect } from "react";
import DefaultButton from "../components/DefaultButton";
import DefaultDropdown from "../components/DefaultDropdown";
import FormLabel from "../components/form/FormLabel";

const TableReservationForm = ({ form, setForm, availableTimes, allowedOccasions }) => {

    useEffect(() => {
        console.log(form)
    }, [form])

    return <>
        <form className="grid grid-cols-1 gap-5 py-10">
            <FormLabel label="Choose date" target="reservation-date" />
            <input
                type="text"
                className="p-1 rounded border border-secondary-dark-grey"
                name="date"
                id="reservation-date"
                placeholder="YYYY/MM/DD"
                value={form.date}
                onChange={e => setForm({...form, date: e.target.value})}
            />
            <FormLabel label="Choose time" target="reservation-time" />
            <DefaultDropdown
                elements={availableTimes}
                name="time" id="reservation-time"
                onChange={e => setForm({...form, time: e.target.value})}
            />
            <FormLabel label="Number of guests" target="guests-count" />
            <input type="number"
                className="p-1 rounded border border-secondary-dark-grey"
                name="guests"
                id="guests-count"
                placeholder="1"
                min={1} max={10}
                onChange={e => setForm({...form, guests: e.target.value})}
            />
            <FormLabel label="Occasion" target="occasion" />
            <DefaultDropdown
                elements={allowedOccasions}
                name="occasion" id="occasion"
                onChange={e => setForm({...form, occassion: e.target.value})}
            />
            <DefaultButton type="submit">Make your Reservation</DefaultButton>
        </form>
    </>
}

export default TableReservationForm;