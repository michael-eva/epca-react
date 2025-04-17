import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'

const PressReleases = () => {
    const [articles] = useState([
        {
            id: 11,
            title: "[Podcast] The Off-Highway Podcast – EPCA",
            author: "Alastair Hayfield - Interact Analysis",
            date: "March 21, 2025",
            brief: "Clayton talks about his background in engineering and designing renewable energy system, before starting EPCA and focusing on battery electric mining trucks, and the achievements with these",
            link: "https://interactanalysis.com/podcast/the-off-highway-podcast-epca/",
            image: "/images/press/Interact_Analysis1.webp"
        },
        {
            id: 10,
            title: "[Article] Passion push in electrified haulage",
            author: "Jack McGinn - Business News",
            date: "October 22, 2024",
            brief: "The origins of a WA diesel haul truck's conversion to a battery-electric operating system can be traced back to a North Queensland banana farm...",
            link: "https://www.businessnews.com.au/article/Passion-push-in-electrified-haulage",
            image: "/images/press/BusinessNews1.webp"
        },
        {
            id: 9,
            title: "[Article] EPCA demonstrating real-world battery haulage business case at Bakers Hill mine",
            author: "International Mining",
            date: "September 23, 2024",
            brief: "Electric Power Conversion Australia (EPCA), a Perth, Western Australia-based company, is gaining attention for its advancements in electrifying heavy machinery...",
            link: "https://im-mining.com/2024/09/23/epca-demonstrating-real-world-battery-haulage-business-case-at-bakers-hill-mine/",
            image: "/images/press/IM1.webp"
        },
        {
            id: 8,
            title: "[Radio] EPCA on ABC Radio",
            author: "ABC Goldfields",
            date: "August 28, 2024",
            brief: "Goldfields Esperance, Midwest & Wheatbelt Rural Report.",
            link: "https://youtu.be/P3DlacI5pPw?si=jb3Z6O6zZKCIATv9",
            image: "/images/press/ABCRadio1.webp"
        },
        {
            id: 7,
            title: "[TV/Article] Electric and hydrogen truck trials roll out as mining industry pushes to lower emissions",
            author: "Jarrod Lucas & Tara de Landgrafft - ABC News",
            date: "August 28, 2024",
            brief: "The push to lower emissions from Australia's mining industry is gaining momentum with trials of large-scale electric and hydrogen trucks now underway, and the race on to find the best solution...",
            link: "https://www.abc.net.au/news/2024-08-28/diesel-mining-truck-converted-to-electric-to-lower-emissions/104230918",
            image: "/images/press/ABCNews1.webp"
        },
        {
            id: 6,
            title: "[Article] EPCA electrifies 100-tonne mining truck",
            author: "Carla Westerheide - Electrive",
            date: "August 26, 2024",
            brief: "The Australian conversion company Electric Power Conversion Australia (EPCA), based in Perth, recently electrified a 100-tonne mining truck...",
            link: "https://www.electrive.com/2024/08/26/epca-electrifies-100-tonne-mining-truck/",
            image: "/images/press/electrive1.webp"
        },
        {
            id: 5,
            title: "[Article] EPCA plans to convert 50-70 mining trucks to electric power annually",
            author: "Jo Borrás - Electrek",
            date: "August 24, 2024",
            brief: "Located in Perth, Western Australia, EPCA became famous for its \"Green Machine,\" a CAT 777 100-ton haul truck it converted to electric power...",
            link: "https://electrek.co/2024/08/24/epca-plans-to-convert-50-70-mining-trucks-to-electric-power-annually/",
            image: "/images/press/Electrek1.webp"
        },
        {
            id: 4,
            title: "[Article] EPCA to produce 50-70 battery-electric mining trucks a year, Xerotech says",
            author: "Daniel Gleeson - International Mining",
            date: "August 9, 2024",
            brief: "Having showcased its \"Green Machine\" to attendees at two major events in Australia recently, Electric Power Conversion Australia (EPCA) now has plans to produce 50-70 battery-electric mining trucks annually...",
            link: "https://im-mining.com/2024/08/09/epca-to-produce-50-70-battery-electric-mining-trucks-a-year-xerotech-says/",
            image: "/images/press/IM2.webp"
        },
        {
            id: 3,
            title: "[Article] Innovator sees green light for massive retrofit industry",
            author: "InvestMETS",
            date: "june 23, 2024",
            brief: "At the world's biggest mine electrification forum in Perth, Western Australia, recently, there was plenty of talk about what the future of mining could look like...",
            link: "https://www.investmets.com/innovator-sees-green-light-for-massive-retrofit-industry/",
            image: "/images/press/InvestMETS1.webp"
        },
        {
            id: 2,
            title: "[TV] EPCA on Channel 10 - News First",
            author: "Amelia Simpson - Channel 10",
            date: "May 19, 2024",
            brief: "The green machine was featured on Channel 10 to demonstrate the potential of our technology to reduce carbon emissions and operating costs right here in Western Australia...",
            link: "https://youtu.be/5nEdGFbF-BA?si=OaR4AMvcuWEkJPPw",
            image: "/images/press/Channel10_1.webp"
        },
        {
            id: 1,
            title: "[Article] The Electric Mine Consortium and EPCA to run Cat 777 electric truck trial",
            author: "Daniel Gleeson - International Mining",
            date: "june 23, 2023",
            brief: "The Electric Mine Consortium is looking to bridge the gap between the testing of electrified ultra-class haul trucks and continued rollout across industry...",
            link: "https://im-mining.com/2023/06/23/the-electric-mine-consortium-and-epca-to-run-cat-777-electric-truck-trial/",
            image: "/images/press/IM3.webp"
        }
    ])

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar mode="dark"/>
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative h-[40vh] bg-gray-100 py-16 flex items-center justify-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        h1 className="text-4xl font-bold text-center mb-4"
                    >
                        Press Releases
                    </motion.h1>
                </div>

                {/* Articles Grid */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid gap-8">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

const ArticleCard = ({ article }) => {
    return (
        <motion.div 
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors"
        >
            <div className="flex gap-8">
                {/* Image Section */}
                <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/6 flex-shrink-0"
                >
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                        <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </a>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                    
                    <h2 className="text-2xl font-semibold group-hover:text-green-600 transition-colors">
                        {article.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed">
                        {article.brief}
                    </p>
                    
                    <a 
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-green-600 transition-colors"
                    >
                        Continue Reading
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default PressReleases 