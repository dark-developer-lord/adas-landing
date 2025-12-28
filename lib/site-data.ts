import { Shield, Zap, Globe, Cpu, BarChart3, Users, FileText, Lock } from "lucide-react";

export const iconMap: Record<string, any> = {
  Shield, Zap, Globe, Cpu, BarChart3, Users, FileText, Lock
};

export type PageContent = {
  title: string;
  description: string;
  icon?: string;
  content?: string;
  features?: string[];
};

export const siteData: Record<string, Record<string, PageContent>> = {
  industries: {
    "farmers": {
      title: "Farmers (B2C)",
      description: "Empowering individual farmers with aerial intelligence.",
      icon: "Users",
      features: ["Crop Health Monitoring", "Automated Spraying", "Yield Estimation"]
    },
    "agri-holdings": {
      title: "Agri Holdings (Enterprise)",
      description: "Scalable drone fleets for large-scale agricultural operations.",
      icon: "Globe",
      features: ["Fleet Management", "Centralized Data Command", "ERP Integration"]
    },
    "government": {
      title: "Government (B2G)",
      description: "Regulatory compliance and land surveying solutions.",
      icon: "Shield",
      features: ["Land Registry Mapping", "Disaster Response", "Environmental Monitoring"]
    },
    "banks-insurance": {
      title: "Banks & Insurance",
      description: "Risk assessment and claim verification from above.",
      icon: "Lock",
      features: ["Crop Damage Assessment", "Asset Verification", "Fraud Detection"]
    },
    "ngos-esg": {
      title: "NGOs & ESG",
      description: "Sustainable development and environmental protection.",
      icon: "Globe",
      features: ["Reforestation Monitoring", "Wildlife Protection", "Carbon Credit Verification"]
    }
  },
  "use-cases": {
    "precision-farming": {
      title: "Precision Farming",
      description: "Targeted intervention for maximum efficiency.",
      icon: "Zap",
      features: ["Variable Rate Application", "Soil Sampling", "Irrigation Management"]
    },
    "smart-irrigation": {
      title: "Smart Irrigation",
      description: "Optimize water usage with thermal imaging.",
      icon: "Zap",
      features: ["Leak Detection", "Moisture Analysis", "Water Stress Identification"]
    },
    "crop-monitoring": {
      title: "Crop Monitoring",
      description: "Real-time insights into plant health.",
      icon: "BarChart3",
      features: ["NDVI Analysis", "Pest Detection", "Growth Tracking"]
    },
    "yield-optimization": {
      title: "Yield Optimization",
      description: "Data-driven decisions to maximize harvest.",
      icon: "BarChart3",
      features: ["Harvest Planning", "Input Optimization", "Historical Analysis"]
    },
    "soil-intelligence": {
      title: "Soil Intelligence",
      description: "Deep understanding of soil composition and health.",
      icon: "Cpu",
      features: ["Nutrient Mapping", "Compaction Analysis", "Erosion Monitoring"]
    }
  },
  platform: {
    "ai-models": {
      title: "AI Models",
      description: "Proprietary machine learning models for aerial data.",
      icon: "Cpu",
      features: ["Object Detection", "Segmentation", "Change Detection"]
    },
    "computer-vision": {
      title: "Computer Vision",
      description: "Advanced image processing at the edge.",
      icon: "Cpu",
      features: ["Real-time Stitching", "3D Reconstruction", "Thermal Fusion"]
    },
    "data-pipeline": {
      title: "Data Pipeline",
      description: "Secure and scalable data ingestion and processing.",
      icon: "BarChart3",
      features: ["Cloud Upload", "Automated Processing", "Data Warehousing"]
    },
    "reports-gallery": {
      title: "Reports Gallery",
      description: "Customizable reports for stakeholders.",
      icon: "FileText",
      features: ["PDF Export", "Interactive Dashboards", "White-labeling"]
    },
    "field-maps-library": {
      title: "Field Maps Library",
      description: "Historical archive of all your flight data.",
      icon: "Globe",
      features: ["Time-series View", "Layer Comparison", "Annotation Tools"]
    },
    "prediction-engine": {
      title: "Prediction Engine",
      description: "Forecast yields and risks with AI.",
      icon: "BarChart3",
      features: ["Weather Integration", "Market Trends", "Yield Forecasting"]
    },
    "alert-system": {
      title: "Alert System",
      description: "Instant notifications for critical anomalies.",
      icon: "Zap",
      features: ["SMS/Email Alerts", "Custom Thresholds", "Geo-fencing"]
    },
    "api-documentation": {
      title: "API Documentation",
      description: "Build on top of the ADAS platform.",
      icon: "Cpu",
      features: ["REST API", "GraphQL", "Webhooks"]
    },
    "webhooks-sdk": {
      title: "Webhooks & SDK",
      description: "Real-time integration tools.",
      icon: "Cpu",
      features: ["Python SDK", "JavaScript SDK", "Event Subscriptions"]
    },
    "security-compliance": {
      title: "Security & Compliance",
      description: "Enterprise-grade security for your data.",
      icon: "Lock",
      features: ["SOC 2 Type II", "GDPR Compliance", "End-to-end Encryption"]
    }
  },
  company: {
    "roadmap": {
      title: "Roadmap",
      description: "Our vision for the future of autonomous flight.",
      icon: "Globe",
      features: ["Q1 2026: Swarm V2", "Q3 2026: Urban Air Mobility", "2027: Global Coverage"]
    },
    "press": {
      title: "Press & Media",
      description: "Latest news and updates from ADAS.",
      icon: "FileText",
      features: ["Press Kits", "Media Inquiries", "Brand Assets"]
    },
    "esg-impact": {
      title: "ESG Impact",
      description: "Our commitment to a sustainable future.",
      icon: "Globe",
      features: ["Carbon Neutral Operations", "Community Outreach", "Ethical AI"]
    },
    "certifications": {
      title: "Certifications",
      description: "Industry standards and regulatory approvals.",
      icon: "Shield",
      features: ["FAA Part 107", "EASA Certified", "ISO 27001"]
    }
  }
};
