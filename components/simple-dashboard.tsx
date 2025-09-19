"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Globe,
  Award,
  Briefcase,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react"

interface SimpleDashboardProps {
  profileData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    bio: string
    linkedinUrl: string
    githubUrl: string
    portfolioUrl: string
    skills: string[]
    experience: Array<{
      title: string
      company: string
      duration: string
      description: string
    }>
    education: Array<{
      degree: string
      institution: string
      year: string
    }>
    projects: Array<{
      name: string
      description: string
      technologies: string[]
    }>
  }
  socialDataFetched: boolean
}

export function SimpleDashboard({ profileData, socialDataFetched }: SimpleDashboardProps) {
  const profileCompletion = () => {
    const fields = [
      profileData.firstName,
      profileData.lastName,
      profileData.phone,
      profileData.location,
      profileData.bio,
      profileData.linkedinUrl || profileData.githubUrl,
    ]
    const completed = fields.filter((field) => field.trim() !== "").length
    return Math.round((completed / fields.length) * 100)
  }

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
                  <AvatarImage src="/professional-headshot.png" />
                  <AvatarFallback className="text-lg font-semibold">
                    {profileData.firstName[0]}
                    {profileData.lastName[0]}
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
                      <Progress value={profileCompletion()} className="w-24" />
                      <span className="text-sm text-muted-foreground">{profileCompletion()}% complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Member since</p>
                <p className="font-medium">January 2024</p>
              </div>
            </div>

            {/* Quick Actions - Matching Image */}
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/skill-testing">
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-0 bg-white shadow-sm hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Skill Testing</h3>
                    <p className="text-sm text-gray-600 mb-3">Take AI-powered assessments</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-blue-600">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Popular</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/internships">
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-0 bg-white shadow-sm hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 p-3 bg-green-100 rounded-full w-fit group-hover:bg-green-200 transition-colors">
                      <Briefcase className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Find Internships</h3>
                    <p className="text-sm text-gray-600 mb-3">Search opportunities</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                      <Clock className="h-3 w-3" />
                      <span>Updated daily</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/resume-analyzer">
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-0 bg-white shadow-sm hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 p-3 bg-purple-100 rounded-full w-fit group-hover:bg-purple-200 transition-colors">
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">Resume Analysis</h3>
                    <p className="text-sm text-gray-600 mb-3">Get AI feedback</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-purple-600">
                      <Star className="h-3 w-3 fill-current" />
                      <span>AI-Powered</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Recent Activity - Matching Image */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium text-green-900">Profile Setup Complete</p>
                      <p className="text-sm text-green-700">Welcome to Talent Tuner!</p>
                    </div>
                    <span className="text-xs text-green-600">Just now</span>
                  </div>

                  {socialDataFetched && (
                    <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="font-medium text-blue-900">Social Profiles Connected</p>
                        <p className="text-sm text-blue-700">
                          Imported {profileData.skills.length} skills and {profileData.experience.length} work
                          experience
                        </p>
                      </div>
                      <span className="text-xs text-blue-600">2 min ago</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Matching Image */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-600" />
                  Profile Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-gray-900">Bio</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{profileData.bio || "efijb"}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-gray-900">Contact</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <Mail className="h-4 w-4 text-gray-600" />
                      <span className="truncate">{profileData.email}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <Phone className="h-4 w-4 text-gray-600" />
                      {profileData.phone}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-gray-900">Links</h4>
                  <div className="space-y-2">
                    <a
                      href={profileData.linkedinUrl || "#"}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:underline p-2 bg-gray-50 rounded transition-colors hover:bg-gray-100"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-gray-600" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.length > 0 ? (
                    profileData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      >
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <>
                      <Badge className="bg-yellow-100 text-yellow-800">JavaScript</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">React</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">Node.js</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">Python</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">SQL</Badge>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-gray-600" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.experience.length > 0 ? (
                  profileData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-gray-300 pl-4 pb-4">
                      <h4 className="font-medium text-gray-900">{exp.title}</h4>
                      <p className="text-sm text-gray-600 font-medium">
                        {exp.company} • {exp.duration}
                      </p>
                      <p className="text-sm mt-2 leading-relaxed text-gray-600">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No experience added yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
