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
    },
    {
      date: "May 2025",
      description: "Dealership agreement signed with Janus Electric (WA); MOU signed with Winyama Contracting."
    },
    {
      date: "August 2025",
      description: "ABB and EPCA sign MOU on BEV retrofits for mid-size haul trucks."
    },
    {
      date: "November 2025",
      description: "EPCA awarded the 2025 Commercialisation Bridge Grant (New Industries and Innovation Fund)."
    },
    {
      date: "January 2026",
      description: "Hon Amber-Jade Sanderson MLA, Minister for Energy and Decarbonisation, visits the Hazelmere workshop."
    },
    {
      date: "April 2026",
      description: "EPCA signs an agreement to electrify a CAT 988 wheel loader for a WA miner."
    },
    {
      date: "20 May 2026",
      description: "Launch of the world-first E-988 battery-electric wheel loader, attended by Hon Stephen Dawson MLC."
    }
  ];

export const TimelineItem = ({ date, description, col }) => (
  <div className={col === "left" ? "text-left md:text-right" : "text-left"}>
    <div className="text-sm text-gray-400 mb-2">{date}</div>
    <div className="bg-zinc-900 p-6 rounded-lg relative">
      <div
        className={
          col === "left"
            ? "absolute left-0 md:left-auto md:right-0 top-0 h-full w-1 bg-green-600 rounded-l md:rounded-l-none md:rounded-r"
            : "absolute left-0 top-0 h-full w-1 bg-green-600 rounded-l"
        }
      ></div>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export const Timeline = () => {
  const leftItems = timelineData.filter((_, index) => index % 2 === 0);
  const rightItems = timelineData.filter((_, index) => index % 2 !== 0);

  return (
    <div className="relative">
      {/* Mobile: single chronological column */}
      <div className="md:hidden relative pl-8">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-green-500"></div>
        <div className="space-y-4">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={`m-${item.date}-${index}`}
              date={item.date}
              description={item.description}
              col="right"
            />
          ))}
        </div>
      </div>

      {/* Desktop: two independently-packed, staggered columns */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-500 -translate-x-1/2"></div>
        <div className="grid grid-cols-2 gap-x-16">
          <div className="space-y-4">
            {leftItems.map((item, index) => (
              <TimelineItem
                key={`l-${item.date}-${index}`}
                date={item.date}
                description={item.description}
                col="left"
              />
            ))}
          </div>
          <div className="space-y-4 mt-20">
            {rightItems.map((item, index) => (
              <TimelineItem
                key={`r-${item.date}-${index}`}
                date={item.date}
                description={item.description}
                col="right"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
