import * as React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/recording/getting-the-settings-right';

  return (
    <Page
      title="1080 vs. 4k for vlogging"
      image="/images/pages/headers/1080-vs-4k-for-vlogging.jpg"
    >
      <CopyBlock>
        <p>
          In your decision-making process for starting a vlog, at some point,
          you’re going to decide what resolution you want to record in.
        </p>
        <p>
          This may even play into which camera you decide to go with, depending
          on its functionality and features.
        </p>
        <p>
          So what’s the difference between the main recording resolutions right
          now, and which should you go for?
        </p>
        <p>
          {' '}
          <strong>
            The two most common formats are referred to as 1080 and 4K.
          </strong>{' '}
          These are pretty much standard across the board, and most videos you
          watch online are going to be in one of these two resolutions.
        </p>
        <Heading level="h2">What’s the difference and 4K?</Heading>
        <p>
          First, let’s talk about what the names mean. Both are referring to the
          size of the final image in pixels.
        </p>
        <p>
          1080 (sometimes referred to as 1080p or 1080i) has a resolution of
          1920 pixels by 1080 pixels.
        </p>
        <p>
          4K typically has a resolution of 3840 by 2160 (this is often referred
          to as UHD or Ultra High Definition), but can also be 4096 by 2160
          (sometimes called Cinema 4K).
        </p>
        <p>“…”, I hear you say.</p>
        <p>Yeah, I know.</p>
        <p>
          Here’s an example to show you the scale reference between 1080 and 4K:
        </p>
      </CopyBlock>

      <CopyBlock>
        <div className="w-full my-12">
          <div
            className="4k bg-secondary"
            style={{
              height: 0,
              paddingTop: 25,
              paddingBottom: '52.63%',
              position: 'relative'
            }}
          >
            <div
              style={{
                maxWidth: '50%',
                maxHeight: '50%',
                height: '50%',
                width: '50%',
                position: 'absolute',
                bottom: '3%'
              }}
            >
              <div
                className="bg-primary-400 1080"
                style={{
                  height: 0,
                  paddingBottom: '56.25%',
                  position: 'relative'
                }}
              >
                <span
                  className="absolute text-lg font-semibold"
                  style={{ bottom: '3%', left: '3%' }}
                >
                  1080
                </span>
              </div>
            </div>
            <span
              className="absolute text-lg font-semibold text-white"
              style={{ top: '3%', left: '3%' }}
            >
              4k
            </span>
          </div>
        </div>
        <p>
          As you can see, there’s a <em>lot</em> more information available for
          use in 4K than 1080. You might be capturing the same shot, but there’s
          much more data in the video.
        </p>

        <Heading level="h2">Does resolution matter?</Heading>
        <p>
          Metrics have shown that the vast majority of content consumed online
          is via mobile devices. This means{' '}
          <strong>
            it’s more likely your video will be watched on a smartphone
          </strong>{' '}
          than a desktop computer.
        </p>

        <p>
          Even though most phones have high-resolution screens, they still lack
          the physical size that would truly make high-resolution matter.
        </p>
        <p>
          That doesn’t mean you shouldn’t try to get good quality when
          recording. Large resolution images can still look better on small
          screens because of the information available, but again, it’s largely
          imperceptible to the average viewer.
        </p>
        <p>
          Pixel density will continue to increase, larger resolution cameras
          will become more mainstream, and the numbers will gradually grow over
          time, but for the most part, a good old fashioned 1080 video is a
          great place to be.
        </p>
        <p>
          This doesn’t even take into consideration the fact that many cameras
          don’t have the 4K capability yet, and the toll that it takes both on
          recording and editing time is significant if you don’t have a powerful
          enough computer to manage it.
        </p>

        <Heading level="h2">When you might consider 4K over 1080</Heading>
        <p>
          For the average vlogger, there may be only a handful of instances
          where you would want a camera setup that allows you to shoot in 4K:
        </p>
        <ol className="list-none">
          {' '}
          <li>You want to do more cinematic or film-like vlogging</li>{' '}
          <li>You already have a camera that shoots 4k</li>{' '}
          <li>
            You have money to get the latest and the greatest and want to go all
            in
          </li>
          <li>
            You want to <em>shoot</em> in 4k and <em>edit and publish</em> in
            1080
          </li>
        </ol>
        <p>
          To be clear, a good handful of entry-level cameras are starting to
          have 4K capability. It becoming easier and easier to get a camera that
          gives you higher resolution.
        </p>
        <p>
          Keep in mind, however, that not only will your image be bigger, but so
          will the actual video file sizes. Dealing with and editing 4K footage
          can be fairly strenuous on your computer, so be sure that your
          computer can handle it before going all in on 4K.
        </p>
        <p>
          Worry less about the resolution of your video and more about the kind
          of story and experience you are delivering to your viewers.
        </p>
      </CopyBlock>
      <CopyBlock>
        <div className="mt-8 text-center">
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
