import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ContactSchema= Yup.object().shape({
    firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(72, 'Too Long!')
     .required('First Name is required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(72, 'Too Long!')
     .required('Last Name is required'),
   email: Yup.string().email('Invalid email').required('Please enter a valid email'),
   message: Yup.string()
      .min(2, 'Too Short!')
      .max(5000, 'Too Long!')
      .required('This field is required'),
    query: Yup.string().required('Please select a query type'),
    consent:Yup.bool()
        .oneOf([true], 'To submit this form, please consent to being contacted'),
});

export default function ContactForm(){

    return(

        <section className="my-10 mx-4 rounded-xl lg:my-2 lg:flex lg:items-center lg:justify-center lg:h-screen">
            <div className="bg-white p-4 rounded-lg shadow max-w-2xl mx-auto w-full">
                <h2 className="text-teal-950 text-center lg:text-left text-2xl font-semibold mb-8">
                    Contact Form
                </h2>                
               
                <ToastContainer theme="teal" position="top-center" />


                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        query: "",
                        message: "",
                        consent: false,
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={(values) => toast( 
                    <div style={{ height: "100%" }}>
                        <div className='title flex gap-3 my-2' style={{ fontWeight: "bold", color: "#fff" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"/></svg>
                        Message Sent!</div>
                        <p className='mb-2'>Thanks for completing the form. We'll be in touch soon!</p>
                    </div>,{
                        className:"toast-message "
                    } )}
                    
                >
                    
                    {({errors, touched}) => (
                        <Form className="grid gap-4" >
                            <div className="grid lg:grid-cols-2 gap-4">
                                <article>
                                    <label htmlFor="first-name" className="mb-2">First Name *</label>
                                    <Field name="firstName" id="first-name" />
                                    {errors.firstName && touched.firstName ? (
                                        <div className="text-rose-500 text-sm">
                                            {errors.firstName}
                                        </div>
                                    ) : null}
                                </article>
        
                                <article>
                                    <label htmlFor="last-name"className="mb-2" >Last Name *</label>
                                    <Field name="lastName" id="last-name"/>
                                    {errors.lastName && touched.lastName ? (
                                        <div className="text-rose-500 text-sm">
                                            {errors.lastName}
                                        </div>
                                    ) : null}
                                </article>
                            </div>
        
                            <div>
                                <article>
                                    <label htmlFor="email-address" className="mb-2">Email Address *</label>
                                    <Field name="email" id="email-address"/>
                                    {errors.email && touched.email ? (
                                        <div className="text-rose-500 text-sm">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </article>
                            </div>
        
                            <div>
                                <label htmlFor="query-type" className="mb-2">Query Type *</label>
                                <div  className="grid m md:grid-cols-2 lg:grid-cols-2 gap-4">
                                    <label className="radio-btn">
                                        <Field
                                            type="radio" 
                                            name="query" 
                                            value="General Enquiry"
                                            id="general-enquiry" 
                                            className="w-auto accent-teal-800 pr-2"
                                        />
                                        <span className='pl-2'>General Enquiry</span>
                                    </label>
                                    <label className="radio-btn">
                                        <Field type="radio" 
                                            name="query" 
                                            id="support-request"
                                            value="Support Request"
                                            className="w-auto accent-teal-800"  
                                        />
                                        <span className='pl-2'>Support Request</span>
                                    </label>
                                    {errors.query && touched.query ? (
                                        <div className="text-rose-500 text-sm">
                                            {errors.query}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
        
                            <div>
                                <label htmlFor="message" className="mb-2">Message *</label>
                                <Field as="textarea" name="message" id="message" cols="30" rows="5"></Field>
                                {errors.message && touched.message ? (
                                        <div className="text-rose-500 text-sm">
                                            {errors.message}
                                        </div>
                                ) : null}
                            </div>
        
                            <div className="text-teal-800 text-sm">
                                <label>
                                <Field 
                                    type="checkbox" 
                                    name="consent" 
                                    id="consent" 
                                    className="w-auto accent-teal-800" 
                                /><span className='pl-2'>I consent to being contacted by the team *</span>
                                </label>
                                {errors.consent && touched.consent ? (
                                        <div className="text-rose-500 text-sm">
                                            {errors.consent}
                                        </div>
                                ) : null}
                            </div>
        
                            <button type="submit" className="bg-teal-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-900 transition">Submit</button>

        
                        </Form> 
                    )}
                </Formik>
                
            </div> 
        </section>
    
    );
}
