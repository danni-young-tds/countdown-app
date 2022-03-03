import { useState } from 'react';
import CountdownCard from './components/CountdownCard';
import DateInput from './components/DateInput';
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
      <DateInput formSubmit={formSubmit} eventName={eventName} date={date} setEventName={setEventName} setDate={setDate} />
      {upcomingEvents.map((event: EventType) => <CountdownCard name={event.name} date={event.date} daysUntil={event.daysUntil} key={event.name} />)}
    </div>
  );
}

export default App;
