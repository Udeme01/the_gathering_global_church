import Image from "next/image";

// The tenets are a list, like your cards list: one row per belief block.
const tenets = [
  {
    title: "Christ's finished work and ministry",
    paragraphs: [
      "At TGGlobal, we believe fully in the death, burial and resurrection of Christ. We believe every believer is called to do ministry. We believe that only trained men are effective for ministry. We are committed to saving men through the evangelical outreaches, training men via the word and adequate teaching of the same.",
      "At TGGlobal, we are sent by the Lord Jesus to the billion souls unsaved, the million cities unreached, with God's grace on our lips, miracles in our hands, with fire in our bones; Saving many, training many, sending many. The goal is to reach the 'unpopular cities' and 'unpopular souls'.",
    ],
  },
  {
    title: "The word and the Spirit",
    paragraphs: [
      "We believe that the word of God is the highest authority of the believer and all that makes a believer grow in his walk of faith is all that the word teaches. We believe also in sound believers conduct and shining as lights in this world.",
      "We believe that the gifts of the spirit are at work in the life of every believer and we give room for the same in every of our service through spiritual songs, prophecies and prayers.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* 1. STORY */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-display text-4xl font-medium uppercase md:text-6xl">
            To raise a supernatural army of God&apos;s men
          </h1>
          <div className="mt-4 h-1 w-16 bg-yellow-400" />

          <div className="mt-10 grid gap-8 text-gray-700 md:grid-cols-2 md:gap-14">
            <div className="space-y-5 leading-relaxed">
              <p>
                <strong>The Gathering Global Church (TGGC)</strong> is a vibrant
                apostolic community called to raise, equip, and release a
                generation of believers who walk in the fullness of God&apos;s
                power, purpose, and identity. Founded in <strong>2012</strong> by{" "}
                <strong>Apostle Jola Emmanuel</strong>, TGGC exists as a
                spiritual family committed to advancing God&apos;s kingdom on
                earth through discipleship, worship, prayer, evangelism, and the
                demonstration of the Spirit.
              </p>
              <p>
                At TGGC, we believe that every believer is called to be a light
                in their world — a carrier of God&apos;s presence and a witness
                of His grace. We are passionate about{" "}
                <strong>transforming lives</strong>,{" "}
                <strong>training men</strong>, and <strong>sending men</strong>,
                so that God&apos;s people can step into their divine assignments
                with boldness and clarity.
              </p>
            </div>

            <div className="space-y-5 leading-relaxed">
              <p>
                We are a church where the Word of God is taught with depth and
                simplicity, where the supernatural is normal, and where people
                find a real encounter with Jesus Christ. Through our gatherings,
                outreaches, ministries, and leadership development structures,
                we aim to build men and women who are strong in faith, excellent
                in character, and committed to kingdom impact.
              </p>
              <p>
                At TGGC, we are not just a church —{" "}
                <strong>we are a movement</strong>. A movement of believers who
                love God deeply, love people sincerely, and serve purposefully.
                A movement committed to raising a supernatural army that will
                reflect God&apos;s glory in every sphere of influence.
              </p>
              <p>
                Whether you are new in the faith, seeking a home church, or
                longing for a deeper walk with God,{" "}
                <strong>there is a place for you here at TGGC</strong>. Welcome
                home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION AND MISSION */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="font-display text-4xl font-medium uppercase md:text-5xl">
              Our vision &amp; mission
            </h2>
            <div className="mt-4 h-1 w-16 bg-yellow-400" />

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700">
              <p>
                The Gathering Global is a strong apostolic ministry with the
                vision to raise a supernatural army of God&apos;s men who are
                kings and priests unto God and will be equipped to do same via
                saving men and training men.
              </p>
              <p>
                Our mission is to Save Men, Train Men and send men for the work
                of ministry emphasising the power of God to confirm our going
                with mighty signs and wonders.
              </p>
              <p>
                We envision saving all men, training all men, and sending them
                as emissaries of God&apos;s kingdom.
              </p>
            </div>

            <p className="mt-8 font-semibold tracking-wide">
              Apostle Jola Emmanuel
              <span className="block text-sm font-normal text-gray-600">
                Senior Pastor, TGGlobal
              </span>
            </p>
          </div>

          {/* Put the pastor's photo here: public/images/pastor.jpg */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/pastor.jpg"
              alt="Apostle Jola Emmanuel, Senior Pastor"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. TENETS */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-4xl font-medium uppercase md:text-5xl">
            Our Tenets
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-yellow-400" />

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
            {tenets.map((tenet) => (
              <div key={tenet.title}>
                <h3 className="text-2xl font-bold">{tenet.title}</h3>
                <div className="mt-3 h-1 w-10 bg-yellow-400" />
                <div className="mt-6 space-y-5 leading-relaxed text-gray-700">
                  {tenet.paragraphs.map((text) => (
                    <p key={text.slice(0, 30)}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}