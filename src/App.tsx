import { useState } from 'react';
import CountdownCard from './components/CountdownCard';
import { createCountdown } from './lib/createCountdown';

export interface EventType {
  name: string;
  date: string;
  daysUntil: number;
}

function App() {
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
    <div className='flex flex-col mx-auto w-1/2'>
      <h1 className='text-xl'>Countdown app</h1>
      <p>Got an exciting day coming up? Let's start a countdown!</p>
      <form onSubmit={formSubmit}>
        <label>Name:
          <input className='border' name='Name' type='text' value={eventName} onChange={(event) => setEventName(event.target.value)} />
        </label>
        <label>Date:
          <input className='border' name='Date' type='date' value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <button type='submit' className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-2/3'>Add event to see the countdown</button>
      </form>
      {upcomingEvents.map((event: EventType) => <CountdownCard name={event.name} date={event.date} daysUntil={event.daysUntil} key={event.name} />)}
    </div>
  );
}

export default App;
