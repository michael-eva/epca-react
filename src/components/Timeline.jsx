
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
  <div className="flex items-start">
    {isLeft ? (
      <>
        <div className="w-1/2 pr-16 text-right relative">
          <div className="text-sm text-gray-400 mb-2">{date}</div>
          <div className="bg-zinc-900 p-6 rounded-lg inline-block relative">
            <div className="absolute right-0 top-0 h-full w-1 bg-green-600 rounded-r"></div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
        <div className="w-1/2"></div>
      </>
    ) : (
      <>
        <div className="w-1/2"></div>
        <div className="w-1/2 pl-16 relative">
          <div className="text-sm text-gray-400 mb-2">{date}</div>
          <div className="bg-zinc-900 p-6 rounded-lg inline-block relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-600 rounded-l"></div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </>
    )}
  </div>
);

export const Timeline = () => (
  <section className="bg-black text-white px-36 py-24">
    <h2 className="text-4xl font-bold text-center mb-16">The Timeline</h2>
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-green-600"></div>
        
        {/* Timeline Items */}
        <div className="space-y-24">
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
    </div>
  </section>
);