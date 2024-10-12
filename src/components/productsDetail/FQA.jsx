import React from 'react'

export default function FQA() {
      const faqs = [
        {
          question: "What is [Product/Service]?",
          answer:
            "[Product/Service] is a comprehensive solution designed to help you with [describe the main function or benefit]."
        },
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Sign Up' button at the top right corner and fill out the registration form with your details."
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
        },
        {
          question: "How can I contact support?",
          answer:
            "You can contact our support team via email at support@example.com or call us at (123) 456-7890."
        },
        {
          question: "Can I change my subscription plan?",
          answer:
            "Yes, you can change your subscription plan at any time from your account settings page."
        }
      ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-xl font-medium text-gray-900">{faq.question}</h4>
          <p className="text-gray-700 mt-2">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
