export const timelineData = [
    {
      date: "May 2023",
      // title: "Major Milestone 1",
      description: "EPCA is officially founded by Clayton Franklin with the mission of electrifying heavy mining equipment for a sustainable, zero-emission future."
    },
    {
      date: "October 2023",
      // title: "Major Milestone 2",
      description: "Starts design and retrofit of a 100t CAT 777D"
    },
    {
      date: "May 2024",
      // title: "Major Milestone 3",
      description: "The completed EPCA E-777 is unveiled at The Electric Mine Conference in Perth."
    }
    ,
    {
      date: "August 2024",
      // title: "Major Milestone 3",
      description: "We showcase the E-777 at Diggers & Dealers in Kalgoorlie for visitors to see it in action."
    }
    ,
    {
      date: "August 2024",
      // title: "Major Milestone 3",
      description: "The E-777 begins field testing at Bakers Hill and successfully carries its first tons."
    }
    ,
    {
      date: "September 2024",
      // title: "Major Milestone 3",
      description: "EPCA’s team joins Austin Engineering at MINExpo in Las Vegas."
    }
    ,
    {
      date: "October 2024",
      // title: "Major Milestone 3",
      description: "EPCA is awarded $250,000 from the METS grants."
    }
    ,
    {
      date: "December 2024",
      // title: "Major Milestone 3",
      description: "EPCA secures a $3M grant from The Clean Energy Future Fund."
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
            {/* <h3 className="text-xl font-bold mb-2">{title}</h3> */}
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
            {/* <h3 className="text-xl font-bold mb-2">{title}</h3> */}
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
