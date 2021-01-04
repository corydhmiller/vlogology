import * as React from 'react';
import Link from 'next/link';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Blockquote from '../../components/ui/Blockquote';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/gear/microphones-and-quality-audio/';

  return (
    <Page
      title="Used vs. new gear"
      image="/images/pages/headers/used-vs-new-gear.jpg"
    >
      <CopyBlock>
        <p>
          Let’s talk about if you should get your gear brand new or if you
          should buy it used.
        </p>

        <p>
          If you’ve made it this far, you’re probably fairly convinced about
          vlogging and you’ve either already started or you’re thinking about
          making it happen soon.
        </p>

        <p>
          <strong>
            It’s easy to get caught up in the research for the best camera and
            tools,
          </strong>{' '}
          which makes it easy to get overwhelmed, especially by the prices.
        </p>

        <p>
          Growing up I didn’t have many nice things, mainly because I was a kid
          and couldn’t afford it myself, but also because I was the third of
          seven kids and we had other financial priorities as a family.
        </p>

        <p>
          I’d spend hours researching computers that cost thousands of dollars
          and dreaming about what it would be like to have one, vowing that I
          would save up my dollars and eventually buy that incredible gaming
          battle station.
        </p>

        <p>I never did, but that’s beside the point.</p>

        <p>
          Gear research is always tough because search results always display
          the latest and greatest, which of course cost the most.
        </p>

        <ul>
          <li>“Amazing camera, only $1,700!”</li>
          <li>“Perfect for vloggers, $925!”</li>
          <li>“Cheaper than most cameras in its field, $850!”</li>
        </ul>

        <p>
          In fact if you’ve clicked on any of the other links on Vlogology, you
          might have been directed to a page to buy those things new, and let’s
          face it: <strong>most camera gear is not cheap!</strong>
        </p>

        <Heading level="h2">Get used gear and use it</Heading>

        <p>
          I am a firm believer that while new tools are great and having the
          latest in technology can be very helpful,{' '}
          <strong>beginner vloggers should buy a used camera</strong> to get
          started and upgrade later.
        </p>

        <p>
          Think about it: the nicest camera you can buy today is going to be old
          news in two years, but it was the best you could buy today!
        </p>

        <p>
          Go back in time a couple of years and see what was working for people
          then. You’re going to find surprisingly good cameras for much cheaper
          than they were when they launched.
        </p>

        <p>
          All of my cameras to date have been purchased secondhand, either on
          eBay or a local listing, with a single exception that I returned to
          the store within a week.
        </p>

        <p>Here are some of the cameras I’ve used over the last few years:</p>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://amzn.to/2JTUqKR"
            >
              Sony RX100 Mark 3
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://amzn.to/2HUCIqd"
            >
              Canon Powershot G7X
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://amzn.to/2IjlMNt"
            >
              Sony RX100 Mark 4
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://amzn.to/2FJYH0V"
            >
              Sony A7ii
            </a>
          </li>
        </ul>

        <p>
          All of these are now fairly dated cameras, but that’s the point: I can
          still vlog and tell a story with “old” cameras!
        </p>

        <p>
          At the time of writing this, the RX100 Mark 3 is available new for
          around $600 USD, but I can quickly find a listing for{' '}
          <strong>
            a used model for less than half of the price of a new camera.
          </strong>
        </p>

        <p>
          If we’re talking strictly numbers here, spending a few hundred on a
          camera that will work just fine as opposed to over a thousand…not a
          bad idea!
        </p>

        <Heading level="h2">The downsides of used camera gear</Heading>

        <p>
          There are, of course, a handful of downsides when it comes to buying
          anything used.
        </p>

        <p>
          Buying a used camera means that it already has had time and light
          affecting the sensor and other internals, which means ultimately
          you’ll probably get a little less “shelf life” out of it. Maybe not
          notably less, but less.
        </p>

        <p>
          You also run the risk of buying a camera from a non-reputable source
          as opposed to walking into an electronics store and buying it
          outright. Check the seller and make sure they have good history and
          recommendations.
        </p>

        <p>
          The camera may have some external blemishes, a lot of shutter
          actuations (the camera has taken a lot of pictures), and maybe the
          paint doesn’t look as fresh as it once did.
        </p>

        <p>
          For what it’s worth all of my vlogging cameras have been purchased
          used and I haven’t had any problems other than the ones I caused
          myself (like dropping my RX100 onto a concrete driveway.)
        </p>

        <Heading level="h2">Which will get the most use?</Heading>

        <p>
          I tend to want to keep my nicer gear in better quality, which also
          means I might not take my camera out to certain locations or in
          certain types of weather.
        </p>

        <Blockquote>A tool is meant to be used, not admired.</Blockquote>

        <p>
          The benefit of having a camera that’s maybe not as nice as a brand new
          model is that you might be less concerned with taking it with you no
          matter what.
        </p>

        <p>
          <strong>A vlogging camera is no good if you don’t use it.</strong>
        </p>

        <p>
          Some people look at used vs. new and know exactly what they want. They
          want new every time…and that’s fine!
        </p>

        <p>
          But trust me, I’ve seen horrible vlogs shot on <em>amazing</em>{' '}
          cameras and they were still horrible vlogs. Conversely I’ve seen
          amazing vlogs shot on <em>subpar</em> cameras and they still told an
          incredible story.
        </p>

        <p>
          You don’t have to go all out on your first or second camera. Get
          something cheap that will allow you to start, and if that means buying
          something a few years old and used, you’ll still be able to get
          quality video.
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
