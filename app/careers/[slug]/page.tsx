import { JobApplicationForm } from "@/components/ui/job-application-form";
import { jobs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Sparkles, 
  TrendingUp,
  Heart,
  Shield,
  Globe,
  Coffee,
  Zap,
  BookOpen,
  Send,
  Calendar,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Job Not Found" };
  return {
    title: `${job.title} | Careers at ADAS`,
    description: job.description,
    openGraph: {
      images: [`/api/og/job/${job.slug}`],
    },
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  // Calculate application progress
  const applicationStats = {
    applied: 42,
    reviewing: 18,
    interviewing: 8,
    hired: 2
  };

  const totalApplications = applicationStats.applied + applicationStats.reviewing + 
                           applicationStats.interviewing + applicationStats.hired;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 text-foreground font-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <main className="pt-28 pb-20 relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced back button */}
          <Link 
            href="/careers" 
            className="group inline-flex items-center gap-3 text-muted-foreground hover:text-primary mb-12 transition-all duration-300 hover:-translate-x-1"
          >
            <div className="p-2 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Back to Careers</span>
              <span className="text-xs opacity-60">Explore all opportunities</span>
            </div>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left sidebar - Job overview */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job header card */}
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge 
                            variant="default" 
                            className="gap-1.5"
                          >
                            <Briefcase className="h-3 w-3" />
                            {job.dept}
                          </Badge>
                          <Badge 
                            variant="secondary" 
                            className="gap-1.5"
                          >
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                          {job.experienceLevel && (
                            <Badge 
                              variant="outline" 
                              className="gap-1.5 border-blue-500/30 text-blue-600 bg-blue-500/10"
                            >
                              <TrendingUp className="h-3 w-3" />
                              {job.experienceLevel}
                            </Badge>
                          )}
                        </div>
                        
                        <div>
                          <h1 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {job.title}
                          </h1>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{job.loc}</span>
                            {job.remote && (
                              <>
                                <span className="text-xs">•</span>
                                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">
                                  Remote Available
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quick stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{job.applicants || 74}</div>
                          <div className="text-xs text-muted-foreground">Applicants</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">7</div>
                          <div className="text-xs text-muted-foreground">Days Ago</div>
                        </div>
                        {job.salaryRange && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{job.salaryRange}</div>
                            <div className="text-xs text-muted-foreground">Salary</div>
                          </div>
                        )}
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">3</div>
                          <div className="text-xs text-muted-foreground">Positions</div>
                        </div>
                      </div>
                    </div>

                    {/* Apply button */}
                    <div className="flex flex-col gap-3 shrink-0">
                      <Button 
                        size="lg" 
                        className="gap-2 group/btn hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      >
                        <Send className="h-4 w-4" />
                        Apply Now
                        <span className="ml-2 opacity-60 group-hover/btn:translate-x-1 transition-transform">
                          →
                        </span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="gap-2"
                      >
                        <Heart className="h-4 w-4" />
                        Save Job
                      </Button>
                    </div>
                  </div>

                  {/* Application progress bar */}
                  <div className="space-y-3 pt-6 border-t border-border/50">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Application Progress</span>
                      <span className="text-muted-foreground">{totalApplications} total applications</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full flex">
                        <div 
                          className="bg-green-500" 
                          style={{ width: `${(applicationStats.hired / totalApplications) * 100}%` }}
                        />
                        <div 
                          className="bg-blue-500" 
                          style={{ width: `${(applicationStats.interviewing / totalApplications) * 100}%` }}
                        />
                        <div 
                          className="bg-yellow-500" 
                          style={{ width: `${(applicationStats.reviewing / totalApplications) * 100}%` }}
                        />
                        <div 
                          className="bg-gray-400" 
                          style={{ width: `${(applicationStats.applied / totalApplications) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Hired: {applicationStats.hired}</span>
                      <span>Interviewing: {applicationStats.interviewing}</span>
                      <span>Reviewing: {applicationStats.reviewing}</span>
                      <span>Applied: {applicationStats.applied}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for detailed information */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
                  <TabsTrigger value="description" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="requirements" className="gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Requirements
                  </TabsTrigger>
                  <TabsTrigger value="benefits" className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Benefits
                  </TabsTrigger>
                  <TabsTrigger value="process" className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Process
                  </TabsTrigger>
                </TabsList>

                {/* Description Tab */}
                <TabsContent value="description" className="space-y-8">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-6">About the Role</h3>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {job.fullDescription || job.description || "Join our team to build the future of autonomous flight. You will work on cutting-edge technology and solve complex problems."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key responsibilities */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-6">Key Responsibilities</h3>
                      <ul className="space-y-4">
                        {(job.responsibilities || [
                          "Design and implement scalable solutions for autonomous systems",
                          "Collaborate with cross-functional teams to define requirements",
                          "Mentor junior engineers and conduct code reviews",
                          "Stay up-to-date with emerging technologies in autonomous flight"
                        ]).map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <div className="p-1 rounded-full bg-primary/10 group-hover:scale-110 transition-transform mt-1">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Requirements Tab */}
                <TabsContent value="requirements" className="space-y-6">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-6">Requirements</h3>
                      <ul className="space-y-4">
                        {(job.requirements || [
                          "Bachelor's degree in Computer Science or related field",
                          "5+ years of experience with React/Next.js",
                          "Strong knowledge of autonomous systems and AI/ML",
                          "Excellent problem-solving skills and attention to detail",
                          "Experience with cloud platforms (AWS, GCP, or Azure)"
                        ]).map((req, i) => (
                          <li key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Nice-to-haves */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-6">Nice to Have</h3>
                      <ul className="space-y-3">
                        {(job.niceToHave || [
                          "Experience with autonomous vehicle systems",
                          "Published research in AI/ML conferences",
                          "Open source contributions",
                          "Experience with real-time systems"
                        ]).map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Zap className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Benefits Tab */}
                <TabsContent value="benefits" className="space-y-6">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-6">Perks & Benefits</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            icon: <DollarSign className="h-5 w-5 text-green-500" />,
                            title: "Competitive Salary",
                            desc: "Above market compensation with equity options"
                          },
                          {
                            icon: <Heart className="h-5 w-5 text-red-500" />,
                            title: "Health & Wellness",
                            desc: "Comprehensive medical, dental, and vision insurance"
                          },
                          {
                            icon: <Coffee className="h-5 w-5 text-amber-500" />,
                            title: "Flexible Work",
                            desc: "Remote-friendly with flexible hours"
                          },
                          {
                            icon: <GraduationCap className="h-5 w-5 text-blue-500" />,
                            title: "Learning Budget",
                            desc: "$5,000 annual budget for courses and conferences"
                          },
                          {
                            icon: <Globe className="h-5 w-5 text-purple-500" />,
                            title: "Unlimited PTO",
                            desc: "Take time when you need it"
                          },
                          {
                            icon: <Shield className="h-5 w-5 text-indigo-500" />,
                            title: "401(k) Matching",
                            desc: "Company match up to 6%"
                          }
                        ].map((benefit, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform">
                              {benefit.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{benefit.title}</h4>
                              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Process Tab */}
                <TabsContent value="process" className="space-y-6">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-8">Hiring Process</h3>
                      <div className="relative pl-8">
                        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                        {[
                          {
                            step: 1,
                            title: "Application Review",
                            duration: "1-3 days",
                            description: "Our team reviews your application and portfolio"
                          },
                          {
                            step: 2,
                            title: "Initial Screen",
                            duration: "30 minutes",
                            description: "Brief call with our HR team"
                          },
                          {
                            step: 3,
                            title: "Technical Interview",
                            duration: "1 hour",
                            description: "Deep dive into your technical skills"
                          },
                          {
                            step: 4,
                            title: "Team Interview",
                            duration: "2-3 hours",
                            description: "Meet the team and discuss projects"
                          },
                          {
                            step: 5,
                            title: "Offer",
                            duration: "1-2 days",
                            description: "Receive your offer letter"
                          }
                        ].map((stage, i) => (
                          <div key={i} className="relative mb-8 last:mb-0">
                            <div className={`absolute left-[-26px] top-0 w-4 h-4 rounded-full border-4 border-background ${
                              i === 0 ? 'bg-primary' : 'bg-primary/20'
                            }`}></div>
                            <div className="bg-card border border-border/30 rounded-xl p-6 hover:shadow-lg transition-shadow">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <div className="text-sm font-medium text-primary mb-1">Step {stage.step}</div>
                                  <h4 className="font-semibold text-lg">{stage.title}</h4>
                                </div>
                                <Badge variant="outline" className="gap-1">
                                  <Clock className="h-3 w-3" />
                                  {stage.duration}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{stage.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div id="application-form" className="pt-8">
                <JobApplicationForm jobTitle={job.title} jobId={job.slug} />
              </div>
            </div>

            {/* Right sidebar - Company info and quick facts */}
            <div className="lg:col-span-1 space-y-6">
              {/* Company overview */}
              <Card className="border-border/50 bg-gradient-to-b from-card to-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">About ADAS</h3>
                      <p className="text-xs text-muted-foreground">The future of autonomous flight</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're building the next generation of autonomous aerial systems, combining cutting-edge AI with innovative hardware to revolutionize transportation and logistics.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-muted-foreground">Team Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">$25M+</div>
                      <div className="text-xs text-muted-foreground">Funding</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick facts */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Experience Level</span>
                      <span className="font-medium">{job.experienceLevel || "Mid-Senior"}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Job Type</span>
                      <Badge variant="outline" className="text-xs">
                        {job.type}
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Department</span>
                      <span className="font-medium">{job.dept}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Posted</span>
                      <span className="font-medium">7 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar jobs */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Similar Roles</h3>
                  <div className="space-y-4">
                    {jobs
                      .filter(j => j.slug !== slug && j.dept === job.dept)
                      .slice(0, 3)
                      .map((similarJob) => (
                        <Link 
                          key={similarJob.slug} 
                          href={`/careers/${similarJob.slug}`}
                          className="block p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                        >
                          <div className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                            {similarJob.title}
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{similarJob.type}</span>
                            <ArrowLeft className="h-3 w-3 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application CTA */}
              <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 w-12 h-12 mx-auto flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ready to Apply?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Join our mission to revolutionize autonomous flight
                      </p>
                    </div>
                    <Button className="w-full gap-2" size="lg" asChild>
                      <Link href="#application-form">
                        <Send className="h-4 w-4" />
                        Apply Now
                      </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Average response time: 24-48 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{job.title}</span> • {job.dept} • Posted 7 days ago
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/careers">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    View All Jobs
                  </Link>
                </Button>
                <Button variant="default" size="sm" className="gap-2" asChild>
                  <Link href="#application-form">
                    <Send className="h-4 w-4" />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
