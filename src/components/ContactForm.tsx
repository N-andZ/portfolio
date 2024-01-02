
const ContactForm = () => {

    return(
        <form action="https://api.web3forms.com/submit" method="POST" id="" className="flex flex-col items-center gap-6 w-fit background-radial-black p-10">
            <input type="hidden" name="access_key" value="71592f92-eada-4d32-8b24-6fa8674b6592"/>

            <input type="checkbox" name="botcheck" className="hidden"/>

            <div className=" text-5xl "> Leave a message </div>
            <input className="input-box" id="form-name" type="text" placeholder="Name" required/>
            <input className="input-box" id="form-email" type="email" placeholder="Email" required/>
            <textarea name="message" className="input-box " id="form-message" placeholder="Message" required></textarea>

            <button id="contact-button" className=" text-3xl w-fit px-8 py-2 bg-white text-black">
                Send
            </button>


        </form>
    )
}

export default ContactForm;