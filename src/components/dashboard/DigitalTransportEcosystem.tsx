"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { PillarSection } from './PillarSection';
import type { EcosystemSection } from './types';
import { 
  Users, 
  Car, 
  Bus, 
  TrafficCone,
  HardHat as Construction,
  Cloud,
  Smartphone, 
  CreditCard, 
  FileText,
  AlertTriangle, 
  Navigation,
  Ticket as TicketIcon,
  Route,
  Activity, 
  Map, 
  Wrench as Tool,
  ClipboardCheck, 
  UserCog
} from 'lucide-react';

const ecosystem: EcosystemSection[] = [
  {
    pillar: {
      title: "Citizen Interaction",
      description: "Online Citizen Portal Interaction",
      icon: Users,
      gradient: "bg-gradient-to-r from-emerald-600 to-teal-600"
    },
    initiatives: [
      {
        name: "Digital Service Catalogue",
        icon: FileText,
        projects: [
          {
            name: "Online Citizen Portal",
            description: "Digital Service Catalogue",
            phase: "Planning Phase",
            status: "Engaging Various Directorates to scope services"
          },
          {
            name: "Website",
            description: "Online Citizen Portal Interaction",
            phase: "Initiation Phase",
            status: "Committee was appointed, further engagements to occur"
          },
          {
            name: "Citizen Engagement Portal",
            description: "URS Development and Prototyping",
            phase: "Planning Phase",
            status: "URS Developed and pending approval and prototype (concept) developed"
          }
        ]
      },
      {
        name: "Mobile Applications",
        icon: Smartphone,
        projects: [
          {
            name: "KZN Department of Transport App",
            description: "Mobile Application Development",
            phase: "Planning Phase",
            status: "URS Developed and pending approval and prototype (concept) developed"
          }
        ]
      }
    ]
  },
  {
    pillar: {
      title: "Smart Road Safety",
      description: "Digital Road Alert & Infrastructure",
      icon: AlertTriangle,
      gradient: "bg-gradient-to-r from-amber-600 to-orange-600"
    },
    initiatives: [
      {
        name: "Digital Road Alert",
        icon: Car,
        projects: [
          {
            name: "Digital Road Alert System",
            description: "Intelligent road safety alerts",
            phase: "Initiation Phase",
            status: "Conducting Research"
          }
        ]
      },
      {
        name: "Infrastructure Interface",
        icon: Navigation,
        projects: [
          {
            name: "Vehicle Infrastructure Interface",
            description: "Interface between driver, vehicle and infrastructure",
            phase: "Initiation Phase",
            status: "Conducting Research"
          }
        ]
      },
      {
        name: "Advanced Technologies",
        icon: Activity,
        projects: [
          {
            name: "Augmented Reality",
            description: "AR implementation for road safety",
            phase: "Initiation Phase",
            status: "Conducting Research"
          },
          {
            name: "Data Analytics",
            description: "Predictive Data Analytics",
            phase: "Initiation Phase",
            status: "Conducting Research"
          }
        ]
      }
    ]
  },
  {
    pillar: {
      title: "Smart Public Transport",
      description: "Smart Driver and Digital Enabled Passengers",
      icon: Bus,
      gradient: "bg-gradient-to-r from-purple-600 to-indigo-600"
    },
    initiatives: [
      {
        name: "Smart Driver Solutions",
        icon: UserCog,
        projects: [
          {
            name: "Driver Information Platform",
            description: "Smart driver information system",
            phase: "Initiation Phase",
            status: "Pending stakeholder engagement (Santaco)"
          },
          {
            name: "Smart Payment System",
            description: "Digital payment platform",
            phase: "Planning Phase",
            status: "URS Developed, reviewed pending approval from custodian"
          },
          {
            name: "Digital Operating License",
            description: "Operating license management",
            phase: "Execution Phase",
            status: "Tender has been awarded to supplier"
          }
        ]
      },
      {
        name: "Passenger Systems",
        icon: TicketIcon,
        projects: [
          {
            name: "Driver Passenger Online System",
            description: "Passenger information platform",
            phase: "Initiation Phase",
            status: "URS Developed and pending signoff from relevant stakeholders"
          },
          {
            name: "Electronic Bus Monitoring",
            description: "Real-time bus tracking",
            phase: "Execution Phase",
            status: "Tender has been awarded to supplier"
          }
        ]
      }
    ]
  },
  {
    pillar: {
      title: "Digital Traffic Management",
      description: "Real-time Track and Trace Operations",
      icon: TrafficCone,
      gradient: "bg-gradient-to-r from-green-600 to-emerald-600"
    },
    initiatives: [
      {
        name: "Real-time Monitoring",
        icon: Activity,
        projects: [
          {
            name: "Incident Management",
            description: "Incident and Accident Management",
            phase: "Execution Phase",
            status: "Was presented to RTI currently pending changes from Vodacom"
          },
          {
            name: "Fleet Management",
            description: "Vehicle tracking and management",
            phase: "Execution Phase",
            status: "In Operation"
          },
          {
            name: "Traffic Management System",
            description: "Integrated traffic control",
            phase: "Initiation Phase",
            status: "URS under development by Business Analysts"
          }
        ]
      },
      {
        name: "Operations Support",
        icon: Smartphone,
        projects: [
          {
            name: "Personal Operating Devices",
            description: "Mobile apps for operations",
            phase: "Monitoring and Controlling",
            status: "In operation"
          },
          {
            name: "Opus Data Analytics",
            description: "Operational analytics",
            phase: "Initiation Phase",
            status: "Data gathered and presented to Mr Chetty, awaiting feedback"
          }
        ]
      }
    ]
  },
  {
    pillar: {
      title: "Smart Infrastructure",
      description: "Infrastructure Assessment and Robotics",
      icon: Construction,
      gradient: "bg-gradient-to-r from-red-600 to-pink-600"
    },
    initiatives: [
      {
        name: "Infrastructure Assessment",
        icon: Tool,
        projects: [
          {
            name: "Smart Road Assessment",
            description: "Infrastructure virtual assessment",
            phase: "Initiation Phase",
            status: "Conducting Research"
          },
          {
            name: "Robotics Infrastructure",
            description: "Automated infrastructure inspection",
            phase: "Initiation Phase",
            status: "Conducting Research"
          }
        ]
      },
      {
        name: "Planning Systems",
        icon: Map,
        projects: [
          {
            name: "Master Planning",
            description: "Transportation and Infrastructure Master Plans",
            phase: "Execution Phase",
            status: "In Progress"
          },
          {
            name: "Predictive Analytics",
            description: "Infrastructure data analysis",
            phase: "Initiation Phase",
            status: "Conducting Research"
          }
        ]
      }
    ]
  },
  {
    pillar: {
      title: "Modern Workplace",
      description: "Process Automation and Employee Services",
      icon: Cloud,
      gradient: "bg-gradient-to-r from-sky-600 to-blue-600"
    },
    initiatives: [
      {
        name: "Process Automation",
        icon: ClipboardCheck,
        projects: [
          {
            name: "Digital Forms",
            description: "PowerApps & OneDrive Integration",
            phase: "Execution Phase",
            status: "Ongoing collection and digitizing of manual forms and processes"
          },
          {
            name: "Electronic Signatures",
            description: "Digital signature system",
            phase: "Monitoring and Controlling",
            status: "In Operation"
          },
          {
            name: "M&E System",
            description: "Monitoring and Evaluation System",
            phase: "Initiation Phase",
            status: "On hold, awaiting decision on whether to go open tender or through Microsoft"
          }
        ]
      },
      {
        name: "SCM Automation",
        icon: FileText,
        projects: [
          {
            name: "SCM Model Driven App",
            description: "Supply chain management automation",
            phase: "Execution Phase",
            status: "Testing Stage"
          },
          {
            name: "Invoice Tracking System",
            description: "Automated invoice processing",
            phase: "Execution Phase",
            status: "Developed by Vodacom but not utilised"
          }
        ]
      },
      {
        name: "Employee Self-Service",
        icon: UserCog,
        projects: [
          {
            name: "E-leave System",
            description: "Electronic leave management",
            phase: "Execution Phase",
            status: "Developed by Vodacom but not utilised"
          },
          {
            name: "S&T Project",
            description: "Subsistence and Travel Management",
            phase: "Execution Phase",
            status: "Developed by Vodacom but not utilised"
          }
        ]
      }
    ]
  }
  
  
  // ... other pillars
];

export function DigitalTransportEcosystem() {
  return (
    <Card className="w-full max-w-5xl bg-gray-900">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-3xl text-center text-white">
          Digital Transport Ecosystem
        </CardTitle>
        <p className="text-center text-gray-400 mt-2">
          Integrated Digital Mobility Solutions for Modern Transportation
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {ecosystem.map((section, idx) => (
          <PillarSection key={idx} section={section} />
        ))}
      </CardContent>
    </Card>
  );
}