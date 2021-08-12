import React from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import { Button, Col, Container, Row } from 'react-bootstrap';
import images from './images';
import CaseStudy from '..';
import { P } from '../../../common/styledComponents';
import { DETAILS, ORIGYNS } from '../../../common/constants';
import {
  CenteredImage,
  Section,
  SubSection,
  CenteredBox,
  BannerBox,
} from '../styledComponents';

const Origyns = () => {
  const theme = useTheme();
  const isVerticallyStacked = useMediaQuery(theme.breakpoints.down('lg')); // upto 992
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm')); // upto 576
  const isMdScreen = useMediaQuery(theme.breakpoints.between('xl', 1200)); // between 992 and 1200

  const prototypeLink = '/';

  return (
    <CaseStudy
      name={ORIGYNS}
      myRole="UX Research, Usability Testing, Design Strategy, UI Design"
      tools="Figma, Sketch, Invision"
      timeline="4 months"
      platform="Desktop"
      imageSrc={images.topImage}
      result={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          <a href="https://www.origyns.ca" target="_blank" rel="noopener noreferrer">
            www.origyns.ca
          </a>
          <br />
          (currently undergoing development)
        </>
      }
      prototypeLink={prototypeLink}
    >
      <Container className="d-block">
        <Section>Project Brief</Section>
        <SubSection>Understanding the client and their requirements</SubSection>
        <Box className="mb-7">
          Origyns is a luxury furniture e-commerce company in Canada that aims to help
          customers shop for premium-quality, 100% Canadian-made furniture online. Besides
          being able to browse through their catalog, and get inspiration, they put
          customization and convenience at the forefront of their customer experience.
          <P>
            My task was to understand the different ways in which users go about buying
            furniture online. I had to identify what works well, and what could be
            improved in the current landscape. Finally, I had to design a website that
            seamlessly imitates the in-store shopping experience since Origyns does not
            have a physical store.
          </P>
        </Box>

        <Section>Initial Research</Section>
        <SubSection>Identifying the problem space</SubSection>
        <Box className="mb-7">
          As online presence becomes more significant than ever for the furniture
          industry, the first question is how to bridge the online-offline gap and offer
          engaging virtual experiences to your customers. Shopping for furnitures online
          allows users to explore different options at any time from anywhere. However,
          there are some concerns that stop users from shopping furniture online:
          <P>
            <ul>
              <li>They are unable to see and touch products before buying</li>
              <li>There is a lack of design inspiration</li>
              <li>It is hard to find unique pieces</li>
            </ul>
          </P>
          <P>
            Given that users have to rely on images to feel comfortable in the online
            store, it is essential to provide an impeccable visual experience.
          </P>
        </Box>

        <Section>Market Research</Section>
        <SubSection>What is the current landscape?</SubSection>
        <Box className="mb-7">
          I also conducted a competitive analysis of some of the existing furniture
          e-commerce websites.
          <P>
            The most common features were:
            <ul>
              <li>High quality product images</li>
              <li>Multi-angle images & detail shots</li>
              <li>Detailed product descriptions</li>
              <li>Customer reviews with photos</li>
              <li>Promotional deals</li>
            </ul>
          </P>
          <P>
            Potential areas of opportunity were:
            <ul>
              <li>AR/VR technology to visualize the product</li>
              <li>360-degree product view</li>
              <li>Free fabric samples</li>
            </ul>
          </P>
        </Box>
        <Section>User Research</Section>
        <SubSection>Understanding our target users</SubSection>
        <Box className="mb-7">
          I put together a short survey to learn as much as possible about the target
          users
          <Row className="my-5">
            <Col md={12} lg={6} className={isVerticallyStacked ? '' : 'pe-5'}>
              <CenteredImage margin="auto" src={images.userReseach1} alt="" />
            </Col>
            <Col md={12} lg={6} className={isVerticallyStacked ? '' : 'ps-5'}>
              <CenteredImage margin="auto" src={images.userReseach2} alt="" />
            </Col>
          </Row>
        </Box>
        <SubSection>Talking to users to understand their current challenges</SubSection>
        <Box className="mb-7">
          To learn more about the motivations of my users, I talked to 5 millennials who
          are currently looking to buy furniture online. Following are their shared
          insights and frustrations:
          <Row className="my-4">
            <Col
              sm={12}
              lg={7}
              className="p-3 px-4"
              style={{ backgroundColor: DETAILS[ORIGYNS].caseStudy.backgroundColor }}
            >
              “I want to be able to see up close what my custom furniture will look like
              before I buy it”
            </Col>
          </Row>
          <Row className="my-4">
            <Col
              sm={12}
              lg={{ span: 7, offset: 5 }}
              className="p-3 px-4"
              style={{ backgroundColor: DETAILS[ORIGYNS].caseStudy.backgroundColor }}
            >
              “I want to know what others customers have to say about their experience and
              the products”
            </Col>
          </Row>
          <Row className="my-4">
            <Col
              sm={12}
              lg={7}
              className="p-3 px-4"
              style={{ backgroundColor: DETAILS[ORIGYNS].caseStudy.backgroundColor }}
            >
              “I want to get inspiration for what the product will look like in a room
              setting”
            </Col>
          </Row>
          <P>
            I noticed some common themes and patterns in the user responses. Despite the
            relatively small sample size, I was able to extract some insights that would
            later influence my design decisions.
          </P>
          <P>
            <ul>
              <li>
                Most online furniture shoppers are female millenials between the ages of{' '}
                <b>30-40 years</b>
              </li>
              <li>
                Customer <b>reviews</b> are important to most shoppers
              </li>
              <li>
                <b>High quality product images</b> and <b>360-degree view</b> help
                shoppers make purchase decisions
              </li>
            </ul>
          </P>
        </Box>

        <Section>Persona Development & Journey Map</Section>
        <SubSection>
          Keeping the user at the centre of my design moving forward
        </SubSection>
        <Box className="mb-4">
          Based on insights from my research, survey findings and user interviews, I
          developed a persona to represent our target users
          <Row className="my-5">
            <Col md={12} lg={6} className={isVerticallyStacked ? '' : 'pe-5'}>
              <CenteredImage margin="auto" src={images.persona1} alt="" />
            </Col>
            <Col md={12} lg={6} className={isVerticallyStacked ? '' : 'ps-5 m-auto'}>
              <CenteredImage margin="auto" src={images.persona2} alt="" />
            </Col>
          </Row>
          Keeping this information and my persona in mind, my question was
        </Box>
      </Container>
      <BannerBox
        className="mb-7"
        backgroundColor={DETAILS[ORIGYNS].caseStudy.backgroundColor}
      >
        <Container>
          How might we enable millenials (ages 30-40) confidently create and purchase
          fully customizable furniture online?
        </Container>
      </BannerBox>

      <Container className="d-block">
        <Section>Potential Solution</Section>
        <SubSection>
          Exploring potential solutions to deliver a richer shopping experience
        </SubSection>
        <Box className="mb-7">
          <P>
            In order to bridge the online-offline gap and offer engaging virtual
            experiences to users, it is essential to create a visually rich product page.
            I came up with two possible solutions:
          </P>
          <P>
            <ul>
              <li className="pb-3">
                <b>3D product visualization:</b> 3D renderings of the product show colors
                more accurately than photography. Additionally, interactive room scenes
                can also be designed to simplify product visualization. Due to a{' '}
                <b>budget constraint</b>, this option was shelved to be used in future
                iterations.
              </li>
              <li>
                <b>360-degree product images:</b> This is the best way to compensate for
                the lack of tactile sense, which is of high importance, especially when it
                comes to furniture purchases. This was a more <b>feasible</b> option that
                was selected, without compromising the overall user experience.
              </li>
            </ul>
          </P>
        </Box>

        <Section as="div" className="text-center">
          Usage of High quality visuals
        </Section>
        <Box className="mb-7">
          <Row>
            <Col sm={4}>
              <CenteredBox>
                27%<div>Increased Conversion</div>
              </CenteredBox>
            </Col>
            <Col sm={4}>
              <CenteredBox className={isSmScreen ? 'pt-4' : ''}>
                15%<div>Reduced Returns</div>
              </CenteredBox>
            </Col>
            <Col sm={4}>
              <CenteredBox className={isSmScreen ? 'pt-4' : ''}>
                83%<div>Increased Trust</div>
              </CenteredBox>
            </Col>
          </Row>
        </Box>

        <Section>Information Architecture</Section>
        <SubSection>Creating a site map and navigation</SubSection>
        <Box className="mb-7">
          I synthesized the key insights from my research and user interviews into the
          following site map. This helped me in visualizing how each page would be
          connected, and how users could potentially navigate through the website.
          <CenteredImage width="700px" src={images.infoArch1} alt="" />
        </Box>
        <SubSection>Determining the user flow</SubSection>
        <Box className="mb-7">
          Once the sitemap was established, I created a user flow to determine how Olivia
          will navigate through the website for a given task.
          <CenteredImage src={images.infoArch2} alt="" />
        </Box>

        <Section>Key Features</Section>
        <SubSection>List of features to create the MVP</SubSection>
        <Box className="mb-7">
          Taking the user flow into consideration, the following features were needed to
          create a minimum viable product (MVP)
          <P>
            <ul>
              <li>
                <b>Product page with HD images, reviews, description:</b> During initial
                research, many users mentioned that customer reviews and photos, high
                quality product images, and detailed product description are going to
                drive their purchase decision since they won’t be able to see the products
                in person
              </li>
              <li>
                <b>360-degree product images:</b> This will mimic the interactive in-store
                experience and increase trust in the online purchase
              </li>
              <li>
                <b>Product image changes based on customization options:</b> Since the
                customers won’t be able to feel and touch the product, ensuring that high
                quality image of the customized product
              </li>
              <li>
                <b>Custom design quote:</b> For users who want to build custom furniture,
                a form that allows them to easily enter details to get an estimated cost
              </li>
            </ul>
          </P>
        </Box>

        <Section>Sketches & Wireframes</Section>
        <SubSection>Starting with pen and paper</SubSection>
        <Box className="mb-7">
          Once I was clear on the user flow, I started to sketch out the possible
          solution. Using inspirations from other existing UI components from apps like
          Wayfair, BoConcept, Joybird, I started sketching different ideas.
          <Row>
            <Col xs={6} lg={{ span: 2, offset: 2 }}>
              <CenteredImage maxHeight="220px" src={images.sketch1} />
            </Col>
            <Col xs={6} lg={2}>
              <CenteredImage maxHeight="220px" src={images.sketch2} />
            </Col>
            <Col xs={6} lg={2}>
              <CenteredImage maxHeight="220px" src={images.sketch3} />
            </Col>
            <Col xs={6} lg={2}>
              <CenteredImage maxHeight="220px" src={images.sketch4} />
            </Col>
            <Col lg={2} />
          </Row>
          From sketching on paper, I moved onto digital wireframes to create my first
          prototype so that I could begin testing my designs early in the process.
          <Row>
            {isSmScreen ? (
              <>
                <Col sm={12}>
                  <Box className="d-flex">
                    <CenteredImage
                      style={{ marginLeft: isSmScreen ? '0' : 'auto' }}
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe1}
                    />
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe2}
                    />
                  </Box>
                </Col>
                <Col sm={12}>
                  <Box className="d-flex">
                    <CenteredImage
                      style={{ marginLeft: isSmScreen ? '0' : 'auto' }}
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe3}
                    />
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe4}
                    />
                  </Box>
                </Col>
                <Col sm={12}>
                  <Box className="d-flex">
                    <CenteredImage
                      style={{ marginLeft: isSmScreen ? '0' : 'auto' }}
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe5}
                    />
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe6}
                    />
                  </Box>
                </Col>
              </>
            ) : (
              <>
                <Col lg={6}>
                  <Box className="d-flex">
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe1}
                    />
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe2}
                    />
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe3}
                    />
                  </Box>
                </Col>
                <Col lg={6}>
                  <Box className="d-flex">
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe4}
                    />
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe5}
                    />
                    <CenteredImage
                      maxHeight={isMdScreen ? '300px' : '350px'}
                      src={images.wireframe6}
                    />
                  </Box>
                </Col>
              </>
            )}
          </Row>
        </Box>

        <Section>Usability Testing</Section>
        <SubSection>Understanding how users interact with the website</SubSection>
        <Box className="mb-7">
          The prototype underwent usability testing with 5 participants. Testers were
          given a series of simple tasks to complete. The results from usability testing
          were used to inform my design changes for the final iteration.
          <P>
            <ol>
              <li className="mb-7">
                A products category page was added, instead of just having a products
                drop-down menu.
                <div className="font-sm">
                  5/5 testers expected to be taken to a new page showing the different
                  product categories when they clicked on products in the menu
                </div>
                <CenteredImage width="1000px" src={images.testing1} />
              </li>
              <li className="mb-7">
                Product customization options were modified to fit above the fold in order
                to ensure the corresponding product image is always visible
                <div className="font-sm">
                  4/5 testers did not like the idea of scrolling up to see the product
                  image when they selected a certain customization option
                </div>
                <CenteredImage width="900px" src={images.testing2} />
              </li>
              <li className="mb-7">
                Products page was updated to show more results per row in order to make
                beter use of real estate
                <div className="font-sm">
                  4/5 testers said there were not enough results displayed per row
                </div>
                <CenteredImage width="700px" src={images.testing3} />
              </li>
              <li className="mb-7">
                Product description, dimensions and relevant information was re-organized
                to below the fold
                <div className="font-sm">
                  3/5 testers said the product details looked too crowded
                </div>
                <CenteredImage width="900px" src={images.testing4} />
              </li>
            </ol>
          </P>
        </Box>

        <Section>Design Library</Section>
        <SubSection>Developing a brand identity to enhance the experience</SubSection>
        <Box className="mb-7">
          With the final flow of screens established, I worked alongside another UI
          Designer to develop the visual identity of the brand before creating the
          high-fidelity prototype. The brand is described as <b>luxurious</b>,{' '}
          <b>modern</b>, <b>minimalistic</b>, <b>trustworthy</b>
          and <b>unique</b>.
          <P>
            Using these adjectives, we searched for inspiration and created a colour
            palette which reflected these words. For typography, we used a font that
            evoked the same feeling.
          </P>
          <CenteredImage src={images.designLib1} />
        </Box>

        <Section>High Fidelity Prototype</Section>
        <SubSection>Bringing it all together</SubSection>
        <Box className="mb-7">
          The goal here was to create an online experience that imitates in-store
          experience. The in-store experience includes beautifully set displays and
          attentive sales people. An attractive online store that allows customers to
          browse freely and be inspired will give them more confidence buying online.
          <CenteredImage width="900px" src={images.hifi1} />
        </Box>
      </Container>

      {prototypeLink && (
        <Box className="mb-6 text-center">
          <Button type="button" variant="secondary" href={prototypeLink}>
            View Prototype
          </Button>
        </Box>
      )}

      <BannerBox
        className="mb-7"
        padding="0"
        backgroundColor={DETAILS[ORIGYNS].caseStudy.backgroundColor}
      >
        <CenteredImage margin="auto" maxHeight="550px" src={images.mid} alt="" />
      </BannerBox>

      <BannerBox
        className="mb-7"
        backgroundColor={DETAILS[ORIGYNS].caseStudy.backgroundColor}
      >
        <Container className="d-block">
          “Saanchla designed, wireframed, created our company’s entire UX and UI for
          Origyns nearly by herself. She’s a talented designer with skills that reach
          beyond just design as she’s always looking for ways to push the boundaries of
          how we can make our product better.”
          <div className="font-sm font-rubik text-uppercase fw-light mt-5">
            Kartik Sharma, founder at origyns
          </div>
        </Container>
      </BannerBox>

      <Container className="d-block">
        <Section>Next Steps</Section>
        <SubSection>What to do for future improvements</SubSection>
        <Box className="mb-7">
          Some features that can still be added to future iterations of this product to
          enhance the user experience and brand value:
          <ul>
            <li>
              <b>Live chat with a Design Specialist:</b> To further imitate the in-store
              shopping experience, a live chat feature with a designer would improve the
              overall user experience
            </li>
            <li>
              <b>Free fabric samples:</b> Since the user cannot see the physical product,
              having the option to recieve free fabric samples will help users feel more
              ready to purchase
            </li>
            <li>
              <b>AR room planner:</b> Ability to view products in accurate 3D detail
              within a room as per your measurements will also help the user bring their
              design vision to life
            </li>
          </ul>
        </Box>

        <Section>Key Project Learnings</Section>
        <SubSection>Learning the importance of testing and communication</SubSection>
        <Box className="mb-7">
          My biggest takeaway from this project is to let the users inform the design.
          <b>Testing is a continuous process</b> which does not end after the user testing
          phase. As a designer, I am constantly balancing what is best for the user and
          other constraints, such as time and resource. When possible, continue testing
          because it will always lead to a better product.
          <P>
            Ensuring that <b>all stakeholders are on the same page</b> not only when it
            comes to the features or final designs, but also who the target user is that
            we are designing for. This helps them understand my design decisions and helps
            with a seamless handoff.
          </P>
        </Box>
      </Container>
    </CaseStudy>
  );
};

export default Origyns;
