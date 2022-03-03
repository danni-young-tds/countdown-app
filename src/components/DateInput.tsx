interface Props {
    formSubmit(event: any): void;
    eventName: string;
    setEventName(name: string): void;
    date: string;
    setDate(date: string): void;

}
const DateInput = (props: Props) => {
    const { formSubmit, eventName, setEventName, date, setDate } = props;
    return (
        <form onSubmit={formSubmit}>
            <label>Name:
                <input className='border mt-2 ml-1' name='Name' type='text' value={eventName} onChange={(event) => setEventName(event.target.value)} />
            </label>
            <br />
            <label>Date:
                <input className='border mt-2 ml-3' name='Date' type='date' value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <button type='submit' className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-2/3 mt-2'>Add event to see the countdown</button>
        </form>
    );
};

export default DateInput;