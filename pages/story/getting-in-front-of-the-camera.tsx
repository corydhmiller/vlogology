import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/story/the-rubber-duck-technique/';

  return (
    <Page
      title="Getting in front of the camera"
      image="/images/pages/headers/getting-in-front-of-the-camera.jpg"
    >
      <CopyBlock>
        <p>
          One of the hardest things to overcome can be to get in front of a
          camera and hit the record button. Some people thrive in the
          “spotlight”, while others have no desire to be front and center.
        </p>

        <p>
          The idea of vlogging might be cool and you already understand that it
          will be beneficial to you in the long run, but the actual act of
          getting in front of the camera is a bit scary.
        </p>

        <p>
          I’ve seen this so many times even for people not vlogging themselves.
          They get uncomfortable when they see cameras, they hide their face or
          run into another room.
        </p>

        <p>
          Cameras do strange things, and everyone has their own feelings about
          them.
        </p>

        <p>
          Unfortunately, there’s no magic cure for getting over the weird
          feeling of looking into the unblinking eye of a camera lens. There
          are, however, a few exercises you can practice to get comfortable in
          front of a camera.
        </p>

        <Heading level="h2">Remember why you’re vlogging</Heading>

        <p>
          The most powerful way I’ve found to get back in front of a camera is
          to remember why I’m doing it.
        </p>

        <p>Have you thought about why you want to vlog?</p>

        <p>
          Is it just for fun or is it to speak a message? Is it for you or is it
          for your family? Is it to get famous or is it to document your life
          for future generations?
        </p>

        <p>
          If you’re not clear on why you’re vlogging, the camera part is the
          least of your problems right now. When you have more clarity with the
          “why” part of vlogging you give yourself a good reason to pick up the
          camera and try.
        </p>

        <Heading level="h2">Record it and delete it</Heading>

        <p>
          This is a technique you can use for practically anything. It’s the
          idea where{' '}
          <strong>
            whatever you make or record at any given time will then be deleted
          </strong>{' '}
          or archived so nobody else but you will ever see it.
        </p>

        <p>
          Many people have an anxiety about getting in front of the camera
          because they don’t like how they look in a video or picture. They
          aren’t sure how the finished product is going to look, so they hide
          their face.
        </p>

        <p>
          Record and delete is a great way to get some of that stuff worked out
          before actually ever publishing anything. You can watch clips back, do
          some editing if you want, but it’s all done in the mindset of “I’ll
          delete this later”.
        </p>

        <p>
          When you know you’re going to delete it,{' '}
          <strong>there’s no pressure!</strong> You could get it right, you
          could mess it up, the image could be out of focus, whatever.
        </p>

        <p>
          Take the pressure off yourself. Get a bit of it recorded, watch it
          back (or not), and then delete it.
        </p>

        <Heading level="h2">
          Carry your camera with you…without recording
        </Heading>

        <p>
          I often carry my vlogging camera with me wherever I go, not only
          because I want to make sure to capture the things I want in my video
          later on, but also because{' '}
          <strong>it creates an interesting type of bond</strong> between me and
          the device.
        </p>

        <p>
          I’m not saying you need to name your camera and give it a collar and
          all that. You need to be able to look at your camera and be okay with
          it.
        </p>

        <p>
          The more time you spend with your camera, even if you’re not
          recording, the more it becomes simply a part of your life. You
          recognize the feel, the weight, the nuances of the metal or plastic.
        </p>

        <p>
          Whatever you use to vlog is going to be (obviously) a big part of your
          video creation process, and getting comfortable with the device will
          help you to{' '}
          <strong>
            get more comfortable with getting in front of the camera.
          </strong>
        </p>

        <p>
          These are a just a few tips I’ve used personally to get comfortable
          with the camera lens. Again, there’s no magic pill to make the
          nervousness or discomfort go away. It really does come with practice.
        </p>

        <p>
          And then there’s one of my favorite techniques. This is so ridiculous
          and so silly I had it give it its own page.
        </p>

        <p>
          I call it <strong>the Rubber Duck Technique.</strong>
        </p>

        <div className="mt-4 text-center">
          <Link href={nextPage}>
            <a href={nextPage}>
              <Button color="yellow">Continue Reading</Button>
            </a>
          </Link>
        </div>
      </CopyBlock>
    </Page>
  );
};

export default PageContent;
