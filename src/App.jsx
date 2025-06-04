import { useState } from 'react'
import HeroSection from './components/herosection'
import SignupSection from './components/signup'
import FeaturesSection from './components/featuresection'
import CTASection from './components/ctasection'
import './App.css'

function App() {
  // Features data adapted for our Feature component structure
  const features = [
    {
      title: "Chat with your AI edit assistant.",
      description: "Tell it to organize your timeline, apply a rough grade, or build out a draft sequence—it responds instantly. Automate repetitive tasks",
      imageSrc: "/rivestills/AI_edit_assistant.png",
      imageAlt: "AI Chat Interface",
      artboard: "AI_edit_assistant"
    },
    {
      title: "Context-Aware Workflow",
      description: "Pull in briefs, transcripts, and notes to give your AI the full picture. Nice Touch builds a contextual understanding of your project - automatically linking relevant tasks, creative direction, and client expectations.",
      imageSrc: "/rivestills/Context_Aware_Workflow.png",
      imageAlt: "Context Aware Workflow",
      artboard: "Context_Aware_Workflow"
    },
    {
      title: "File Management, Sorted",
      description: "From messy imports to ready-to-edit structures. Nice Touch builds clean, synced folder systems for your assets - based on your setup. Set your structure once, and the AI repeats it every time and flexes with your work.",
      imageSrc: "/rivestills/File_Management_Sorted.png",
      imageAlt: "File Management System",
      artboard: "File_Management_Sorted"
    },
    {
      title: "No New Tools to Learn",
      description: "Just powerful shortcuts in the tools you already use. Nice Touch runs alongside Premiere, DaVinci, or After Effects—think of it like superpowers for your current setup.",
      imageSrc: "/rivestills/No_New_Tools_to_Learn.png",
      imageAlt: "Existing Tools Integration",
      artboard: "No_New_Tools_to_Learn"
    },
    {
      title: "Error Spotting Before Export",
      description: "Last-minute glitches? We catch them first. Nice Touch scans for missing media, mismatched framerates, and common export issues.",
      imageSrc: "/rivestills/Error_Spotting_Before_Export.png",
      imageAlt: "Error Detection System",
      artboard: "Error_Spotting_Before_Export"
    },
    {
      title: "Feedback Centralized",
      description: "Emails, links, meetings—we pull it all into one feedback stream. Every comment is linked to timecodes or files. Nothing gets missed.",
      imageSrc: "/rivestills/Feedback_Centralized.png",
      imageAlt: "Centralized Feedback System",
      artboard: "Feedback_Centralized"
    },
    {
      title: "Scalable Metadata Architecture",
      description: "Every asset gets a unique ID and AI-generated, timecoded metadata—enabling agents to understand and work with your media for smarter automation, editing, and reuse.",
      imageSrc: "/rivestills/Scalable_Metadata_Architecture.png",
      imageAlt: "Scalable Metadata Architecture",
      artboard: "Scalable_Metadata_Architecture"
    },
    {
      title: "Privacy & Security First",
      description: "Your work stays yours. Always. Nice Touch is built with strict data privacy in mind. Your files, feedback, and conversations are encrypted and never used to train outside models or shared without your permission.",
      imageSrc: "/rivestills/Privacy_Security_First.png",
      imageAlt: "Privacy & Security",
      artboard: "Privacy_Security_First"
    }
  ];

  return (
    <div className="app">
      <HeroSection 
        title="You Create"
        subtitle="We Automate"
        description="Nice Touch, the OS for creators"
      />
      <SignupSection />
      <FeaturesSection features={features} />
      <CTASection />
    </div>
  )
}

export default App
