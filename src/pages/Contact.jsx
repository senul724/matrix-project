const Contact = () => {
  return(
<section class="bg-white">
  <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16">
      <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900">Contact Us</h2>
      <p class="mb-8 font-light text-center text-gray-500 sm:text-xl lg:mb-16">Got any issue? Just let us know.</p>
      <form class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="name@example.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-bold text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none sm:w-fit hover:bg-primary-800 focus:ring-primary-300">Send message</button>
      </form>
  </div>
</section>
)
};

export default Contact;
