'use client'

import React, { useState } from 'react'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'A JavaScript library for building UIs.',
  },
  {
    id: 2,
    question: 'What is TypeScript?',
    answer: 'A typed superset of JavaScript.',
  },
  {
    id: 3,
    question: 'What is JSX?',
    answer: 'A syntax extension for JavaScript.',
  },
]

export default function FAQList() {
  const [openId, setOpenId] = useState<number | null>(null)

  const handleClick = (id: number) => {
    if (openId === id) {
      setOpenId(null)
      return
    }

    setOpenId(id)
  }

  return (
    <div>
      <h2>FAQ</h2>
      <ul className='flex max-w-fit flex-col overflow-hidden rounded-lg'>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <div
              role='button'
              onClick={() => handleClick(faq.id)}
              className='cursor-pointer select-none px-4 py-2 font-semibold'
            >
              {faq.question}{' '}
              <span
                className={`duration-250 inline-block transition-all ease-in ${openId === faq.id ? 'rotate-90 opacity-100' : 'opacity-60'}`}
              >
                {'>'}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`duration-250 w-full overflow-hidden bg-slate-500/10 px-4 transition-all ease-in ${openId === faq.id ? 'h-fit py-2 opacity-100' : 'h-0 py-0 opacity-0'}`}
            >
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
