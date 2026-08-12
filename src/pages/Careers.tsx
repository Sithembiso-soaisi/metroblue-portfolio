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

interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  coverLetter: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  coverLetter?: string;
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

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s-()+]{10,}$/;
  return phoneRegex.test(phone);
};

const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

function ApplicationModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [formData, setFormData] = useState<ApplicationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!validateRequired(value)) return 'First name is required';
        if (!validateMinLength(value, 2)) return 'First name must be at least 2 characters';
        break;
      case 'lastName':
        if (!validateRequired(value)) return 'Last name is required';
        if (!validateMinLength(value, 2)) return 'Last name must be at least 2 characters';
        break;
      case 'email':
        if (!validateRequired(value)) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        if (!validateRequired(value)) return 'Phone number is required';
        if (!validatePhone(value)) return 'Please enter a valid phone number';
        break;
      case 'linkedin':
        if (!validateRequired(value)) return 'LinkedIn profile is required';
        break;
      case 'coverLetter':
        if (!validateRequired(value)) return 'Cover letter is required';
        if (!validateMinLength(value, 50)) return 'Cover letter must be at least 50 characters';
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof ApplicationForm>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      linkedin: true,
      coverLetter: true
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Application submitted:', { job: job.title, ...formData });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClasses = (fieldName: keyof ApplicationForm) => `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-1
    ${errors[fieldName] && touched[fieldName]
      ? 'border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50'
      : 'border-slate-200 focus:border-[#00BCD4] focus:ring-[#00BCD4]/20 bg-white'}
    hover:border-slate-300
  `;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">Application Submitted!</h3>
          <p className="text-slate-600 mb-6">
            Thank you for applying to <strong>{job.title}</strong>. We'll review your application and get back to you within 5-7 business days.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#00BCD4] text-[#0B1F3A] rounded-lg font-semibold hover:bg-[#00BCD4]/80 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#0B1F3A]">Apply for {job.title}</h3>
              <p className="text-slate-600">{job.department} • {job.location}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses('firstName')}
                placeholder="John"
              />
              {errors.firstName && touched.firstName && (
                <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses('lastName')}
                placeholder="Doe"
              />
              {errors.lastName && touched.lastName && (
                <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses('email')}
                placeholder="john@example.com"
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses('phone')}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && touched.phone && (
                <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">LinkedIn Profile *</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses('linkedin')}
              placeholder="https://linkedin.com/in/johndoe"
            />
            {errors.linkedin && touched.linkedin && (
              <p className="text-sm text-red-600 mt-1">{errors.linkedin}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0B1F3A] mb-1.5">Cover Letter *</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              className={inputClasses('coverLetter')}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            />
            {errors.coverLetter && touched.coverLetter && (
              <p className="text-sm text-red-600 mt-1">{errors.coverLetter}</p>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200
                ${isSubmitting 
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                  : 'bg-[#00BCD4] text-[#0B1F3A] hover:bg-[#00BCD4]/80'}
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white text-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
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

      <section className="bg-slate-50 py-16">
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

      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={handleCloseModal} />
      )}
    </div>
  );
}