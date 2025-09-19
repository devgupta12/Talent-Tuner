"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Star, 
  TrendingUp, 
  Target, 
  Briefcase, 
  Users, 
  Award,
  ExternalLink,
  Bell,
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Github,
  Linkedin,
  Globe,
  User,
  MapPin,
  Phone,
  Mail
} from "lucide-react"
import { CVScore, LinkedInProfile, GitHubProfile, PortfolioData } from "@/lib/social-api"

interface EnhancedCVDashboardProps {
  linkedinData: LinkedInProfile
  githubData: GitHubProfile
  portfolioData: PortfolioData[]
  cvScore: CVScore
  profileData: {
    firstName: string
    lastName: string
    email: string
    location: string
  }
}

export function EnhancedCVDashboard({ 
  linkedinData, 
  githubData, 
  portfolioData, 
  cvScore, 
  profileData 
}: EnhancedCVDashboardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Needs Improvement"
  }

  const upcomingDeadlines = [
    {
      title: "Google Summer Internship",
      company: "Google",
      deadline: "Dec 15, 2024",
      urgency: "urgent" as const,
      daysLeft: 5
    },
    {
      title: "Microsoft SDE Intern",
      company: "Microsoft", 
      deadline: "Dec 20, 2024",
      urgency: "medium" as const,
      daysLeft: 10
    },
    {
      title: "Amazon Development Center",
      company: "Amazon",
      deadline: "Dec 25, 2024", 
      urgency: "low" as const,
      daysLeft: 15
    }
  ]

  const recentActivity = [
    {
      title: "Resume analyzed",
      description: "Received feedback on your updated resume",
      time: "2 hours ago",
      status: "Completed" as const
    },
    {
      title: "JavaScript skill test",
      description: "Scored 85/100 in advanced JavaScript assessment",
      time: "1 day ago", 
      status: "High Score" as const
    },
    {
      title: "Applied to internship",
      description: "Software Developer Intern at TechCorp",
      time: "2 days ago",
      status: "Pending" as const
    },
    {
      title: "Mock interview completed",
      description: "Technical interview practice session",
      time: "3 days ago",
      status: "Feedback Available" as const
    }
  ]

  const skillProgress = [
    { name: "JavaScript", level: "Advanced", progress: 85 },
    { name: "React", level: "Intermediate", progress: 70 },
    { name: "Data Analysis", level: "Beginner", progress: 45 },
    { name: "UI/UX Design", level: "Beginner", progress: 30 }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Talent Tuner</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Welcome, {profileData.email}</span>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                Logout
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Profile Section */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-secondary/20">
                  <AvatarImage src={linkedinData.profilePicture} />
                  <AvatarFallback className="text-lg font-semibold">
                    {profileData.firstName[0]}{profileData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-primary">
                    {profileData.firstName} {profileData.lastName}
                  </h1>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profileData.location}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <Progress value={100} className="w-24" />
                      <span className="text-sm text-muted-foreground">100% complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Member since</p>
                <p className="font-medium">January 2024</p>
              </div>
            </div>

            {/* Quick Actions - Matching Simple Dashboard */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-0 bg-white shadow-sm hover:shadow-md">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Resume Analysis</h3>
                  <p className="text-sm text-gray-600 mb-3">Get AI feedback</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-blue-600">
                    <Star className="h-3 w-3 fill-current" />
                    <span>AI-Powered</span>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-0 bg-white shadow-sm hover:shadow-md">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-3 p-3 bg-green-100 rounded-full w-fit group-hover:bg-green-200 transition-colors">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Skill Testing</h3>
                  <p className="text-sm text-gray-600 mb-3">Take AI-powered assessments</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Popular</span>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-0 bg-white shadow-sm hover:shadow-md">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-3 p-3 bg-purple-100 rounded-full w-fit group-hover:bg-purple-200 transition-colors">
                    <Briefcase className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Find Internships</h3>
                  <p className="text-sm text-gray-600 mb-3">Search opportunities</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-purple-600">
                    <Clock className="h-3 w-3" />
                    <span>Updated daily</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Readiness Index - Simplified */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2">Job Readiness Index (JRI)</h3>
                  <div className={`text-4xl font-bold ${getScoreColor(cvScore.overall)}`}>
                    {cvScore.overall}
                  </div>
                  <p className={`text-lg font-medium ${getScoreColor(cvScore.overall)}`}>
                    {getScoreLabel(cvScore.overall)}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Resume Quality</span>
                    <span className="text-sm text-muted-foreground">{cvScore.breakdown.resumeQuality}%</span>
                  </div>
                  <Progress value={cvScore.breakdown.resumeQuality} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Skills Match</span>
                    <span className="text-sm text-muted-foreground">{cvScore.breakdown.skillsMatch}%</span>
                  </div>
                  <Progress value={cvScore.breakdown.skillsMatch} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Experience</span>
                    <span className="text-sm text-muted-foreground">{cvScore.breakdown.experience}%</span>
                  </div>
                  <Progress value={cvScore.breakdown.experience} className="h-2" />
                </div>
              </div>
            </div>

            {/* Recent Activity - Simplified */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium text-green-900">Profile Setup Complete</p>
                      <p className="text-sm text-green-700">Welcome to Talent Tuner!</p>
                    </div>
                    <span className="text-xs text-green-600">Just now</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="font-medium text-blue-900">Social Profiles Connected</p>
                      <p className="text-sm text-blue-700">
                        Imported {linkedinData.skills.length} skills and {linkedinData.experience.length} work experience
                      </p>
                    </div>
                    <span className="text-xs text-blue-600">2 min ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Statistics */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Github className="h-5 w-5 text-gray-600" />
                  GitHub Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{githubData.followers}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{githubData.publicRepos}</div>
                    <div className="text-sm text-gray-600">Repositories</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total Contributions</span>
                    <span className="text-sm text-gray-600">{githubData.contributions.total}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">This Year</span>
                    <span className="text-sm text-gray-600">{githubData.contributions.thisYear}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Current Streak</span>
                    <span className="text-sm text-gray-600">{githubData.contributions.streak} days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Repositories */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-gray-600" />
                  Top Repositories
                </h3>
                <div className="space-y-3">
                  {githubData.repositories.slice(0, 3).map((repo, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{repo.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Star className="h-3 w-3" />
                          {repo.stars}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{repo.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                          {repo.language}
                        </span>
                        <span className="text-xs text-gray-500">
                          Updated {new Date(repo.updatedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-gray-600" />
                  Programming Languages
                </h3>
                <div className="space-y-3">
                  {githubData.languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-sm text-gray-600">{lang.percentage}%</span>
                      </div>
                      <Progress value={lang.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Simplified */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-600" />
                  Profile Summary
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-900">Bio</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{linkedinData.summary}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-gray-900">Contact</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="truncate">{profileData.email}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        {profileData.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-gray-900">Links</h4>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:underline p-2 bg-gray-50 rounded transition-colors hover:bg-gray-100"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:underline p-2 bg-gray-50 rounded transition-colors hover:bg-gray-100"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-gray-600" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {linkedinData.skills.slice(0, 12).map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="border-0 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-gray-600" />
                  Experience
                </h3>
                <div className="space-y-4">
                  {linkedinData.experience.slice(0, 2).map((exp, index) => (
                    <div key={index} className="border-l-2 border-gray-300 pl-4 pb-4">
                      <h4 className="font-medium text-gray-900">{exp.title}</h4>
                      <p className="text-sm text-gray-600 font-medium">
                        {exp.company} • {exp.duration}
                      </p>
                      <p className="text-sm mt-2 leading-relaxed text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
