import { useRoute, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import scanPayImage from "@assets/Group 48101464_1761884685041.png";

interface CaseStudyData {
  id: string;
  title: string;
  company: string;
  role: string;
  timeline: string;
  image: string;
  tags: string[];
  overview: string;
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  discovery: {
    title: string;
    hypothesis: string;
    hurdles: { title: string; description: string }[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
  };
  results: {
    metrics: { category: string; impact: string }[];
  };
}

const caseStudies: Record<string, CaseStudyData> = {
  "scan-and-pay": {
    id: "scan-and-pay",
    title: "Scan and Pay: Bringing Cashless Insurance to Non-Network Hospitals",
    company: "Connect and Heal",
    role: "Product Manager",
    timeline: "6 Months",
    image: scanPayImage,
    tags: ["HealthTech", "Payments", "B2C", "MVP Definition", "Fraud Prevention"],
    overview: "Solved the critical pain point of cashless payment failure at non-network hospitals by introducing a customer-driven, in-app Scan and Pay feature, which eliminated operational risk, boosted revenue by 2%, and secured 100% feature adoption among target users.",
    challenge: {
      title: "Bridging the Cashless Gap",
      description: "The core promise of our health insurance product is cashless service. However, a significant portion of our services were conducted through non-network hospitals that couldn't offer our credit line, forcing us into complex workarounds that destroyed the customer experience and burdened our operations.",
      painPoints: [
        "High Operational Dependency & Cost: Operations team had to manually intervene by calling hospitals and using company funds via UPI—a non-scalable and costly process",
        "The 90-Second Failure Point: Hospital's dynamic QR code had an expiration window of just 90 seconds, frequently leading to payment failure",
        "Liquidity & Trust Issue: Patients had to be involved in the payment process, but complexity and failure rate meant the service was neither smooth nor trustworthy"
      ]
    },
    discovery: {
      title: "Discovery & Research: Speed, Trust, and Fraud Prevention",
      hypothesis: "The operational overhead could be solved by transferring the payment action directly to the user at the point of service. A seamless, in-app 'Scan and Pay' feature that ensures a successful transaction within the 90-second window, without alarming the patient that funds were being deducted from their personal account.",
      hurdles: [
        {
          title: "Fraud Prevention",
          description: "To prevent hospitals from charging arbitrary amounts, the system was updated to fetch the latest, verified consultation price directly from the hospital's records and would only authorize a payment for that precise, pre-approved amount."
        },
        {
          title: "Simplifying UX",
          description: "Extensive stakeholder interviews confirmed the need for an extremely simple flow and clear visual cues to assure the user the funds were from the insurance credit line."
        }
      ]
    },
    solution: {
      title: "The Scan and Pay Feature",
      description: "The final solution focused on speed and simplicity while embedding fraud protection:",
      approach: [
        "Booking and Pre-verification: User books the slot; the system pre-fetches and locks the verified payment amount",
        "Point-of-Service Action: The user activates the in-app Scan and Pay feature and scans the hospital's UPI QR code. The payment amount is fixed to the pre-verified fee",
        "Instant Confirmation: The payment is processed instantly with clear success message confirming funds were credited to the hospital"
      ]
    },
    results: {
      metrics: [
        { category: "Feature Adoption", impact: "100% of all users engaging in in-clinic consultations at non-network hospitals used the feature" },
        { category: "Business Growth", impact: "Contributed to a 2% increase in overall revenue growth from non-network services" },
        { category: "Customer Retention", impact: "The reduction in payment anxiety led to a 3.5% reduction in consultation cancellation percentage" },
        { category: "Operational Efficiency", impact: "Eliminated Agent Financial Risk and Automated Documentation for prescriptions and claims settlement" },
        { category: "Consumer Experience", impact: "Drastically reduced escalations to Operations and Customer Support teams regarding payment failures" }
      ]
    }
  }
};

export default function CaseStudy() {
  const [, params] = useRoute("/case-study/:id");
  const [, setLocation] = useLocation();
  
  const caseStudy = params?.id ? caseStudies[params.id] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <Button onClick={() => setLocation("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-8"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" data-testid={`badge-${tag}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-case-study-title">
                {caseStudy.title}
              </h1>

              <div className="grid gap-4 sm:grid-cols-3 text-sm">
                <div>
                  <div className="text-muted-foreground">Company</div>
                  <div className="font-medium" data-testid="text-company">{caseStudy.company}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Role</div>
                  <div className="font-medium" data-testid="text-role">{caseStudy.role}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Timeline</div>
                  <div className="font-medium" data-testid="text-timeline">{caseStudy.timeline}</div>
                </div>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-md border">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="h-full w-full object-contain bg-white"
                data-testid="img-case-study"
              />
            </div>

            <Card className="p-8 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed" data-testid="text-overview">
                {caseStudy.overview}
              </p>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold" data-testid="text-challenge-title">
                {caseStudy.challenge.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge.description}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Pain Points:</h3>
                <ul className="space-y-3">
                  {caseStudy.challenge.painPoints.map((point, index) => (
                    <li key={index} className="flex gap-3" data-testid={`pain-point-${index}`}>
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{caseStudy.discovery.title}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Hypothesis & Core Requirement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.discovery.hypothesis}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {caseStudy.discovery.hurdles.map((hurdle, index) => (
                  <Card key={index} className="p-6" data-testid={`hurdle-${index}`}>
                    <h4 className="font-semibold mb-2">{hurdle.title}</h4>
                    <p className="text-sm text-muted-foreground">{hurdle.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{caseStudy.solution.title}</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.solution.description}</p>
              <div className="space-y-4">
                {caseStudy.solution.approach.map((step, index) => (
                  <Card key={index} className="p-6" data-testid={`solution-step-${index}`}>
                    <p className="leading-relaxed">{step}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Results & Impact</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {caseStudy.results.metrics.map((metric, index) => (
                  <Card key={index} className="p-6" data-testid={`result-${index}`}>
                    <h3 className="font-semibold text-primary mb-2">{metric.category}</h3>
                    <p className="text-muted-foreground">{metric.impact}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-muted/50 text-center">
              <h3 className="text-xl font-semibold mb-4">Interested in Learning More?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can bring similar impact to your product team.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  console.log("Contact clicked from case study");
                  setLocation("/#contact");
                }}
                data-testid="button-contact-cta"
              >
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
