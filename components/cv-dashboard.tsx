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
  Globe
} from "lucide-react"
import { CVScore, LinkedInProfile, GitHubProfile, PortfolioData } from "@/lib/social-api"

interface CVDashboardProps {
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

export function CVDashboard({ 
  linkedinData, 
  githubData, 
  portfolioData, 
  cvScore, 
  profileData 
}: CVDashboardProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-primary">Talent Tuner</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-primary hover:text-secondary">Dashboard</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-secondary">Resume Analyzer</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-secondary">Career Navigator</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-secondary">Internships</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-secondary">Skill Tests</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-6">
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
                Welcome back, {profileData.firstName}!
              </h1>
              <p className="text-muted-foreground">{linkedinData.headline}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Profile Completion */}
        <Card className="mb-6 border-0 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
                <div className="flex items-center gap-4">
                  <Progress value={75} className="w-32" />
                  <span className="text-sm text-muted-foreground">75% Complete</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Add your projects and skills to get better recommendations.
                </p>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90">
                Complete Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Job Readiness Index */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Job Readiness Index (JRI)</CardTitle>
                    <CardDescription>Updated Today</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Updated Today
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className={`text-6xl font-bold ${getScoreColor(cvScore.overall)}`}>
                    {cvScore.overall}
                  </div>
                  <p className={`text-lg font-medium ${getScoreColor(cvScore.overall)}`}>
                    {getScoreLabel(cvScore.overall)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You're on track for most entry-level positions.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
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
                    <span className="text-sm font-medium">Certifications</span>
                    <span className="text-sm text-muted-foreground">{cvScore.breakdown.certifications}%</span>
                  </div>
                  <Progress value={cvScore.breakdown.certifications} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Experience</span>
                    <span className="text-sm text-muted-foreground">{cvScore.breakdown.experience}%</span>
                  </div>
                  <Progress value={cvScore.breakdown.experience} className="h-2" />
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-secondary hover:bg-secondary/90">
                    Improve Score
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-medium text-sm">Analyze Resume</h3>
                    <p className="text-xs text-muted-foreground">Get AI feedback on your resume.</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-medium text-sm">Explore Careers</h3>
                    <p className="text-xs text-muted-foreground">Discover career paths.</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-medium text-sm">Find Internships</h3>
                    <p className="text-xs text-muted-foreground">Browse opportunities.</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-medium text-sm">Take Skill Test</h3>
                    <p className="text-xs text-muted-foreground">Assess your abilities.</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <h3 className="font-medium text-sm">Practice Interview</h3>
                    <p className="text-xs text-muted-foreground">AI mock interviews.</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <h3 className="font-medium text-sm">Find Mentors</h3>
                    <p className="text-xs text-muted-foreground">Connect with experts.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-xs">
                          {activity.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-sm">{deadline.title}</h4>
                          <p className="text-xs text-muted-foreground">{deadline.company}</p>
                        </div>
                        <Badge 
                          variant={deadline.urgency === 'urgent' ? 'destructive' : 
                                  deadline.urgency === 'medium' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {deadline.urgency}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{deadline.deadline}</span>
                        <span>{deadline.daysLeft} days left</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Deadlines
                </Button>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cvScore.recommendations.slice(0, 3).map((rec, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{rec.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {rec.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{rec.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-green-600">{rec.impact}</span>
                        <span className="text-xs text-muted-foreground">+{rec.points} JRI</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                  View All Recommendations
                </Button>
              </CardContent>
            </Card>

            {/* Skill Progress */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Skill Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillProgress.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Take Skill Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
