import React from 'react';
import { Box, Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';

import images from './images';
import './BOS.css';
import BannerImage from './images/Banner.png';
import CaseStudy from '..';
import Content from '../Content';
import { CenteredImage, List, ListItem } from '../styledComponents';

const BOS = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <CaseStudy
      myRole="UX Designer"
      timeline="2 months"
      tools="Figma, InVision"
      imageSrc={BannerImage}
      platform="Desktop"
    >
      <Content heading="Overview">
        As designers we were tasked with redesigning the Blockers of Scam website to
        promote the new scamBlock Chrome extension and foster community engagement.
      </Content>
      <Content heading="Design Challenge">
        Redesign the current BOS website to match the business goals and accompany the
        scamBlock extension.
        <Box mt={5}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper square elevation={2}>
                <Box p={4}>
                  <b>Business Goals</b>
                  <p>
                    The business goal is to develop a platform that is user friendly and
                    community driven to help keep the internet browsing a safer space.
                  </p>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper square elevation={2}>
                <Box p={4}>
                  <b>User Goals</b>
                  <p>
                    The user goals within this space is to gain and provide information on
                    ways to browse the internet in a safe space without falling victim of
                    scams.
                  </p>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper square elevation={2}>
                <Box p={4}>
                  <b>Designer Goals</b>
                  <p>
                    Our team goal is to create clean, usable pages with intuitive site
                    architecture while keeping the users in mind.
                  </p>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Content>

      <Content heading="Market Research">
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box pr={isMobile ? 0 : 3}>
              <CenteredImage height="300px" src={images.virusTotal} alt="" />
              <div>
                <b>Virustotal</b> is an established company that combines AI powered
                algorithms along with a user report system to identify malicious sites.
                However, they do not have an extension and lack a space for their
                community to interact.
              </div>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box pl={isMobile ? 0 : 3}>
              <CenteredImage height="300px" src={images.wot} alt="" />
              <div>
                <b>WOT</b> is a competitor of scamBlock that gives reputation and rating
                to websites. They regularly post blogs in their platform, but seem to lack
                a sense of community.
              </div>
            </Box>
          </Grid>
        </Grid>
      </Content>

      <Content heading="Redesigned Pages">
        <Content heading="Forum Page" level={2}>
          <CenteredImage src={images.forum} alt="" />
          <div>
            During market research, it was clear that many of our competitors lacked a
            sense of community and largely ignored improving the interaction experience
            between individual users. We wanted users to see the impact they are making by
            helping each other on our platform. It also addressed some of the shortcomings
            of the current Chrome extension.
            <p>
              Preliminary research showed that the highest mode of delivery used by
              scammers is telephone, followed by online social networking. Ideally it
              would be best to target mobile devices via an app to best mitigate scams
              used in the social networking space. However, due to budget and time
              constraints, an extension was used in order to focus on a much simpler
              platform. The forum allows the community to discuss scams of all modes of
              delivery, not just limited to the types of scams that the extension is
              currently able to address (ie. web browsers).
            </p>
            <p>
              The main focus of the forum was on how to make it more user-friendly. Most
              of the existing forums we examined were not user-friendly and often
              contained many irrelevant functions. In order to motivate users to utilise
              the forum, we aimed to make the user experience less complicated. Based on
              research and information we obtained from the client, we created suitable
              information architecture for easy navigation. We conducted an internal card
              sorting session to determine different forum categories.
            </p>
          </div>
        </Content>

        <Content heading="Profile and Achievements Page" level={2}>
          <CenteredImage src={images.group} alt="" />
          Considering a user’s intention for visiting and actively engaging with a site
          centred around Internet security was difficult, to say the least. Websites are
          generally expected to act as a natural extension to a product/service, but our
          design team soon found ourselves struggling to simply define a purpose for the
          site. With an existing Chrome extension that could both collect scam reports and
          warn individual users of potentially dangerous webpages, why would users even
          find themselves on our site in the first place? Community engagement. Alone, the
          term means nothing - after all, our users can and do engage with each other on
          the countless social networking mediums out there. Our challenge, then, was to
          pick up their slack and provide a platform where users who are concerned by the
          current state of Internet security can reliably communicate and help one
          another. There’s an anonymity that comes with the Internet that is not conducive
          with the concept of Internet security. Many of our interviewees found it
          difficult to trust and engage with anonymous profiles online, regardless of if
          they were giving or soliciting advice. To offset this effect, we took a beat
          from the gamification trend of 2020 to foster legitimacy within our Scamblockers
          community. By creating profiles with associated achievements, we were able to
          commodify activity on our site and give users a reason to both post and reply on
          the forum. Those who visit our site can verify the Internet security advice they
          come across against the profile/achievements of the original poster, in addition
          to the replies, simply by clicking on the poster’s profile image.
        </Content>

        <Content heading="Newsfeed Page" level={2}>
          For the redesign of the newsfeed page we decided to take inspiration from
          existing news websites. The original website did not have a hero section to
          capture visitor’s attention and was lacking hierarchy in the typography and
          design. In the new design we included a carousel section, where breaking news is
          featured. Visitors can easily see the latest stories and become immediately
          aware of the most common scams affecting people today. The images and texts are
          large in this section and are visually captivating to keep the visitors
          interested on this page.
          <CenteredImage src={images.newsfeed1} alt="" />
          <Grid container>
            <Grid item lg={8} md={6} sm={12} xs={12}>
              <Box height="100%" display="flex" alignItems="center" pr={isMobile ? 0 : 4}>
                For the body section of the newsfeed where visitors can browse more
                content, we wanted to keep it minimal and organized. Rather than an
                infinite scroll of the content seen in the original design, we designed
                smaller cards which can stack side by side and give visitors a quick
                glimpse of the story details.
              </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <CenteredImage src={images.newsfeed2} alt="" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={8} md={6} sm={12} xs={12}>
              <Box height="100%" display="flex" alignItems="center" pr={isMobile ? 0 : 4}>
                To provide a better browsing experience we wanted to keep the original
                idea of filtering through the stories based on scam types. We conducted an
                internal card sort to determine the information architecture of the filter
                tags. This was to ensure the broadest categories were captured while
                allowing for further expansion in the future, if needed. Finally, to
                foster a sense of community between the forum and the newsfeed a
                “Real-Time Data Hub” was added to keep track of statistics. At a glance,
                users are able to see the number of members in their community and their
                collective effort of the community against real scams.
              </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <CenteredImage src={images.newsfeed3} alt="" />
            </Grid>
          </Grid>
        </Content>

        <Content heading="Marketing Page" level={2}>
          The Marketing page is the first page that the user lands on to learn more about
          their new product, which is the ScamBlock chrome extension. So the page has the
          ScamBlock logo and the tag line followed by the “Add to Chrome” CTA to notify
          the user of the purpose of the extension and get them to download it.
          <CenteredImage src={images.marketing1} alt="" />
          This is followed by the marketing video provided by the client for the extension
          in case the user wants to know more about the product. Some users, however, will
          prefer to read the main features of the product instead of sitting through a 90
          second video, so the next section highlights these key features.
          <CenteredImage src={images.marketing2} alt="" />
          Finally, we added customer testimonials at the bottom to establish more
          credibility for the product and instil the feeling of community into the user.
          Once again, there is a “Add to Chrome” CTA at the bottom for users who scrolled
          all the way down and are now convinced they want to download the extension.
        </Content>

        <Content heading="Services Page" level={2}>
          We added a banner at the top to briefly inform the user of the details of the
          services provided by the company. They then select the plan suitable for them -
          each plan is displayed as a separate card with specific colours for
          differentiation. We added another section to promote the chrome extension since
          that is another new product the company provides followed by the “Add to Chrome”
          CTA, to optimally use this space for marketing.
          <CenteredImage src={images.services} alt="" />
        </Content>

        <Content heading="About Us Page" level={2}>
          The original About Us page was cluttered, hard to read with little to no
          information hierarchy. We wanted to ensure as a user that copy was kept concise
          without taking away the company’s mission statement. To bring together the
          design of the overall website, we used graphical elements for each section and
          kept the sections to a minimum which created some text to image hierarchy making
          it easier to read.
          <CenteredImage src={images.aboutUs} alt="" />
        </Content>

        <Content heading="FAQ Page" level={2}>
          FAQ pages can sometimes be tricky depending on the business. They are made to
          help customers get their questions answered quickly without having to spend too
          much time looking. Instead of a long scroll of countless questions and answers,
          we took the approach of eliminating these mass blocks of text with category
          drop-down menus. Creatively, these drop-down menus help create a more
          minimalistic look that ties into the overall website design. Contrary, this also
          helps guide a user to their answer faster by organizing frequently asked
          questions into category specific sections.
          <CenteredImage src={images.faq} alt="" />
        </Content>
      </Content>

      <Content heading="Key Takeaways">
        <List>
          <ListItem>
            <b>Communication is key</b>
            <br />
            It is crucial to communicate with other designers on the team as well as with
            web developers to understand technological and time constraints
          </ListItem>
          <ListItem>
            <b>Discuss client’s needs early</b>
            <br />
            It is important to discuss the client’s needs early on, in order to move
            forward in the right direction
          </ListItem>
          <ListItem>
            <b>Check-in with designers, developers, and stakeholders</b>
            <br />
            Frequent check-ins across disciplines help ensure everyone is on the same page
          </ListItem>
          <ListItem>
            <b>User testing is essential</b>
            <br />
            Lack of user testing posed as a constraint during the ideation process
          </ListItem>
        </List>
      </Content>

      <Content heading="Future Considerations">
        Due to the time and sensitive nature of this project, we could not conduct any
        usability testing outside of existing employees to validate a smooth user
        experience. Once this product launches, our next steps are to conduct usability
        testing with forum users, friends, and family to get a good grasp of what is
        working versus what is not. The ideation process will follow as necessary once
        testing is complete.
      </Content>
    </CaseStudy>
  );
};

export default BOS;
