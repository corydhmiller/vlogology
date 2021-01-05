import * as React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/recording/moving-vs-stationary';

  return (
    <Page
      title="Getting the settings right"
      image="/images/pages/headers/cameras-commonly-used-by-vloggers.jpg"
    >
      <CopyBlock>
        <p>
          As we get further into the recording process, you’ll want to start
          understanding the settings in your camera. Knowing how to adjust and
          fine-tune settings can give you an edge and better understanding of
          what’s happening in the camera.
        </p>

        <p>
          Let me be clear:{' '}
          <strong>for most people, automatic settings work just fine.</strong>{' '}
          In fact, if the <em>idea</em> of messing with your camera settings
          scares you, rest assured that you can set your camera to “Automatic”
          and it’ll be great!
        </p>

        <p>
          That being said, if you like a little more control, you’ll want to get
          familiar with whatever features your camera has to offer.
        </p>

        <p>
          Do note that every camera is different and yours may not have some of
          the settings discussed on this page, and that’s okay. Spend a bit of
          time in your camera and see what it offers.
        </p>

        <p>
          If you want to start getting into fine-tuning your camera settings,
          here are the primary settings to familiarize yourself with.
        </p>

        <Heading level="h2">Frame rate</Heading>

        <p>
          Frame rate, or frames-per-second (FPS), describes how many single
          images that construct a video will be captured over the span of a
          single second.
        </p>

        <p>
          At its core{' '}
          <strong>
            a video is simply a series of images stitched together
          </strong>{' '}
          to trick our brains that something is in motion. If you pause a video,
          you’ll see a single frame, one of which makes up the entire video.
        </p>

        <p>
          There are only a handful of standard (and acceptable) frame rates. At
          an industry level, here are the most common frame rates:
        </p>

        <ul className="mb-4">
          <li>
            Film (cinema) – <strong>24 FPS.</strong> considered to be more
            cinematic and is most commonly used in feature films. There is also{' '}
            <strong>48 FPS</strong> which has less motion blur because there’s
            more information, but not everyone likes the clarity it brings.
          </li>
          <li>
            Video/broadcast (television) – <strong>25 FPS</strong> is the
            broadcast standard in Europe, while <strong>30 and 60 FPS</strong>{' '}
            are the broadcast standards in US
          </li>
        </ul>

        <p>
          A modern camera is going to capture in most if not all of these frame
          rates, so it really depends on what your camera has.
        </p>

        <p>
          <strong>
            Frame rate depends on the kind of look and feel you’re going for.
          </strong>{' '}
          24 FPS has been associated with a more film-like feel, while higher
          frame rates like 30 or 60 allow for better clarity at the cost of
          looking a bit like a soap opera you might see on TV.
        </p>

        <p>
          I actually <em>record</em> most of my footage in 60 FPS but edit and
          export in 24 FPS. This gives me the option of slowing down the footage
          for a slow-motion effect, but I can still maintain a video look and
          feel I like.
        </p>

        <p>
          <strong>
            In short: my recommendation for beginners is to film and edit in
            either 24 or 30 FPS
          </strong>
          . These are acceptable frame rates that are pretty standard and you
          can easily manage.
        </p>

        <Heading level="h2">ISO</Heading>

        <p>
          ISO stands for International Standards Organization and{' '}
          <strong>
            it is the standardized way of measuring sensitivity to light.
          </strong>
        </p>

        <p>
          In simple terms, the higher your ISO levels, the more sensitive to
          light your camera sensor becomes.
        </p>

        <p>
          In simpler terms:{' '}
          <strong>ISO is a digital way to brighten or darken an image.</strong>
        </p>

        <p>
          If there’s not enough light in your scene or location, the camera will
          attempt to make up for it and pretend there is light in certain spots,
          which can result in noise or graininess.
        </p>

        <p>
          <strong>
            ISO should be as low as possible to get the best image
          </strong>{' '}
          you can, unless you have no other option and possibly a good plugin to
          take the grain out of your video.
        </p>

        <p>
          Good light is not always possible, and sometimes you‘ll have to just
          deal with it if you want to use the video.{' '}
        </p>

        <p>
          In any case, the lower the ISO is the better the image quality will
          be, but you can use it to brighten the image if you want.
        </p>

        <Heading level="h2">Shutter speed</Heading>

        <p>
          Shutter speed is probably the most confusing of all the settings for
          most people just getting started. Don’t worry, it will make sense.
        </p>

        <p>
          The shutter is a mechanical segment inside the camera that opens and
          closes for a set period of time. While it’s open, light is let in from
          the outside and hits the sensor.
        </p>

        <p>
          The longer the shutter is open, the more light comes in. This can
          result in what we see as blurred images, because what the camera is
          looking at is hitting the sensor for a longer period of time.
        </p>

        <ul>
          <li>Fast shutter speed = sharper image but darker</li>
          <li>Slow shutter speed = lighter image but not as sharp</li>
        </ul>

        <p>
          This is simulated with modern digital cameras, but is basically the
          amount of time the light is allowed to hit the sensor inside the
          camera.
        </p>

        <p>
          For vlogging it’s not <em>as</em> important to monitor and adjust
          shutter speed, as long as it’s fast enough for your image to not be
          blurry (unless that’s the effect you’re going for.)
        </p>

        <p>
          A good rule of thumb is to have your shutter speed at least twice your
          frame rate. So if you’re filming at 24 FPS, you’d set the shutter to
          be a minimum of 50 (or 1/50th of a second). Or if you’re filming at 60
          FPS, the shutter speed would be a minimum of 120 (or 1/120th of a
          second).
        </p>
      </CopyBlock>
      <CopyBlock>
        <p>
          Like I said, manually adjusting camera settings can be confusing. If
          you’re not comfortable with messing with shutter speed, just leave it
          alone and the camera will figure out the rest.
        </p>

        <p>
          <strong>
            In most cases, the automatic settings on your camera will work just
            fine.
          </strong>{' '}
          The camera will do the heavy lifting to determine how all of these
          settings should work together to produce a good image.
        </p>

        <p>
          If you like the idea of messing with the settings, take some time to
          familiarize yourself with your camera. Play with the settings, record
          some test footage, and play it back and see what you think.
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
