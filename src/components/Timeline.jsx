export const timelineData = [
    {
      date: "January 2024",
      title: "Major Milestone 1",
      description: "Description of your first major milestone. For example: Secured $X million in funding for expansion."
    },
    {
      date: "November 2023",
      title: "Major Milestone 2",
      description: "Description of your second major milestone. For example: Launched new product line."
    },
    {
      date: "September 2023",
      title: "Major Milestone 3",
      description: "Description of your third major milestone. For example: Opened new facility."
    }
  ];
export const TimelineItem = ({ date, title, description, isLeft }) => (
  <div className="flex flex-col md:flex-row items-start">
    {isLeft ? (
      <>
        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left md:text-right relative">
          <div className="text-sm text-gray-400 mb-2">{date}</div>
          <div className="bg-zinc-900 p-6 rounded-lg relative">
            <div className="absolute left-0 md:left-auto md:right-0 top-0 h-full w-1 bg-green-600 rounded-l md:rounded-l-none md:rounded-r"></div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2"></div>
      </>
    ) : (
      <>
        <div className="hidden md:block md:w-1/2"></div>
        <div className="w-full md:w-1/2 pl-12 md:pl-16 relative">
          <div className="text-sm text-gray-400 mb-2">{date}</div>
          <div className="bg-zinc-900 p-6 rounded-lg relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-600 rounded-l"></div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </>
    )}
  </div>
);

export const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-green-500 transform -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.date}
            date={item.date}
            title={item.title}
            description={item.description}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};
