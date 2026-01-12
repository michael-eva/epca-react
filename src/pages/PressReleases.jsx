import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'

const PressReleases = () => {
    const [articles] = useState([
        {
            id: 17,
            title: "[Article] $9 million in grants to support clean energy projects",
            author: "First Nations News",
            date: "January 7, 2026",
            brief: "Energy and Decarbonisation Minister Amber-Jade Sanderson made the announcement during a visit to Electric Power Conversions Australia, a local business that previously received a CEFF grant to retrofit a diesel mining haul truck to full battery electric.",
            link: "https://firstnationsnews.com.au/9-million-in-grants-to-support-clean-energy-projects/",
            image: "/images/press/IM-id17.webp"
        },
        {
            id: 16,
            title: "[TV] Minister for Energy Announces CEFF Round 4 at EPCA’s Electric Mining Truck Facility",
            author: "7NEWS Regional WA",
            date: "January 7, 2026",
            brief: "The WA Minister for Energy and Decarbonisation, Hon. Amber-Jade Sanderson, visited EPCA’s workshop to announce Round 4 of the Clean Energy Future Fund (CEFF). EPCA previously received CEFF support to retrofit a diesel mining truck to full battery-electric [...].",
            link: "https://youtu.be/NgblJi8321s",
            image: "/images/press/7NEWS_1.webp"
        },
        {
            id: 15,
            title: "[Article] EPCA advancing mining electrification",
            author: "The Australian Mining Review",
            date: "September 27, 2025",
            brief: "ABB is a Switzerland-based leading global technology company and together the companies will deliver retrofit solutions for conventionally powered trucks for mid-sized haul trucks with capacities of 100-150t.",
            link: "https://australianminingreview.com.au/news/epca-advancing-mining-electrification/",
            image: "/images/press/AMR1.webp"
        },
        {
            id: 14,
            title: "[Article] ABB and EPCA sign MoU on BEV retrofits for mid-size haul trucks",
            author: "International Mining",
            date: "August 27, 2025",
            brief: "ABB and EPCA have signed a Memorandum of Understanding (MoU) that will see the pair team up to develop and deploy full battery electric retrofit solutions for mid-sized mining haul trucks.",
            link: "https://im-mining.com/2025/08/27/abb-and-epca-sign-mou-on-bev-retrofits-for-mid-size-haul-trucks/",
            image: "/images/press/IM5.webp"
        },
        {
            id: 13,
            title: "[Article] Why this WA mining company just became the exclusive electric truck converter for an entire state",
            author: "Resources Review",
            date: "August 27, 2025",
            brief: "Two Australian companies are making a bold commitment to electric transportation. And their partnership could reshape how Western Australia thinks about zero-emission vehicles.",
            link: "https://resourcesreview.com.au/business_insight/wa-epca-janus-electric/",
            image: "/images/press/ResourcesReview1.webp"
        },
        {
            id: 12,
            title: "[Article] Janus enlists EPCA to accelerate zero emission road truck vehicle mission",
            author: "International Mining",
            date: "August 25, 2025",
            brief: "EPCA’s aim to accelerate the transition to zero-emission mining fleets now extends to on-road vehicles, with the company having just signed a Western Australia-focused dealership agreement with Janus Electric.",
            link: "https://im-mining.com/2025/08/25/janus-enlists-epca-to-accelerate-zero-emission-road-truck-vehicle-mission/",
            image: "/images/press/IM4.webp"
        },
        {
            id: 11,
            title: "[Radio] The Off-Highway Podcast – EPCA",
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
            title: "[TV] Electric and hydrogen truck trials roll out as mining industry pushes to lower emissions",
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

    // State for filtering and pagination
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMediaType, setSelectedMediaType] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 8;

    // Filter articles based on search term and media type
    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                article.brief.toLowerCase().includes(searchTerm.toLowerCase());
            
            const mediaType = article.title.includes('[Article]') ? 'Article' :
                             article.title.includes('[Radio]') ? 'Radio' :
                             article.title.includes('[TV]') ? 'TV' : 'Article';
            
            const matchesMediaType = selectedMediaType === 'All' || mediaType === selectedMediaType;
            
            return matchesSearch && matchesMediaType;
        });
    }, [articles, searchTerm, selectedMediaType]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = filteredArticles.slice(startIndex, endIndex);

    // Reset to first page when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedMediaType]);

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const start = Math.max(1, currentPage - 2);
            const end = Math.min(totalPages, start + maxVisiblePages - 1);
            
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }
        
        return pages;
    };

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

                {/* Search and Filter Controls */}
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {/* Search Bar */}
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Media Type Filter */}
                        <div className="md:w-48">
                            <select
                                value={selectedMediaType}
                                onChange={(e) => setSelectedMediaType(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                                <option value="All">All Media Types</option>
                                <option value="Article">Articles</option>
                                <option value="Radio">Radio</option>
                                <option value="TV">TV</option>
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
                        </p>
                    </div>

                    {/* Top Pagination */}
                    {totalPages > 1 && (
                        <PaginationControls
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            getPageNumbers={getPageNumbers}
                        />
                    )}

                    {/* Articles Grid */}
                    <div className="grid gap-8 mt-8">
                        {currentArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>

                    {/* Bottom Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12">
                            <PaginationControls
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                                getPageNumbers={getPageNumbers}
                            />
                        </div>
                    )}

                    {/* No Results Message */}
                    {currentArticles.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}

const PaginationControls = ({ currentPage, totalPages, onPageChange, getPageNumbers }) => {
    return (
        <div className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                        pageNum === currentPage
                            ? 'bg-green-600 text-white'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    {pageNum}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

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
                    
                    <a 
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <h2 className="text-2xl font-semibold group-hover:text-green-600 transition-colors cursor-pointer">
                            {article.title}
                        </h2>
                    </a>
                    
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