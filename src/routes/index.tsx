import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Route = createFileRoute("/")({
  component: Index,
});

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title={dark ? "Switch to light" : "Switch to dark"}>
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

const skills = [
  { label: "AWS Core", items: ["EC2", "S3", "Lambda", "API Gateway", "DynamoDB", "RDS", "CloudFront", "SNS", "SQS", "Step Functions", "Cognito"] },
  { label: "Containers", items: ["Docker", "ECS Fargate", "ECR", "VPC", "ALB", "NAT Gateway"] },
  { label: "IaC & DevOps", items: ["Terraform", "GitHub Actions", "AWS CodeBuild", "CloudFormation", "Git", "YAML"] },
  { label: "Security & Obs.", items: ["IAM", "CloudWatch", "CloudTrail", "Security Groups", "Least Privilege"] },
  { label: "Architecture", items: ["Serverless", "Event-Driven", "Well-Architected Framework", "Microservices", "High Availability"] },
];

const projects = [
  {
    n: "01",
    title: "Serverless E-Commerce Platform",
    desc: "Fully serverless storefront handling 50K+ daily transactions. Frontend on S3 + CloudFront, backend via API Gateway + Lambda, data in DynamoDB every resource in Terraform, every deploy automated through CodeBuild.",
    stack: ["Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "Terraform", "CodeBuild"],
    metrics: [["99.99%", "uptime"], ["50K+", "daily transactions"], ["40%", "cost reduction"]],
  },
  {
    n: "02",
    title: "Cloud-Native Dockerized App Deployment",
    desc: "Containerized a Node.js application and moved it to ECS Fargate. Cluster, task definitions, and IAM all in Terraform. GitHub Actions pipeline builds the image, pushes to ECR, and deploys no manual steps.",
    stack: ["Docker", "ECS Fargate", "ECR", "ALB", "VPC", "Terraform", "GitHub Actions"],
    metrics: [["90%", "less manual deployment effort"], ["99.9%", "uptime"]],
  },
  {
    n: "03",
    title: "Secure File Sharing Platform",
    desc: "Serverless file sharing where every access is authenticated via Cognito, authorized by fine-grained IAM policies, and logged to CloudWatch. Private S3 buckets, presigned URLs, and SNS alerts for security monitoring.",
    stack: ["Cognito", "Lambda", "API Gateway", "S3", "IAM", "CloudWatch", "SNS"],
    metrics: [["0", "servers to manage"], ["100%", "IAM policy compliance"]],
  },
  {
    n: "04",
    title: "Event-Driven Order Processing System",
    desc: "Fully asynchronous order pipeline API Gateway receives, SQS buffers, Lambda processes, Step Functions orchestrates retries and state. 100% infrastructure provisioned via Terraform, deployed via GitHub Actions.",
    stack: ["API Gateway", "Lambda", "Step Functions", "SQS", "Terraform", "GitHub Actions"],
    metrics: [["100%", "async reliability"], ["80%", "less manual provisioning"]],
  },
  {
    n: "05",
    title: "AWS Video Streaming Platform",
    desc: "Serverless video platform for thousands of concurrent viewers. CloudFront handles global delivery, Cognito secures auth, Lambda manages workflows. Frontend, backend, and CDN all automated zero manual releases.",
    stack: ["CloudFront", "Lambda", "Cognito", "S3", "CloudFormation", "Terraform", "CloudWatch"],
    metrics: [["70%", "faster global load times"], ["99.99%", "uptime"]],
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  return (
    <>
      <nav className="nav">
        <div className="nav-name">Abdul Hannan Butt</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollTo("skills")}>Skills</button></li>
          <li><button onClick={() => scrollTo("projects")}>Projects</button></li>
          <li><button onClick={() => scrollTo("about")}>About</button></li>
          <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
        </ul>
        <div className="nav-right">
          <div className="nav-avail"><span className="dot" /> Open to opportunities</div>
          <ThemeToggle />
        </div>
      </nav>

      <header className="hero" id="hero">
        <div>
          <span className="hero-tag">Cloud & DevOps Engineer · Lahore, Pakistan</span>
          <h1>Building cloud<br />infrastructure that<br /><em>actually works.</em></h1>
          <p className="hero-bio">
            3+ years designing serverless, containerized, and event-driven architectures on AWS.
            I turn complex infrastructure problems into clean, automated, cost-efficient systems 
            and I have the numbers to show for it.
          </p>
          <div className="hero-actions">
            <button className="btn" onClick={() => scrollTo("about")}>Get in touch</button>
            <button className="btn-ghost" onClick={() => scrollTo("projects")}>See my work →</button>
          </div>
        </div>
        <aside className="hero-card">
          <h3>By the numbers</h3>
          <div className="stat"><span className="stat-val">3<sup>+</sup></span><span className="stat-desc">years of cloud & DevOps engineering</span></div>
          <div className="stat"><span className="stat-val">5</span><span className="stat-desc">enterprise projects delivered</span></div>
          <div className="stat"><span className="stat-val">99%</span><span className="stat-desc">average uptime across deployments</span></div>
          <div className="stat"><span className="stat-val">80%</span><span className="stat-desc">reduction in deployment time via IaC</span></div>
        </aside>
      </header>

      <section className="section" id="skills">
        <div className="section-label">02 Skills</div>
        <h2>What I work with</h2>
        <table className="skills-table">
          <tbody>
            {skills.map((s) => (
              <tr key={s.label}>
                <td>{s.label}</td>
                <td>
                  <div className="tag-group">
                    {s.items.map((i) => <span key={i} className="tag">{i}</span>)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="section" id="projects">
        <div className="section-label">03 Projects</div>
        <h2>Selected work</h2>
        {projects.map((p) => (
          <article key={p.n} className="project-item">
            <div className="p-num">{p.n}</div>
            <div className="p-left">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="p-stack">
                {p.stack.map((t) => <span key={t} className="stack-pill">{t}</span>)}
              </div>
            </div>
            <div className="p-right">
              {p.metrics.map(([v, l]) => (
                <div key={l} className="metric-line">
                  <span className="metric-val">{v}</span>
                  <span className="metric-label">{l}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="section" id="about">
        <div className="about-grid">
          <div>
            <div className="section-label">04 About</div>
            <h2>A bit about me</h2>
            <div className="about-text">
              <p>I'm a <strong>cloud & DevOps engineer</strong> based in Lahore with 3+ years building on AWS. My focus is serverless and containerized architectures systems that scale without someone babysitting them at 2am.</p>
              <p>I care a lot about <strong>infrastructure as code</strong>. If you can't reproduce a deployment from scratch in one command, something's wrong. Terraform is how I think about infrastructure, and CI/CD is how I make sure nobody's deploying by hand.</p>
              <p>Beyond building, I've helped teams adopt DevOps practices writing runbooks, setting up monitoring, and making sure engineers have the observability they need to move fast without breaking things.</p>
            </div>
            <div className="edu-block">
              <div className="edu-label">Education</div>
              <div className="edu-title">B.S. in Computer Science</div>
              <div className="edu-sub">University of Central Punjab, Lahore</div>
            </div>
          </div>

          <div className="contact-panel" id="contact">
            <h3>Get in touch</h3>
            <p>Open to full-time roles, consulting work, and interesting problems. Just send a message.</p>
            <a className="contact-link" href="mailto:bhannan107@gmail.com">
              <span className="cl-icon" aria-hidden="true">
                <Mail size={18} strokeWidth={1.5} />
              </span>
              <div className="cl-left">
                <span className="cl-type">Email</span>
                <span className="cl-val">bhannan107@gmail.com</span>
              </div>
              <span className="cl-arrow">↗</span>
            </a>
            <a className="contact-link" href="https://wa.me/923160588828" target="_blank" rel="noopener noreferrer">
              <span className="cl-icon" aria-hidden="true">
                <MessageCircle size={18} strokeWidth={1.5} />
              </span>
              <div className="cl-left">
                <span className="cl-type">Phone / WhatsApp</span>
                <span className="cl-val">+92 316 058 8828</span>
              </div>
              <span className="cl-arrow">↗</span>
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/hannan-butt-321558243" target="_blank" rel="noopener noreferrer">
              <span className="cl-icon" aria-hidden="true">
                <Linkedin size={18} strokeWidth={1.5} />
              </span>
              <div className="cl-left">
                <span className="cl-type">LinkedIn</span>
                <span className="cl-val">hannan-butt-321558243</span>
              </div>
              <span className="cl-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>Abdul Hannan Butt Cloud & DevOps Engineer</span>
        <span>Lahore, Pakistan · 2025</span>
      </footer>
    </>
  );
}
