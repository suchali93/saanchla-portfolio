import React from 'react';
import { Grid } from '@material-ui/core';
import BannerImage from './images/Banner.png';
import CaseStudy from '..';
import Content from '../Content';

const CultureFit = () => {
  return (
    <CaseStudy
      myRole="Lead UX/UI Designer"
      timeline="10 weeks"
      imageSrc={BannerImage}
      tools="Sketch, InVision"
      platform="iOS"
    >
      <Content heading="Overview">
        CultureFit is a platform for recruiters to evaluate candidates beyond the resume,
        by focussing on workplace culture fit. This was completed as an individual project
        during the full-time UX Program at Brainstation.
      </Content>
      <Content heading="Identifying the Problem Space">
        Drawing from my own experience in recruitment, I decided to think about the
        recurring challenges for recruiters. I noticed that despite having the right
        skills on their resume, some candidates did not last more than 6 months on the
        job. The reason? They did not fit into the workplace culture. To ensure there was
        no bias, I decided to start with research to lead my journey.
        <Content heading="SECONDARY RESEARCH FINDINGS" level={2}>
          The term “culture fit” means the alignment of goals and values between the
          employee and their workplace.
          <p>
            Hiring employees that don’t mesh well with the existing workplace culture
            leads to poor work quality, decreased job satisfaction and a potentially toxic
            environment. This results in turnover which has high costs both in time and
            money.
          </p>
          <p>
            Upon further investigation, I found that workplace culture fit independently
            predicts commitment, job satisfaction and job performance.
          </p>
        </Content>
        <Content heading="MARKET RESEARCH ON CURRENT INITIATIVES" level={2}>
          Current practices to ensure culture fit include measures like preparing
          behavioural interview questions, involving a cross-functional selection
          committee in the screening process, or giving the candidate a company tour to
          understand their workplace culture. However, all of these measures are
          time-consuming and not data-driven.
        </Content>
      </Content>
      <Content heading="Design Challenge">
        My project goal was to help recruiters make data-driven candidate selections to
        ensure workplace culture fit, and ultimately lower turnover. In other words,
      </Content>
      <Content heading="Empathizing with the Target Users">
        After secondary research, I did some user interviews to further validate my
        hypothesis that creating a platform to assess the alignment of a candidate to the
        workplace culture will help recruiters in the selection process, and reduce
        turnover.
        <Content heading="INTERVIEW PARTICIPANT CRITERIA" level={2}>
          <Content
            heading="Recruiters with 2-7 years of experience n full-cycle recruitment"
            level={3}
          >
            - Newer recruiters with little to no experience are more likely to need
            assistance with the selection process and less likely to rely on "gut
            feeling".
            <p>
              - They are looking to establish credibility with their boss and trust with
              their clients.
            </p>
          </Content>
          <Content heading="Working in a high volume work environment" level={3}>
            - They will be more likely to look for solutions to save time
          </Content>
          <Content heading="Tech-savvy" level={3}>
            - They will be able to use new platforms with minimal training
          </Content>
          <Content heading="Travel often or work remotely" level={3}>
            - They will be in need of a solution to help them work on the go
          </Content>
        </Content>
        <Content heading="KEY INSIGHTS" level={2}>
          Overall, recruiters were aware that workplace culture fit is important and lack
          of it leads to high turnover.
          <p>
            Recruiters need a platform to assess a candidate’s alignment with that
            workplace culture to ensure fit.
          </p>
        </Content>
      </Content>
      <Content heading="Understanding the Target Users">
        To ensure that the user stayed at the forefront through the process and to build
        empathy for a more meaningful solution, I created a primary persona (Jennifer
        James) to look at some of their goals, frustrations and motivations.
        <p>
          I then, created an experience map of what the current recruitment process looks
          like for my persona in order to identify possible opportunities for
          intervention.
        </p>
        <p>
          The main opportunity here is to intervene early and provide a platform for
          recruiters to assess a candidate’s culture fit even before getting to
          interviews.
        </p>
      </Content>
      <Content heading="User Stories and Task Flow">
        Once I found the opportunity for my persona, it was time to create user stories.
        By doing this, I aimed to define the minimum set of product features which would
        help users achieve their goals, whilst also providing valuable learnings and
        insights into how the product is used and what other needs users may have that
        could be solved in future iterations.
        <p>
          Based on the user stories I created a task flow diagram. This task flow shows
          the series of steps to create a customized candidate assessment.
        </p>
      </Content>
      <Content heading="Concept Sketching and Ideation">
        To better understand how users would expect to interact and navigate through the
        features and content available in the app, a reasonable next step was to start
        sketching. I used inspirations from other existing UI components and looked at
        functionalities from apps LinkedIn, Monster and Indeed for ideas.
        <Content heading="LOW-FIDELITY WIREFRAMES" level={2}>
          The first set of wireframes were done in low fidelity in order to focus on the
          overall structure and layout of the design.
        </Content>
      </Content>
      <Content heading="Usability Testing">
        Two rounds of user testing were conducted with 10 participants, with the second
        round being a revised iteration based on feedback gathered from the first round.
        <p>
          The user was told to use the app to create an assessment to measure candidates’
          alignment with Amazon’s workplace culture, specifically in the role of a UX
          Designer. They will then look up the results of assessment﻿ to decide who to
          interview.
        </p>
        <Content heading="KEY INSIGHTS" level={2}>
          1 - The Dashboard needed a redesign to present an overview of relevant
          information
          <p>2 - Some screens were too infromation dense and needed to be broken up</p>
          <p>3 - Number of screens to create an assessment could be reduced</p>
          <p>4 - Some terminology and icons were not intuitive</p>
          <p>5 - The personality graphic ould be simplified</p>
        </Content>
        <Content heading="Design Iteration 1" level={2} />
        <Content heading="Design Iteration 2" level={2} />
      </Content>
      <Content heading="Visual Identity">
        In preparation for taking the wireframe concepts through a round of visual design
        and further testing, I produced a Visual Style Guide that includes ﻿moodboards,
        typography and colour palette that would appropriately fit with the purpose of the
        product and the intended.
        <Content heading="Moodboard" level={2}>
          I curated images from words that were associated with the ideal feel of the app
          and brand value like:
          <p>- trustworthy</p>
          <p>- reliable</p>
          <p>- approachable</p>
          <p>- modern</p>
          <p>- minimalistic</p>
          <p>- clean</p>
          <p>- professional</p>
          <p>- informative</p>
          <p>With this inspiration in mind, I decided to start playing with colours.</p>
          <p>
            I decided to use shades of blue for my brand because it is associated with
            peace, confidence and integrity. Blue seems trustworthy and also feels social.
            I wanted to stick to a monochromatic palette as it is easy on the eyes and
            portrays a clean and elegant scheme.
          </p>
        </Content>
        <Content heading="Brand Colour" level={2}>
          I finally landed on this palette. Since blue is a popular brand colour, it was
          essential for me to choose a hue that would attract users while still being
          unique.
          <p>
            To get a tint, I added white to the base colour, whereas for the creation of
            shades, I added black or grey. With this monochromatic scheme I wanted to
            achieve a simple, yet simple and elegant look for the mobile app.
          </p>
        </Content>
        <Content heading="Word Mark" level={2}>
          To keep the feel of a corporate app, the minimalistic word mark was inspired by
          LinkedIn and the body copy was inspired by job apps like Indeed and Monster.
        </Content>
        <Content heading="App Icon" level={2}>
          The app logo id puzzle pieces that symbolize the importance of finding the right
          fit.
        </Content>
        <Content heading="Typography" level={2}>
          I experimented with font combinations; I ended up with &ldquo;Damascus&rdquo; as
          the primary word mark and &ldquo;Avenir Next&rdquo; as the main body copy. These
          were selected to convey the professional-yet-friendly feeling of my company
          without seeming text heavy.
        </Content>
      </Content>
      <Content heading="Final Prototype">
        Finishing up with the design process, here’s a walkthrough via the interactive
        prototype.
        <p>Below are some of the high-fidelity screens from my app.</p>
        <p>
          The primary task flow is creating an assessment for Amazon for a UX Designer
          role. The app generates a custom assessment based on these two selections. The
          user can then review it and copy the link that can be shared with candidates.
        </p>
        <p>
          The secondary task flow is viewing the results for Katherine, expanding her
          psychometric profile for more details, and viewing behavioural interview
          questions suggested by the app personalized for her.
        </p>
      </Content>
      <Content heading="Marketing Website">
        As an additional challenge, I created a landing page for a responsive website to
        market CultureFit. The main goal of this website was to advertise my app's value
        proposition in order for my target users to want to download the app
        <p>
          After several iterations, I came up with a desktop and mobile version of the
          website
        </p>
      </Content>
      <Content heading="Future Considerations">
        Due to a time constraint, certain features of the app that were not explored but
        can be in future iterations would be:
        <p>
          - A way to integrate the app with existing Applicant Tracking Systems to export
          applicant data into the app. This would also help to email selected candidates
          from the app
        </p>
        <p>
          - A statistics page to view employee retention and turnover rates to see if the
          app has helped combat the problem of high turnover
        </p>
        <p>- A way to gauge candidate’s alignment with the team</p>
      </Content>
      <Content heading="Key Takeaways">
        I really enjoyed learning about and putting into practice each different stage of
        the UX process, end-to-end. Here are some of the key learnings I will take on to
        my next project:
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid container item xs>
            <p>
              <b>Validate Ideas Early and Often</b>
            </p>
            <p>
              Getting feedback early on, no matter how rough the ideas are, is invaluable.
              What might be obvious to you might not be to the user. The smallest changes
              can have the biggest impact.
            </p>
          </Grid>
          <Grid container item xs>
            <p>
              <b>Paper and pen are your best friends</b>
            </p>
            <p>
              Quick and rough iterations before moving to a digital medium can help to
              speed up the process and prevent wasted time.
            </p>
          </Grid>
          <Grid container item xs>
            <p>
              <b>Only build what you need to test</b>
            </p>
            <p>
              Prototyping is fun. However if a prototyped feature isn't used in a test,
              did it ever truly exist?
            </p>
          </Grid>
        </Grid>
      </Content>
    </CaseStudy>
  );
};

// Overview
// CultureFit is a platform for recruiters to evaluate candidates beyond the resume, by focussing on workplace culture fit.
// <br>This was completed as an individual project during the full-time UX Program at Brainstation.
// --
// As designers we were tasked with redesigning the Blockers of Scam website to promote the new scamBlock Chrome extension and foster community engagement.
// --- Our solution

// The Final Result
// no text only prototype - embeded
// --
// https://www.scamblock.org/wp/
// ---
// VR Prototype

// Identifying the Problem Space
// ~SECONDARY~ RESEARCH FINDINGS
// MARKET RESEARCH ON CURRENT INITIATIVES

// -- MARKET RESEARCH ON CURRENT INITIATIVES

// -- Redesigend Pages
// -- FORUM
// The main focus of the forum was on how to make it more user-friendly. Most of the existing forums we examined were not user-friendly and often contained many irrelevant functions. In order to motivate users to utilise the forum, we aimed to make the user experience less complicated.
// Based on research and information we obtained from the client, we created suitable information architecture for easy navigation. We conducted an internal card sorting session to determine different forum categories.
// Use top image only
// Everything else stays

// Design Challenge
// --
// --- How might we

// ~Empathizing with the Target Users~ How are the target users affected
// INTERVIEW PARTICIPANT CRITERIA
// KEY INSIGHTS

// Understanding the Target Users --- persona
// EXPERIENCE MAP - without subheading. Like CultureFit, "I then created an experience map"

// User Stories and Task Flow

// Concept Sketching and Ideation ---
// LOW-FIDELITY WIREFRAMES

// Usability Testing
// KEY INSIGHTS
// ROUND 1 ITERATIONS
// ROUND 2 ITERATIONS

// ~Visual Identity~ Building a Visual Identity

// Marketing ~Website~ CultureFit

// ~Multiplatform Challenge~ REMOVE

// Future Considerations
// --
// ---

// Key Takeaways
// --

export default CultureFit;
