import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
}

type FieldName = keyof FormData;

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-()+]{10,}$/;
  return phoneRegex.test(phone);
};

const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<FieldName, boolean>>
  >({});

  const validateField = (
    name: FieldName,
    value: string
  ): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!validateRequired(value)) {
          return 'First name is required';
        }
        if (!validateMinLength(value, 2)) {
          return 'First name must be at least 2 characters';
        }
        break;

      case 'lastName':
        if (!validateRequired(value)) {
          return 'Last name is required';
        }
        if (!validateMinLength(value, 2)) {
          return 'Last name must be at least 2 characters';
        }
        break;

      case 'email':
        if (!validateRequired(value)) {
          return 'Email is required';
        }
        if (!validateEmail(value)) {
          return 'Please enter a valid email address';
        }
        break;

      case 'company':
        // Company is optional.
        break;

      case 'phone':
        if (value && !validatePhone(value)) {
          return 'Please enter a valid phone number';
        }
        break;

      case 'serviceType':
        if (!validateRequired(value)) {
          return 'Please select a service type';
        }
        break;

      case 'message':
        if (!validateRequired(value)) {
          return 'Message is required';
        }
        if (!validateMinLength(value, 20)) {
          return 'Message must be at least 20 characters';
        }
        break;
    }

    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    const fieldName = name as FieldName;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);

      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    const fieldName = name as FieldName;

    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    const error = validateField(fieldName, value);

    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as FieldName[]).forEach((key) => {
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
      company: true,
      phone: true,
      serviceType: true,
      message: true,
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      serviceType: '',
      message: '',
    });

    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  const inputClasses = (fieldName: FieldName) => `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-1
    ${
      errors[fieldName] && touched[fieldName]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50'
        : 'border-slate-200 focus:border-[#00BCD4] focus:ring-[#00BCD4]/20 bg-white'
    }
    hover:border-slate-300
  `;

  const labelClasses = `
    block text-sm font-medium text-[#0B1F3A] mb-1.5
  `;

  const errorClasses = `
    text-sm text-red-600 mt-1 animate-pulse
  `;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full bg-white rounded-2xl border border-slate-200 shadow-md p-10 text-center">
          <div className="w-16 h-16 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-[#00BCD4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-[#0B1F3A] mb-4">
            Thank You!
          </h1>

          <p className="text-slate-600 mb-8">
            We've received your message and will get back to you within 24
            hours.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 rounded-lg font-semibold bg-[#00BCD4] text-[#0B1F3A] hover:bg-white hover:shadow-lg border border-[#00BCD4] transition-all duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-3xl font-bold text-[#0B1F3A] mb-3">
              Contact Us
            </h1>

            <p className="text-slate-600 mb-8">
              Get in touch with our team. We'd love to hear from you and help
              with your needs.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              {/* First and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className={labelClasses}
                  >
                    First Name *
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses('firstName')}
                    placeholder="John"
                  />

                  {errors.firstName && touched.firstName && (
                    <p className={errorClasses}>
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className={labelClasses}
                  >
                    Last Name *
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses('lastName')}
                    placeholder="Doe"
                  />

                  {errors.lastName && touched.lastName && (
                    <p className={errorClasses}>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address *
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses('email')}
                  placeholder="john@example.com"
                />

                {errors.email && touched.email && (
                  <p className={errorClasses}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className={labelClasses}
                  >
                    Company
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses('company')}
                    placeholder="Acme Inc."
                  />

                  {errors.company && touched.company && (
                    <p className={errorClasses}>
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={labelClasses}
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClasses('phone')}
                    placeholder="+1 (555) 000-0000"
                  />

                  {errors.phone && touched.phone && (
                    <p className={errorClasses}>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="serviceType"
                  className={labelClasses}
                >
                  Service Type *
                </label>

                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses('serviceType')}
                >
                  <option value="">Select a service</option>
                  <option value="consulting">Consulting</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>

                {errors.serviceType && touched.serviceType && (
                  <p className={errorClasses}>
                    {errors.serviceType}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={labelClasses}
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className={inputClasses('message')}
                  placeholder="Tell us about your project or inquiry..."
                />

                {errors.message && touched.message && (
                  <p className={errorClasses}>
                    {errors.message}
                  </p>
                )}

                <p className="text-xs text-slate-400 mt-1">
                  Minimum 20 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-4 px-6 rounded-lg font-semibold
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-[#00BCD4]
                  ${
                    isSubmitting
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      : 'bg-[#00BCD4] text-[#0B1F3A] hover:bg-white hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] border border-[#00BCD4]'
                  }
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>

                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
              Get In Touch
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 mb-6">
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#00BCD4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0B1F3A]">
                      Address
                    </h3>

                    <p className="text-slate-600">
                      123 Business Ave, Suite 100
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#00BCD4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0B1F3A]">
                      Email
                    </h3>

                    <p className="text-slate-600">
                      contact@metroblue.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#00BCD4]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0B1F3A]">
                      Phone
                    </h3>

                    <p className="text-slate-600">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-[#0F4C81] to-[#0B1F3A] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">
                Business Hours
              </h3>

              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-slate-300">
                    Monday - Friday
                  </span>

                  <span>9:00 AM - 6:00 PM</span>
                </li>

                <li className="flex justify-between">
                  <span className="text-slate-300">
                    Saturday
                  </span>

                  <span>10:00 AM - 2:00 PM</span>
                </li>

                <li className="flex justify-between">
                  <span className="text-slate-300">
                    Sunday
                  </span>

                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}