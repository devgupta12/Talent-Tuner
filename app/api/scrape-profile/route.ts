import { NextRequest, NextResponse } from 'next/server'
import { scrapeLinkedInProfile, scrapeGitHubProfile, analyzePortfolio, calculateCVScoreWithAI } from '@/lib/web-scraper-api'

export async function POST(request: NextRequest) {
  try {
    const { linkedinUrl, githubUrl, portfolioUrl, userEmail } = await request.json()

    if (!userEmail) {
      return NextResponse.json({ error: 'User email is required' }, { status: 400 })
    }

    const results: any = {
      userEmail,
      linkedinData: null,
      githubData: null,
      portfolioData: [],
      cvScore: null,
      timestamp: new Date().toISOString()
    }

    // Scrape LinkedIn profile if URL provided
    if (linkedinUrl) {
      try {
        results.linkedinData = await scrapeLinkedInProfile(linkedinUrl)
      } catch (error) {
        console.error('LinkedIn scraping error:', error)
        results.linkedinError = 'Failed to scrape LinkedIn profile'
      }
    }

    // Scrape GitHub profile if URL provided
    if (githubUrl) {
      try {
        results.githubData = await scrapeGitHubProfile(githubUrl)
      } catch (error) {
        console.error('GitHub scraping error:', error)
        results.githubError = 'Failed to scrape GitHub profile'
      }
    }

    // Analyze portfolio if URL provided
    if (portfolioUrl) {
      try {
        results.portfolioData = await analyzePortfolio(portfolioUrl)
      } catch (error) {
        console.error('Portfolio analysis error:', error)
        results.portfolioError = 'Failed to analyze portfolio'
      }
    }

    // Calculate CV Score if we have data
    if (results.linkedinData || results.githubData) {
      try {
        results.cvScore = await calculateCVScoreWithAI(
          results.linkedinData,
          results.githubData,
          results.portfolioData
        )
      } catch (error) {
        console.error('CV Score calculation error:', error)
        results.cvScoreError = 'Failed to calculate CV score'
      }
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Profile scraping API is running' })
}
