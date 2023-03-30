import ContactForm from "../ContactForm"

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl w-11/12 px-4 sm:px-6 lg:px-8">
                <div>
                    <div>
                        <h1 className="text-lg md:text-3xl p-1 mt-12">Lets work together</h1>
                        <div className="w-full h-[2px] bg-gray-200"></div>
                            <p className="mt-2 text-sm md:text-lg leading-6 text-gray-600">Have a question, comment or concern? Get in touch with us! Fill out the form below and we'll get back to you as soon as possible.</p>
                            <ContactForm/>
                    </div>
                </div>
    </div>
  )
}

export default Contact