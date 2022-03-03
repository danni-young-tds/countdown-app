import { useState } from 'react';
import CountdownCard from './components/CountdownCard';
import DateInput from './components/DateInput';
import { createCountdown } from './lib/createCountdown';

export interface EventType {
    name: string;
    date: string;
    daysUntil: number;
}


const Home = () => {
    const [eventName, setEventName] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [upcomingEvents, setUpcomingEvents] = useState<EventType[]>([])
    console.log(upcomingEvents)
    const formSubmit = (e: any) => {
        e.preventDefault()
        if (eventName.length !== 0 && date.length !== 0) {
            const daysUntil = createCountdown(date)
            const updatedEvents = [...upcomingEvents, { name: eventName, date, daysUntil }]
            setUpcomingEvents(updatedEvents)
            setDate('')
            setEventName('')
        }
    }
    return (
        <div className='flex flex-col mx-auto w-1/2 pb-5'>
            <h1 className='text-3xl mt-3 mb-1'>Countdown app</h1>
            <h2>Got an exciting day coming up? Let's start a countdown!</h2>
            <DateInput formSubmit={formSubmit} eventName={eventName} date={date} setEventName={setEventName} setDate={setDate} />
            {upcomingEvents.sort((a, b) => a.daysUntil - b.daysUntil).map((event: EventType) => <CountdownCard name={event.name} date={event.date} daysUntil={event.daysUntil} key={event.name} />)}
        </div>
    );
};

export default Home;