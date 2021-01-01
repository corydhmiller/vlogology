import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Video from '../components/Video';

const Home: React.FunctionComponent<null> = () => {
  return (
    <Layout title="Learn How To Vlog and Start Vlogging Today (FREE Guide and Lessons)">
      <>
        <div className="w-full">
          <div className="grid md:grid-cols-2">
            <div className="p-8 py-12 text-2xl text-right bg-yellow-400 lg:px-12 serif hero-left">
              <div className="copy-block">
                <h2 className="mb-8 font-serif text-5xl font-bold">“vlog”</h2>
                <div className="font-serif text-2xl italic opacity-75">
                  1. noun
                </div>
                <p className="font-serif">
                  a blog, channel, or feed that features videos rather than text
                  or images.
                </p>
                <div className="font-serif text-2xl italic opacity-75">
                  2. verb
                </div>
                <p className="font-serif">
                  to maintain or add posts to a vlog.
                </p>
              </div>
            </div>
            <div className="p-8 py-12 lg:px-12">
              <div className="flex-container flex-center">
                <div className="copy-block">
                  <h2>So you want to start a vlog.</h2>
                  <p>Awesome.</p>
                  <p>
                    Vlogging is a fantastic way to document your life, business,
                    brand, and anything else you could possibly think of.
                  </p>
                  <p>It’s increasing in popularity, too.</p>
                  <p>
                    Have you noticed that{' '}
                    <strong>
                      many of the biggest channels on YouTube are either mostly
                      or completely based on vlogging?
                    </strong>
                  </p>
                  <p>
                    Check YouTube’s trending page, and you’ll probably see some
                    vlogs.
                  </p>
                  <p>The vlog is here to stay.</p>
                  <p>You’ve thought about vlogging.</p>
                  <p>
                    You’ve sat on your couch thinking about what you’d even try
                    to record, and yet something’s holding you back.
                  </p>
                  <blockquote className="px-4 my-8 text-lg italic font-bold text-gray-500 sm:text-2xl lg:mt-8 lg:mb-16">
                    “I don’t really have anything
                    <br />
                    worth sharing.” – You, probably
                  </blockquote>
                  <p>But what if I told you that was untrue?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 bg-black">
          <div className="flex flex-col justify-center mx-auto text-center sm:w-8/12">
            <Video>
              <iframe
                title="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/z8YF6XU7r4A?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </Video>
            <div className="mt-12">
              <Link href="/start/why-vlog/">
                <button type="button" className="button button--yellow">
                  Get started with vlogging
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-12 sm:grid-cols-2">
          <div className="flex items-start justify-center mb-12">
            <Image
              src="/images/cory-miller.png"
              width="300"
              height="300"
              alt="Me, Cory Miller!"
            />
          </div>
          <div className="flex items-center copy-block">
            <div className="px-4 py-4">
              <p className="font-bold">Hey there! I’m Cory Miller.</p>
              <p>
                I started vlogging on a whim. No goal, no direction, and no
                equipment. I just wanted to do this thing people called
                “vlogging”.
              </p>
              <p>
                Heck, when I approached my wife about starting a vlog, she
                literally said, “Do you have to?”
              </p>
              <p>
                It was hard. I showed up for 78 days, every single day, and
                produced a video for my YouTube channel. A daily show while
                having a family, a full-time job, and working on moving to
                another country.
              </p>
              <p>
                Eventually I moved to a weekly schedule. I began to develop
                techniques, things to save time during filming and editing. I
                planned, I made mistakes, and I pressed on.
              </p>
              <p>I didn’t even know if it would be worth it.</p>
              <p>Spoiler: It was.</p>
              <p>
                <strong>Vlogging is part of my life now,</strong> it’s simply
                part of what I do, and the personal benefits have been
                incredible.
              </p>
              <p>
                I live in Dublin, Ireland, with my wife and two daughters, and I
                have a{' '}
                <a
                  href="https://youtube.com/corydhmiller"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  weekly vlog
                </a>{' '}
                about my international life, travel, and personal journey
                through this world.
              </p>
              <p>
                <strong>
                  I want to help you find and tell your story through vlogging,
                </strong>{' '}
                whether you’re doing it on your own, building a brand, or
                wanting to start a vlog for your business.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-6xl font-bold">
            Vlogs are <span className="text-yellow-400 shadow-sm">stories</span>
            , and everyone has a story.
          </div>
        </div>
        <div className="row end-xs">
          <div className="mb-12 endbar endbar-right" />
        </div>

        <div className="row">
          <div className="p-12 col-xs-12">
            <div className="flex-container flex-center">
              <div className="block block-copy">
                <p>
                  When I first started vlogging, I had no idea what I was
                  supposed to record.
                </p>
                <p>
                  In fact, <strong>starting was the hardest part.</strong>
                </p>
                <p>
                  I claimed I was trying to figure out my style, the kind of
                  content I’d be making, how to get great quality…but actually,
                  I wasn’t really doing anything but procrastinating.
                </p>
                <p>Why is it so hard to get started with a vlog?</p>
                <p>I can think of a number of reasons:</p>

                <ul>
                  <li>Lack of confidence</li>
                  <li>Lack of ideas (or too many!)</li>
                  <li>Thinking you need specific gear</li>
                  <li>Thinking you need a specific type of personality</li>
                </ul>

                <p>
                  I could go on. Seriously, I had to stop myself from writing
                  out dozens more bullet points.
                </p>
                <p>That’s what held me back.</p>
                <p>
                  I was watching video after video, trying to figure out how to
                  match styles of my favorite vloggers.
                </p>
                <p>
                  <strong>I had no idea where to even begin.</strong> I had no
                  idea what my goals were, or why I even wanted to get started
                  in the first place.
                </p>
                <p>
                  Eventually I did get started. Now here I am, almost two years
                  later, and the process of vlogging has become part of my
                  weekly routine.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate">
          <div
            className="bg--black color--white animate--wrapper animate__flyin animate__flyin--right animate__flyin--complete"
            data-animation="flyin"
          >
            <div
              className="pt-4 pb-8 animate__content flex-container flex-center animate__flyin animate__flyin--right animate__flyin--complete"
              data-animation="flyin"
              data-delay="50"
            >
              <div className="col-xs-12 col-sm-8">
                <div className="my-12 flex-container flex-center">
                  <div className="block pt-4 pb-8">
                    <div className="text-center massive font--bold">
                      Vlogging doesn’t have to be{' '}
                      <span className="yellow">complicated.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="endbar endbar-full animate__flyin animate__flyin--right animate__flyin--complete"
              data-animation="flyin"
              data-delay="200"
            />
          </div>
        </div>

        <div className="row">
          <div className="p-12 col-xs-12">
            <div className="flex-container flex-center">
              <div className="block block-copy">
                <h2>Start Vlogging Without the Headaches</h2>
                <p>
                  This website exists to help you
                  <strong>
                    get from where you are now to having an interesting,
                    consistent, and memorable vlog that keeps people coming
                    back.
                  </strong>
                </p>
                <p>You only need three things to start vlogging today.</p>
                <p>
                  Would you believe that only one of those things is a camera of
                  some kind?
                </p>
                <p>
                  I want to help you get started. I want to help you improve. I
                  want to help you break past the barriers stopping you.
                </p>
                <p>And that’s what I’m going to do.</p>

                <div className="text-center">
                  <a href="/start/why-vlog/">
                    <button type="button" className="button button--yellow">
                      Get started with vlogging
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 bg--yellow">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="flex-container flex-center">
                <div className="block block-copy">
                  <div className="animate" style={{ height: 440 }}>
                    <div
                      className="animate__object animate__fadein"
                      data-animation="fadein"
                    >
                      <h2 className="serif">You just have to start…</h2>
                      <img
                        src="/wp-content/uploads/2017/11/episode1-before-e1524059701712.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6" style={{ marginTop: 200 }}>
              <div className="flex-container flex-center">
                <div className="block block-copy">
                  <div className="animate" style={{ height: 440 }}>
                    <div
                      className="animate__object animate__fadein"
                      data-animation="fadein"
                      data-delay="800"
                    >
                      <h2 className="serif">…and improve as you go.</h2>
                      <img
                        src="/wp-content/uploads/2017/11/episode118-after-e1524059667191.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row--dark">
          <div className="row">
            <div className="mt-8 col-xs-12">
              <div className="flex-container flex-center">
                <div className="block block-copy">
                  <h2>
                    <span className="yellow">Get New Lessons</span> Delivered To
                    You Every Week
                  </h2>
                  <p>
                    Vlogology is your one-stop shop for{' '}
                    <strong>get your vlog off the ground</strong> and build it
                    into something memorable.
                  </p>
                  <p>
                    <strong>Enter your email below</strong> to get a primer on
                    the camera gear I use to shoot vlogs, and be notified each
                    week when a new lesson is available.
                  </p>
                  <script src="https://assets.convertkit.com/assets/CKJS4.js?v=21" />

                  <p>You’ll get answers to questions like:</p>
                  <ul>
                    <li>
                      What can vlogging actually do for me? What benefits does
                      it bring?
                    </li>
                    <li>What sort of gear should I have to get started?</li>
                    <li>Does my vlog have to have a certain theme?</li>
                    <li>
                      What sort of vlog styles are there, and how do I figure
                      out which one is right for me?
                    </li>
                    <li>
                      How do I make interesting videos if I feel like my life
                      isn’t exciting enough?
                    </li>
                    <li>What editing software should I use?</li>
                    <li>
                      How do I stay consistent if I don’t have a lot of extra
                      time?
                    </li>
                    <li>
                      How do I organize and archive my footage for easy access
                      and backup?
                    </li>
                    <li>
                      <em>…and that’s just the tip of the iceberg.</em>
                    </li>
                  </ul>
                  <p>Here’s where you come in.</p>
                  <p>
                    <strong>
                      I want to make sure the content is tailored to your needs
                      and questions.
                    </strong>{' '}
                    I want to know everything that is holding you back from
                    getting started, or what’s keeping you from taking what you
                    have and improving it (next level, as they say).
                  </p>
                  <p>I look forward to hearing from you!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="endbar endbar-full" />
        </div>
      </>
    </Layout>
  );
};

export default Home;
