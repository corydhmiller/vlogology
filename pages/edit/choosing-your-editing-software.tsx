import * as React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';
import Blockquote from '../../components/ui/Blockquote';

const PageContent = () => {
  const nextPage = '/edit/how-to-edit-your-vlogs-faster';

  return (
    <Page title="Choosing your editing software">
      <CopyBlock>
        <p>
          Unless you’re recording your vlog in a single take and uploading the
          video file directly to whatever platform you vlog on, you’re going to
          need to edit your footage. This means you’ll need software on your
          computer or phone to get that final version.
        </p>
        <p>
          Fortunately there are some truly viable options for people of any
          caliber and budget.
        </p>
        <p>
          Because of the increase of popularity in producing video from home,
          many operating systems come with video editors built directly in. This
          is a great perk that you can easily take advantage of.
        </p>
        <p>
          Even if the system doesn’t come pre-installed with video editing
          software, there are many free options you can download to use.
        </p>
        <p>
          For example, on Windows computers you can find apps like Movie Creator
          or OpenShot, and macOS computers come with iMovie preinstalled. It
          doesn’t take much to dive into editing straightaway.
        </p>
        <p>
          macOS comes bundled with iMovie, an app every Mac user loves to hate.
          There’s a bit of a learning curve and it doesn’t quite have the power
          of some of the higher-end apps, but if you have a Mac and don’t want
          to spend more money on an editor, iMovie is your best bet.
        </p>
        <p>
          Keep in mind that any free software is going to have significant
          limitations. You won’t be able to make overly complicated vlogs, but
          of course if you’re just getting started that part doesn’t matter as
          much.{' '}
          <strong>
            Use limitations in your software to boost your creativity in other
            ways.
          </strong>
        </p>
        <Heading level="h2">Editing on your phone or tablet</Heading>
        <p>
          There’s a growing capacity on phones and tablets to get your videos
          edited and released directly from the device you took it on. In fact,
          in recent releases of the iPad Pro, Apple has improved its hardware to
          a point where creators can edit 4k video in near-realtime, straight on
          the iPad.
        </p>
        <p>
          Preference really comes into play here. You may not want to make micro
          edits on your small smartphone screen, or perhaps your tablet doesn’t
          have the power to get those videos done the way you want. However,{' '}
          <strong>
            if you want convenience and you’re on the go, on-device editing
            might be just your thing.
          </strong>
        </p>
        <Blockquote>
          Nobody cares <em>how</em> your video was made if they enjoy the final
          thing.
        </Blockquote>
        <p>
          Some people might feel ashamed for not using “real software” to edit
          their videos. I’m here to tell you your viewers won’t care. If you can
          watch the video, it doesn’t care how it was made.{' '}
          <strong>
            What matters is if the video tells the story you want to tell in the
            way you want to tell it.
          </strong>
        </p>
        <Heading level="h2">Industry standard editing apps</Heading>
        <p>
          If you’re looking to get into apps that have more to offer, there are
          a few industry standard apps that you may want to look into.
        </p>
        <ul className="mb-4">
          <li>Adobe Premiere Pro</li>
          <li>Final Cut Pro (macOS Exclusive)</li>
          <li>DaVinci Resolve (FREE!)</li>
        </ul>
        <p>
          Adobe Premiere Pro and Final Cut Pro (or FCPX) are the most common
          apps you’ll learn about when getting into video editing. These
          programs have been around for many years and can be found in from
          small projects to even Hollywood films.
        </p>
        <p>
          I also have to recommend an app that I can’t believe is free:{' '}
          <a
            href="https://www.blackmagicdesign.com/products/davinciresolve/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DaVinci Resolve
          </a>
          . I haven’t spent too much time with Resolve, but no one can deny that
          it has more than enough to get your videos shipped. Like any app,
          Resolve has a learning curve and probably loads of features you might
          not ever use, but give it consideration all the same.
        </p>
        <p>
          I’ve used both Premiere Pro and FCPX for many years. You will
          typically find people who are on one “team” or the other, but I think
          they’re both really great apps.
        </p>
        <p>
          I personally use FCPX for various reasons, including the magnetic
          timeline and <em>unreal</em> editing and rendering speeds I can get
          away with.{' '}
          <strong>
            Preference doesn’t make one app better than the other,
          </strong>{' '}
          but it does make it better for <em>you</em>.
        </p>
        <Heading level="h2">Just pick one, learn it, use it</Heading>
        <p>
          Vlogology exists to help break down barriers between you not having a
          vlog and actually shipping your first video.
        </p>
        <p>
          What I’ve found with “hopeful vloggers” is they tend to get caught up
          in all of the questions:
        </p>
        <ul className="mb-4">
          <li>“What camera should I use?”</li>
          <li>“What software should I edit with?”</li>
          <li>“What computer should I buy?”</li>
          <li>“Should I edit on my phone or my computer?”</li>
          <li>
            “Should I do color correction or just use what comes out of the
            camera?”
          </li>
        </ul>
        <p>
          These questions are fine, but they are also the barriers that become
          excuses to not start.
        </p>
        <p>
          You’ll spend hours and hours and hours looking at comparisons between
          Adobe Premiere and Final Cut Pro, trying to figure out if it will fit
          your flow or if you’ll like it or understand it…and you’ll never
          actually edit a video.
        </p>
        <p>
          Give yourself a short deadline, do a tiny bit of research, and just
          get something. Buy it, download it, use it.
        </p>
        <p>
          Just get your video edited and done. How you get there matters less
          than actually finishing it.
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
