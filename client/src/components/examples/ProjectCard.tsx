import ProjectCard from '../ProjectCard';
import projectImage from "@assets/generated_images/Analytics_dashboard_app_interface_851c3d8b.png";

export default function ProjectCardExample() {
  return (
    <div className="max-w-md">
      <ProjectCard
        image={projectImage}
        title="Analytics Dashboard"
        company="TechCorp"
        description="Redesigned analytics platform to improve data accessibility and user engagement."
        metrics={[
          { value: "+45%", label: "Engagement" },
          { value: "3.2x", label: "Usage" },
          { value: "92%", label: "Satisfaction" }
        ]}
        tags={["B2B", "SaaS"]}
        onClick={() => console.log("Project card clicked")}
      />
    </div>
  );
}
