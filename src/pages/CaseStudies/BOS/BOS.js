import React from 'react';

import about1 from './images/About_us-1.png';
import about2 from './images/About5x-1.png';
import datahub from './images/Data_Hub-1.png';
import faq1 from './images/FAQ-1.png';
import faq2 from './images/FAQ5x-1.png';
import forumnow from './images/Forum_Now-1.png';
import forum1 from './images/Forum-1.png';
import forumtilt from './images/Forum-tilt-1.png';
import group112 from './images/Group-112.png';
import marketingheader from './images/Marketing_Header-1.png';
import marketingvideo from './images/Marketing_video-1.png';
import marketing5x from './images/Marketing5x-1.png';
import newsfeedscroll from './images/Newsfeed_scroll-1.png';
import newsfeedbody from './images/Newsfeed-Body.png';
import newsfeed5x from './images/Newsfeed5x-1.png';
import profile from './images/Profile5x-1.png';
import servicepage from './images/Service_page-1.png';
import services5x from './images/Services5x-1.png';
import title from './images/Title-Banner.png';
import virustotal from './images/VIRUSTOTAL.png';
import wot from './images/WOT.png';
import './BOS.css';

const BOS = () => {
  return (
    <div>
      <div>
        <div className="container w-container">
          <img src={title} alt="" />
        </div>
      </div>
      <div className="section">
        <div className="grey-box">
          <div className="left-text-block">
            <strong>Company:</strong>
            <br />
            Blockers of Scam
            <br />
            <br />
            <strong>Duration:</strong>
            <br />
            2 months
            <br />
            <br />
            <strong>My Role:</strong>
            <br />
            UX Designer
            <br />
            <br />
            <strong>Deliverable:</strong>
            <br />
            <a
              href="https://www.scamblock.org/wp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.scamblock.org/wp/
            </a>
          </div>
          <div className="right-text-block">
            <strong>scamBlock</strong>
            <br />
            <br />
            Blockers of Scam (BOS) mission statement is to stop the rising threat that is
            online scams. As designers, we were tasked with creating a platform that
            complimented the existing scamBlock Chrome extension in its goal of reporting
            potentially dangerous websites and social media profiles. New implementations
            like the forum and achievement system allow users to reliably verify their
            reports against those of other trusted users, thereby fostering community
            engagement.side of a div block.
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="w-container">
          <div>
            <div className="title-section">Quick Navigation</div>
            <div className="div-block" />
          </div>
        </div>
      </div>
      <div>
        <div className="container-3 w-container">
          <div className="w-layout-grid grid-2">
            <div id="w-node-0f58a5c4230f-7f41fa68">
              <a
                href="#profile"
                data-w-id="de50c5e5-51c6-805e-4c44-219da8b53a23"
                className="w-inline-block"
              >
                <img src={profile} alt="" className="image" />
              </a>
              <div className="div-block-2" />
              <div className="text-block-3">Profile</div>
            </div>
            <div id="w-node-96e5f251c335-7f41fa68">
              <div>
                <a
                  href="#news-feed"
                  data-w-id="67296549-8f81-824f-3b4c-18d43c9f27b9"
                  className="w-inline-block"
                >
                  <img src={newsfeed5x} alt="" className="image" />
                </a>
                <div className="div-block-2" />
                <div className="text-block-3">Newsfeed</div>
              </div>
            </div>
            <div id="w-node-5586ed07a57f-7f41fa68">
              <a
                href="#forum"
                data-w-id="46735080-ce82-4727-f5dc-cead8f5fd38d"
                className="w-inline-block"
              >
                <img src={forumtilt} alt="" className="image" />
              </a>
              <div className="div-block-2" />
              <div className="text-block-3">Forum</div>
            </div>
          </div>
          <div className="w-layout-grid grid-3">
            <div id="w-node-03555895dbec-7f41fa68">
              <div>
                <a
                  href="#service"
                  data-w-id="6f06da31-1882-c112-d8e5-5ee6f8795e08"
                  className="w-inline-block"
                >
                  <img src={services5x} alt="" className="image" />
                </a>
                <div className="div-block-2" />
                <div className="text-block-3-copy">Services</div>
              </div>
            </div>
            <div id="w-node-c4bfd3dd4bac-7f41fa68">
              <div>
                <a
                  href="#aboutus"
                  data-w-id="c0d742b2-1c31-8794-ca02-0acf10f1ed26"
                  className="w-inline-block"
                >
                  <img src={about2} alt="" className="image" />
                </a>
                <div className="div-block-2" />
                <div className="text-block-3">About Us</div>
              </div>
            </div>
            <div id="w-node-7755fa8d1ef0-7f41fa68">
              <div>
                <a
                  href="#faq"
                  data-w-id="1ee00c94-68ef-36f9-09db-229a3b2a89d3"
                  className="w-inline-block"
                >
                  <img src={faq2} alt="" className="image" />
                </a>
                <div className="div-block-2" />
                <div className="text-block-3">FAQ</div>
              </div>
            </div>
            <div id="w-node-f7b05b1deb2e-7f41fa68">
              <a href="#marketing" className="w-inline-block">
                <img
                  src={marketing5x}
                  data-w-id="cd2e44d3-d1c8-cbf6-1582-f7b05b1deb2f"
                  alt=""
                  className="image"
                />
              </a>
              <div className="div-block-2" />
              <div className="text-block-3">Marketing</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="w-container">
          <div>
            <div className="title-section">Design Challenge</div>
            <div className="div-block" />
            <div>
              <div className="text-block-4">
                Redesign the current BOS website to match the business goals and accompany
                the scamBlock extension.
              </div>
            </div>
            <div className="w-layout-grid grid-4">
              <div className="block">
                <div className="text-block-5">Business Goals</div>
                <div className="text-block-6">
                  The business goal is to develop a platform that is user friendly and
                  community driven to help keep the internet browsing a safer space.
                </div>
              </div>
              <div className="block">
                <div className="text-block-5">User Goals</div>
                <div className="text-block-6">
                  The user goals within this space is to gain and provide information on
                  ways to browse the internet in a safe space without falling victim of
                  scams.
                </div>
              </div>
              <div className="block">
                <div className="text-block-5">Designer Goals</div>
                <div className="text-block-6">
                  Our team goal is to create clean, usable pages with intuitive site
                  architecture while keeping the users in mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="grey-box column">
          <div>
            <div className="title-section">Market Research</div>
            <div className="div-block" />
          </div>
          <div className="w-layout-grid grid-5">
            <img src={virustotal} id="w-node-c36434ca7bc6-7f41fa68" alt="" />
            <img src={wot} id="w-node-a792baf9020c-7f41fa68" alt="" />
            <div className="text-block-7">
              <strong>Virustotal</strong> is an established company that combines AI
              powered algorithms along with a user report system to identify malicious
              sites. However, they do not have an extension and lack a space for their
              community to interact.
            </div>
            <div className="text-block-8">
              <strong>WOT</strong> is a competitor of scamBlock that gives reputation and
              rating to websites. They regularly post blogs in their platform, but seem to
              lack a sense of community.
            </div>
          </div>
        </div>
      </div>
      <div id="forum" className="section-5">
        <div className="w-container">
          <div>
            <div className="title-section">Forum</div>
            <div className="div-block" />
          </div>
          <div className="text-block-9">
            During market research, it was clear that many of our competitors lacked a
            sense of community and largely ignored improving the interaction experience
            between individual users. We wanted users to see the impact they are making by
            helping each other on our platform. It also addressed some of the shortcomings
            of the current Chrome extension.
            <br />
            <br />
            Preliminary research showed that the highest mode of delivery used by scammers
            is telephone, followed by online social networking. Ideally it would be best
            to target mobile devices via an app to best mitigate scams used in the social
            networking space. However, due to budget and time constraints, an extension
            was used in order to focus on a much simpler platform. The forum allows the
            community to discuss scams of all modes of delivery, not just limited to the
            types of scams that the extension is currently able to address (ie. web
            browsers).
          </div>
          <img src={forum1} width="985" alt="" className="image-2" />
          <div className="title-section">Main Challenge</div>
          <div className="text-block-9">
            The main focus of the forum was on how to make it more user-friendly. Most of
            the existing forums we examined were not user-friendly and often contained
            many irrelevant functions. In order to motivate users to utilise the forum, we
            aimed to make the user experience less complicated and more suitable for our
            determined persona. <br />
            <br />
            Our main focus was to identify a suitable information architecture since there
            are many different types of scams and we want to prioritize easy navigation.
            Based on research and information we obtained from the client, we created main
            topics that were inclusive to the main types of scams. Consequently, we
            conducted an internal card sorting session to  forum topics and each
            sub-categories. We included the main topics in tabs and the sub-categories are
            visible once the user clicks into them. This allows the user to see the wider
            range of categories when compared to the traditional hover drop menu.
          </div>
        </div>
      </div>
      <div className="section-6">
        <div className="w-container">
          <div>
            <div className="title-section">Forum - Commenting / Posting Fields</div>
            <div className="div-block" />
            <div className="title-section">Challenge</div>
            <div className="text-block-9">
              The existing commenting section had the following issues:
              <br />
              <br />
              1. No options to add in attachments to the comment.
              <br />
              2. The publish button wasn’t visible and therefore violated accessibility
              guidelines.
            </div>
            <div className="title-section">Solution</div>
            <div className="text-block-9">
              1. Ensured that the publish button was clearly visible and met the
              accessibility guidelines.
              <br />
              2. Added options for users to attach files or images
              <br />
              3. Added other editing options for users to customize their posts
            </div>
            <div className="div-block-3">
              <img src={forumnow} width="526" alt="" className="image-3" />
            </div>
            <div className="title-section">
              Impact
              <br />
            </div>
          </div>
          <div className="w-layout-grid grid-6">
            <div className="text-block-10">82%</div>
            <div className="text-block-11">
              We noticed that the rate of people posting and commenting went up by 82%
              compared to how it was before the redesign.
            </div>
          </div>
        </div>
      </div>
      <div id="profile" className="section-7">
        <div className="w-container">
          <div>
            <div className="title-section">Profile and Achievements</div>
            <div className="div-block" />
          </div>
          <div className="div-block-4">
            <img src={group112} alt="" className="image-4" />
          </div>
          <div className="text-block-9">
            Considering a user’s intention for visiting and actively engaging with a site
            centred around Internet security was difficult, to say the least. Websites are
            generally expected to act as a natural extension to a product/service, but our
            design team soon found ourselves struggling to simply define a purpose for the
            site. With an existing Chrome extension that could both collect scam reports
            and warn individual users of potentially dangerous webpages, why would users
            even find themselves on our site in the first place?
            <br />
            <br />
            <strong>Community engagement.</strong> Alone, the term means nothing - after
            all, our users can and do engage with each other on the countless social
            networking mediums out there. Our challenge, then, was to pick up their slack
            and provide a platform where users who are concerned by the current state of
            Internet security can reliably communicate and help one another.
            <br />
            <br />
            There’s an anonymity that comes with the Internet that is not conducive with
            the concept of Internet security. Many of our interviewees found it difficult
            to trust and engage with anonymous profiles online, regardless of if they were
            giving or soliciting advice. To offset this effect, we took a beat from the
            gamification trend of 2020 to foster legitimacy within our Scamblockers
            community. By creating profiles with associated achievements, we were able to
            commodify activity on our site and give users a reason to both post and reply
            on the forum. Those who visit our site can verify the Internet security advice
            they come across against the profile/achievements of the original poster, in
            addition to the replies, simply by clicking on the poster’s profile image.
            <br />
          </div>
        </div>
      </div>
      <div id="news-feed" className="section-8">
        <div className="w-container">
          <div>
            <div className="title-section">Newsfeed</div>
            <div className="div-block" />
          </div>
          <div className="text-block-9">
            For the redesign of the newsfeed page we decided to take inspiration from
            existing news websites. The original website did not have a hero section to
            capture visitor’s attention and was lacking hierarchy in the typography and
            design.
            <br />
            <br />
            In the new design we included a carousel section, where breaking news is
            featured. Visitors can easily see the latest stories and become immediately
            aware of the most common scams affecting people today. The images and texts
            are large in this section and are visually captivating to keep the visitors
            interested on this page.
            <br />
          </div>
          <img src={newsfeedscroll} width="954" alt="" className="image-5" />
          <div className="newsfeed-blocks">
            <div className="newsfeed-block-1">
              <div className="newsfeed-text-block">
                For the body section of the newsfeed where visitors can browse more
                content, we wanted to keep it minimal and organized. Rather than an
                infinite scroll of the content seen in the original design, we designed
                smaller cards which can stack side by side and give visitors a quick
                glimpse of the story details.
              </div>
              <div className="newsfeed-image">
                <img src={newsfeedbody} alt="" />
              </div>
            </div>
            <div className="newsfeed-block-2">
              <div className="newsfeed-text-block">
                To provide a better browsing experience we wanted to keep the original
                idea of filtering through the stories based on scam types. We conducted an
                internal card sort to determine the information architecture of the filter
                tags. This was to ensure the broadest categories were captured while
                allowing for further expansion in the future, if needed.
                <br />
                <br />
                Finally, to foster a sense of community between the forum and the newsfeed
                a “Real-Time Data Hub” was added to keep track of statistics. At a glance,
                users are able to see the number of members in their community and their
                collective effort of the community against real scams.
              </div>
              <div className="newsfeed-image">
                <img src={datahub} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="marketing" className="section-9">
        <div className="w-container">
          <div>
            <div className="title-section">Marketing Page</div>
            <div className="div-block" />
          </div>
          <div className="text-block-13-copy">
            The Marketing page is the first page that the user lands on to learn more
            about their new product, which is the ScamBlock chrome extension. So the page
            has the ScamBlock logo and the tag line followed by the “Add to Chrome” CTA to
            notify the user of the purpose of the extension and get them to download it.
          </div>
          <div className="div-block-5">
            <img src={marketingheader} alt="" />
          </div>
          <div className="text-block-13-copy">
            This is followed by the marketing video provided by the client for the
            extension in case the user wants to know more about the product. Some users,
            however, will prefer to read the main features of the product instead of
            sitting through a 90 second video, so the next section highlights these key
            features.
          </div>
          <div className="div-block-6">
            <img src={marketingvideo} alt="" />
          </div>
          <div className="text-block-13-copy">
            Finally, we added customer testimonials at the bottom to establish more
            credibility for the product and instil the feeling of community into the user.
            Once again, there is a “Add to Chrome” CTA at the bottom for users who
            scrolled all the way down and are now convinced they want to download the
            extension.
          </div>
        </div>
      </div>
      <div id="service" className="section-10">
        <div className="w-container">
          <div>
            <div className="title-section">Service Page</div>
            <div className="div-block" />
          </div>
          <div className="text-block-13-copy">
            We added a banner at the top to briefly inform the user of the details of the
            services provided by the company. They then select the plan suitable for them
            - each plan is displayed as a separate card with specific colours for
            differentiation. We added another section to promote the chrome extension
            since that is another new product the company provides followed by the “Add to
            Chrome” CTA, to optimally use this space for marketing.
          </div>
          <img src={servicepage} width="961" alt="" className="image-6" />
        </div>
      </div>
      <div id="aboutus" className="section-11">
        <div className="w-container">
          <div>
            <div className="title-section">About Us</div>
            <div className="div-block" />
            <div className="w-layout-grid grid-8">
              <div className="text-block-13-copy">
                The original About Us page was cluttered, hard to read with little to no
                information hierarchy. We wanted to ensure as a user that copy was kept
                concise without taking away the company’s mission statement. To bring
                together the design of the overall website, we used graphical elements for
                each section and kept the sections to a minimum which created some text to
                image hierarchy making it easier to read.
              </div>
              <img src={about1} width="392" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="faq" className="section-12">
        <div className="w-container">
          <div>
            <div className="title-section">FAQ Page</div>
            <div className="div-block" />
          </div>
          <div className="text-block-13-copy">
            FAQ pages can sometimes be tricky depending on the business. They are made to
            help customers get their questions answered quickly without having to spend
            too much time looking. Instead of a long scroll of countless questions and
            answers, we took the approach of eliminating these mass blocks of text with
            category drop-down menus. Creatively, these drop-down menus help create a more
            minimalistic look that ties into the overall website design. Contrary, this
            also helps guide a user to their answer faster by organizing frequently asked
            questions into category specific sections.
          </div>
          <img src={faq1} width="1058" alt="" />
        </div>
      </div>
      <div className="section-13">
        <div className="w-container">
          <div>
            <div className="title-section">Key Learning</div>
            <div className="div-block" />
          </div>
          <div className="text-block-9">
            <strong>• Communication is key </strong>
            <br />
            It is crucial to communicate with other designers on the team as well as with
            web developers to understand technological and time constraints
            <br />
            <br />
            <strong>• Discuss client’s needs early</strong>
            <br />
            It is important to discuss the client’s needs early on, in order to move
            forward in the right direction
            <br />
            <br />
            <strong>• Check-in with designers, developers, and stakeholders</strong>
            <br />
            Frequent check-ins across disciplines help ensure everyone is on the same page
            <br />
            <br />
            <strong>• User testing is essential </strong>
            <br />
            Lack of user testing posed as a constraint during the ideation process
          </div>
        </div>
      </div>
      <div className="section-14">
        <div className="w-container">
          <div>
            <div className="title-section">Next Steps</div>
            <div className="div-block" />
          </div>
          <div className="text-block-13-copy">
            Due to the time and sensitive nature of this project, we could not conduct any
            usability testing outside of existing employees to validate a smooth user
            experience. Once this product launches, our next steps are to conduct
            usability testing with forum users, friends, and family to get a good grasp of
            what is working versus what is not. The ideation process will follow as
            necessary once testing is complete.
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOS;
