import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface ProjectCardProps {
  id?: string;
  image: string;
  title: string;
  company: string;
  description: string;
  metrics: Metric[];
  tags?: string[];
  onClick?: () => void;
}

export default function ProjectCard({
  id,
  image,
  title,
  company,
  description,
  metrics,
  tags = [],
  onClick,
}: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid="img-project"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" data-testid="badge-company">
              {company}
            </Badge>
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs" data-testid={`badge-tag-${tag}`}>
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-semibold" data-testid="text-project-title">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed" data-testid="text-project-description">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-1" data-testid={`metric-${index}`}>
              <div className="text-2xl font-bold text-primary" data-testid={`text-metric-value-${index}`}>
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground" data-testid={`text-metric-label-${index}`}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-primary pt-2">
          View Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Card>
  );
}
