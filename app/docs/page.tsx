"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Book, Code, Terminal, Shield, Zap, Database, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const docCategories = [
  {
    title: "Getting Started",
    icon: Book,
    description: "Everything you need to know to get your ADAS system up and running.",
    articles: ["Quick Start Guide", "Installation", "System Requirements", "Authentication"]
  },
  {
    title: "API Reference",
    icon: Code,
    description: "Detailed documentation for our REST and GraphQL APIs.",
    articles: ["Endpoints", "Rate Limiting", "Error Handling", "Webhooks"]
  },
  {
    title: "SDKs & Tools",
    icon: Terminal,
    description: "Official libraries for Python, Node.js, and Go.",
    articles: ["Python SDK", "Node.js Client", "CLI Tool", "Docker Images"]
  },
  {
    title: "Core Concepts",
    icon: Database,
    description: "Deep dive into the architecture and data models.",
    articles: ["Data Pipeline", "Prediction Engine", "Field Mapping", "Sensor Fusion"]
  },
  {
    title: "Security",
    icon: Shield,
    description: "Best practices for securing your implementation.",
    articles: ["Compliance", "Data Encryption", "Access Control", "Audit Logs"]
  },
  {
    title: "Deployment",
    icon: Cloud,
    description: "Guides for deploying to various cloud providers.",
    articles: ["AWS Deployment", "Azure Setup", "On-Premise", "Kubernetes"]
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="noise-overlay"></div>
      
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <main className="pt-24 pb-16 relative z-10 container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Documentation <span className="text-primary">Library</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our comprehensive guides, API references, and code examples to build the future of autonomous flight.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input 
                type="text" 
                placeholder="Search documentation..." 
                className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary transition-all"
              />
            </div>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {docCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-card depth-card h-full hover:border-primary/50 transition-all group cursor-pointer border-border/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, j) => (
                      <li key={j} className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {article}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Documentation Content (The "Paragraphs") */}
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              Introduction to ADAS
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                The Autonomous Drone Aerial System (ADAS) is a comprehensive platform designed to manage, monitor, and optimize large-scale drone fleets. Our architecture is built on a distributed microservices framework, ensuring high availability and fault tolerance across global deployments. Whether you are managing a small fleet of delivery drones or a nationwide surveillance network, ADAS provides the tools necessary for real-time command and control.
              </p>
              <p>
                At the core of ADAS is our proprietary <strong>Neural Flight Engine</strong>, which processes telemetry data from thousands of sensors in real-time. This engine utilizes advanced machine learning algorithms to predict maintenance needs, optimize flight paths for energy efficiency, and automatically avoid airspace conflicts. By leveraging edge computing, we reduce latency to under 10ms, enabling split-second decision-making capabilities that are critical for autonomous operations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              Security & Compliance
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                Security is paramount in autonomous aviation. The ADAS platform implements a Zero Trust architecture, requiring mutual TLS (mTLS) authentication for all service-to-service communication. All data at rest is encrypted using AES-256, and data in transit is secured via TLS 1.3. We strictly adhere to SOC 2 Type II and ISO 27001 standards, ensuring that your operational data remains confidential and tamper-proof.
              </p>
              <p>
                Our role-based access control (RBAC) system allows for granular permission settings, enabling administrators to define specific access levels for pilots, maintenance crews, and data analysts. Audit logs are immutable and stored on a separate, write-once storage medium to prevent unauthorized modification. This rigorous approach to security ensures that your fleet remains under your control at all times, protected against both external threats and internal vulnerabilities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Database className="h-8 w-8 text-primary" />
              Data Integration
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                ADAS is designed to integrate seamlessly with your existing enterprise ecosystem. Our robust REST and GraphQL APIs provide programmatic access to every aspect of the platform, from flight scheduling to battery health monitoring. We offer pre-built connectors for major ERP systems, including SAP and Oracle, as well as popular data visualization tools like Tableau and PowerBI.
              </p>
              <p>
                For real-time data ingestion, our WebSocket API supports high-throughput streams, capable of handling millions of events per second. This allows for the integration of custom sensor payloads, enabling specialized use cases such as LiDAR mapping, thermal imaging, and multispectral analysis. Developers can also utilize our Webhooks system to trigger external workflows based on specific platform events, such as mission completion or low-battery alerts.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Cloud className="h-8 w-8 text-primary" />
              Cloud & Edge Architecture
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                The ADAS platform operates on a hybrid cloud architecture that balances the infinite scalability of the cloud with the low-latency requirements of autonomous flight. The control plane, hosted on a multi-region Kubernetes cluster, manages fleet orchestration, mission planning, and historical data analysis. This ensures that your operations are resilient to regional outages and can scale elastically to meet demand.
              </p>
              <p>
                On the edge, our <strong>ADAS Edge Node</strong> software runs directly on the drone hardware and ground control stations. This allows for decentralized decision-making, enabling drones to communicate with each other (V2V) and with ground infrastructure (V2I) even in disconnected environments. By processing sensor data locally, we reduce bandwidth usage by up to 90% and ensure that critical safety functions are never dependent on an unstable internet connection.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Card className="glass-card border-primary/20 bg-primary/5 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to start building?</h3>
              <p className="text-muted-foreground mb-6">
                Get your API keys and start integrating ADAS into your application today.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/auth/register">
                  <Button size="lg" className="shadow-lg shadow-primary/20">Get API Keys</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Contact Support</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

      </main>
    </div>
  );
}
