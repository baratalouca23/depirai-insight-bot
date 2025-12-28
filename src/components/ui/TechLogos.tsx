import React from 'react';

const technologies = [
  {
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Azure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Power BI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  },
  {
    name: 'Kubernetes',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  },
  {
    name: 'Terraform',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
];

interface TechLogosProps {
  title?: string;
  className?: string;
}

export function TechLogos({ title = 'Tecnologias que utilizamos:', className = '' }: TechLogosProps) {
  return (
    <div className={className}>
      {title && (
        <p className="text-sm text-muted-foreground mb-4 font-medium">{title}</p>
      )}
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 hover:bg-background transition-all duration-300 group"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-8 h-8 object-contain filter dark:brightness-0 dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <span className="text-xs text-muted-foreground mt-2 text-center group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
