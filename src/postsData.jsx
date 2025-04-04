const postsData = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    author: {
      name: 'John Smith',
      avatar: 'https://picsum.photos/50/50?random=2',
      role: 'Frontend Developer',
    },
    publishDate: '2024-03-15',
    views: 3427,
    shortDescription: 'Learn the basics of React and start building your first component-based application.',
    longDescription: `React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll cover:

• Understanding React components and JSX
• Setting up your development environment
• Creating your first React component
• Managing state and props
• Handling events and user interactions
• Working with hooks like useState and useEffect
• Best practices for React development

Whether you're new to web development or coming from another framework, this guide will help you master the fundamentals of React.`,
    banner: '/images/postImages/react.png',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    id: 2,
    slug: 'healthy-morning-routine',
    title: '5 Healthy Morning Habits',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://picsum.photos/50/50?random=2',
      role: 'Health & Wellness Coach',
    },
    publishDate: '2024-03-14',
    views: 8956,
    shortDescription: 'Discover five essential morning habits that can boost your productivity and well-being.',
    longDescription: `Starting your day right can set the tone for success. Here's a detailed look at five transformative morning habits:

1. Early Rising: Wake up at 6 AM to enjoy quiet, productive hours
2. Hydration: Start with warm lemon water to boost metabolism
3. Movement: 15-minute yoga or light exercise to energize your body
4. Mindfulness: 10-minute meditation for mental clarity
5. Planning: Review your daily goals and priorities

We'll explore the science behind each habit and provide practical tips for incorporating them into your routine, even if you're not a morning person.`,
    banner: '/images/postImages/morning.jpg',
    tags: ['Health', 'Lifestyle', 'Wellness'],
  },
  {
    id: 3,
    slug: 'photography-tips',
    title: 'Essential Photography Tips for Beginners',
    author: {
      name: 'Michael Chen',
      avatar: 'https://picsum.photos/50/50?random=3',
      role: 'Professional Photographer',
    },
    publishDate: '2024-03-13',
    views: 5234,
    shortDescription: 'Master the basics of photography with these simple yet effective techniques.',
    longDescription: `Ready to improve your photography skills? This guide covers essential techniques that will transform your photos:

• Understanding the exposure triangle (ISO, aperture, shutter speed)
• Composition rules and when to break them
• Natural vs artificial lighting techniques
• Color theory and white balance
• Basic post-processing tips
• Equipment recommendations for beginners
• Common mistakes to avoid

Plus, we'll share practical exercises to help you practice these concepts in the field. Whether you're using a DSLR or smartphone, these principles will help you capture better images.`,
    banner: '/images/postImages/photography.jpg',
    tags: ['Photography', 'Art', 'Tutorial'],
  },
  {
    id: 4,
    slug: 'modern-web-design-trends',
    title: 'Modern Web Design Trends 2024',
    author: {
      name: 'Emma Davis',
      avatar: 'https://picsum.photos/50/50?random=4',
      role: 'UI/UX Designer',
    },
    publishDate: '2024-03-12',
    views: 7123,
    shortDescription: 'Explore the latest trends in web design and stay ahead in the digital world.',
    longDescription: `The web design landscape is constantly evolving. Here are the key trends shaping 2024:

1. Minimalist Design & Micro-interactions
   - Simplified layouts
   - Subtle animations
   - Purposeful white space

2. Advanced Typography
   - Variable fonts
   - Creative font pairings
   - Typography-driven designs

3. Dark Mode & Color Schemes
   - Adaptive color systems
   - Accessibility considerations
   - Brand color evolution

4. Performance & User Experience
   - Core Web Vitals optimization
   - Mobile-first approach
   - Progressive enhancement

We'll analyze real-world examples and discuss implementation strategies for each trend.`,
    banner: '/images/postImages/modernWeb.jpg',
    tags: ['Web Design', 'UI/UX', 'Trends'],
  },
  {
    id: 5,
    slug: 'quick-healthy-recipes',
    title: '10-Minute Healthy Recipes',
    author: {
      name: 'Lisa Martinez',
      avatar: 'https://picsum.photos/50/50?random=5',
      role: 'Food & Nutrition Expert',
    },
    publishDate: '2024-03-11',
    views: 9845,
    shortDescription: 'Quick and nutritious recipes perfect for busy professionals and students.',
    longDescription: `No time to cook? No problem! These quick recipes are both healthy and delicious:

1. Quinoa Power Bowl
   - Prep time: 5 mins
   - Cook time: 5 mins
   - Ingredients and step-by-step instructions

2. Green Smoothie Bowl
   - Nutritional benefits
   - Variations and toppings
   - Meal prep tips

3. Mediterranean Wrap
   - Quick assembly guide
   - Protein options
   - Make-ahead suggestions

Plus, we'll share tips for grocery shopping, meal planning, and kitchen organization to make healthy eating easier.`,
    banner: '/images/postImages/quickHealthy.jpg',
    tags: ['Cooking', 'Health', 'Food'],
  },
  {
    id: 6,
    slug: 'productivity-tools',
    title: 'Must-Have Productivity Tools',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://picsum.photos/50/50?random=6',
      role: 'Productivity Consultant',
    },
    publishDate: '2024-03-10',
    views: 4567,
    shortDescription: 'Discover the best tools and apps to boost your daily productivity and efficiency.',
    longDescription: `Maximize your efficiency with these carefully selected productivity tools:

1. Task Management
   - Notion: All-in-one workspace
   - Todoist: Smart task organization
   - ClickUp: Team collaboration

2. Time Management
   - RescueTime: Activity tracking
   - Forest: Focus timer
   - Calendar blocking techniques

3. Communication & Collaboration
   - Slack alternatives
   - Asana vs Trello
   - Email management tools

We'll cover setup guides, integration tips, and real-world usage scenarios for each tool, helping you create a productivity system that works for you.`,
    banner: '/images/postImages/Productivity.webp',
    tags: ['Productivity', 'Technology', 'Tools'],
  },
];

export default postsData;
