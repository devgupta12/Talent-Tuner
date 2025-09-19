// Mock API functions to fetch LinkedIn and GitHub profile data
// In a real application, these would make actual API calls to LinkedIn and GitHub APIs

export interface LinkedInProfile {
  name: string
  headline: string
  location: string
  summary: string
  experience: Array<{
    title: string
    company: string
    duration: string
    description: string
    location?: string
  }>
  education: Array<{
    degree: string
    institution: string
    year: string
    field?: string
  }>
  skills: string[]
  certifications: Array<{
    name: string
    issuer: string
    date: string
  }>
  connections: number
  profilePicture?: string
}

export interface GitHubProfile {
  username: string
  name: string
  bio: string
  location: string
  email?: string
  website?: string
  followers: number
  following: number
  publicRepos: number
  profilePicture?: string
  repositories: Array<{
    name: string
    description: string
    language: string
    stars: number
    forks: number
    updatedAt: string
    topics: string[]
  }>
  languages: Array<{
    name: string
    percentage: number
  }>
  contributions: {
    total: number
    streak: number
    lastYear: number
  }
}

export interface PortfolioData {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  images?: string[]
}

// Mock LinkedIn API function
export async function fetchLinkedInProfile(url: string): Promise<LinkedInProfile> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Extract username from URL for mock data
  const username = url.split('/').pop() || 'user'
  
  return {
    name: "Alex Johnson",
    headline: "Computer Science Engineering • Final Year",
    location: "San Francisco, CA",
    summary: "Passionate computer science student with a focus on full-stack development and AI. Experienced in building scalable web applications and contributing to open-source projects. Strong background in software engineering, data structures, and algorithms. Actively seeking internship opportunities in software development.",
    experience: [
      {
        title: "Software Development Intern",
        company: "TechCorp",
        duration: "Jun 2023 - Present",
        description: "Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated with senior developers on feature implementation and code reviews. Implemented RESTful APIs and database optimization techniques.",
        location: "San Francisco, CA"
      },
      {
        title: "Frontend Developer Intern",
        company: "StartupXYZ",
        duration: "Jan 2023 - May 2023",
        description: "Built responsive user interfaces using React and TypeScript. Implemented state management with Redux and integrated REST APIs. Worked on mobile-first design principles and accessibility features.",
        location: "Remote"
      },
      {
        title: "Teaching Assistant",
        company: "UC Berkeley",
        duration: "Sep 2022 - Dec 2022",
        description: "Assisted in teaching Data Structures and Algorithms course. Graded assignments, conducted office hours, and helped students with programming concepts.",
        location: "Berkeley, CA"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Berkeley",
        year: "2024",
        field: "Computer Science"
      },
      {
        degree: "High School Diploma",
        institution: "Lincoln High School",
        year: "2020",
        field: "General Studies"
      }
    ],
    skills: [
      "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", "C++",
      "MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Git", "Agile", 
      "Machine Learning", "Data Structures", "Algorithms", "REST APIs",
      "GraphQL", "Redux", "Express.js", "Next.js", "Tailwind CSS", "Bootstrap"
    ],
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023"
      },
      {
        name: "React Developer Certification",
        issuer: "Meta",
        date: "2023"
      },
      {
        name: "Google Data Analytics Certificate",
        issuer: "Google",
        date: "2022"
      },
      {
        name: "Python for Data Science",
        issuer: "IBM",
        date: "2022"
      }
    ],
    connections: 500,
    profilePicture: "/professional-headshot.png"
  }
}

// Mock GitHub API function
export async function fetchGitHubProfile(url: string): Promise<GitHubProfile> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200))
  
  // Extract username from URL for mock data
  const username = url.split('/').pop() || 'user'
  
  return {
    username: username,
    name: "Alex Johnson",
    bio: "CS Student | Full-Stack Developer | Open Source Enthusiast | Building the future with code",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    website: "https://alexjohnson.dev",
    followers: 120,
    following: 85,
    publicRepos: 25,
    profilePicture: "/professional-headshot.png",
    repositories: [
      {
        name: "ecommerce-platform",
        description: "Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard",
        language: "JavaScript",
        stars: 45,
        forks: 12,
        updatedAt: "2024-01-15",
        topics: ["react", "nodejs", "mongodb", "stripe", "ecommerce", "fullstack"]
      },
      {
        name: "task-management-app",
        description: "Mobile-first task management application with real-time updates and team collaboration",
        language: "TypeScript",
        stars: 32,
        forks: 8,
        updatedAt: "2024-01-10",
        topics: ["react-native", "firebase", "typescript", "mobile", "collaboration"]
      },
      {
        name: "ai-chatbot",
        description: "AI-powered chatbot using OpenAI API and natural language processing with sentiment analysis",
        language: "Python",
        stars: 28,
        forks: 15,
        updatedAt: "2024-01-08",
        topics: ["python", "openai", "nlp", "ai", "chatbot", "machine-learning"]
      },
      {
        name: "portfolio-website",
        description: "Personal portfolio website built with Next.js and Tailwind CSS with dark mode support",
        language: "TypeScript",
        stars: 15,
        forks: 3,
        updatedAt: "2024-01-05",
        topics: ["nextjs", "tailwind", "typescript", "portfolio", "responsive"]
      },
      {
        name: "data-visualization-tool",
        description: "Interactive data visualization tool for analyzing large datasets with D3.js",
        language: "JavaScript",
        stars: 22,
        forks: 7,
        updatedAt: "2024-01-03",
        topics: ["d3js", "data-visualization", "javascript", "analytics"]
      },
      {
        name: "algorithm-visualizer",
        description: "Visual representation of sorting and searching algorithms with step-by-step animations",
        language: "Python",
        stars: 18,
        forks: 5,
        updatedAt: "2023-12-28",
        topics: ["algorithms", "visualization", "python", "education"]
      },
      {
        name: "weather-app",
        description: "Real-time weather application with location-based forecasts and historical data",
        language: "React",
        stars: 12,
        forks: 4,
        updatedAt: "2023-12-20",
        topics: ["react", "weather-api", "geolocation", "forecast"]
      },
      {
        name: "expense-tracker",
        description: "Personal expense tracking application with budget management and spending analytics",
        language: "Vue.js",
        stars: 8,
        forks: 2,
        updatedAt: "2023-12-15",
        topics: ["vue", "expense-tracking", "budget", "analytics"]
      }
    ],
    languages: [
      { name: "JavaScript", percentage: 35 },
      { name: "TypeScript", percentage: 25 },
      { name: "Python", percentage: 20 },
      { name: "Java", percentage: 10 },
      { name: "CSS", percentage: 5 },
      { name: "HTML", percentage: 3 },
      { name: "Vue", percentage: 2 }
    ],
    contributions: {
      total: 1250,
      streak: 45,
      lastYear: 890
    }
  }
}

// Mock portfolio analysis function
export async function analyzePortfolio(url: string): Promise<PortfolioData[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  return [
    {
      title: "E-commerce Platform",
      description: "A comprehensive e-commerce solution with user authentication, product management, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/user/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/user/task-management-app"
    },
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot that can answer questions and provide assistance using natural language processing.",
      technologies: ["Python", "OpenAI API", "Flask", "NLTK"],
      githubUrl: "https://github.com/user/ai-chatbot"
    }
  ]
}

// CV Score calculation function
export interface CVScore {
  overall: number
  breakdown: {
    resumeQuality: number
    skillsMatch: number
    certifications: number
    experience: number
    projects: number
    education: number
  }
  recommendations: Array<{
    title: string
    description: string
    impact: string
    category: "Skill" | "Action" | "Profile"
    points: number
  }>
}

export function calculateCVScore(
  linkedinData?: LinkedInProfile,
  githubData?: GitHubProfile,
  portfolioData?: PortfolioData[]
): CVScore {
  let resumeQuality = 0
  let skillsMatch = 0
  let certifications = 0
  let experience = 0
  let projects = 0
  let education = 0

  // Resume Quality (based on profile completeness)
  if (linkedinData) {
    resumeQuality += 30
    if (linkedinData.summary) resumeQuality += 10
    if (linkedinData.profilePicture) resumeQuality += 5
    if (linkedinData.experience.length > 0) resumeQuality += 15
    if (linkedinData.education.length > 0) resumeQuality += 10
    if (linkedinData.skills.length > 5) resumeQuality += 10
    if (linkedinData.connections > 100) resumeQuality += 10
  }

  if (githubData) {
    resumeQuality += 10
    if (githubData.bio) resumeQuality += 5
    if (githubData.publicRepos > 10) resumeQuality += 10
    if (githubData.followers > 50) resumeQuality += 5
  }

  // Skills Match (based on technology diversity and relevance)
  const allSkills = new Set<string>()
  if (linkedinData) {
    linkedinData.skills.forEach(skill => allSkills.add(skill))
  }
  if (githubData) {
    githubData.languages.forEach(lang => allSkills.add(lang.name))
    githubData.repositories.forEach(repo => {
      repo.topics.forEach(topic => allSkills.add(topic))
    })
  }
  
  skillsMatch = Math.min(100, allSkills.size * 8) // 8 points per unique skill, max 100

  // Certifications
  if (linkedinData?.certifications) {
    certifications = Math.min(100, linkedinData.certifications.length * 30)
  }

  // Experience
  if (linkedinData?.experience) {
    experience = Math.min(100, linkedinData.experience.length * 25)
  }

  // Projects
  if (githubData?.repositories) {
    const totalStars = githubData.repositories.reduce((sum, repo) => sum + repo.stars, 0)
    projects = Math.min(100, (githubData.repositories.length * 10) + (totalStars * 2))
  }

  // Education
  if (linkedinData?.education) {
    education = Math.min(100, linkedinData.education.length * 50)
  }

  const overall = Math.round((resumeQuality + skillsMatch + certifications + experience + projects + education) / 6)

  // Generate recommendations
  const recommendations = []
  
  if (certifications < 60) {
    recommendations.push({
      title: "Complete React Certification",
      description: "Boost your frontend skills",
      impact: "+12 JRI points",
      category: "Skill" as const,
      points: 12
    })
  }

  if (experience < 50) {
    recommendations.push({
      title: "Apply to 3 more internships",
      description: "Increase your chances",
      impact: "Higher placement odds",
      category: "Action" as const,
      points: 8
    })
  }

  if (resumeQuality < 80) {
    recommendations.push({
      title: "Update LinkedIn profile",
      description: "Add recent projects",
      impact: "Better visibility",
      category: "Profile" as const,
      points: 10
    })
  }

  if (projects < 70) {
    recommendations.push({
      title: "Contribute to open source",
      description: "Showcase your coding skills",
      impact: "+15 JRI points",
      category: "Action" as const,
      points: 15
    })
  }

  return {
    overall,
    breakdown: {
      resumeQuality: Math.min(100, resumeQuality),
      skillsMatch: Math.min(100, skillsMatch),
      certifications: Math.min(100, certifications),
      experience: Math.min(100, experience),
      projects: Math.min(100, projects),
      education: Math.min(100, education)
    },
    recommendations
  }
}
