import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/gear/microphones-and-quality-audio/';

  return (
    <Page
      title="Microphones and quality audio"
      image="/images/pages/headers/microphones-and-quality-audio.jpg"
    >
      <CopyBlock>
        <p>
          You might have seen some people walking around with cameras that had
          large funny-looking microphones on them. Does having good audio
          actually matter?
        </p>

        <p>
          Everyone seems to talk about the kind of cameras to get and how to
          increase your video resolution, yet the conversation about good audio
          isn’t as popular, oddly enough.
        </p>

        <p>
          I’ve been making videos for years, and every single time the
          difference between an okay video and a great video is the quality of
          the audio.
        </p>

        <p>
          There’s something about the viewing experience that changes
          drastically when it sounds good. As I have talked with people and
          observed how they consume video, it’s become very clear that{' '}
          <strong>
            people can forgive lower quality video more than they can forgive
            lower quality audio.
          </strong>
        </p>

        <ul className="mb-4">
          <li>Good video + bad audio = mediocre video</li>
          <li>Bad video + good audio = okay video</li>
          <li>
            <strong>Good video + good audio = great video</strong>
          </li>
        </ul>

        <p>
          If you can get the components right, you can help{' '}
          <strong>
            create an experience for your viewers that is comfortable and makes
            them want to come back.
          </strong>
        </p>

        <p>
          Most cameras have <em>okay</em> microphones built into the device, but
          there’s plenty of improvement that can be had. If your camera or phone
          supports external microphones, I highly recommend investing in one.
        </p>
      </CopyBlock>
      <div className="py-12 my-24 text-white bg-black">
        <CopyBlock />

        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
          <div className="relative px-5 pt-8 sm:px-8 sm:py-12">
            <Image
              src="/images/video-micro-white.jpg"
              layout="responsive"
              width={1000}
              height={1000}
              alt="RODE Video Micro"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">RODE Video Micro</Heading>
            <p>
              The{' '}
              <a
                href="https://amzn.to/2K1Ug4a"
                target="_blank"
                rel="noopener noreferrer"
              >
                RODE Video Micro
              </a>{' '}
              is a great little microphone with a small footprint, requires no
              battery, and is pretty much plug and play. I use this almost
              exclusively on my camera.
            </p>

            <p>
              Your camera will need to have a hotshoe on the top that will mount
              the microphone, as well as a 3.5mm input jack.
            </p>

            <p>
              It also comes with a windshield that helps to protect against, you
              guessed it, the wind. This will help keep your audio quality nice
              and clean. There are no built-in features such as EQ or volume
              boosting so you won’t have to worry about getting any settings
              perfect on the microphone itself.
            </p>

            <p>
              It’s a great entry option, and a great tool for on-the-go
              situations as well.
            </p>
          </CopyBlock>
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <Image
              src="/images/videomic-pro-white.jpg"
              width={1000}
              height={1000}
              alt="RODE VideoMic Pro"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">RODE VideoMic Pro</Heading>
            <p>
              <a
                href="https://amzn.to/2FUWPmi"
                target="_blank"
                rel="noopener noreferrer"
              >
                The VideoMic Pro
              </a>{' '}
              is another great option from RODE. It requires a 9V battery to
              operate, but as long as you keep track of your battery level and
              have extras, you’ll be fine.
            </p>

            <p>
              The VideoMic Pro gives several settings on the back, including a
              high-pass filter (it decreases the low-end sound that comes
              through the mic) and a volume level control.
            </p>

            <p>
              There is much less audio noise in this microphone than the
              VideoMicro (which doesn’t have much to start with), thanks to the
              additional power provided by the battery. My only issue with this
              camera was that you need to make sure you turn the microphone on
              and off as you use it so you don’t drain the battery.
            </p>

            <p>
              Another great option if your camera has the capability (a hotshoe
              and a 3.5mm jack).
            </p>
          </CopyBlock>
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <Image
              src="/images/videomic-pro-plus-white.jpg"
              width={1000}
              height={756}
              alt="RODE VideoMic Pro +"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">RODE VideoMic Pro +</Heading>
            <p>
              If you really want to crank it up another level,{' '}
              <a
                href=" https://amzn.to/2jG2SlP"
                target="_blank"
                rel="noopener noreferrer"
              >
                the VideoMic Pro +
              </a>{' '}
              takes everything about the VideoMic Pro and makes significant
              improvements.
            </p>

            <p>
              This mic will turn itself on and off based on if your camera is on
              or off, which is what I love about the VideoMicro. Managing the
              power state of your microphone isn’t something you want to mess
              up.
            </p>

            <p>
              There are also a few more settings for the high-pass filter, and
              the audio cable is removable if you want to add a longer cable of
              your own.
            </p>

            <p>
              The VideoMic Pro + is a much more expensive option, but if you’re
              looking to really take your video game up another level, you’ll
              want to take a good look at this option.
            </p>
          </CopyBlock>
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <Image
              src="/images/rodesmartlav.jpg"
              width={1000}
              height={1000}
              alt="RODE smartLav+"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">RODE smartLav+</Heading>
            <p>
              A lavalier microphone is great for sit-and-talk videos, or if
              you’re moving closer to or further from the camera. This helps to
              keep your audio consistent no matter where you are in relation to
              the camera.
            </p>

            <p>
              <a
                href="https://amzn.to/2I2ch1S"
                target="_blank"
                rel="noopener noreferrer"
              >
                The RODE smartLav+
              </a>{' '}
              is a great mic that plugs directly into a smartphone. You can also
              buy an adapter that allows you to run it directly into your
              camera.
            </p>

            <p>
              I know a lot of vloggers and video creators who use a lavalier
              mic, and if you’re looking to do audio that way, the smartLav+ is
              a fantastic microphone for you.
            </p>
          </CopyBlock>
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <Image
              src="/images/shuremv88.jpg"
              width={1000}
              height={1000}
              alt="Shure MV88 (iPhone)"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">Shure MV88 (iPhone)</Heading>

            <p>
              What about getting better audio on phones? If you have an iPhone,{' '}
              <a
                href="https://amzn.to/2jGAgZV"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Shure MV88
              </a>{' '}
              plugs directly into the Lightning port of your phone and gives you
              a great improvement to your audio.
            </p>

            <p>
              The mic’s settings are set in an app you can download from the App
              Store, and gives you a great amount of control over how the
              microphone functions.
            </p>

            <p>
              Depending on what you’re recording, you’ll get control over how
              stereo you want the input to be, EQ, polarity (if you’re a nerd
              like me), and more.
            </p>

            <p>
              Since you won’t be walking around with the microphone on your
              phone at all times, you’ll have to carry it with you either in a
              purse, backpack, or even in your pocket. This might be a bit
              annoying at times, but if your iPhone is the main camera you’re
              using, it’s worth it.
            </p>
          </CopyBlock>
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <Image
              src="/images/rodevideomicme.jpg"
              width={750}
              height={750}
              alt="RODE VideoMic Me (Android/iPhone)"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">RODE VideoMic Me (Android/iPhone)</Heading>

            <p>
              I’ve talked a lot about RODE on this page and that’s because
              they’re great at what they do, and{' '}
              <a
                href="https://amzn.to/2FVkHGr"
                target="_blank"
                rel="noopener noreferrer"
              >
                the RODE VideoMic Me
              </a>{' '}
              is no exception.
            </p>

            <p>
              This is small, extremely portable microphone that plugs right into
              your smartphone’s headphone jack. It’s nothing spectacular but is
              a great improvement over the built-in microphones on smartphones.
            </p>

            <p>
              For the price, it’s a great entry-level microphone that is dead
              simple to use.
            </p>
            <p>
              Note that newer smartphones are coming out without a headphone
              jack (yeah yeah...), but if you have a phone with that particular
              jack, this is a great option.
            </p>
          </CopyBlock>
        </div>
      </div>
      <CopyBlock>
        <p>
          One of my desires for Vlogology is to try and stay away from what I
          call “the gear trap”. It’s so easy to get sucked into the research and
          watching reviews and trying to find “the best” of whatever you’re
          looking for.
        </p>

        <p>
          That being said, I want this site to be a resource for you, and I hope
          that by sharing some of these tools it will give you a better idea of
          how to make any decisions going forward.
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
