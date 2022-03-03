interface Props {
    name: string;
    date: string;
    daysUntil: number;
}

const CountdownCard = (props: Props) => {
    const { name, date, daysUntil } = props;

    return (
        <div className="w-full mt-4">
            <div className="border border-gray-400   bg-white rounded p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{name} - {date}</div>
                    <p className="text-gray-700 text-base">{daysUntil} days to go!</p>
                </div>
            </div>
        </div >
    );
};

export default CountdownCard;