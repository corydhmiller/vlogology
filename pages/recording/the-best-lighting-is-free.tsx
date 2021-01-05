import * as React from 'react';
import Link from 'next/link';
import Image from '../../components/ui/Image';
import Page from '../../components/Page';
// UI
import CopyBlock from '../../components/ui/CopyBlock';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';

const PageContent = () => {
  const nextPage = '/edit/exploring-your-edit-style';

  return (
    <Page title="The best lighting is free">
      <CopyBlock>
        <p>
          The lighting of any particular shot can make or break a video. If it’s
          too dark or underexposed, you lose detail and draw attention away from
          the purpose of the video. If it’s too bright or overexposed,
          everything looks messy, unbalanced, and amateur.
        </p>
        <p>
          A good lighting setup is a great investment for professional
          videographers. The control, flexibility, and versatility that comes
          from owning your own lights can really take your videos up in quality.
        </p>
        <p>
          Of course, lighting gear doesn’t usually come cheap. By the time
          you’ve invested in a couple of lights, cables, stands, extension
          cords, and diffusers, you’re easily sliding into the triple digits of
          cost.
        </p>
        <p>
          There are a few options: First,{' '}
          <strong>
            you can buy one piece of lighting equipment at a time,
          </strong>{' '}
          like a cheap LED panel you can use to balance out your subject.
        </p>
        <p>
          Buying equipment over time allows you to slowly improve the quality of
          your vlogs and learn how to use the equipment while saving up for the
          next piece.
        </p>
        <p>
          The second option: if you can’t afford a lighting system that really
          makes your videos shine, you fortunately have a great (and FREE)
          lighting source at your disposal.
        </p>

        <Heading level="h2">Using the sun as your primary light source</Heading>
        <p>
          Take a look at the following images from two of my videos shot a year
          apart.
        </p>
      </CopyBlock>
      <div className="w-full max-w-4xl mx-auto my-12">
        <Image
          src="/images/using-sunlight-to-light-your-scene-1.jpg"
          alt="A frame from one of my videos that demonstrates poor lighting technique"
        />
      </div>
      <CopyBlock>
        <p>
          There are a <em>lot</em> of problems with this first image: poor
          composition, sallow color, and an overall uninteresting image with no
          real separation between the subject and background.
        </p>
        <p>
          The other thing about this video is that it was shot at night with a
          three-point light setup.
        </p>
        <p>
          This means the only source of light I had in the room at the time of
          this recording was better than just having the overhead light on, but
          I didn’t spend enough time to really dial it in.
        </p>
        <p>
          My inattention to lighting detail (and lack of testing) resulted in a
          video where my eyes are horribly shadowed by my glasses, strange
          shadows that could have been avoided with more diffusion, and a color
          palette that made it really difficult to grade.
        </p>
        <p>
          It’s not as bad as it could have been, to be sure. In fact this video
          is one of my most-watched on my channel (of course, that’s not the
          point).
        </p>
        <p>But now look at the second image.</p>
      </CopyBlock>
      <div className="w-full max-w-4xl mx-auto my-12">
        <Image
          src="/images/using-sunlight-to-light-your-scene-2.jpg"
          alt="A frame from one of my videos that show better lighting by using sunlight"
        />
      </div>
      <CopyBlock>
        <p>
          There are only two lights in action in this picture: the background
          corner light and sunlight diffused by the clouds on an overcast day.
        </p>
        <p>
          The scene is brighter and more interesting. There was more detail for
          better coloring. More light mean a better aperture size on the camera
          which meant better separation between the background and subject.
        </p>
        <p>
          Could you accomplish all of these things with a three-point lighting
          system? Of course! Could you artificially make this sort of scene with
          lights? Absolutely. Photographers and filmmakers do it all the time.
        </p>
        <p>
          But if you don’t want to pay for the lights,{' '}
          <strong>
            you have the best lighting system available for free: the sun.
          </strong>
        </p>
        <p>
          Lighting didn’t make the second image better all by itself. In the
          year between those two videos I learned more about composition and
          spacing and put together a better image, but{' '}
          <strong>lighting plays a huge role in your final video image.</strong>
        </p>

        <Heading level="h2">Using sunlight to your advantage</Heading>
        <p>
          You have to be careful with sunlight if you live in places where all
          you get is direct sun. Without anything to lower the light input to
          your camera, overexposure can completely ruin your video.
        </p>
        <p>
          In these cases where there is no natural diffusion from cloud cover,
          you can get creative:
        </p>
        <ul className="mb-4">
          <li>Use indirect sunlight to light your scene.</li>
          <li>
            Close the curtains to your room but leave them slightly cracked to
            allow for the light to bounce off of the walls.
          </li>
          <li>Find evenly shaded areas outdoors (if possible).</li>
        </ul>
        <p>
          Remember, the point is not to be fancy, it’s to record the things you
          want to record by using the best light source you have at your
          disposal.
        </p>
        <Heading level="h2">
          If you can’t get sunlight, be mindful of light sources
        </Heading>
        <p>
          Of course, if you can only record your videos at night, you’ll need to
          use artificial lighting.
        </p>
        <p>
          This is necessary at times, and is totally fine. If you’re going to
          use indoor lighting, just make sure you know where the light is coming
          from and how it looks in the finished video.
        </p>
        <p>
          Remember in that first image I showed you, where my glasses were
          creating really unpleasant shadows on my eyes? I could have fixed that
          any number of ways, but because I didn’t my face is poorly lit and
          uninteresting.
        </p>
        <p>
          Move lights around. Test your positioning and get a few practice
          shots. Check the composition. Make sure your subject is well lit to
          avoid having to artificially add exposure in post.
        </p>
        <p>
          You don’t have to be the world’s best lighting expert as long as you
          can be mindful of where the light is in relation to where the camera
          is pointed.
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
