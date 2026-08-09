import { useState, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team and help build cutting-edge web applications.',
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Strong understanding of web performance optimization',
      'Experience with state management libraries',
      'Excellent communication skills'
    ]
  },
  {
    id: 2,
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our backend team to design and implement scalable APIs and microservices.',
    requirements: [
      '3+ years of experience with Node.js',
      'Knowledge of database design (SQL/NoSQL)',
      'Experience with cloud services (AWS/GCP)',
      'Familiarity with microservices architecture'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user interfaces for our product suite.',
    requirements: [
      'Portfolio demonstrating strong UI/UX skills',
      'Proficiency in Figma and design systems',
      'Experience with user research and testing',
      'Ability to work collaboratively with engineers'
    ]
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead product strategy and roadmap for our flagship products.',
    requirements: [
      '5+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with agile methodologies',
      'Excellent stakeholder management'
    ]
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
    requirements: [
      'Experience with Kubernetes and Docker',
      'Knowledge of infrastructure as code (Terraform)',
      'Strong scripting skills (Python/Bash)',
      'Experience with monitoring and logging tools'
    ]
  }
];

function JobCard({ job, onApply }: { job: Job; onApply: (job: Job) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white rounded-xl border border-slate-200 p-6 
        transition-all duration-300 ease-out
        hover:shadow-lg hover:border-[#00BCD4]/30 hover:-translate-y-1
        ${isHovered ? 'shadow-md' : 'shadow-sm'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0F4C81]/10 text-[#0F4C81]">
              {job.department}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600">
              {job.location}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00BCD4]/10 text-[#00BCD4]">
              {job.type}
            </span>
          </div>
          <p className="text-slate-600">{job.description}</p>
        </div>
        <button
          onClick={() => onApply(job)}
          className={`
            px-6 py-3 rounded-lg font-semibold transition-all duration-200
            bg-[#00BCD4] text-[#0B1F3A]
            hover:bg-white hover:scale-105 hover:shadow-md
            active:scale-95 active:bg-[#00BCD4]/80
            focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:ring-offset-2
          `}
        >
          Apply Now
        </button>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-[#00BCD4] hover:text-[#0F4C81] font-medium transition-colors duration-200 flex items-center gap-2"
      >
        {isExpanded ? 'Hide Requirements' : 'View Requirements'}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="pt-4 border-t border-slate-200">
          <h4 className="font-semibold text-[#0B1F3A] mb-3">Requirements:</h4>
          <ul className="space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-600">
                <svg className="w-5 h-5 text-[#00BCD4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function JobSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 animate-pulse">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="h-7 bg-slate-200 rounded w-64 mb-4"></div>
          <div className="flex gap-2 mb-3">
            <div className="h-6 bg-slate-200 rounded-full w-24"></div>
            <div className="h-6 bg-slate-200 rounded-full w-20"></div>
            <div className="h-6 bg-slate-200 rounded-full w-24"></div>
          </div>
          <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        </div>
        <div className="h-12 bg-slate-200 rounded-lg w-32"></div>
      </div>
    </div>
  );
}

export default function Careers() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobList, setJobList] = useState<Job[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setJobList(jobs);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const departments = ['All', ...new Set(jobs.map(job => job.department))];
  
  const filteredJobs = selectedDepartment === 'All' 
    ? jobList 
    : jobList.filter(job => job.department === selectedDepartment);

  const handleApply = (job: Job) => {
    console.log('Applying for:', job.title);
    alert(`Thank you for your interest in ${job.title}! This would open the application form.`);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Build your career with MetroBlue. We're looking for talented individuals who want to make an impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">Open Positions</h2>
          <div className="flex flex-wrap gap-2">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${selectedDepartment === dept 
                    ? 'bg-[#00BCD4] text-[#0B1F3A] shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}
                `}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <>
              <JobSkeleton />
              <JobSkeleton />
              <JobSkeleton />
            </>
          ) : (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))
          )}
        </div>

        {!isLoading && filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No positions available in this department.</p>
          </div>
        )}
      </section>

      <section className="bg-[#E6F7FB] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Why MetroBlue?</h2>
            <p className="text-slate-600 mb-8">
              We offer competitive compensation, flexible work arrangements, and opportunities for professional growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0B1F3A] mb-2">Competitive Salary</h3>
                <p className="text-slate-600 text-sm">Market-leading compensation packages</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0B1F3A] mb-2">Great Benefits</h3>
                <p className="text-slate-600 text-sm">Health, dental, and wellness programs</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0B1F3A] mb-2">Growth Opportunities</h3>
                <p className="text-slate-600 text-sm">Career development and training</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}