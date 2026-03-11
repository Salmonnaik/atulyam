// app/utils/data.ts
import { EventItem, MerchItem, SponsorItem } from '@/types'

export const EVENTS: EventItem[] = [
  { id:'dance',   icon:'🌸', name:'Dance',   tagline:'Move Like the Cosmos',       description:'Classical Bharatanatyam to street-style fusion battles. Every step is a star being born.',  date:'March 14',  venue:'Main Amphitheatre',  prize:'₹15,000', fee:'₹100/person', color:'#ff88aa', day:1, tags:['Solo','Group','Classical','Fusion']  },
  { id:'music',   icon:'🎵', name:'Music',   tagline:'Frequencies from the Stars', description:'Battle of Bands, vocal championships, and the legendary Star Night Concert finale.',         date:'March 14',  venue:'Galaxy Stage',        prize:'₹20,000', fee:'₹150/person', color:'#00f5ff', day:1, tags:['Solo','Band','Vocal','Instrumental'] },
  { id:'drama',   icon:'🎭', name:'Drama',   tagline:'Stories in Starlight',       description:'One-act plays, Nukkad Natak, improv comedy battles, and mono-act performances.',             date:'March 15',  venue:'Black Box Theatre',   prize:'₹12,000', fee:'₹100/person', color:'#ffd700', day:2, tags:['One-Act','Nukkad','Improv','Mono']    },
  { id:'gaming',  icon:'⚡', name:'Gaming',  tagline:'Enter the Digital Cosmos',   description:'BGMI, Valorant, FIFA tournaments. Retro arcade and Chess Blitz round out the digital arena.',date:'March 15',  venue:'Cyber Arena',         prize:'₹25,000', fee:'₹200/team',   color:'#9b59f5', day:2, tags:['BGMI','Valorant','FIFA','Chess']      },
  { id:'art',     icon:'🖌️', name:'Art',     tagline:'Paint the Night Sky',        description:'Live canvas battles, photography contests, digital exhibitions and origami design.',          date:'March 16',  venue:'Art Pavilion',        prize:'₹10,000', fee:'₹80/person',  color:'#4ade80', day:3, tags:['Canvas','Photo','Digital','Origami'] },
  { id:'coding',  icon:'💻', name:'Coding',  tagline:'Logic Meets the Universe',   description:'24-hour Hackathon, competitive programming, UI/UX design sprints, and AI showcases.',       date:'March 16',  venue:'Tech Hub',            prize:'₹30,000', fee:'₹200/team',   color:'#60a5fa', day:3, tags:['Hackathon','CP','UI/UX','AI']         },
]

export const ROADMAP = [
  { day:1, date:'March 14', title:'Opening Day', subtitle:'Culture Awakens', color:'#ff88aa',
    schedule:[ {time:'09:00 AM',event:'Grand Opening Ceremony'}, {time:'11:00 AM',event:'Dance Prelims'}, {time:'02:00 PM',event:'Music – Battle of Bands'}, {time:'05:00 PM',event:'Art Exhibition Opens'}, {time:'07:00 PM',event:'Cultural Night Show'} ] },
  { day:2, date:'March 15', title:'Battle Day', subtitle:'Legends Clash', color:'#9b59f5',
    schedule:[ {time:'09:30 AM',event:'Drama Competitions Begin'}, {time:'11:00 AM',event:'Gaming Arena Opens'}, {time:'01:00 PM',event:'Dance Finals'}, {time:'03:00 PM',event:'Hackathon Kickoff'}, {time:'06:00 PM',event:'Semi-Final Showdowns'} ] },
  { day:3, date:'March 16', title:'Star Night', subtitle:'Champions Rise', color:'#ffd700',
    schedule:[ {time:'10:00 AM',event:'Art & Coding Finals'}, {time:'12:00 PM',event:'Gaming Championships'}, {time:'03:00 PM',event:'Awards Ceremony'}, {time:'05:00 PM',event:'🌸 Sakura Lantern Release'}, {time:'07:00 PM',event:'⭐ Star Night Grand Concert'} ] },
]

export const MERCH: MerchItem[] = [
  { id:'tshirt',   name:'Festival Tee',       description:'Premium cotton tee with the Atulyam galaxy print on the back and star emblem on the chest.',    price:599,  icon:'👕', color:'#00f5ff', tag:'Bestseller', sizes:['XS','S','M','L','XL','XXL'] },
  { id:'hoodie',   name:'Star Hoodie',         description:'Heavyweight fleece hoodie. Embroidered ATULYAM on the chest, galaxy art on the back.',           price:1299, icon:'🧥', color:'#9b59f5', tag:'Limited',    sizes:['S','M','L','XL','XXL']      },
  { id:'cap',      name:'Cosmos Cap',          description:'Structured 6-panel cap with embroidered cherry blossom and star constellation badge.',            price:399,  icon:'🧢', color:'#ff88aa', tag:'Popular'                                        },
  { id:'bag',      name:'Sakura Tote',         description:'Heavy-duty canvas tote with full-colour sakura print. Fits a 15" laptop comfortably.',            price:499,  icon:'👜', color:'#ffd700', tag:'Eco'                                            },
  { id:'mug',      name:'Haru Mug',            description:'Ceramic 350ml mug with heat-reactive sakura design that blooms when you pour a hot drink.',       price:349,  icon:'☕', color:'#4ade80', tag:'Fan Fav'                                        },
  { id:'poster',   name:'Galaxy Poster',       description:'A2 high-gloss print of the official Atulyam constellation map. Suitable for framing.',           price:199,  icon:'🖼️', color:'#60a5fa', tag:'Art'                                            },
  { id:'badge',    name:'Star Pin Set',        description:'Set of 6 enamel pins – one for each event category. Collect all and wear your fandom.',           price:249,  icon:'📌', color:'#ff6b6b', tag:'Collectible'                                    },
  { id:'notebook', name:'Cosmos Notebook',     description:'A5 hardcover notebook, 200 pages, dot-grid with sakura watermark. Perfect for the creative soul.',price:299,  icon:'📓', color:'#e040fb', tag:'Stationery'                                    },
]

export const SPONSORS: SponsorItem[] = [
  { name:'NovaTech',    tier:'title',     emoji:'🌟', desc:'Driving innovation in technology and education across India.', logo: '🚀' },
  { name:'StarByte',    tier:'platinum',  emoji:'⬡',  desc:'AI-first software studio powering next-gen digital products.', logo: '🤖' },
  { name:'Haru Media',  tier:'platinum',  emoji:'🌸', desc:'Pan-Asia media and content company celebrating youth culture.', logo: '📺' },
  { name:'CosmicFX',    tier:'gold',      emoji:'✦',  desc:'Visual effects and post-production studio.', logo: '🎬' },
  { name:'NebulaWorks', tier:'gold',      emoji:'◈',  desc:'Deep-tech startup accelerator and venture studio.', logo: '🌌' },
  { name:'SakuraTech',  tier:'gold',      emoji:'✿',  desc:'Consumer hardware and wearables brand.', logo: '⌚' },
  { name:'ZenithCorp',  tier:'associate', emoji:'◆',  desc:'B2B SaaS and enterprise solutions.', logo: '💼' },
  { name:'PulseStudio', tier:'associate', emoji:'◉',  desc:'Creative agency for music and events.', logo: '🎨' },
  { name:'VoidLabs',    tier:'associate', emoji:'⬟',  desc:'Cybersecurity and cloud infrastructure.', logo: '🔐' },
]

export const TIER_COLOR: Record<string,string> = {
  title:'#ffd700', platinum:'#00f5ff', gold:'#ffb7c5', associate:'rgba(255,255,255,0.35)'
}

export const HIGHLIGHTS = [
  {
    id: 'ashking',
    name: 'Ash King',
    type: 'singer',
    title: 'Bollywood Playback Sensation',
    description: 'Known for hits like "Laal Rang" and "Hawa Banke"',
    image: '/images/highlights/ashking.jpg',
    year: '2023',
    day: 'Day 2',
    date: '11 April',
    youtube: 'https://youtube.com/watch?v=example1',
    spotify: 'https://spotify.com/artist/example1'
  },
  {
    id: 'djnyk',
    name: 'DJ NYK',
    type: 'dj',
    title: 'Asia\'s #1 Bollywood DJ',
    description: 'Electronic dance music producer and festival headliner',
    image: '/images/highlights/djnyk.jpg',
    year: '2022',
    day: 'Day 3',
    date: '12 April',
    youtube: 'https://youtube.com/watch?v=example2',
    spotify: 'https://spotify.com/artist/example2'
  },
  {
    id: 'carryminati',
    name: 'CarryMinati',
    type: 'youtube',
    title: 'India\'s Biggest YouTuber',
    description: 'Gaming and comedy content creator with 40M+ subscribers',
    image: '/images/highlights/carryminati.jpg',
    year: '2023',
    day: 'Day 1',
    date: '10 April',
    youtube: 'https://youtube.com/@CarryMinati',
    spotify: null
  },
  {
    id: 'bhuvanbam',
    name: 'Bhuvan Bam',
    type: 'youtube',
    title: 'Comedy Creator Extraordinaire',
    description: 'BB Ki Vines fame, multi-talented entertainer',
    image: '/images/highlights/bhuvanbam.jpg',
    year: '2022',
    day: 'Day 2',
    date: '11 April',
    youtube: 'https://youtube.com/@BBKiVines',
    spotify: null
  },
  {
    id: 'divyakumar',
    name: 'Divya Kumar',
    type: 'singer',
    title: 'Versatile Vocalist',
    description: 'Known for "Gali Gali" and "Jhoom Barabar Jhoom"',
    image: '/images/highlights/divyakumar.jpg',
    year: '2021',
    day: 'Day 3',
    date: '12 April',
    youtube: 'https://youtube.com/watch?v=example3',
    spotify: 'https://spotify.com/artist/example3'
  },
  {
    id: 'djchetas',
    name: 'DJ Chetas',
    type: 'dj',
    title: 'Bollywood Remix King',
    description: 'Mumbai-based DJ with international tours',
    image: '/images/highlights/djchetas.jpg',
    year: '2021',
    day: 'Day 1',
    date: '10 April',
    youtube: 'https://youtube.com/watch?v=example4',
    spotify: 'https://spotify.com/artist/example4'
  },
  {
    id: 'mumbikernikhil',
    name: 'Mumbiker Nikhil',
    type: 'youtube',
    title: 'Travel Vlogger',
    description: 'Motorcycle travel and lifestyle content creator',
    image: '/images/highlights/mumbikernikhil.jpg',
    year: '2023',
    day: 'Day 2',
    date: '11 April',
    youtube: 'https://youtube.com/@MumbikerNikhil',
    spotify: null
  },
  {
    id: 'akruti',
    name: 'Akruti',
    type: 'singer',
    title: 'Indie Pop Artist',
    description: 'Known for unique blend of Indian and Western music',
    image: '/images/highlights/akruti.jpg',
    year: '2022',
    day: 'Day 1',
    date: '10 April',
    youtube: 'https://youtube.com/watch?v=example5',
    spotify: 'https://spotify.com/artist/example5'
  },
  {
    id: 'djrukh',
    name: 'DJ RUKH',
    type: 'dj',
    title: 'EDM Specialist',
    description: 'Electronic music producer and festival DJ',
    image: '/images/highlights/djrukh.jpg',
    year: '2023',
    day: 'Day 3',
    date: '12 April',
    youtube: 'https://youtube.com/watch?v=example6',
    spotify: 'https://spotify.com/artist/example6'
  }
]
