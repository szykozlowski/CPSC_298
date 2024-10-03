"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Briefcase, MapPin, Clock, Star, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJobTypes, setSelectedJobTypes] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")

  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 days ago",
      description: "We're looking for an experienced Frontend Developer to join our team...",
      featured: true,
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      location: "New York, NY",
      type: "Contract",
      posted: "1 week ago",
      description: "Join our creative team as a UX Designer and help shape the future of our products...",
      featured: false,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataDrive",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      description: "We're seeking a talented Data Scientist to analyze complex datasets and drive insights...",
      featured: true,
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "ServerSolutions",
      location: "Seattle, WA",
      type: "Full-time",
      posted: "1 day ago",
      description: "Join our backend team to build scalable and efficient server-side applications...",
      featured: false,
    },
    {
      id: 5,
      title: "Product Manager",
      company: "InnovateCo",
      location: "Boston, MA",
      type: "Full-time",
      posted: "4 days ago",
      description: "We're looking for a strategic Product Manager to lead our product development initiatives...",
      featured: false,
    },
  ]

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type)
    const matchesLocation = !selectedLocation || job.location === selectedLocation
    return matchesSearch && matchesJobType && matchesLocation
  })

  const featuredJobs = jobListings.filter(job => job.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold">Acme Jobs</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Jobs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Companies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Dream Job
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover opportunities that match your skills and aspirations. Your next career move starts here.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Search jobs..."
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Featured Jobs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                    <p className="text-sm">{job.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Button>Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <aside className="w-full md:w-1/4">
                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">Job Type</h3>
                        <div className="space-y-2">
                          {["Full-time", "Part-time", "Contract", "Internship"].map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <Checkbox
                                id={type}
                                checked={selectedJobTypes.includes(type)}
                                onCheckedChange={(checked) => {
                                  setSelectedJobTypes(
                                    checked
                                      ? [...selectedJobTypes, type]
                                      : selectedJobTypes.filter((t) => t !== type)
                                  )
                                }}
                              />
                              <label htmlFor={type} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">Location</h3>
                        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Locations</SelectItem>
                            <SelectItem value="San Francisco, CA">San Francisco, CA</SelectItem>
                            <SelectItem value="New York, NY">New York, NY</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                            <SelectItem value="Seattle, WA">Seattle, WA</SelectItem>
                            <SelectItem value="Boston, MA">Boston, MA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>
              <div className="w-full md:w-3/4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">All Job Openings</h2>
                <div className="grid gap-6">
                  {filteredJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>{job.company}</CardDescription>
                          </div>
                          {job.featured && <Star className="h-5 w-5 text-yellow-400" />}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                        <p className="text-sm">{job.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Button>
                          Apply Now
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Acme Jobs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-