/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Testimonial, TimelineStep, GalleryItem, MontessoriArea } from './types';

export const montessoriAreas: MontessoriArea[] = [
  {
    id: 'practical-life',
    title: 'Practical Life',
    shortDesc: 'Exercises that cultivate independence, physical coordination, care of self and environment.',
    fullDesc: 'Through activities like pouring, polishing, buttoning, sweeping, and food preparation, children build motor skills, concentration, coordination, order, and independence, layout, and sense of responsibility.',
    iconName: 'Sparkles'
  },
  {
    id: 'sensorial',
    title: 'Sensorial Education',
    shortDesc: 'Refining the senses to isolate physical properties like size, color, texture, sound, and shape.',
    fullDesc: 'Materials like pink towers, brown prisms, and sound cylinders empower children to explore and classify their environment, laying a concrete mathematical and logical foundation.',
    iconName: 'Eye'
  },
  {
    id: 'language',
    title: 'Language Development',
    shortDesc: 'Building rich vocabulary, phonetic awareness, and the physical mechanics of writing.',
    fullDesc: 'Using sandpaper letters and the movable alphabet, children discover phonetic association and express their thoughts in writing before building reading fluency naturally and with deep pleasure.',
    iconName: 'BookOpen'
  },
  {
    id: 'mathematics',
    title: 'Mathematics Journey',
    shortDesc: 'Moving organically from concrete quantities to abstract symbols and mathematical operations.',
    fullDesc: 'Golden bead materials introduce decimal hierarchies, while number rods and spindle boxes make addition, subtraction, multiplication, and division highly visible, tangible, and fun.',
    iconName: 'Hash'
  },
  {
    id: 'cultural',
    title: 'Cultural Studies',
    shortDesc: 'Connecting children to the cosmos through Geography, Biology, Science, Music, and Art.',
    fullDesc: 'Through puzzle maps, botany cabinets, science experiments, painting, and music, children foster deep global citizenship, appreciation of differences, and cosmic curiosity.',
    iconName: 'Globe'
  }
];

export const programs: Program[] = [
  {
    id: 'toddler-program',
    title: 'Infant Community / Toddler',
    ageGroup: '1.5 to 3 Years',
    description: 'A beautifully prepared, safe environment nurturing the rapid growth of speech, motor skills, and functional independence.',
    detailedDescription: 'Our Toddler environment is designed to bridge the transition from home to school. We provide a warm, low child-to-adult ratio space where infants move freely, practice self-care, build spoken vocabulary, and engage in social collaboration with experienced AMI-certified guides.',
    colorScheme: {
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      bg: 'bg-emerald-50/45',
      border: 'border-emerald-100',
      text: 'text-emerald-950',
      accent: 'emerald'
    },
    learningAreas: ['Grace & Courtesy', 'Fine-Motor Exploration', 'Expressive Language Enrichment', 'Sensory Harmonization', 'Outdoor Movement & Nature Walks'],
    schedule: 'Monday to Friday (9:00 AM - 12:00 PM)'
  },
  {
    id: 'primary-program',
    title: 'Primary / House of Children',
    ageGroup: '3 to 6 Years',
    description: 'The classic, child-led mixed-age community fostering lifelong concentration, math literacy, language, and cultural curiosity.',
    detailedDescription: 'In our 3–6 House of Children, children choose their learning activities independently from beautiful shelves. Mixed-age groups allow younger children to learn from older peers, and older children to reinforce their knowledge through leadership and peer mentorship.',
    colorScheme: {
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      bg: 'bg-amber-50/45',
      border: 'border-amber-100',
      text: 'text-amber-950',
      accent: 'amber'
    },
    learningAreas: ['Practical Self-Care & Cleaning', 'Sensorial Classification', 'Phonetic Writing & Reading', 'Concrete & Abstract Mathematics', 'World Geography & Botany Science'],
    schedule: 'Monday to Friday (9:00 AM - 1:30 PM)'
  },
  {
    id: 'afterschool-program',
    title: 'Daycare & After-School active',
    ageGroup: '1.5 to 8 Years (Post School)',
    description: 'A warm extension of the day with nutritious meals, a homelike environment, artistic play, and reading habits.',
    detailedDescription: 'For busy parents, our After-School Care offers a safe, hygienic, and comforting environment. Under the guidance of caring supervisors, children enjoy organic snacks, pursue creative arts and play, dive into books in the reading corner, and practice daily mindfulness.',
    colorScheme: {
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      bg: 'bg-rose-50/45',
      border: 'border-rose-100',
      text: 'text-rose-950',
      accent: 'rose'
    },
    learningAreas: ['Nutritious Hot Meals & Rest', 'Storytelling & Puppet Theater', 'Phonics & Literacy Focus', 'Artistic Workshops & Clay Modeling', 'Social Interactive Circle Games'],
    schedule: 'Monday to Friday (1:30 PM - 6:30 PM)'
  }
];

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: 'Initial Enquiry',
    subtitle: 'Begin the conversation',
    description: 'Reach out via our simple online Enquiry Form, call our helpdesk, or drop by the school campus during school hours to express interest and download our prospectus.',
    items: ['Detailed prospectus and school info kit shared', 'Understanding eligibility details based on child age']
  },
  {
    step: 2,
    title: 'Guided Campus Tour & Orientation',
    subtitle: 'See Montessori in Action',
    description: 'A dedicated guide will lead you through our pristine, natural-wood-crafted classrooms. Witness children engaged in deep focus in real-time, and discuss any academic questions.',
    items: ['One-on-one consultation with AMI certified coordinator', 'Observation of materials, hand wash zones, and play areas']
  },
  {
    step: 3,
    title: 'Parent & Child Interaction Session',
    subtitle: 'Harmonizing expectations',
    description: 'We host a friendly dialog to understand your parenting beliefs, share the Montessori philosophy, and let your little one explore a designated space with gentle materials.',
    items: ['Child spends playful minutes exploring sensorial objects', 'Open discussion on development goals and parent participation']
  },
  {
    step: 4,
    title: 'Admissions Admission Form & Joining',
    subtitle: 'Welcome to Burgeon School',
    description: 'Submit the formal registration form alongside necessary certificates. We then conduct an onboarding orientation that guides you on separation anxiety guidelines, dress, and schedules.',
    items: ['Submission of birth certificate and passport size photos', 'Orientation brief on gradual settling techniques & daily checklists']
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Toddler Care / Sorting & Practical Skills',
    category: 'practical-life',
    imageSrc: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Montessori toddler engaging with beautiful sorting blocks'
  },
  {
    id: 'gal-2',
    title: 'Sensorial Cylinder Blocks For Size Discrimination',
    category: 'sensorial',
    imageSrc: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop',
    alt: 'Kid interacting with gorgeous wooden cylinder blocks'
  },
  {
    id: 'gal-3',
    title: 'Creative Block Play & Group Coordination',
    category: 'culture',
    imageSrc: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
    alt: 'Happy children building layout with organic wood block materials'
  },
  {
    id: 'gal-4',
    title: 'Phonetic Sandpaper Writing Foundations',
    category: 'language',
    imageSrc: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Close-up of child learning with tactile alphabet blocks'
  },
  {
    id: 'gal-5',
    title: 'Tactile Math Cubes & Decimals',
    category: 'math',
    imageSrc: 'https://images.unsplash.com/photo-1564424224827-cd24b8915874?q=80&w=1200&auto=format&fit=crop',
    alt: 'Children demonstrating early mathematical layouts'
  },
  {
    id: 'gal-6',
    title: 'Creative Painting & Artistic Freedom',
    category: 'practical-life',
    imageSrc: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=1200&auto=format&fit=crop',
    alt: 'Hands coloring and painting in a relaxed room'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    parentName: 'Priya & Rahul Sharma',
    childAge: 'Joined at 2 Years',
    relationship: 'Parents of Kabir (Now 4.5 Years)',
    text: "Burgeon has been a blessing for Kabir. We saw him blossom from a quiet, hesitant toddler into an remarkably articulate, independent child who lays his own table, puts away his toys, and reads stories with great interest. The level of care and AMI dedication from the mentors is simply stellar.",
    rating: 5
  },
  {
    id: 'test-2',
    parentName: 'Dr. Ananya Nair & Vikram Sen',
    childAge: 'Joined at 18 Months',
    relationship: 'Mother of Shanaya (Now 3 Years)',
    text: "Being a busy doctor, I was extremely anxious about choosing the right environment. Our search thankfully ended at Burgeon Montessori. Their attention to sanitization, the natural wooden toys, the warm, low child-to-adult ratio, and the beautiful, light-filled rooms put me instantly at ease. Shanaya loves school!",
    rating: 5
  },
  {
    id: 'test-3',
    parentName: 'Nisha & Karthik J.',
    childAge: 'Joined at 3.5 Years',
    relationship: 'Parents of Pranav (Now 5 Years)',
    text: "The beauty of Burgeon Montessori is in their authentic method. Unlike traditional schools that drill worksheets, online tablets, or homework, they teach Pranav math concepts through beads and sensorial boards. His decimal sense is stronger than most seven-year-olds! We cannot recommend this school enough.",
    rating: 5
  }
];
