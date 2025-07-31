import React from 'react'

function FraQuestion() {
    return (
        <div className='md:max-w-6xl md:gap-6 my-20  mx-4 md:mx-auto inter'>
            <h2 className='text-center mb-8 md:text-4xl text-2xl font-bold text-gray-900 '>Frequently Asked Questions</h2>
           <div className='space-y-10'>
             <div className="collapse collapse-arrow shadow border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How does the word count work?</div>
                <div className="collapse-content text-sm">Word count is calculated based on the input text you humanize. Each word in your input text counts toward your monthly limit. We don't count words in the output text separately..</div>
            </div>
            <div className="collapse collapse-arrow shadow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I upgrade or downgrade my plan?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-arrow shadow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What happens if I exceed my word limit?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-arrow shadow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Do you offer refunds?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
           </div>
        </div>
    )
}

export default FraQuestion