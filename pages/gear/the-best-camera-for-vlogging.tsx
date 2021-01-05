import * as React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Page from '../../components/Page';
import Video from '../../components/Video';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Blockquote from '../../components/ui/Blockquote';
import Heading from '../../components/ui/Heading';
import Massive from '../../components/ui/Massive';

const PageContent = () => {
  const nextPage = '/gear/used-vs-new-gear/';

  return (
    <Page
      title="The best camera for vlogging"
      image="/images/pages/headers/the-best-camera-for-vlogging.jpg"
    >
      <CopyBlock>
        <p>
          You want to know which camera is the best for vlogging. You don’t want
          to spend months upon months researching and typing “best camera for
          vlogging” into Google.
        </p>

        <p>
          Which one do you get? Do you get the one with built-in image
          stabilization? Do you get the one with detachable lenses? Do you get
          the one that fits in your pocket? 4K? 8K? Fold-out screen? More
          features? Less features?
        </p>

        <p>Yes. And no.</p>

        <p>
          The moment I started to consider vlogging, I dove deep into the
          internet. I searched, researched, watched, and read everything. It was
          endless.
        </p>

        <p>
          You know what I was <em>not</em> doing while I was doing all this
          research?
        </p>

        <p>I wasn’t vlogging.</p>

        <p>
          There was no story being told, no progression was happening, and{' '}
          <strong>
            no experience with <em>actual</em> vlogging was made.
          </strong>
        </p>

        <p>
          I’ll get to the actual cameras that I use and what other vloggers
          commonly use in the next few pages, but the camera itself…
        </p>

        <p>…actually doesn’t matter.</p>

        <Blockquote>
          The best camera is the one you have with you that can effectively tell
          the story you want to tell.
        </Blockquote>

        <p>
          There are a few cameras I have used for vlogging, and each are the
          best camera for me in their own way.
        </p>

        <p>
          Should you get these particular cameras? Maybe, maybe not, but the
          best camera is <em>any</em> camera you can use to tell your story.
        </p>
      </CopyBlock>
      <div className="py-12 my-12 text-white bg-black">
        <CopyBlock />

        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <img
              src="/images/SonyA7II.jpg"
              width={660}
              height={494}
              alt="The Sony A7C"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">Sony a7C</Heading>
            <p>
              The{' '}
              <a
                href="https://amzn.to/2HwPKdi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sony A7ii
              </a>{' '}
              is the camera I use when I want to get a certain level of audio
              and visual quality. It allows me to tell a story in a certain way
              and has become my main vlogging camera.
            </p>
            <p>
              Not everyone uses this camera for vlogging, and that’s totally
              fine! It’s not high-end, and it’s certainly not the latest and
              greatest, but it was the camera that I wanted and saved up to get,
              and now it’s what I use.
            </p>
          </CopyBlock>
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <img
              src="/images/RX100m3.jpg"
              width={660}
              height={494}
              alt="Sony RX100 Mark IV"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">Sony RX100 Mark IV</Heading>
            <p>
              The{' '}
              <a
                href="https://amzn.to/2HyPv1n"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sony RX100 Mark 4
              </a>{' '}
              is the camera I go for when I want high frame rate shots or when I
              want to be a little less conspicuous.
            </p>
            <p>
              It has some great features that I’ve come to love, including a
              high framerate option that allows me to get some super smooth
              slow-motion shots if I want them.
            </p>
          </CopyBlock>
          <div className="px-5 pt-8 sm:px-8 sm:py-12">
            <img
              src="/images/iPhone.jpg"
              width={660}
              height={494}
              alt="Apple iPhone 12 Pro"
            />
          </div>
          <CopyBlock>
            <Heading level="h2">iPhone 12 Pro</Heading>
            <p>
              I’ve gone through a few phones over the years, and a good
              smartphone camera is not to be sneezed at. A phone in my pocket is
              a great camera when I either forget one of my primary cameras or
              run out of battery. It’s great for quick shots and hard-to-reach
              areas.
            </p>
            <p>
              A smartphone is easily the best way to get started in vlogging if
              you don’t have a dedicated camera. It’s with you at all times and
              the “accessories” are <em>much</em> cheaper.
            </p>
          </CopyBlock>
        </div>
      </div>
      <CopyBlock>
        <Heading level="h2">The best camera is the one you’re using</Heading>

        <p>
          The list I provided above is not exhaustive of all the cameras
          available, nor is it everyone’s story. These are not the “best”
          cameras, but they are the best cameras <em>for me</em>.
        </p>

        <p>
          Do you see it now?{' '}
          <strong>
            <em>Any</em> camera is the best camera when you’re using it to tell
            your story.
          </strong>
        </p>

        <p>Do you need three cameras? No. Do you need something fancy? No.</p>

        <p>
          Notice the cameras I use aren’t the newest models with all of the
          bells and whistles. In fact, I bought all of my cameras second-hand.
          But that doesn’t matter; what matters is that{' '}
          <strong>
            I’m making something with <em>something</em>.
          </strong>
        </p>

        <p>
          Now of course context does matter. If you’re making videos about
          really high-quality tech gear, it’s probably worth it to spend the
          money to get a high-quality camera.
        </p>

        <p>
          But if you’re like I was and you’re just wanting to start with
          anything, this next part is for you.
        </p>

        <p>
          <strong>
            I want to share with you my very first vlog on my YouTube channel.
          </strong>{' '}
          I’ll share my thoughts on it once you’re done watching it.
        </p>
      </CopyBlock>

      <div className="pt-12 pb-24 mt-24 mb-12 text-center bg-black">
        <Heading level="h2" classes="text-white">
          My first vlog
        </Heading>
        <div className="flex flex-col justify-center mx-auto text-center sm:w-8/12">
          <Video>
            <iframe
              title="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lSIlLFDl9uE?rel=0&amp;showinfo=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Video>
        </div>
      </div>
      <CopyBlock>
        <p>Have you watched it? Good.</p>

        <p>Here are a few things to note about this video:</p>

        <ul className="mb-4">
          <li>
            The video resolution is <code>1280 x 720</code>. In an age of high
            resolution cameras and incredible HD video, this is sub-standard.
          </li>
          <li>
            The quality of the edit isn’t that great. The music doesn’t fit, the
            story is rough, and there are plenty of other issues I don’t need to
            go into.
          </li>
          <li>
            I’m extremely embarrassed by this video because it’s so low quality
            and my presentation is so awkward.
          </li>
          <li>
            It <em>exists</em>.
          </li>
        </ul>

        <p>Notice that last bullet.</p>

        <p>My very first vlog exists.</p>

        <Blockquote>
          An imperfect vlog that exists is better than one that doesn’t.
        </Blockquote>

        <p>
          I grabbed my phone, used the low-quality front-facing camera, and just
          made a video. My phone was always with me, so I could pull it out and
          use it at a moment’s notice.
        </p>

        <p>
          So many people have remarkable cameras already with them in their
          pockets. They don’t even think about using a smartphone because
          there’s this need to have what all of the “pro vloggers” are using.
        </p>

        <p>
          Do you have a smartphone? Use it. Do you have a small point and shoot?
          Use it. Do you have a DSLR that also takes videos? Then use it!
        </p>

        <p>
          <strong>Use whatever camera you have right now</strong> and just get
          started. You can always upgrade what you have now to something better
          later.
        </p>

        <p>
          If you <em>don’t</em> have any usable camera and you want to make sure
          you invest in the right gear at the beginning, we’ll get into some
          easy entry points in the next few lessons. But first, you need to
          commit to showing up with what you have now.
        </p>

        <p>
          A great camera isn’t going to make you a great storyteller: showing up
          and putting in the work with what you have will give you the
          experience you’ll need.
        </p>
      </CopyBlock>

      <Massive>
        Do not let the lack of{' '}
        <span className="text-primary-400 text-shadow-sm">“gear”</span> stop you
        from vlogging.
      </Massive>
      <CopyBlock>
        <p>
          The week before this page went live, a friend of mine wrote me on
          Twitter to say she just uploaded her very first weekly vlog. It’s not
          shot on a super-resolution camera with a boom mic and stabilization.
        </p>

        <p>
          But it’s <em>done</em>. It’s out!
        </p>

        <p>
          I’m incredibly proud of her, and you know what, you can do the same
          thing.
        </p>

        <p>
          <strong>
            You can communicate my message and tell the story you want to tell
          </strong>{' '}
          with any tool. The gear itself doesn’t matter as much as the message
          you want to communicate through my video.
        </p>

        <p>
          <strong>Can you improve later on? Absolutely!</strong> I started by
          using the front-facing camera on my iPhone and now I use a mirrorless
          camera with a good lens and microphone. It was a progression over
          time.
        </p>

        <p>
          Confession: I think I used over five different types of cameras over
          the first two years of vlogging. Guess what? They were all effective
          at telling the story I wanted to tell, and that’s what made them the
          best cameras.
        </p>

        <p>
          Read this page one more time, then we’ll continue into some of the
          actual cameras, microphones, lenses, and other gear that you can use
          for vlogging.
        </p>

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
